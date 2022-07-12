import React from 'react';
import {useNavigate} from 'react-router-dom'
import { goToBack, goToCreateTrip } from '../../routes/coordinator';

const AdminHomePage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>
        Para o administrador ver a lista de viagens e poder deletá-las ou
        acessar o detalhe de cada uma delas
      </h1>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
      <button>Logout</button>
    </div>
  );
};

export default AdminHomePage;
