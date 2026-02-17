import Snake from "./Snake";
import WorldModel from "./WorldModel";
import Point from "./Point";

/** This controls a snake in a worldModel for a player */
class SnakeController {
  snakeWorld: WorldModel;
  slitherer: Snake;

  /** Creates a SnakeController
   * @param world The woeld the snake lives in
   *@@param snake The sanke to control
   */
  constructor(world: WorldModel, snake: Snake) {
    this.snakeWorld = world;
    this.slitherer = snake;
  }

  /** Turns the snake to the Left */
  turnSnakeLeft(): void {
    this.slitherer.turnLeft();
  }

  /** Turns the sanke to the right */
  turnSnakeRight(): void {
    this.slitherer.turnRight();
  }

  /** Gets the current position of the snake */
  get snakePosition(): Point {
    return this.slitherer.currentPosition;
  }

  /** Gets the current direction of the snake */
  get snakeDirection(): "up" | "down" | "left" | "right" {
    return this.slitherer.currentDirection;
  }

  /** Gets the width of the world */
  get worldWidth(): number {
    return this.snakeWorld.width;
  }

  get worldHeight(): number {
    return this.snakeWorld.height;
  }
}

export default SnakeController;
