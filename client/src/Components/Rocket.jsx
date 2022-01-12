import React from "react";
import { RocketStyles } from "../styles/RocketStyles";
import { IoMdRocket } from "react-icons/io";

const Rocket = ({ up }) => {
  return (
    <RocketStyles style={{ bottom: `${up}%` }}>
      <IoMdRocket />
    </RocketStyles>
  );
};

export default Rocket;
