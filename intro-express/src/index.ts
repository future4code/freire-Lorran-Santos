import express from "express";
import { AddressInfo } from "net";
import { users } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server está rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao iniciar o server`);
  }
});

app.get("/", (req, res) => {
  res.send("Olá Express");
});

// Requisição referente aos usuários

app.get("/users", (req, res) => {
  if (req.headers.admin === "lorran") {
    const usersList = users
      .map((user) => {
        return user;
      })
      .flat(1);
    res.status(202);
    res.send(usersList);
  } else {
    res.send("Usuários não encontrados");
  }
});

// Requisição referente aos Posts

app.get("/users/posts", (req, res) => {
  if (req.headers.admin === "lorran") {
    const postsLists = users
      .map((user) => {
        return user.post;
      })
      .flat(1);
    res.status(200);
    res.send(postsLists);
  } else {
    res.send("Ocorreu um erro na requisição");
  }
});

// Seleção de post pelo ID

app.get("/users/posts/:userId", (req, res) => {
  if (req.headers.admin === "lorran") {
    users.map((user) => {
      if (Number(req.params.userId) === user.userId) {
        return res.send(user.post);
      } else {
        return res.send(`ID inválido`);
      }
    });
  } else {
    res.send("Ocorreu um erro na requisição");
  }
});
