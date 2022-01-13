import { useContext, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import "./App.css";
import BattleField from "./Components/BattleField";
import Modal from "./Components/Modal";
import Rocket from "./Components/Rocket";
import Sentence from "./Components/Sentence";
import { appContext } from "./lib/ContextProvider";
import { generateTestSentence } from "./lib/GenerateTestSentence";
import beep from "./Assets/sounds/beep.wav";

function App() {
  const {
    input,
    setInput,
    setTestSentence,
    testSentence,
    setStartOrStop,
    isModalOpen,
    setIsModalOpen,
  } = useContext(appContext);

  const [audio] = useState(new Audio(beep));
  const inputRef = useRef();

  useEffect(() => {
    const newTestSentence = generateTestSentence();
    setTestSentence(newTestSentence);
  }, []);

  const handleChange = (e) => {
    audio.currentTime = 0;
    audio.play();

    const updatedInput = e.target.value;

    const isAddingMultipleSpaces =
      input.slice(-1) === " " && updatedInput.slice(-1) === " ";
    const isDeletingAWord =
      input.split(" ").length > updatedInput.split(" ").length;
    const isFinishied = updatedInput.split(" ").length > testSentence.length;

    if (isAddingMultipleSpaces) return;
    if (isFinishied) {
      setStartOrStop("stop");
      setIsModalOpen(true);
      return;
    }
    if (isDeletingAWord) return;

    setInput(updatedInput);
  };

  return isModalOpen ? (
    <>
      <h1>Typer</h1>
      <Modal />
    </>
  ) : (
    <div className="App" onClick={() => inputRef?.current?.focus()}>
      <h1>Typer</h1>
      <BattleField />
      <Sentence sentence={testSentence} />
      <input
        style={{
          opacity: 0,
        }}
        ref={inputRef}
        autoFocus
        type="text"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
