import { useParams } from 'react-router-dom';
import Infos from '../../components/Infos/Infos';
import Header from '../../components/Header/Header';
import { baseUrl, imageUrl } from '../../constants/baseUrl';
import { key } from '../../constants/key';
import { useRequestData } from '../../data/useRequestData';
import Cast from '../../components/Cast/Cast';
import * as S from './style';
import Trailer from '../../components/Trailer/Trailer';
import Card from '../../components/Card/Card';

const DetailsPage = () => {
  const { id } = useParams();
  const details = useRequestData(
    [],
    `${baseUrl}/movie/${id}?api_key=${key}&append_to_response=credits,videos,release_dates&language=pt-BR`
  ).data;

  const video = useRequestData(
    [],
    `${baseUrl}/movie/${id}/videos?api_key=${key}&append_to_response=credits,videos,release_dates&language=pt-BR`
  ).data;

  const recomendations = useRequestData(
    [],
    `${baseUrl}/movie/${id}/recommendations?api_key=${key}&language=pt-BR`
  ).data.results;
  console.log(recomendations);

  return (
    <S.Container>
      <Header />
      <Infos details={details} />
      <h2 id='officialCast'>Elenco Oficial</h2>
      <Cast cast={details.credits} />
      <Trailer video={video} />
      <S.ContainerCard>
        {recomendations &&
          recomendations.map((item) => {
            if (item.poster_path) {
              return <Card movie={item} />;
            }
          })}
      </S.ContainerCard>
      {/* <Card movie={recomendations} /> */}
    </S.Container>
  );
};

export default DetailsPage;
