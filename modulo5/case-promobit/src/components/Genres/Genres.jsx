import { useContext } from 'react';
import { baseUrl } from '../../constants/baseUrl.jsx';
import { key } from '../../constants/key.jsx';
import { useRequestData } from '../../data/useRequestData.jsx';
import { GlobalContext } from '../../global/GlobalContext.jsx';
import * as S from './style.jsx';

const Genres = () => {
  const { category, setCategory } = useContext(GlobalContext);

  const categories = useRequestData(
    [],
    `${baseUrl}/genre/movie/list?api_key=${key}&language=pt-BR`
  ).data.genres;

  const filterCatergory = (id) => {
    if (!category.includes(id)) {
      setCategory([...category, id]);
    } else if (category.includes(id)) {
      const newCategory = category.filter((item) => item !== id);
      setCategory(newCategory);
    }
  };

  return (
    <>
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
                    filterCatergory(item.id);
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

export default Genres;
