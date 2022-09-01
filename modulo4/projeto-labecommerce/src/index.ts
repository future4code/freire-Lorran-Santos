import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { createUser } from './endpoints/createUser';
import { getAllUsers } from './endpoints/getAllUsers';
import { addProduct } from './endpoints/addProduct';
import { getAllProducts } from './endpoints/getAllProducts';
import { purchases } from './endpoints/purchases';
import { getPurchase } from './endpoints/getPurchases';

const app: Express = express();

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

app.post('/users', createUser);
app.get('/users', getAllUsers);
app.post('/products', addProduct);
app.get('/products', getAllProducts);
app.post('/purchases', purchases);
app.get('/users/:user_id/purchases', getPurchase);
