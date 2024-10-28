import { Trilean } from "./trilean";
import { WorldThing } from "./WorldThing";

export type Moveable = WorldThing & {
  canMove: boolean;
};

export const canMove = (item: Moveable): Trilean => {
  if ("canMove" in item) {
    return item.canMove;
  }
  return undefined;
};
