export interface Particle {
  startX: number,
  startY: number,
  currentX: number,
  currentY: number,
  // Target coordinates allow particles to randomly move
  targetX: number,
  targetY: number,
  startClock: number, // when particle should change its target coordinates
  clock: number, // constantly ticking down on every animation frame, resets to startClock
  scareDistance: number,
}