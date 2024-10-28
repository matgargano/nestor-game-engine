import { GET, LOOK, normalizeVerb } from "../const/verbs";
import Look from "../actions/look";
import { WorldThing } from "../types/WorldThing";
import normalizeWorldThing from "../utilities/normalizeWorldThing";
import Pickup from "./pickup";
import {
  ACCESSIBLE_LOCATIONS,
  PlayerCanMoveToLocation,
} from "../types/Location";
import { TranslatedAction } from "../types/TranslatedAction";
import { ActionResponse } from "../types/ActionResponse";

export const Action = (verb: string, item: string): ActionResponse => {
  const normalizedVerb = normalizeVerb(verb);

  if (!normalizedVerb) {
    return {
      message: `I don't know how to ${verb}.`,
      success: false,
    };
  }

  let normalizedItem: WorldThing | PlayerCanMoveToLocation;
  let translatedAction: TranslatedAction;
  if (normalizedVerb === LOOK && item.toLowerCase() in ACCESSIBLE_LOCATIONS) {
    normalizedItem = item.toLowerCase() as PlayerCanMoveToLocation;
    translatedAction = {
      type: "location",
      item: normalizedItem,
    };
  } else {
    try {
      const { thing: normalizedItem, originalTermPassedIn } =
        normalizeWorldThing(item);

      translatedAction = {
        type: "thing",
        item: normalizedItem,
      };
    } catch (error) {
      return {
        message: `I don't know how to ${verb} ${item}.`,
        success: false,
      };
    }
  }

  switch (normalizedVerb) {
    case LOOK:
      return Look(translatedAction);
    case GET:
      return Pickup(translatedAction.item as WorldThing);
    default:
      return {
        message: "I don't know how to " + normalizedVerb + " that.",
        success: false,
      };
  }
};
