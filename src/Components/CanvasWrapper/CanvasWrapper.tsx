import * as React from 'react';
import { CanvasRefs } from './CanvasWrapper.types';

interface CanvasWrapperProps {
  className: string;
  updateCanvas: (canvasRefs: CanvasRefs) => void;
  canvasRefs: (canvasRefs: CanvasRefs) => void;
  resizeCallback: (width: number, height: number) => void;
  children: React.ReactNode;
}

export default class CanvasWrapper extends React.Component<CanvasWrapperProps> {
  canvasRefs: CanvasRefs;
  canvasContainer: HTMLDivElement;

  constructor(props: CanvasWrapperProps) {
    super(props);
  }

  componentDidMount() {
      this.resizeCanvas();
      requestAnimationFrame(this.requestAnimationFrameCallback);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeCanvas);
    delete this.canvasRefs;
    delete this.canvasContainer;
  }

  requestAnimationFrameCallback = () => {
    this.updateCanvas();
    requestAnimationFrame(this.requestAnimationFrameCallback);
  }

  setupCanvas = (ref: HTMLCanvasElement) => {
    this.canvasRefs = {
      canvas: ref,
      ctx: ref.getContext('2d') as CanvasRenderingContext2D,
    };
    window.addEventListener('resize', this.resizeCanvas, false);
    if (this.props.canvasRefs) {
      this.props.canvasRefs(this.canvasRefs);
    }
  }

  resizeCanvas = () => {
    if (!this.canvasRefs) {
      return;
    }
    this.canvasRefs.canvas.width = this.canvasRefs.canvas.clientWidth;
    this.canvasRefs.canvas.height = this.canvasRefs.canvas.clientHeight;
    if (this.props.resizeCallback) {
      this.props.resizeCallback(this.canvasRefs.canvas.width, this.canvasRefs.canvas.height);
    }
    this.updateCanvas();
  }

  updateCanvas = () => {
    this.props.updateCanvas(this.canvasRefs);
  }

  render() {
    return (
      <canvas className={this.props.className} ref={this.setupCanvas}>
        {this.props.children}
      </canvas>
    );
  }
}
