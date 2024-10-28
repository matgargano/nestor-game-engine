import { setLocation } from "../features/player/playerSlice";
import { store } from "../store";
import { PlayerCanMoveToLocation } from "../types/Location";
import { WorldThing } from "../types/WorldThing";
import { TranslatedAction } from "../types/TranslatedAction";
import { isItemInAccessibleLocation } from "./helpers/isItemInAccessibleLocation";
import { ActionResponse } from "../types/ActionResponse";
import getDescription from "../utilities/getDescription";

const Look = (translatedAction: TranslatedAction): ActionResponse => {
  const playerLocation = store.getState().player.location;

  const { type, item } = translatedAction;
  if (type === "location") {
    if (item === playerLocation) {
      return {
        message: "You are already here.",
        success: true,
        metadata: ["clear", "look"],
      };
    }
    store.dispatch(setLocation(item as PlayerCanMoveToLocation));
    return {
      message: `You are now in ${item}.`,
      success: true,
      metadata: ["clear", "look"],
    };
  }

  return {
    message: getDescription(item as WorldThing),
    success: true,
  };
};

export default Look;
