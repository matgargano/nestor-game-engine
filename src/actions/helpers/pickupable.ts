import { canPickUp, Pickupable } from "../../types/Pickupable";
import { Trilean } from "../../types/trilean";

const ableToPickup = (item: Pickupable): Trilean => {
  const pickupable = canPickUp(item);
  if (typeof pickupable === "boolean") {
    return pickupable;
  }
  return undefined;
};

export default ableToPickup;
