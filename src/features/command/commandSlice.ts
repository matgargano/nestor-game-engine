import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
export interface CommandState {
  commands: string[];
}

const initialState: CommandState = { commands: [] };

export const commandSlice = createSlice({
  name: "command",
  initialState,
  reducers: {
    add: (state: CommandState, action: PayloadAction<{ command: string }>) => {
      state.commands.push(action.payload.command);
    },
    clear: (state: CommandState) => {
      const copy = [...initialState.commands];
      state.commands = copy;
    },
  },
});

export const { add, clear } = commandSlice.actions;
export default commandSlice.reducer;
