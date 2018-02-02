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
}

export default class ParticleCanvasBackground extends React.Component<Props, State> {
  canvasRefs: CanvasRefs;
  particleImage: HTMLImageElement;

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
    this.canvasRefs = canvasRefs;
  }

  getParticleImageRef = (ref: HTMLImageElement) => {
    this.particleImage = ref;
  }

  generateParticles = () => {
    if (!this.canvasRefs) {
      return;
    }
    const {particlesDensity, maxParticles} = this.props;
    const {width, height} = this.canvasRefs.canvas;
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
    if (this.state.particles.length === 0) {
      return;
    }

    this.drawParticles()
    this.updateData();
  }

  drawParticles = () => {
    const {canvas, ctx} = this.canvasRefs;
    const { particles} = this.state;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle: Particle) => {
      if (!this.particleImage) {
        return;
      }

      ctx.globalAlpha = 0.4;
      ctx.drawImage(
        this.particleImage,
        particle.currentPos.x - this.particleImage.width / 2,
        particle.currentPos.y - this.particleImage.height / 2,
        this.particleImage.width,
        this.particleImage.height
      );
      ctx.globalAlpha = 1;
    });
  }

  updateData = () => {
    const particles = [...this.state.particles];
    particles.map(particle => particle.tick(this.state.mousePos));
    this.setState({
      particles: particles,
    });
  }

  setMousePos(evt: MouseEvent) {
    if (!this.canvasRefs) {
      return;
    }
    const {canvas} = this.canvasRefs;
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
