import React, { useContext, useEffect, useRef } from "react";
import { appContext } from "../lib/ContextProvider";
import { LetterStyles } from "../styles/SentenceStyles";

const Letter = ({ letter, mark, isNext }) => {
  const { setLetterRef, input } = useContext(appContext);
  const myRef = useRef();

  useEffect(() => {
    if (!isNext) return;
    setLetterRef(myRef);
  }, [myRef.current, isNext, input]);

  return (
    <LetterStyles ref={myRef} className={mark}>
      {letter}
    </LetterStyles>
  );
};

export default Letter;
