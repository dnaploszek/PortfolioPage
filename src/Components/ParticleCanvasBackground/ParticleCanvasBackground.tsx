import * as React from 'react';
import { CanvasRefs } from '../CanvasWrapper/CanvasWrapper.types';

import Particle from './Particle';
import CanvasWrapper from '../CanvasWrapper/CanvasWrapper';
import CanvasParticleUtilities from './CanvasParticleUtilities';
import StringUtilities from '../../Utilities/StringUtilities';
import './ParticleCanvasBackground.css';

interface Props {
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

  componentWillMount() {
    this.generateParticles();
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

  generateParticles = () => {
    if (!this.canvasRefs) {
      return;
    }
    const { maxParticles } = this.props;
    const { width, height } = this.canvasRefs.canvas;
    const particles = [];
    for (let i = 0; i < maxParticles; i++) {
      particles.push(
        new Particle(Particle.calculateStartingPos(width, height))
      );
    }
    this.setState({
      particles: particles,
    });
  }

  onCanvasResized = () => {
    this.generateParticles();
  }

  updateCanvas = () => {
    if (this.state.particles.length === 0) {
      return;
    }

    this.drawParticles();
    this.updateData();
  }

  drawParticles = () => {
    const { canvas, ctx } = this.canvasRefs;
    const { particles } = this.state;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.4;
    particles.forEach((particle: Particle) => {
      CanvasParticleUtilities.drawParticle(particle.currentPos, ctx);
    });
    ctx.globalAlpha = 1;
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
    const { canvas } = this.canvasRefs;
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
      />
    );
  }
}
