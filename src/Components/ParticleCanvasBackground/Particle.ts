export interface Point {
  x: number;
  y: number;
}

/**
 * Particle used to create canvas animation which consists of points that run from mouse and move randomly in a certain
 * range.
 */
export default class Particle {
  startPos: Point;
  currentPos: Point;
  targetPos: Point;
  startClock: number; // ticks to reset target position
  clock: number; // ticks left to reset target position
  scareDistance: number;

  static calculateStartingPos(canvasWidth: number, canvasHeight: number) {
    return {
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
    };
  }

  constructor(startPos: Point) {
    this.startPos = startPos;
    this.currentPos = startPos;
    this.targetPos = startPos;
    this.startClock = Math.floor(Math.random() * 50 + 40);
    this.clock = 0;
    this.scareDistance = Math.floor(Math.random() * 50 + 50);
  }

  tick(avoidancePoint: Point) {
    --this.clock;
    if (this.clock <= 0) {
      this.randomizeTarget();
      this.resetParticleClock();
    }
    if (avoidancePoint) {
      this.runFromPoint(avoidancePoint)
    }

    this.moveToTarget();
    return this;
  }

  private resetParticleClock() {
    this.clock = this.startClock;
  }

  private randomizeTarget() {
    this.targetPos = {
      x: this.startPos.x + (Math.random() - 0.5) * 20,
      y: this.startPos.y + (Math.random() - 0.5) * 20,
    };
  }

  private moveToTarget() {
    this.currentPos = {
      x: this.currentPos.x + (this.targetPos.x - this.currentPos.x) / 50,
      y: this.currentPos.y + (this.targetPos.y - this.currentPos.y) / 50,
    };
  }

  private runFromPoint(avoidPos: Point) {
    const posRelativeToMouse = {
      x: this.currentPos.x - avoidPos.x,
      y: this.currentPos.y - avoidPos.y
    };
    const distance = Math.sqrt(Math.pow(posRelativeToMouse.x, 2) + Math.pow(posRelativeToMouse.y, 2));

    if (distance < this.scareDistance) {
      const velocityFactor = Math.pow(100 / distance, 2);
      this.targetPos = {
        x: this.currentPos.x + velocityFactor * posRelativeToMouse.x,
        y: this.currentPos.y + velocityFactor * posRelativeToMouse.y,
      };
    }
  }
}