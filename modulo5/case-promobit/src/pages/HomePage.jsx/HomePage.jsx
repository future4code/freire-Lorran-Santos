import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl, imageUrl } from '../../constants/baseUrl';
import { key } from '../../constants/key';
import Card from '../../components/Card/Card';
import * as S from './style';
import Header from '../../components/Header/Header';
import { GlobalContext } from '../../global/GlobalContext';
import { useRequestData } from '../../data/useRequestData';
import Genres from '../../components/Genres/Genres';

const HomePage = () => {
  // const [movies, setMovies] = useState([]);
  // const [images, setImages] = useState([]);

  const { category, setCategory } = useContext(GlobalContext);

  const movies = useRequestData(
    [],
    `${baseUrl}/movie/popular?api_key=${key}&language=pt-BR`
  ).data.results;

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
    <div>
      <Header />
      <Genres />
      <S.Container>
        <S.CardContainer>
          {movies &&
            movies.map((movie) => {
              const filter = category.some((item) =>
                movie.genre_ids.includes(item)
              );
              const date = movie.release_date;
              const day = date.substring(8, 10);
              const month = date.substring(5, 7);
              const year = date.substring(0, 4);
              const formatDate = `${day} ${transformMonth(month)} ${year}`;
              if (category.length < 1) {
                return (
                  <Card
                    key={movie.id}
                    movie={movie}
                    date={formatDate}
                  />
                );
              } else if (filter) {
                return (
                  <Card
                    key={movie.id}
                    movie={movie}
                    date={formatDate}
                  />
                );
              }
            })}
        </S.CardContainer>
        {/* <Card /> */}
      </S.Container>
    </div>
  );
};

export default HomePage;
