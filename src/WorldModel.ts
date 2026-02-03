import Snake from "./Snake";

/** Represents the game world, which contains one Snake (aggregation) */
class WorldModel {
  private snake: Snake;

  /**
   * Creates a WorldModel with a given Snake
   * @param snake The Snake to include in the world
   */
  constructor(snake: Snake) {
    this.snake = snake;
  }
  /** Returns the Snake in this world */
  getSnake(): Snake {
    return this.snake;
  }

  /** Updates the world by moving the snake a bumber of steps */
  update(steps: number) {
    this.snake.move(steps);
  }
}

export default WorldModel;
