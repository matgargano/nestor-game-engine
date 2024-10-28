import { PlayerCanMoveToLocation } from "./Location";
import { WorldThing } from "./WorldThing";

export type TranslatedAction = {
  type: "thing" | "location";
  item: WorldThing | PlayerCanMoveToLocation;
};
