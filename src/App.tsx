import { useState } from "react";
import "./App.css";
import { parseCommand } from "./utilities/parseCommand";
import { Action } from "./actions/action";
import { add, clear } from "./features/command/commandSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import inLocation from "./actions/helpers/inLocation";

function App() {
  const commandHistory = useSelector(
    (state: RootState) => state.command.commands
  );
  const [command, setCommand] = useState("look at pillow");
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedCommand = parseCommand(command);
    if ("error" in parsedCommand) {
      dispatch(add({ command: parsedCommand.message }));
      return;
    }

    const {
      message,
      success,
      metadata = [],
    } = Action(parsedCommand.verb || "", parsedCommand.directObject || "");
    if (metadata.includes("clear")) {
      dispatch(clear());
      const items = inLocation();
      dispatch(
        add({ command: "You see: " + items.map((i) => i.name).join(", ") })
      );
    }

    dispatch(add({ command: command }));
    const actualMessage = Array.isArray(message) ? message : [message];
    actualMessage.forEach((m) => dispatch(add({ command: m })));
    setCommand("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What should I do?"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="command-history">
        {commandHistory.map((c) => (
          <div key={c}>{c}</div>
        ))}
      </div>
    </>
  );
}

export default App;
