import { Content, Select } from './style';
import LogoSena from '../../images/Logo_Sena.png';
import axios from 'axios';
import { BASE_URL } from '../../constants/baseUrl';
import { useContext, useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { GlobalContext } from '../../global/GlobalContext';
import { Sorteio } from './Sorteio';
const ContentSideBar = () => {
  const { raffles, setRaffles, contest, setContest } =
    useContext(GlobalContext);
  const [numeroSorteio, setNumeroSorteio] = useState({ concursoId: 0 });
  const [numeros, setNumeros] = useState(0);
  const [data, setData] = useState('10');

  const colors = {
    'MEGA-SENA': { cor: '#6BEFA3', index: 0 },
    QUINA: { cor: '#8666EF', index: 1 },
    LOTOFÁCIL: { cor: '#DD7AC6', index: 2 },
    LOTOMANIA: { cor: '#FFAB64', index: 3 },
    TIMEMANIA: { cor: '#5AAD7D', index: 4 },
    'DIA DE SORTE': { cor: '#BFAF83', index: 5 },
  };

  const getLottery = () => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setRaffles(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(getLottery, []);

  const getLoteriasConcurso = () => {
    axios
      .get(
        'https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos',
      )
      .then((resposta) => {
        setNumeroSorteio(resposta.data[colors[contest].index]);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(getLoteriasConcurso, [contest]);

  const getNumerosSorteados = () => {
    axios
      .get(
        `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${numeroSorteio.concursoId}`,
      )
      .then((resposta) => {
        setNumeros(resposta.data.numeros);
        setData(modificarArray(resposta.data.data));
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  useEffect(getNumerosSorteados, [contest, numeroSorteio]);

  const modificarArray = (data) => {
    const resultado = data.split('-');
    const mes = resultado[1];
    const ano = resultado[0];
    const day = resultado[2].toString().substring(0, 2);
    const date = `${day}/${mes}/${ano}`;
    return date;
  };

  const getContest = () => {
    axios.get(`${BASE_URL}`);
  };

  return (
    <>
      <Content>
        <Select
          value={contest}
          onChange={(event) => setContest(event.target.value)}
        >
          {raffles &&
            raffles.map((item) => {
              return (
                <option value={item.nome.toUpperCase()} key={item.id}>
                  {item.nome.toUpperCase()}
                </option>
              );
            })}
        </Select>

        <h1>
          <img src={LogoSena} alt="" />
          {contest}
        </h1>
        <h2>
          {numeroSorteio.concursoId} - {data}
        </h2>
      </Content>
      <Sorteio numbers={numeros} />
    </>
  );
};

export default ContentSideBar;
