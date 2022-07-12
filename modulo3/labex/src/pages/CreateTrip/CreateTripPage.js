import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToBack } from '../../routes/coordinator';

const TripDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Formulário para o administrador criar uma nova viagem</h1>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <button>Criar</button>
    </div>
  );
};

export default TripDetailsPage;
