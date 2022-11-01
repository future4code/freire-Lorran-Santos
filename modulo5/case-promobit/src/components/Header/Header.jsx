import { useNavigate } from 'react-router-dom';
import { goToHome } from '../../routers/coordinator';
import * as S from './style';

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.SiteTitle onClick={() => goToHome(navigate)}>
          <h1>TMDB</h1>
          <span></span>
        </S.SiteTitle>
      </S.ContainerTitle>
    </S.Container>
  );
};

export default Header;
