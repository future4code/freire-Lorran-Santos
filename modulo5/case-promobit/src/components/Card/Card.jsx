import { useNavigate } from 'react-router-dom';
import { imageUrl } from '../../constants/baseUrl';
import { goToDetails } from '../../routers/coordinator';
import * as S from './style';

const Card = (props) => {
  const navigate = useNavigate();
  const movie = props.movie;
  const date = props.date;
  console.log(movie);

  return (
    <S.Card>
      <S.ButtonCard onClick={() => goToDetails(navigate, movie.id)}>
        <img
          src={imageUrl + movie.poster_path}
          alt={`Poster do filme ${movie.title}`}
        />
        <h3>{movie.title}</h3>
        <p>{date}</p>
      </S.ButtonCard>
    </S.Card>
  );
};

export default Card;
