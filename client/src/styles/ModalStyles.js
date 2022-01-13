import styled from "styled-components";
import RobotoMono from "../Assets/fonts/RobotoMono.ttf";

export const ModalStyles = styled.div`
  @font-face {
    font-family: Roboto;
    src: url(${RobotoMono});
  }
  display: grid;
  width: clamp(250px, 50vw, 50vw);
  height: 50vh;
  box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.2);
  place-content: center;
  justify-items: center;
  gap: 7vmin;
  font-size: 5vmin;

  color: wheat;
  border-radius: 1vmin;
  font-family: Roboto;
  background-color: rgba(255, 255, 255, 0.05);
  div {
    display: grid;
    gap: 2vmin;
  }

  button {
    border: none;
    width: 25vmin;
    height: 6vmin;
    color: wheat;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.2);
    border-radius: 3vmin;
    font-size: 2.2vmin;
    font-weight: 600;
    cursor: pointer;
  }
`;
