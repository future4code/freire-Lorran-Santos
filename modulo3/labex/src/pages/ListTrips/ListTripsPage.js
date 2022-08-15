import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  goToHomePage,
  goToApplicationFormPage,
} from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { Background, Container, Buttons, ContainerTrip } from './styles';

const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  const getTrips = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/lorran/trips'
      )
      .then((res) => {
        setTrips(res.data.trips);
      });
  };

  useEffect(() => {
    getTrips();
  }, []);

  const renderTrips = trips.map((item, index) => {
    return (
      <ContainerTrip key={index}>
        <p>
          <span>Nome:</span> {item.name}
        </p>
        <p>
          <span>Descrição:</span> {item.description}
        </p>
      </ContainerTrip>
    );
  });

  return (
    <Background>
      <Container>
        <Buttons>
          <button onClick={() => goToApplicationFormPage(navigate)}>
            Inscrever-se
          </button>
          <button onClick={() => goToHomePage(navigate)}>Início</button>
        </Buttons>

        <h1>Viagens</h1>
        {renderTrips}
      </Container>
    </Background>
  );
};

export default ListTripsPage;
