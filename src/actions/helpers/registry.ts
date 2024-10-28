import { addItem } from "../../features/item/itemSlice";
import { store } from "../../store";
import { WorldThing } from "../../types/WorldThing";

class Registry {
  objects: WorldThing[] = [];
  constructor() {
    this.objects = [];
  }

  register(obj: WorldThing) {
    this.objects.push(obj);
    store.dispatch(addItem(obj));
  }

  get() {
    return this.objects;
  }
}

export default Registry;
