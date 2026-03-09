import Point from "./Point";

/**
 * Represents a Snake in a 2D world.
 */
class Snake {
  private _currentPosition: Point;
  private direction: "up" | "down" | "left" | "right";
  private color: string;

  constructor(color: string) {
    this._currentPosition = new Point(0, 0);
    this.direction = "up";
    this.color = color;
  }

  get currentDirection(): "up" | "down" | "left" | "right" {
    return this.direction;
  }

  get currentPosition(): Point {
    return this._currentPosition;
  }

  /** New getter for color */
  get snakeColor(): string {
    return this.color;
  }

  move(steps: number) {
    switch (this.direction) {
      case "up":
        this._currentPosition.y -= steps;
        break;
      case "down":
        this._currentPosition.y += steps;
        break;
      case "left":
        this._currentPosition.x -= steps;
        break;
      case "right":
        this._currentPosition.x += steps;
        break;
    }
  }

  turnLeft() {
    if (this.direction === "up") this.direction = "left";
    else if (this.direction === "left") this.direction = "down";
    else if (this.direction === "down") this.direction = "right";
    else if (this.direction === "right") this.direction = "up";
  }

  turnRight() {
    if (this.direction === "up") this.direction = "right";
    else if (this.direction === "right") this.direction = "down";
    else if (this.direction === "down") this.direction = "left";
    else if (this.direction === "left") this.direction = "up";
  }

  /** @deprecated */
  turn() {
    console.warn("Snake.turn() is deprecated. Use turnLeft() or turnRight().");
  }
}

export default Snake;
