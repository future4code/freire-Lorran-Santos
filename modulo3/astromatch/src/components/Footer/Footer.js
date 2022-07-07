import { TiHeartFullOutline } from "react-icons/ti";
import { Icones } from "./styles";

const Footer = (props) => {


  return (
    <div>
      <Icones>
        <button onClick={props.botao}>
          <p>X</p>
        </button>
        <button onClick={props.botaoMatch}>
          <TiHeartFullOutline size="80px" color="#008000" />
        </button>
      </Icones>
    </div>
  );
};

export default Footer;
