import { Trilean } from "./trilean";
import { WorldThing } from "./WorldThing";

export type OnOff = WorldThing & {
  isOn: boolean;
};

export const isOn = (item: WorldThing & OnOff): Trilean => {
  if ("isOn" in item) {
    return item.isOn;
  }
  return undefined;
};
