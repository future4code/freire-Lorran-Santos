import { CircularProgress, LinearProgress } from '@mui/material';
import { LoaderContainer } from './styles';

const Loading = () => {
  return (
    <LoaderContainer>
      {/* <LinearProgress variant="buffer" /> */}
      {/* <p>Carregando...</p> */}
      <CircularProgress />
    </LoaderContainer>
  );
};

export default Loading;
