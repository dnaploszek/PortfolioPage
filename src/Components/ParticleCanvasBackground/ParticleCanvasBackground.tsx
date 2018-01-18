import * as React from 'react';

import CanvasWrapper from '../CanvasWrapper/CanvasWrapper';
import { CanvasRefs } from '../CanvasWrapper/CanvasWrapper.types';
import { Particle } from './ParticleCanvasBackground.types';
import particleImageSrc from '../../assets/images/canvas-background/particle.png';

import './ParticleCanvasBackground.css';

interface Props {
  particlesDensity: number;
  maxParticles: number;
}

interface State {
  particles: Array<Particle>;
  mousePos: {
    x: number,
    y: number,
  };
  canvasRefs?: CanvasRefs;
  particleImage?: HTMLImageElement;
}

export default class ParticleCanvasBackground extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      particles: [],
      mousePos: {
        x: 0,
        y: 0,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', (e) => {
      this.setMousePos(e);
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  setupCanvas = (canvasRefs: CanvasRefs) => {
    this.setState({
      canvasRefs: canvasRefs,
    });
  }

  getParticleImageRef = (ref: HTMLImageElement) => {
    this.setState({
      particleImage: ref,
    });
  }

  generateParticles = () => {
    if (!this.state.canvasRefs) {
      return;
    }
    const {particlesDensity, maxParticles} = this.props;
    const {width, height} = this.state.canvasRefs.canvas;
    const particles = [];
    for (let i = 0; i < maxParticles; i++) {
      const startX = 0.5 * ( width / particlesDensity ) + ( i % particlesDensity * width / particlesDensity );
      const startY = 0.5 * ( height / particlesDensity ) +
        ( Math.floor(i / particlesDensity) ) * height / particlesDensity;
      const startClock = Math.floor(Math.random() * 50 + 40);
      particles.push({
        startX: startX,
        startY: startY,
        currentX: startX,
        currentY: startY,
        targetX: startX,
        targetY: startY,
        startClock: startClock,
        clock: startClock,
        scareDistance: Math.floor(Math.random() * 50 + 50)
      });
    }
    this.setState({
      particles: particles,
    });
  }

  onCanvasResized = () => {
    this.generateParticles();
  }

  updateCanvas = (canvasRefs: CanvasRefs) => {
    const {canvas, ctx} = canvasRefs;
    const {particleImage, particles} = this.state;

    if (particles.length === 0) {
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw particles
    particles.forEach((particle: Particle) => {
      if (!particleImage) {
        return;
      }
      const width = particleImage.width;
      const height = particleImage.height;
      ctx.drawImage(particleImage, particle.currentX - width / 2, particle.currentY - height / 2, width, height);
    });

    this.updateData();
  }

  updateData = () => {
    const {maxParticles} = this.props;
    const particles = [...this.state.particles];
    for (let i = 0; i < maxParticles; i++) {
      const particle = particles[i];
      --particle.clock;
      if (particle.clock <= 0) {
        particle.targetX = particle.startX + (Math.random() - 0.5) * 10;
        particle.targetY = particle.startY + (Math.random() - 0.5) * 10;
        particle.clock = particle.startClock;
      }

      particle.currentX += (particle.targetX - particle.currentX) / 50;
      particle.currentY += (particle.targetY - particle.currentY) / 50;

      particles[i] = this.runFromMouse(particle);
    }
    this.setState({
      particles: particles,
    });
  }

  runFromMouse(particle: Particle) {
    const posRelativeToMouse = {
      x: particle.currentX - this.state.mousePos.x,
      y: particle.currentY - this.state.mousePos.y
    };

    const distance = Math.sqrt(Math.pow(posRelativeToMouse.x, 2) + Math.pow(posRelativeToMouse.y, 2));
    if (distance < particle.scareDistance) {
      const velocityFactor = 100 / distance;
      particle.targetX = particle.currentX + Math.pow(velocityFactor, 2) * posRelativeToMouse.x;
      particle.targetY = particle.currentY + Math.pow(velocityFactor, 2) * posRelativeToMouse.y;
    } else {
      particle.targetX = particle.startX;
      particle.targetY = particle.startY;
    }

    return particle;
  }

  setMousePos(evt: MouseEvent) {
    if (!this.state.canvasRefs) {
      return;
    }
    const {canvas} = this.state.canvasRefs;
    const rect = canvas.getBoundingClientRect();
    this.setState({
      mousePos: {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
      }
    });
  }

  render() {
    return (
      <CanvasWrapper
        className="particle-canvas"
        updateCanvas={this.updateCanvas}
        canvasRefs={this.setupCanvas}
        resizeCallback={this.onCanvasResized}
      >
        <img ref={this.getParticleImageRef} src={particleImageSrc} onLoad={this.generateParticles}/>
      </CanvasWrapper>
    );
  }
}
