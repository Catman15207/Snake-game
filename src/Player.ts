import SnakeController from "./SnakeController";

/** Abstract base class representing a Player */
abstract class Player {
  protected sc: SnakeController;

  /**
   * creates a player@param sc The SnakeController this player will control
   */
  constructor(sc: SnakeController) {
    this.sc = sc;
  }

  /** Makes a turn for the snake */
  abstract makeTurn(): void;
}

export default Player;
