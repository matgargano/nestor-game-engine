import { NORTH, SOUTH, EAST, WEST, FLOOR } from "../const/directions";
import { WorldThing } from "./WorldThing";

export type Breakable = WorldThing & {
  canBeBrokenBy: WorldThing[];
  isBroken: boolean;

  itemsAfterBreak?: {
    where:
      | typeof NORTH
      | typeof SOUTH
      | typeof EAST
      | typeof WEST
      | typeof FLOOR;
    what: WorldThing[];
  }[];
};

export const isBreakable = (item: Breakable): WorldThing[] | false => {
  if ("canBeBrokenBy" in item && item.canBeBrokenBy) {
    return item.canBeBrokenBy;
  }

  return false;
};
export const isBroken = (item: Breakable): boolean => {
  return "isBroken" in item && item.isBroken;
};
