import { WorldThing } from "../types/WorldThing";

const getDescription = (item: WorldThing) => {
  return (
    item?.description
      ?.find((d) => d.ifTrue(item))
      ?.description(item as WorldThing) || "I am not sure..."
  );
};

export default getDescription;
