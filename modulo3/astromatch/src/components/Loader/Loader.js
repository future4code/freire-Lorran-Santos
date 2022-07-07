import { Container, IconeLoader, BackgroundBlur } from "./styles";
import { RiHeartsFill } from "react-icons/ri";

const Loader = () => {
  return (
    <Container>
      <BackgroundBlur/>
      <IconeLoader>
        <h1>
          <RiHeartsFill color="#a624a8" size={"120px"} />
        </h1>
      </IconeLoader>
    </Container>
  );
};

export default Loader;
