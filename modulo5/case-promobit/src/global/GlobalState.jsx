import React, { useState } from 'react';
import { GlobalContext } from './GlobalContext';

const GlobalState = (props) => {
  const [category, setCategory] = useState([]);

  return (
    <div>
      <GlobalContext.Provider value={{ category, setCategory }}>
        {props.children}
      </GlobalContext.Provider>
    </div>
  );
};
export default GlobalState;
