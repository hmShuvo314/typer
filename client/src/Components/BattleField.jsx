import React, { useContext, useEffect } from "react";
import { appContext } from "../lib/ContextProvider";
import { BattleFieldStyles } from "../styles/BattleFieldStyles";
import { sentence } from "../lib/sentences";
import Rocket from "./Rocket";

const BattleField = () => {
  const { users, input, socket, setUsers } = useContext(appContext);
  const inputWordLength = input.split(" ").length;
  const completed = (inputWordLength / sentence.length) * 100;

  useEffect(() => {
    if (!socket) return;
    socket.emit("set-racing", completed);
    socket.on("get-racing", (done) => setUsers([done]));
  }, [socket, completed]);

  return (
    <BattleFieldStyles>
      <Rocket up={completed} />
      {users.map((done, i) => {
        console.log(done);
        return <Rocket key={i} up={done} />;
      })}
    </BattleFieldStyles>
  );
};

export default BattleField;
