import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl, imageUrl } from '../../constants/baseUrl';
import { key } from '../../constants/key';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  const getMovies = () => {
    useEffect(() => {
      axios.get(`${baseUrl}/discover/movie?api_key=${key}`).then((res) => {
        setMovies(res.data.results);
        setImages(res.data.results.poster_path);
        console.log(res.data);
      });
    }, []);
  };
  getMovies();

  const getPosters = (movieId) => {
    useEffect(() => {
      axios
        .get(`${baseUrl}/movie/${movieId}/images?api_key=${key}`)
        .then((res) => {
          setImages(res.data.posters.file_path);
          console.log(res.data);
        });
    }, []);
  };

  // image.tmdb.org/t/p/w500/
  getPosters(760161);
  return (
    <div>
      <h1>Home Page</h1>
      <p>Lista de filmes com os posters</p>
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.id}>
              <img
                src={imageUrl + movie.poster_path}
                alt={'n bombou'}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
