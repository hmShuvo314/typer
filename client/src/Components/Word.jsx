import React, { useContext, useEffect } from "react";
import { WordStyles } from "../styles/SentenceStyles";
import Letter from "./Letter";
import { appContext } from "../lib/ContextProvider";

const Word = ({ word, wordIdx }) => {
  const { input } = useContext(appContext);
  const inputArray = input.split(" ");
  const inputWord = inputArray[wordIdx];

  return (
    <WordStyles
      className={
        !inputWord || wordIdx === inputArray.length - 1
          ? ""
          : inputWord !== word
          ? "wrong"
          : ""
      }
    >
      {word.split("").map((letter, i) => {
        const hasTrailing = inputWord && inputWord[i - 1];
        const isBeginning = i === 0 && inputArray.length > wordIdx;
        return (
          <Letter
            mark={
              !inputWord || !inputWord[i]
                ? ""
                : inputWord[i] === letter
                ? "correct"
                : "incorrect"
            }
            letter={letter}
            key={i}
            isNext={hasTrailing || isBeginning}
          />
        );
      })}
      {inputWord
        ?.slice(word.length, 15)
        .split("")
        .map((letter, i) => {
          return (
            <Letter mark={"extra"} letter={letter} key={i} isNext={i < 1} />
          );
        })}
    </WordStyles>
  );
};

export default Word;
