import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goToBack, goToListTripsPage } from '../../routes/coordinator';
import { Background, Container, Form, Buttons } from './styles';

const ApplicationFormPage = () => {
  const [trips, setTrips] = useState([]);
  const [form, setForm] = useState({
    trip: '',
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: '',
  });
  const navigate = useNavigate();

  const onChangeForm = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
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

  const sendForm = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: '' });
  };

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
          <form onSubmit={sendForm}>
            {/* <select>
              <option>Escolha Uma viagem</option>
              {optionsList}
            </select> */}
            <input
              type={'text'}
              placeholder="Nome"
              name="name"
              value={form.name}
              onChange={onChangeForm}
            />
            <input
              type={'text'}
              placeholder="Idade"
              name="age"
              value={form.age}
              onChange={onChangeForm}
            />
            <input
              type={'text'}
              placeholder="Texto de candidatura"
              name="applicationText"
              value={form.applicationText}
              onChange={onChangeForm}
            />
            <input
              type={'text'}
              placeholder="Profissão"
              name="profession"
              value={form.profession}
              onChange={onChangeForm}
            />
            {/* <select></select> */}
            <button>Inscrever-se</button>
          </form>
          <Buttons>
            <button onClick={() => goToListTripsPage(navigate)}>Voltar</button>
          </Buttons>
        </Form>
      </Container>
    </Background>
  );
};

export default ApplicationFormPage;
