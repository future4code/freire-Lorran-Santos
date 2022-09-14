import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import UserController from './endpoints/UserController';

export const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

const userController = new UserController();

app.post('/user/signup', userController.createUser);
app.post('/user/login', userController.login);
app.get('/user/profile', userController.profile);
