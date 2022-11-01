import { CircularProgress } from '@mui/material';
import { imageUrl } from '../../constants/baseUrl';
import * as S from './style';

const Infos = (props) => {
  const movie = props?.details;

  const crew = movie?.credits?.crew?.map((item) => {
    if (
      item.job === 'Characters' ||
      item.job === 'Screenplay' ||
      item.job === 'Director'
    ) {
      return (
        <div key={item.id + item.job}>
          <h2>{item.name}</h2>
          <p>{item.job}</p>
        </div>
      );
    }
  });

  const genres = movie?.genres?.map((item) => {
    return <p key={item.id}>{item.name}</p>;
  });

  const certification = movie?.release_dates?.results?.filter((item) => {
    if (item.iso_3166_1 === 'BR') {
      return item;
    }
  });

  const age = certification?.map((item) => {
    return item.release_dates.map((item) => item.certification);
  });

  const runtimeInHours = (runtime) => {
    const h = Math.floor(runtime / 60);
    const min = runtime % 60;
    const hours = `00${h}`.slice(-2);
    const minutes = `00${min}`.slice(-2);
    return `${hours}h ${minutes}m`;
  };

  const releaseDate = (release_date) => {
    const date = String(release_date);
    const day = date.substring(8, 10);
    const month = date.substring(5, 7);
    const year = date.substring(0, 4);
    return `${day}/${month}/${year}`;
  };

  const avarage = (n) => {
    const number = Number(String(n).replace('.', ''));
    return Math.floor(number / 100);
  };

  return (
    <S.Container>
      <S.ContainerContent>
        <img
          src={imageUrl + movie.poster_path}
          alt={`Poster do filme ${movie.title}`}
        />
        <S.Content>
          <h1>{movie.title}</h1>
          <S.mainInfos>
            <p>{age} anos</p>
            <p>{releaseDate(movie.release_date)}</p>
            <S.Genres>{genres}</S.Genres>
            <p>{runtimeInHours(movie?.runtime)}</p>
          </S.mainInfos>
          <S.Avarage>
            <CircularProgress
              variant='determinate'
              value={avarage(movie?.vote_average)}
              size={'60px'}
              id='avarageCircle'
            />
            <p>{avarage(movie?.vote_average)}%</p>
          </S.Avarage>
          <S.Synopsis>
            <h2>Sinopse</h2>
            <p>{movie.overview}</p>
          </S.Synopsis>
          <S.Crew>{crew}</S.Crew>
        </S.Content>
      </S.ContainerContent>
    </S.Container>
  );
};

export default Infos;
