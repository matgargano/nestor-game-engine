import { Trilean } from "./trilean";
import { WorldThing } from "./WorldThing";

export type Openable = WorldThing & {
  isOpen: boolean;
  canOpen: boolean;
  requiresOpen: WorldThing;
  canOpenResponse: string;
  cannotOpenReason: string;
};

export const isOpen = (item: WorldThing & Openable): Trilean => {
  if ("isOpen" in item) {
    return item.isOpen;
  }
  return undefined;
};
