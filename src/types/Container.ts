import { WorldThing } from "./WorldThing";

export type Container = WorldThing & {
  contents: WorldThing[];
};

export const getContents = (item: Container): WorldThing[] | undefined => {
  if ("contents" in item) {
    return item.contents;
  }
  return undefined;
};
