import { Point } from './Particle';

export default class CanvasParticleUtilities {
  static drawParticle(particlePos: Point, ctx: CanvasRenderingContext2D) {
    ctx.globalAlpha = 0.2;
    ctx.beginPath();
    ctx.arc(
      particlePos.x,
      particlePos.y,
      1,
      0,
      2 * Math.PI,
      false
    );
    ctx.fillStyle = '#434343';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#434343';
    ctx.stroke();
  }
}