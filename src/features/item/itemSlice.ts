import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WorldThing } from "../../types/WorldThing";
import { WorldThingNames } from "../../types/WorldThingNames";

type ItemState = Partial<Record<WorldThingNames, WorldThing>>;

const initialState: ItemState = {};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    updateItemLocation: (
      state: ItemState,
      action: PayloadAction<WorldThing>
    ) => {
      const name = action.payload.name as WorldThingNames;
      if (!name) {
        return state;
      }
      state[name] = {
        ...state[name],
        location: "Inventory",
      };
    },
    addItem: (state, action: PayloadAction<WorldThing>) => {
      state[action.payload.name as WorldThingNames] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateItemLocation, addItem } = itemSlice.actions;

export default itemSlice.reducer;
