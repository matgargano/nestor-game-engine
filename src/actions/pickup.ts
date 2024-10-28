import { canPickUp, Pickupable } from "../types/Pickupable";
import { WorldThing } from "../types/WorldThing";
import inInventory from "./helpers/inInventory";
import { store } from "../store";
import { addItemToInventory } from "../features/player/playerSlice";
import { updateItemLocation } from "../features/item/itemSlice";
import { ActionResponse } from "../types/ActionResponse";

const Pickup = (item: WorldThing): ActionResponse => {
  const pickupable = canPickUp(item as Pickupable);
  const itemInInventory = inInventory(item);

  if (itemInInventory) {
    return {
      message: "You already have that.",
      success: true,
    };
  }
  if (pickupable === true) {
    store.dispatch(addItemToInventory(item as Pickupable));
    store.dispatch(updateItemLocation(item));
    return {
      message: "You pick up the " + item.name + ".",
      success: true,
    };
  } else if (pickupable === false) {
    return {
      message: "I can't pick that up.",
      success: false,
    };
  }

  return {
    message: "weird...",
    success: false,
  };
};

export default Pickup;
