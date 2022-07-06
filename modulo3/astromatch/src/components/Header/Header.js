import React from "react";
import { Cabecalho } from "./styles";
import { BsFillGearFill } from "react-icons/bs";
import { RiHeartsFill } from "react-icons/ri";

const Header = (props) => {
  return (
    <Cabecalho>
      <h3>
        <BsFillGearFill size={"32px"} />
      </h3>
      <button onClick={props.home}>
        <h1>
          astro<span>match</span>
        </h1>
      </button>
      <button onClick={props.matches}>
        <h3>
          <RiHeartsFill size={"32px"}/>
        </h3>
      </button>
    </Cabecalho>
  );
};

export default Header;
