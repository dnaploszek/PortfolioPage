import * as React from 'react';
import { CanvasRefs } from '../CanvasWrapper/CanvasWrapper.types';

import Particle from './Particle';
import CanvasWrapper from '../CanvasWrapper/CanvasWrapper';
import StringUtilities from '../../Utilities/StringUtilities';
import particleImageSrc from '../../assets/images/canvas-background/particle.png';
import './ParticleCanvasBackground.css';

interface Props {
  particlesDensity: number;
  maxParticles: number;
  className: string;
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
      particles.push(
        new Particle(
          Particle.calculateStartingPos(width, height, particlesDensity, i)
        )
      );
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
      ctx.globalAlpha = 0.1;
      ctx.drawImage(
        particleImage,
        particle.currentPos.x - width / 2,
        particle.currentPos.y - height / 2,
        width,
        height
      );
      ctx.globalAlpha = 1;
    });

    this.updateData();
  }

  updateData = () => {
    const particles = [...this.state.particles];
    particles.map(particle => particle.tick(this.state.mousePos));
    this.setState({
      particles: particles,
    });
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
        className={StringUtilities.classnames('particle-canvas', 'main-color-background', this.props.className)}
        updateCanvas={this.updateCanvas}
        canvasRefs={this.setupCanvas}
        resizeCallback={this.onCanvasResized}
      >
        <img ref={this.getParticleImageRef} src={particleImageSrc} onLoad={this.generateParticles}/>
      </CanvasWrapper>
    );
  }
}
