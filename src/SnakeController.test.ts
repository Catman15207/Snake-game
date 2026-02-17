import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import Point from "./Point";

describe("SnakeController", () => {
  let snake: Snake;
  let world: WorldModel;
  let controller: SnakeController;

  beforeEach(() => {
    snake = new Snake("green");
    world = new WorldModel(snake, 10, 15); // width = 10, height = 15
    controller = new SnakeController(world, snake);
  });

  it("should store snake and world correctly", () => {
    expect(controller.slitherer).toBe(snake);
    expect(controller.snakeWorld).toBe(world);
  });

  it("should turn snake left", () => {
    controller.turnSnakeLeft();
    expect(controller.snakeDirection).toBe("left"); // initial was "up"
  });

  it("should turn snake right", () => {
    controller.turnSnakeRight();
    expect(controller.snakeDirection).toBe("right"); // initial was "up"
  });

  it("should return snake position correctly", () => {
    expect(controller.snakePosition).toEqual(new Point(0, 0));
    snake.move(2);
    expect(controller.snakePosition).toEqual(new Point(0, -2));
  });

  it("should return world width and height", () => {
    expect(controller.worldWidth).toEqual(10);
    expect(controller.worldHeight).toEqual(15);
  });
});
