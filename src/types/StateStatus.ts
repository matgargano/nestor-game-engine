import { WorldThing } from "./WorldThing";

export type StateStatus = {
  ifTrue: (item: WorldThing) => boolean;
  description: (item: WorldThing) => string;
};
