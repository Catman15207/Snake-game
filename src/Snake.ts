// import display from "./display";
import Point from "./Point";

// place your code on line 5 above the export statement below

class Snake {
  private _position: Point;
  private direction: "up" | "down" | "left" | "right";
  private color: string;

  constructor(color: string) {
    this._position = new Point(0, 0);
    this.direction = "up";
    this.color = color;
  }

  get position(): Point {
    return this._position;
  }

  move(steps: number) {
    for (let i = 0; i < steps; i++) {
      if (this.direction === "up") {
        this._position = new Point(this.position.x, this.position.y + 1);
      } else if (this.direction === "down") {
        this._position = new Point(this.position.x, this.position.y - 1);
      } else if (this.direction === "left") {
        this._position = new Point(this.position.x - 1, this.position.y);
      } else if (this.direction === "right") {
        this._position = new Point(this.position.x + 1, this.position.y);
      }
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
    else if (this.direction === "left") this.direction = "up";
    else if (this.direction === "down") this.direction = "left";
    else if (this.direction === "right") this.direction = "down";
  }
  /**
   * @deprecated Use turnLeft() or turnRight() instead
   */
  turn() {
    console.warn("Snake.turn() is deprecated. Use turnLeft() or turnRight().");
  }
}

export default Snake;
