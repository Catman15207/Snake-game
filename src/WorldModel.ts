import Snake from "./Snake";

class WorldModel {
  private snake: Snake;

  constructor(snake: Snake) {
    this.snake = snake;
  }

  getSnake(): Snake {
    return this.snake;
  }
  /**
   * Updates the world by moving the snake
   * @param steps number of steps to move the snake
   */

  update(steps: number) {
    this.snake.move(steps);
  }
}

export default WorldModel;
