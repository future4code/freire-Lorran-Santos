import React, { useContext } from 'react';
import { GlobalContext } from '../../global/GlobalContext';
import ContentSideBar from '../ContentSideBar/ContentSideBar';
import { Container } from './style';

const SideBar = () => {
  const { contest } = useContext(GlobalContext);
  console.log(contest);

  const test = () => {
    switch (contest) {
      case 'MEGA-SENA':
        return '#6BEFA3';
      case 'QUINA':
        return '#8666EF';
      case 'LOTOFÁCIL':
        return '#DD7AC6';
      case 'LOTOMANIA':
        return '#FFAB64';
      case 'LOTOMANIA':
        return '#FFAB64';
      case 'TIMEMANIA':
        return '#5AAD7D';
      case 'DIA DE SORTE':
        return '#BFAF83';
      default:
        break;
    }
  };
  console.log(test());

  return (
    <Container>
      <svg
        className='test'
        viewBox='0 0 613 1080'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M613 0C613 0 361.26 501.011 613 1080H0V0H613Z'
          // fill='#6BEFA3'
          fill={test()}
        />
      </svg>
      <ContentSideBar />
    </Container>
  );
};

export default SideBar;
