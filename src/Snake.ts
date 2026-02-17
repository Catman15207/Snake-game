// import display from "./display";
import Point from "./Point";

// place your code on line 5 above the export statement below

/**
 * Represents a Snake in a 2D world.
 */
class Snake {
  private _currentPosition: Point;
  private direction: "up" | "down" | "left" | "right";
  private color: string;

  /**
   * Creates a new Snake with a given color at position (0,0) facing up.
   * @param color The color of the snake
   */
  constructor(color: string) {
    this._currentPosition = new Point(0, 0);
    this.direction = "up";
    this.color = color;
  }

  /** Gets the current position of the snake */
  get currentPosition(): Point {
    return this._currentPosition; //
  }

  /** Moves the snake forward a number of steps in its current direction */
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

  /** Turns the snake to the left */
  turnLeft() {
    if (this.direction === "up") this.direction = "left";
    else if (this.direction === "left") this.direction = "down";
    else if (this.direction === "down") this.direction = "right";
    else if (this.direction === "right") this.direction = "up";
  }

  /** Turns the snake to the right */
  turnRight() {
    if (this.direction === "up") this.direction = "right";
    else if (this.direction === "right") this.direction = "down";
    else if (this.direction === "down") this.direction = "left";
    else if (this.direction === "left") this.direction = "up";
  }

  /**
   * @deprecated Use turnLeft() or turnRight() instead
   */
  turn() {
    console.warn("Snake.turn() is deprecated. Use turnLeft() or turnRight().");
  }
}

export default Snake;
