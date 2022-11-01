import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './constants/baseUrl';
import { key } from './constants/key';
import Router from './routers/Router';
import GlobalState from './global/GlobalState';

const App = () => {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
};

export default App;
