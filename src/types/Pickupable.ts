import { isItemInAccessibleLocation } from "../actions/helpers/isItemInAccessibleLocation";
import { Trilean } from "./trilean";
import { WorldThing } from "./WorldThing";

export type Pickupable = WorldThing & {
  canPickUp: boolean;
  cannotPickUpReason?: string;
};

export const canPickUp = (item: Pickupable): Trilean => {
  const { isAccessible, playerInLocation } = isItemInAccessibleLocation(
    item as Pickupable
  );
  if (!isAccessible || !playerInLocation) {
    return false;
  }
  if ("canPickUp" in item) {
    return playerInLocation;
  }

  return undefined;
};
