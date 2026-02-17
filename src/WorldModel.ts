import Snake from "./Snake";

/** Represents the game world, which contains one Snake (aggregation) */
class WorldModel {
  private _snake: Snake;

  /**
   * Creates a WorldModel with a given Snake
   * @param snake The Snake to include in the world
   */
  constructor(snake: Snake) {
    this._snake = snake;
  }
  /** Returns the Snake in this world */
  get snake(): Snake {
    return this._snake;
  }

  /** Updates the world by moving the snake a number of steps */
  update(steps: number) {
    this._snake.move(steps);
  }
}

export default WorldModel;
