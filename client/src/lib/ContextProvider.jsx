import React, { createContext, useEffect, useRef, useState } from "react";

const appContext = createContext();
const Provider = appContext.Provider;

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [letterRef, setLetterRef] = useState(null);
  const [testSentence, setTestSentence] = useState("");
  const [incorrectWords, setIncorrectWords] = useState({});
  const [count, setCount] = useState(1);
  const [startOrStop, setStartOrStop] = useState("stop");
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (startOrStop === "stop") return;
    setCount(1);

    const interval = setInterval(() => {
      setCount((seconds) => seconds + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [startOrStop]);

  return (
    <Provider
      value={{
        input,
        setInput,
        letterRef,
        setLetterRef,
        testSentence,
        setTestSentence,
        incorrectWords,
        setIncorrectWords,
        count,
        setStartOrStop,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </Provider>
  );
};

export { ContextProvider, appContext };
