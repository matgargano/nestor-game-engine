import { TIED, BLINDFOLDED, FREE } from "../const/status";

export type PlayerStatus = typeof TIED | typeof BLINDFOLDED | typeof FREE;
