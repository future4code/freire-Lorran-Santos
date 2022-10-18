import { useContext } from 'react';
import { baseUrl } from '../../constants/baseUrl';
import { key } from '../../constants/key';
import { useRequestData } from '../../data/useRequestData';
import { GlobalContext } from '../../global/GlobalContext';
import * as S from './style';

const Header = () => {
  const { category, setCategory } = useContext(GlobalContext);

  const categories = useRequestData(
    [],
    `${baseUrl}/genre/movie/list?api_key=${key}&language=pt-BR`
  ).data.genres;
  // console.log(categories);
  return (
    <>
      <S.ContainerTitle>
        <S.SiteTitle>
          <h1>TMDB</h1>
          <span></span>
        </S.SiteTitle>
      </S.ContainerTitle>
      <S.ContainerContent>
        <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
        <p>Filtre por:</p>
        <S.Categories>
          {categories &&
            categories.map((item) => {
              return (
                <S.ButtonCategory
                  key={item.id}
                  onClick={() => {
                    const isInArray = category.includes(item.id);
                    console.log(isInArray);
                    console.log(category);
                    if (!isInArray) {
                      setCategory([...category, item.id]);
                      console.log(category);
                    }
                    if (isInArray) {
                      const index = category.indexOf(item.id);
                      console.log(index);
                      setCategory(category.splice(index, 1));
                    }
                  }}
                >
                  {item.name}
                </S.ButtonCategory>
              );
            })}
        </S.Categories>
      </S.ContainerContent>
    </>
  );
};

export default Header;
