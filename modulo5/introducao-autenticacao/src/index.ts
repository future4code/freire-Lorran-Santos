import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { GenerateId } from './services/GenerateId';
import UserController from './endpoints/UserController';

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const user = new UserController();

app.post('/user/signup', user.createUser);
app.post('/user/login', user.login);
app.get('/user/profile', user.profile);
