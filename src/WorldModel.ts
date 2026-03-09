import Snake from "./Snake";
import IWorldView from "./IWorldView";

/** Represents the game world, which contains one Snake (aggregation) */
class WorldModel {
  private _snake: Snake;
  private _width: number;
  private _height: number;
  private _worldView: IWorldView | null = null;

  constructor(snake: Snake, width: number = 20, height: number = 20) {
    this._snake = snake;
    this._width = width;
    this._height = height;
  }

  get snake(): Snake {
    return this._snake;
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  /** Updates the world by moving the snake a number of steps */
  update(steps: number) {
    this._snake.move(steps);
    if (this._worldView) {
      this._worldView.display(this);
    }
  }

  /** Set the world view */
  set worldView(view: IWorldView) {
    this._worldView = view;
  }
}

export default WorldModel;
