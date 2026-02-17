import Snake from "./Snake";
import WorldModel from "./WorldModel";

describe("My Custom WorldModel Test", () => {
  it("should move the snake correctly using update", () => {
    const snake = new Snake("red");
    const world = new WorldModel(snake);

    world.update(5);
    expect(world.snake.currentPosition.x).toBe(0);
    expect(world.snake.currentPosition.y).toBe(-5);

    // Turn right and move 3
    snake.turnRight();
    world.update(3);
    expect(world.snake.currentPosition.x).toBe(3);
    expect(world.snake.currentPosition.y).toBe(-5);

    // Turn down and move 2
    snake.turnRight();
    world.update(2);
    expect(world.snake.currentPosition.x).toBe(3);
    expect(world.snake.currentPosition.y).toBe(-3);

    // Turn left, move 4
    snake.turnLeft();
    world.update(4);
    expect(world.snake.currentPosition.x).toBe(7);
    expect(world.snake.currentPosition.y).toBe(-3);
  });

  it("should correctly chain multiple updates and turns", () => {
    const snake = new Snake("blue");
    const world = new WorldModel(snake);

    snake.turnLeft();
    world.update(2); // move left
    expect(world.snake.currentPosition.x).toBe(-2);
    expect(world.snake.currentPosition.y).toBe(0);

    snake.turnLeft();
    world.update(3); // move down
    expect(world.snake.currentPosition.x).toBe(-2);
    expect(world.snake.currentPosition.y).toBe(3);
  });
});
