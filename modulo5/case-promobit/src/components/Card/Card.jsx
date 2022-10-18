import axios from 'axios';
import { useContext } from 'react';
import { baseUrl, imageUrl } from '../../constants/baseUrl';
import { key } from '../../constants/key';
import { useRequestData } from '../../data/useRequestData';
import { GlobalContext } from '../../global/GlobalContext';
import * as S from './style';

const Card = () => {
  const { category, setCategory } = useContext(GlobalContext);
  // const [movies, setMovies] = useState([]);
  // console.log(category);

  const movies = useRequestData(
    [],
    `${baseUrl}/movie/popular?api_key=${key}&language=pt-BR`
  ).data.results;

  // const getMovies = () => {
  //   useEffect(() => {
  //     axios
  //       .get(`${baseUrl}/discover/movie?api_key=${key}&language=pt-BR`)
  //       .then((res) => {
  //         setMovies(res.data.results);
  //         console.log(res.data);
  //       });
  //   }, []);
  // };
  // getMovies();
  // console.log(movies);

  const transformMonth = (month) => {
    switch (month) {
      case '01':
        return 'jan'.toUpperCase();
      case '02':
        return 'fev'.toUpperCase();
      case '03':
        return 'mar'.toUpperCase();
      case '04':
        return 'abr'.toUpperCase();
      case '05':
        return 'mai'.toUpperCase();
      case '06':
        return 'jun'.toUpperCase();
      case '07':
        return 'jul'.toUpperCase();
      case '08':
        return 'ago'.toUpperCase();
      case '09':
        return 'set'.toUpperCase();
      case '10':
        return 'out'.toUpperCase();
      case '11':
        return 'nov'.toUpperCase();
      case '12':
        return 'dez'.toUpperCase();
      default:
        break;
    }
  };

  return (
    <S.Container>
      {/* FUNCIONA */}
      {/* {movies &&
        movies.map((movie) => {
          const date = movie.release_date;
          const day = date.substring(8, 10);
          const month = date.substring(5, 7);
          const year = date.substring(0, 4);
          const formatDate = `${day} ${transformMonth(month)} ${year}`;
          const teste = category.some((item) => movie.genre_ids.includes(item));
          console.log(teste);

          return (
            <S.Card key={movie.id}>
              <img
                src={imageUrl + movie.poster_path}
                alt={`Poster do filme ${movie.title}`}
              />
              <h3>{movie.title}</h3>
              <p>{formatDate}</p>
            </S.Card>
          );
        })} */}
      {/* teste */}
      {movies &&
        movies.map((movie) => {
          const teste = category.some((item) => movie.genre_ids.includes(item));
          const date = movie.release_date;
          const day = date.substring(8, 10);
          const month = date.substring(5, 7);
          const year = date.substring(0, 4);
          const formatDate = `${day} ${transformMonth(month)} ${year}`;
          if (category.length < 1) {
            return (
              <S.Card key={movie.id}>
                <img
                  src={imageUrl + movie.poster_path}
                  alt={`Poster do filme ${movie.title}`}
                />
                <h3>{movie.title}</h3>
                <p>{formatDate}</p>
              </S.Card>
            );
          } else if (teste) {
            return (
              <S.Card key={movie.id}>
                <img
                  src={imageUrl + movie.poster_path}
                  alt={`Poster do filme ${movie.title}`}
                />
                <h3>{movie.title}</h3>
                <p>{formatDate}</p>
              </S.Card>
            );
          }
        })}
    </S.Container>
  );
};

export default Card;
