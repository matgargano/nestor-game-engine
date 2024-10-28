import { NORTH, SOUTH, EAST, WEST, FLOOR } from "../../const/directions";
import { BLINDFOLDED, TIED } from "../../const/status";
import { isOpen, Openable } from "../../types/Openable";
import { WorldThing } from "../../types/WorldThing";
import { LookResponse } from "../../types/LookResponse";
import { store } from "../../store";

export const isItemInAccessibleLocation = (item: WorldThing): LookResponse => {
  const playerStatus = store.getState().player.status;
  const playerLocation = store.getState().player.location;
  if ([BLINDFOLDED, TIED].includes(playerStatus)) {
    return {
      isAccessible: false,
      playerInLocation: item.location === playerLocation,
      reason: "You are blindfolded or tied up.",
    };
  }
  if ([NORTH, SOUTH, EAST, WEST, FLOOR].includes(item.location as string)) {
    const open = isOpen(item as Openable);
    if (typeof open === "boolean") {
      return {
        isAccessible: open,
        playerInLocation: item.location === playerLocation,
        reason: open ? "The item is open." : "The item is closed.",
      };
    }
    return {
      isAccessible: item.location === FLOOR || item.location === playerLocation,
      playerInLocation: item.location === playerLocation,
      reason:
        item.location === FLOOR
          ? "You can walk on the floor."
          : "You can walk on the player.",
    };
  }
  return isItemInAccessibleLocation(item.location as WorldThing);
};
