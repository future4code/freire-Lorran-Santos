import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from './constants/baseUrl';
import { key } from './constants/key';
import Router from './routers/Router';

const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
