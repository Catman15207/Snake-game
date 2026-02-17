import Player from "./Player";
import SnakeController from "./SnakeController";

/** Player that avoids walls */
class AvoidWallsPlayer extends Player {
  constructor(sc: SnakeController) {
    super(sc);
  }

  /** Decides how to turn the snake to avoid walls */
  makeTurn(): void {
    const pos = this.sc.snakePosition;
    const dir = this.sc.snakeDirection;
    const width = this.sc.worldWidth;
    const height = this.sc.worldHeight;

    // left wall
    if (dir === "left" && pos.x === 0) {
      if (pos.y <= height / 2) this.sc.turnSnakeLeft();
      else this.sc.turnSnakeRight();
      return;
    }

    // right wall
    if (dir === "right" && pos.x === width - 1) {
      if (pos.y <= height / 2) this.sc.turnSnakeRight();
      else this.sc.turnSnakeLeft();
      return;
    }

    // top wall
    if (dir === "up" && pos.y === 0) {
      if (pos.x <= width / 2) this.sc.turnSnakeRight();
      else this.sc.turnSnakeLeft();
      return;
    }

    // bottom wall
    if (dir === "down" && pos.y === height - 1) {
      if (pos.x <= width / 2) this.sc.turnSnakeLeft();
      else this.sc.turnSnakeRight();
      return;
    }

    // Otherwise, do nothing (keep moving forward)
  }
}

export default AvoidWallsPlayer;
