import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goToBack, goToLoginPage } from '../../routes/coordinator';
import { Background, Container, Buttons } from './styles';

const TripDetailsPage = () => {
  const [trip, setTrip] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      goToLoginPage(navigate);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/lorran/trip/PweS3FgGQ9NmRxiTmuvX',
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data.trip);
      })
      .catch((err) => {
        console.log('Deu erro', err.res);
      });
  }, []);

  return (
    <Background>
      <Container>
        <h1>
          Para o administrador ver o detalhe de uma viagem específica, bem como
          os candidatos que aplicaram para ela
        </h1>
        <Buttons>
          <button onClick={() => goToBack(navigate)}>Voltar</button>
        </Buttons>
      </Container>
    </Background>
  );
};

export default TripDetailsPage;
