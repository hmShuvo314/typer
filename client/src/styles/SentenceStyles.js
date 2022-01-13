import styled from "styled-components";
import RobotoMono from "../Assets/fonts/RobotoMono.ttf";

export const SentenceStyles = styled.div`
  @font-face {
    font-family: Roboto;
    src: url(${RobotoMono});
  }
  display: flex;
  width: clamp(250px, 50vw, 50vw);

  flex-wrap: wrap;
  height: fit-content;
  position: relative;
  gap: 2vmin;
  color: aliceblue;
  font-size: clamp(15px, 3.2vmin, 3.2vmin);
  font-weight: 900;
  color: #5c7da5;
  font-family: Roboto;
  padding-left: 3px;
  .wrong {
    border-bottom: 2px solid rgb(223, 69, 118);
  }
`;
export const WordStyles = styled.div`
  gap: 1px;
  display: flex;
  .correct {
    color: rgb(141, 176, 207);
  }
  .incorrect {
    color: rgb(223, 69, 118);
  }
  .extra {
    color: rgb(216, 149, 171);
  }
`;
export const LetterStyles = styled.span`
  display: inline-block;
  display: grid;
  place-content: center;
`;
