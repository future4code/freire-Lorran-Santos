import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import UserController from './endpoints/UserController';
import CurrentDate from './services/CurrentDate';
import RecipeControll from './endpoints/RecipeControll';

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

app.post('/user/signup', userController.signup);
app.post('/user/login', userController.login);
app.get('/user/profile', userController.profile);
app.get('/user/feed', userController.feed);
app.get('/user/:id', userController.selectProfile);

const recipeControll = new RecipeControll();

app.post('/recipe', recipeControll.createRecipes);
app.get('/recipe/:id', recipeControll.getRecipes);

// DESAFIOS

app.post('/user/follow/', userController.follow);
app.post('/user/unfollow', userController.unfollow);

// const test = new CurrentDate();
// const teste = test.getDate();
// const teste2 = test.sendDate();
// console.log(teste);
// console.log(teste2);
