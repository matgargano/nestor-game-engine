import { Status } from "./Status";
import { Verb } from "./Verb";
import { WorldThing } from "./WorldThing";

export type ChangeStatus = {
  from: Status[];
  to: Status[];
  description: string;
  verb: Verb;
  itemsInInventory?: WorldThing[];
};
