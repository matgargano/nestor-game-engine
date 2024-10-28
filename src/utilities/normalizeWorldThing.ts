import { WorldThing } from "../types/WorldThing";
import { store } from "../store";
import { WorldThingNames } from "../types/WorldThingNames";

const normalizeWorldThing = (
  item: string
): { thing: WorldThing; originalTermPassedIn: string } => {
  // Convert item to lowercase for case-insensitive comparison
  const items = store.getState().items;
  const lowercaseItem = item.toLowerCase();
  // Loop over all world things
  for (const key of Object.keys(items)) {
    const worldThing = items[key as WorldThingNames];
    if (worldThing && worldThing.name.toLowerCase() === lowercaseItem) {
      return { thing: worldThing, originalTermPassedIn: item };
    }
    if (worldThing && worldThing.synonyms.includes(lowercaseItem)) {
      return { thing: worldThing, originalTermPassedIn: item };
    }
  }

  // If no match is found, return a default world thing or throw an error
  throw new Error(`World thing not found: ${item}`);
};

export default normalizeWorldThing;
