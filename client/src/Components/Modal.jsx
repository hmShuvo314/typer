import React, { useContext } from "react";
import { appContext } from "../lib/ContextProvider";
import { generateTestSentence } from "../lib/GenerateTestSentence";
import { ModalStyles } from "../styles/ModalStyles";

const Modal = () => {
  const {
    setIsModalOpen,
    setStartOrStop,
    input,
    incorrectWords,
    setIncorrectWords,
    testSentence,
    count,
    setInput,
    setTestSentence,
  } = useContext(appContext);

  const handleClick = () => {
    const newTestSentence = generateTestSentence();

    setTestSentence(newTestSentence);
    setIncorrectWords({});
    setInput("");
    setIsModalOpen(false);
    setStartOrStop("start");
  };
  const speed = Math.floor((input.length / 5 / count) * 60);

  const accuracy =
    100 -
    Math.floor(
      (Object.values(incorrectWords).length / testSentence.length) * 100
    );

  return !input.length ? (
    <ModalStyles>
      <h4>Start Typing!</h4>
      <button onClick={handleClick}>Let the race begin!</button>
    </ModalStyles>
  ) : (
    <ModalStyles>
      <div>
        <h4>Speed: {speed} wpm</h4>
        <h4>Accuracy: {accuracy}%</h4>
      </div>
      <button onClick={handleClick}>Do the race again!</button>
    </ModalStyles>
  );
};

export default Modal;
