import { useContext, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import "./App.css";
import BattleField from "./Components/BattleField";
import Rocket from "./Components/Rocket";
import Sentence from "./Components/Sentence";
import { appContext } from "./lib/ContextProvider";
import { sentence } from "./lib/sentences";

function App() {
  const { input, setInput, socket, setSocket, users, setUsers } =
    useContext(appContext);
  const inputRef = useRef();

  useEffect(() => {
    const s = io("http://localhost:8080");
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.emit("join-user");

    socket.on("set-user", (member) => {
      console.log(member);
      setUsers(member);
    });
  }, [socket]);

  return (
    <div className="App" onClick={() => inputRef?.current?.focus()}>
      <BattleField />
      <Sentence sentence={sentence} />

      <input
        style={{
          opacity: 0,
        }}
        ref={inputRef}
        autoFocus
        type="text"
        value={input}
        onChange={(e) => {
          const isAddingMultipleSpaces =
            input.slice(-1) === " " && e.target.value.slice(-1) === " ";
          const isDeletingAWord =
            input.split(" ").length > e.target.value.split(" ").length;
          const isFinishied = input.split(" ").length - 1 >= sentence.length;
          if (isAddingMultipleSpaces) return;
          // if (isFinishied) return;

          setInput(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
