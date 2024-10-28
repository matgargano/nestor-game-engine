import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./features/item/itemSlice";
import locationReducer from "./features/location/locationSlice";
import informationReducer from "./features/window/windowSlice";
import logReducer from "./features/log/logSlice";
import flagReducer from "./features/flag/flagSlice";
import commandReducer from "./features/command/commandSlice";
import commandStateMiddleware from "./middlewares/commandStateMiddleware";
import testJSON from "./utilities/testJson";
import playerReducer from "./features/player/playerSlice";
// Function to load command state from local storage
const loadCommandState = () => {
  const commandState = localStorage.getItem("commandState");

  if (!testJSON(commandState)) return { commands: [] };
  return commandState ? JSON.parse(commandState) : { commands: [] };
};

const preloadedState = {
  command: loadCommandState(),
};

export const store = configureStore({
  reducer: {
    command: commandReducer,
    player: playerReducer,
    items: itemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(commandStateMiddleware),
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
