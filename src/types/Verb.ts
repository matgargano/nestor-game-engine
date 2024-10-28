import { LOOK, FEEL, GET, GO, USE, SAY, ASK, DO } from "../const/verbs";

export type Verb =
  | typeof LOOK
  | typeof FEEL
  | typeof GET
  | typeof GO
  | typeof USE
  | typeof SAY
  | typeof ASK
  | typeof DO;
