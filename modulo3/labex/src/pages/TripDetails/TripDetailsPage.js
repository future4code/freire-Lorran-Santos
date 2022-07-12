import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToBack } from '../../routes/coordinator';

const TripDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>
        Para o administrador ver o detalhe de uma viagem específica, bem como os
        candidatos que aplicaram para ela
      </h1>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
    </div>
  );
};

export default TripDetailsPage;
