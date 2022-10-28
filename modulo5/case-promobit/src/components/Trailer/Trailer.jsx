import * as S from './style';
const Trailer = (props) => {
  const video = props.video.results;
  const key = video && video.map((item) => item.key);
  console.log(key);

  return (
    <S.Container>
      <h2>Trailer</h2>
      <iframe
        width='560'
        height='315'
        src={`https://www.youtube.com/embed/${key}`}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </S.Container>
  );
};

export default Trailer;
