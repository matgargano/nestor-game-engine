import { WorldThing } from "../types/WorldThing";
import { Openable } from "../types/Openable";
import { Pickupable } from "../types/Pickupable";
import { Container } from "../types/Container";
export const INVENTORY = "Inventory";

import { EAST, FLOOR, NORTH } from "./directions";
import Registry from "../actions/helpers/registry";
import { OnOff } from "../types/OnOff";
import { store } from "../store";
import { isItemInAccessibleLocation } from "../actions/helpers/isItemInAccessibleLocation";

const fallback = () => ({
  ifTrue: () => true,
  description: (item: WorldThing) =>
    `It's ${item?.article || "a"} ${item && item?.name}.`,
});

export const COUCH: WorldThing & Pickupable & Container = {
  name: "couch",
  contents: [],
  synonyms: ["couch", "sofa"],
  location: NORTH,
  visible: true,
  canPickUp: false,
  description: [
    {
      ifTrue: () => {
        const pillow = store.getState().items.pillow;
        return !!(pillow && pillow.location === COUCH);
      },
      description: () => `There is a pillow on the couch.`,
    },
    fallback(),
  ],
};

export const PILLOW: WorldThing & Pickupable = {
  name: "pillow",
  synonyms: ["pillow", "pillowcase"],
  location: COUCH, // Not directly in a location
  visible: true,
  canPickUp: true,
  description: [
    {
      ifTrue: (item: WorldThing) => {
        const { isAccessible, playerInLocation } = isItemInAccessibleLocation(
          item as WorldThing
        );
        return !(isAccessible && playerInLocation);
      },
      description: (item: WorldThing) =>
        `I cannot see the ${item && item?.name}.`,
    },
    {
      ifTrue: (item: WorldThing) => {
        const inventory = store.getState().player.inventory;
        return inventory.includes(item as Pickupable);
      },
      description: (item: WorldThing) =>
        `It's a ${item && item?.name} and you have it.`,
    },
    fallback(),
  ],
  article: "a",
};

export const CAN_OPENER: WorldThing & Pickupable = {
  name: "can opener",
  synonyms: ["can opener", "opener"],
  location: COUCH,
  visible: true,
  canPickUp: true,
  description: [fallback()],
  article: "a",
};

export const KEY: WorldThing & Pickupable = {
  name: "key",
  synonyms: ["key"],
  location: FLOOR,
  visible: true,
  canPickUp: true,
};

export const DESK: WorldThing & Openable = {
  name: "desk",
  synonyms: [],
  location: EAST,
  visible: true,
  canOpen: true,
  requiresOpen: KEY,
  cannotOpenReason: "The desk is locked and requires a key.",
  description: [],
  isOpen: false,
  canOpenResponse: "The desk is now open.",
};

export const CHAIR: WorldThing = {
  name: "chair",
  synonyms: ["chair"],
  location: FLOOR,
};

export const NAIL: WorldThing = {
  name: "nail",
  synonyms: ["nail"],
  location: CHAIR,
};

export const RADIO: WorldThing & Pickupable & OnOff = {
  name: "radio",
  synonyms: ["radio"],
  location: FLOOR,
  canPickUp: true,
  isOn: false,
};

export const REGISTRY = new Registry();

REGISTRY.register(COUCH);
REGISTRY.register(PILLOW);
REGISTRY.register(CAN_OPENER);
REGISTRY.register(KEY);
REGISTRY.register(DESK);
REGISTRY.register(NAIL);
