import React, { useContext, useEffect } from "react";
import { appContext } from "../lib/ContextProvider";
import { BattleFieldStyles } from "../styles/BattleFieldStyles";
import Rocket from "./Rocket";

const BattleField = () => {
  const { input, testSentence } = useContext(appContext);
  const inputWordLength = input.split(" ").length;
  const completed = (inputWordLength / testSentence.length) * 100;

  return (
    <BattleFieldStyles>
      <Rocket up={completed} />
    </BattleFieldStyles>
  );
};

export default BattleField;
