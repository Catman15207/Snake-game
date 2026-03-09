import WorldModel from "./WorldModel";

/**
 * Interface for a world view.
 * Any class implementing this must provide a display method.
 */
export default interface IWorldView {
  display(world: WorldModel): void;
}
