import { words } from "./words";

export const generateTestSentence = () => {
  const randomSentenceLength = Math.floor(Math.random() * 6 + 11);

  const randomWordIdx = Math.floor(Math.random() * words.length);
  const randomSentence = words.slice(
    randomWordIdx,
    randomWordIdx + randomSentenceLength
  );
  return randomSentence;
};
