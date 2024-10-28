import {
  ACCESSIBLE_LOCATIONS,
  PlayerCanMoveToLocation,
} from "../../types/Location";

export const canPlayerAccessLocation = (
  location: PlayerCanMoveToLocation
): boolean => {
  return ACCESSIBLE_LOCATIONS[location].accessible;
};
