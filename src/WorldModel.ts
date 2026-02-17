import Snake from "./Snake";
//import Point from "./Point";

/** Represents the game world, which contains one Snake (aggregation) */
class WorldModel {
  private _snake: Snake;
  private _width: number;
  private _height: number;

  /**
   * Creates a WorldModel with a given Snake
   * @param snake The Snake to include in the world
   * @param width The wifth of the world
   * @param height The height of the world
   */
  constructor(snake: Snake, width: number = 20, height: number = 20) {
    this._snake = snake;
    this._width = width;
    this._height = height;
  }
  /** Returns the Snake in this world */
  get snake(): Snake {
    return this._snake;
  }
  /** Returns the width of the world */
  get width(): number {
    return this._width;
  }

  /** Returns the height of the world */
  get height(): number {
    return this._height;
  }
  /** Updates the world by moving the snake a number of steps */
  update(steps: number) {
    this._snake.move(steps);
  }
}

export default WorldModel;
