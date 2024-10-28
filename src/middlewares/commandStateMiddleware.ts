import { Middleware } from "@reduxjs/toolkit";
import { CommandState } from "../features/command/commandSlice";

// Define the middleware using the Middleware type from Redux Toolkit
const commandStateMiddleware: Middleware<object, CommandState> =
  (store) => (next) => (action) => {
    const result = next(action); // Proceed with the action
    // Check if the action type belongs to the 'command' slice
    if (
      typeof action === "object" &&
      action !== null &&
      "type" in action &&
      typeof action.type === "string" &&
      action.type.startsWith("command/")
    ) {
      const newState = store.getState().commands; // Get the current state from the store
      localStorage.setItem("commandState", JSON.stringify(newState));
    }

    return result;
  };

export default commandStateMiddleware;
