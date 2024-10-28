import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../../types/Player";
import { FREE } from "../../const/status";
import { EAST } from "../../const/directions";
import { PlayerCanMoveToLocation } from "../../types/Location";
import { Pickupable } from "../../types/Pickupable";
import { PlayerStatus } from "../../types/PlayerStatus";

// Define the initial state type

const initialState: Player = {
  inventory: [],
  status: FREE,
  location: EAST,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setLocation: (
      state: Player,
      action: PayloadAction<PlayerCanMoveToLocation>
    ) => {
      state.location = action.payload;
    },
    addItemToInventory: (state: Player, action: PayloadAction<Pickupable>) => {
      state.inventory.push(action.payload);
    },
    setStatus: (state: Player, action: PayloadAction<PlayerStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setLocation, addItemToInventory } = playerSlice.actions;
export default playerSlice.reducer;
