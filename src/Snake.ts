// import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;
  private color: string;

  constructor(color: string) {
    this.currentPosition = 0;
    this.currentDirection = 1;
    this.color = color;
  }

  move(steps: number) {
    if (this.currentDirection === 1) {
      this.currentPosition += steps;
    } else if (this.currentDirection === -1) {
      this.currentPosition -= steps;
    }
  }

  get position(): number {
    return this.currentPosition;
  }

  turn() {
    this.currentDirection *= -1;
  }
}

export default Snake;
