import { REGISTRY } from "../../const/items";
import { store } from "../../store";
import { ItemLocation } from "../../types/Location";

const inLocation = (direction: ItemLocation | undefined = undefined) => {
  if (!direction) {
    direction = store.getState().player.location as ItemLocation;
  }
  const items = REGISTRY.get();
  return items.filter((item) => item.location === direction);
};

export default inLocation;
