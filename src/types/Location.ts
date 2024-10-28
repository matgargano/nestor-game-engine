import { NORTH, SOUTH, EAST, WEST, TIED_UP, FLOOR } from "../const/directions";
import { WORLD_THING_NAMES } from "./WorldThingNames";

export type AlwaysAvailableLocation = typeof FLOOR;

export type ItemLocation =
  | AlwaysAvailableLocation
  | typeof NORTH
  | typeof SOUTH
  | typeof EAST
  | typeof WEST
  | typeof WORLD_THING_NAMES;

export type AccessibleLocation =
  | typeof NORTH
  | typeof SOUTH
  | typeof EAST
  | typeof WEST;

export type PlayerCanMoveToLocation =
  | typeof NORTH
  | typeof SOUTH
  | typeof EAST
  | typeof WEST;

export type PlayerLocation = PlayerCanMoveToLocation | typeof TIED_UP;

export const ACCESSIBLE_LOCATIONS: Record<
  PlayerCanMoveToLocation,
  { accessible: boolean }
> = {
  [NORTH]: { accessible: true },
  [SOUTH]: { accessible: true },
  [EAST]: { accessible: true },
  [WEST]: { accessible: true },
};

export const PLAYER_LOCATION_ACCESSIBLE = [NORTH, SOUTH, EAST, WEST];
