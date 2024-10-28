import { NORTH, SOUTH, EAST, WEST, FLOOR } from "../const/directions";
import { StateStatus } from "./StateStatus";
import { WorldThingNames } from "./WorldThingNames";
import { INVENTORY } from "../const/items";

export type WorldThing = {
  name: WorldThingNames;
  synonyms: (WorldThingNames | string)[];
  location:
    | typeof NORTH
    | typeof SOUTH
    | typeof EAST
    | typeof WEST
    | typeof FLOOR
    | WorldThing
    | typeof INVENTORY;
  visible?: boolean;
  description?: StateStatus[];
  article?: string;
};
