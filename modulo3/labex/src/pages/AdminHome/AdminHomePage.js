import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  goToBack,
  goToCreateTrip,
  goToTripDetails,
} from '../../routes/coordinator';
import { AiOutlineDelete } from 'react-icons/ai';
import {
  Background,
  Container,
  Buttons,
  ContainerAdminTrips,
  CardTrip,
} from './styles';

const AdminHomePage = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  const getTrips = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/lorran/trips'
      )
      .then((res) => {
        setTrips(res.data.trips);
        console.log(res.data.trips);
      });
  };

  useEffect(() => {
    getTrips();
  }, []);

  const renderTrips = trips.map((item, index) => {
    return (
      <CardTrip key={index}>
        <button onClick={() => goToTripDetails(navigate)}>
          {item.name}
          <AiOutlineDelete size={'20px'} />
        </button>
      </CardTrip>
    );
  });

  return (
    <Background>
      <Container>
        <h1>Painel Administrativo</h1>
        <Buttons>
          <button onClick={() => goToBack(navigate)}>Voltar</button>
          <button onClick={() => goToCreateTrip(navigate)}>Criar Viagem</button>
          <button>Logout</button>
        </Buttons>
        <ContainerAdminTrips>{renderTrips}</ContainerAdminTrips>
      </Container>
    </Background>
  );
};

export default AdminHomePage;
