import React, { useState } from 'react';
import { GlobalContext } from './GlobalContext';

const GlobalState = (props) => {
  const [raffles, setRaffles] = useState([]);
  const [contest, setContest] = useState('MEGA-SENA');

  return (
    <div>
      <GlobalContext.Provider
        value={{ raffles, setRaffles, contest, setContest }}
      >
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};
export default GlobalState;
