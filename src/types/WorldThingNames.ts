export const WORLD_THING_NAMES = [
  "key",
  "couch",
  "chair",
  "desk",
  "radio",
  "seat",
  "blindfold",
  "rope",
  "nail",
  "window",
  "pliers",
  "hammer",
  "hanger",
  "dove",
  "furniture",
  "book",
  "picture",
  "vault",
  "cage",
  "toolbox",
  "stove",
  "coat",
  "coatrack",
  "rug",
  "flowerpot",
  "switch",
  "door",
  "glass",
  "crowbar",
  "cord",
  "pillow",
  "can opener",
] as const;

export type WorldThingNames = (typeof WORLD_THING_NAMES)[number];