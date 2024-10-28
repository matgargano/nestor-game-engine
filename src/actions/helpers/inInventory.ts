import { Pickupable } from "../../types/Pickupable";
import { WorldThing } from "../../types/WorldThing";
import { store } from "../../store";

const inInventory = (item: WorldThing) => {
  const playerInventory = store.getState().player.inventory;
  return playerInventory.includes(item as Pickupable);
};

export default inInventory;
