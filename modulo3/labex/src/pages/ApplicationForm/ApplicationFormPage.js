import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goToBack } from '../../routes/coordinator';
import { Background, Container, Form, Buttons } from './styles';

const ApplicationFormPage = () => {
  const [trips, setTrips] = useState([]);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const onChangeValue = (ev) => {
    setValue(ev.target.value);
    console.log(value);
  };

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

  const optionsList = trips.map((item, index) => {
    return (
      <option key={index} value={item.name}>
        {item.name}
      </option>
    );
  });

  return (
    <Background>
      <Container>
        <h1>Inscreva-se para uma viagem inesquecível:</h1>
        <Form>
          <form>
            <select>
              <option value={''}>Escolha Uma viagem</option>
              {optionsList}
            </select>
            <input
              type={'text'}
              placeholder="Nome"
              value={value}
              onChange={onChangeValue}
            />
            <input
              type={'text'}
              placeholder="Idade"
              value={value}
              onChange={onChangeValue}
            />
            <input
              type={'text'}
              placeholder="Texto de candidatura"
              onChange={onChangeValue}
            />
            <input
              type={'text'}
              placeholder="Profissão"
              onChange={onChangeValue}
            />
            <select></select>
          </form>
          <Buttons>
            <button onClick={() => goToBack(navigate)}>Voltar</button>
            <button>Inscrever-se</button>
          </Buttons>
        </Form>
      </Container>
    </Background>
  );
};

export default ApplicationFormPage;
