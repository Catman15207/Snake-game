import IWorldView from "./IWorldView";
import WorldModel from "./WorldModel";

class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;

    // Create the canvas element
    this.worldCanvas = document.createElement("canvas");

    // Get 2D context
    this.context = this.worldCanvas.getContext("2d")!;

    // Add canvas to the page
    document.body.appendChild(this.worldCanvas);
  }

  display(world: WorldModel): void {
    // Resize canvas to fit world
    this.worldCanvas.width = world.width * this.scalingFactor;
    this.worldCanvas.height = world.height * this.scalingFactor;

    // Clear previous frame
    this.context.clearRect(
      0,
      0,
      this.worldCanvas.width,
      this.worldCanvas.height
    );

    // Get snake position
    const pos = world.snake.currentPosition;

    // Set snake color
    this.context.fillStyle = world.snake.snakeColor;

    // Draw the snake
    this.context.fillRect(
      pos.x * this.scalingFactor,
      pos.y * this.scalingFactor,
      1 * this.scalingFactor,
      1 * this.scalingFactor
    );
  }
}

export default CanvasWorldView;
