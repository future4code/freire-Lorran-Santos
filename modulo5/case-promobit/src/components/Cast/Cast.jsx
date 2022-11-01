import { imageUrl } from '../../constants/baseUrl';
import * as S from './style';

const Cast = (props) => {
  const cast = props?.cast;

  const casts = cast?.cast.map((item) => {
    if (item.profile_path) {
      return (
        <S.Card key={item.id}>
          <img src={imageUrl + item?.profile_path} />
          <h2>{item.name}</h2>
          <p>{item.character}</p>
        </S.Card>
      );
    }
  });

  return (
    <>
      
      <S.Container>
        <S.CardsContainer>{casts}</S.CardsContainer>
      </S.Container>
    </>
  );
};

export default Cast;
