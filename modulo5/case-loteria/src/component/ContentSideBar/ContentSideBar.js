import { Content, Select } from './style';
import LogoSena from '../../images/Logo_Sena.png';
import axios from 'axios';
import { BASE_URL } from '../../constants/baseUrl';
import { useContext, useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { GlobalContext } from '../../global/GlobalContext';

const ContentSideBar = () => {
  const { raffles, setRaffles, contest, setContest } =
    useContext(GlobalContext);

  const getLottery = () => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setRaffles(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(getLottery, []);

  const getContest = () => {
    axios.get(`${BASE_URL}`);
  };

  return (
    <Content>
      {console.log(raffles.map((item) => item.nome))}
      <Select
        value={contest}
        onChange={(event) => setContest(event.target.value)}
      >
        {raffles &&
          raffles.map((item) => {
            return (
              <option
                value={item.nome.toUpperCase()}
                key={item.id}
              >
                {item.nome.toUpperCase()}
              </option>
            );
          })}
      </Select>

      <h1>
        <img
          src={LogoSena}
          alt=''
        />
        {contest}
      </h1>
      <h2>teste</h2>
    </Content>
  );
};

export default ContentSideBar;
