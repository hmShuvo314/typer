import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { appContext } from "../lib/ContextProvider";
import { SentenceStyles } from "../styles/SentenceStyles";
import Word from "./Word";

const PointerStyles = styled.span`
  display: block;
  width: 2px;
  height: 3.5vmin;
  position: absolute;
  transform: translateY(15%);
  top: 1vmin;
  border-radius: 10px;
  background-color: hsl(313, 72%, 48%);
  transition: all 0.15s;
`;
const Sentence = ({ sentence }) => {
  const { input, letterRef, isExcess } = useContext(appContext);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const newLeft = letterRef?.current?.offsetLeft;
    const newTop = letterRef?.current?.offsetTop;
    setLeft(newLeft);
    setTop(newTop);
    const handle = (e) => {
      setIsDeleting(e.key === "Backspace");
    };

    window.addEventListener("keydown", handle);
    if (
      !letterRef?.current?.nextElementSibling &&
      letterRef?.current?.previousElementSibling
    ) {
      if (isDeleting) {
        const newLeft = left - letterRef?.current?.offsetWidth;
        setLeft(newLeft);
      } else {
        const newLeft = left + letterRef?.current?.offsetWidth;
        setLeft(newLeft);
      }
    }
    return () => {
      window.removeEventListener("keydown", handle);
    };

    // const left = `${inputLength * window.innerHeight * 0.019}px`,
  }, [input, letterRef]);

  return (
    <SentenceStyles>
      <PointerStyles style={{ left: left + "px", top: top + "px" }} />
      {sentence.map((word, wordIdx) => {
        return <Word word={word} key={wordIdx} wordIdx={wordIdx} />;
      })}
    </SentenceStyles>
  );
};

export default Sentence;
