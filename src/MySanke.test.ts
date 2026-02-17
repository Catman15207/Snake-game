import Snake from "./Snake";

describe("My custome snake test", () => {
  it("should move and turn correctly", () => {
    const snake = new Snake("green");
    // Move up 5
    snake.move(5);
    expect(snake.currentPosition.x).toBe(0);
    expect(snake.currentPosition.y).toBe(-5);
    // Turn right, move 3
    snake.turnRight();
    snake.move(3);
    expect(snake.currentPosition.x).toBe(3);
    expect(snake.currentPosition.y).toBe(-5);
    // Turn down, move 2
    snake.turnRight();
    snake.move(2);
    expect(snake.currentPosition.x).toBe(3);
    expect(snake.currentPosition.y).toBe(-3);
    // Turn left, move 4
    snake.turnLeft();
    snake.move(4);
    expect(snake.currentPosition.x).toBe(7);
    expect(snake.currentPosition.y).toBe(-3);
  });
  it("should stay in place when turning left 4 times from start", () => {
    const snake = new Snake("green"); // fresh snake at 0,0
    snake.turnLeft();
    snake.turnLeft();
    snake.turnLeft();
    snake.turnLeft();
    // Position should not change
    expect(snake.currentPosition).toEqual({ x: 0, y: 0 });
  });
});
