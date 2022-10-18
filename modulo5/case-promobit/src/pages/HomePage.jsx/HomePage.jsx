import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl, imageUrl } from '../../constants/baseUrl';
import { key } from '../../constants/key';
import Card from '../../components/Card/Card';
import * as S from './style';
import Header from '../../components/Header/Header';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  return (
    <div>
      <Header />
      <S.Container>
        <Card />
      </S.Container>
    </div>
  );
};

export default HomePage;
