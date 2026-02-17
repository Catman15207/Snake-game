import Snake from "./Snake";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./AvoidWallsPlayer";

describe("AvoidWallsPlayer", () => {
  it("should avoid walls for 20 steps", () => {
    const snake = new Snake("green");
    const world = new WorldModel(snake, 5, 5); // 5x5 world
    const controller = new SnakeController(world, snake);
    const player = new AvoidWallsPlayer(controller);

    for (let step = 1; step <= 20; step++) {
      player.makeTurn();
      world.update(1);

      const pos = controller.snakePosition;

      // Check snake is inside world boundaries
      expect(pos.x).toBeGreaterThanOrEqual(0);
      expect(pos.x).toBeLessThan(world.width);
      expect(pos.y).toBeGreaterThanOrEqual(0);
      expect(pos.y).toBeLessThan(world.height);
    }
  });
});
