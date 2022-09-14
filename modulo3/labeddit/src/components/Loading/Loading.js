import { CircularProgress, LinearProgress } from '@mui/material';
import { LoaderContainer } from './styles';

const Loading = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
};

export default Loading;
