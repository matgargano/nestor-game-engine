import { PlayerLocation } from "./Location";
import { Pickupable } from "./Pickupable";
import { PlayerStatus } from "./PlayerStatus";

export type Player = {
  inventory: Pickupable[];
  status: PlayerStatus;
  location: PlayerLocation;
};
