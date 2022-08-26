import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

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

// CRIAR USUÁRIO
app.post("/user", async (req, res) => {
  let errorCode = 500;
  try {
    const id: number = Date.now();
    const name = req.body.name;
    const nickname = req.body.nickname;
    const email = req.body.email;

    if (!name || !nickname || !email) {
      errorCode = 422;
      throw new Error("Favor preencher todos os campos");
    }

    await connection("TodoListUser").insert({ id, name, nickname, email });
    res.status(201).send("Criado com sucesso");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || { message: error.message });
  }
});

// PEGAR USUÁRIO PELO ID
app.get("/user/:id", async (req, res) => {
  let errorCode = 500;
  try {
    const id = req.params.id;
    if (!id) {
      errorCode = 422;
      throw new Error("Informe o ID de usuáio");
    }
    const result = await connection("TodoListUser")
      .select("id", "nickname")
      .where({ id });
    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || { message: error.message });
  }
});

// EDITAR USUÁRIO
app.put("/user/edit/:id", async (req, res) => {
  let errorCode = 500;
  try {
    const id = req.params.id;
    const { name, nickname, email } = req.body;
    if (name === "" || nickname === "" || email === "") {
      errorCode = 422;
      throw new Error("Impossível alterar seus dados para dados vazios");
    }

    await connection("TodoListUser")
      .update({ name, nickname, email })
      .where({ id });

    res.status(200).send("Dados alterados com sucesso!");
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || { message: error.message });
  }
});

const alterDate = (date: string) => {
  let newDate = date.split("/");
  return `${newDate[2]}-${newDate[1]}-${newDate[0]}}`;
};

// CRIAR TAREFA
app.post("/task", async (req, res) => {
  let errorCode = 500;
  try {
    const id = Date.now();
    const title = req.body.title;
    const description = req.body.description;
    let limitDate = req.body.limit_date;
    const creatorUserId = req.body.creator_user_id;
    if (!title || !description || !limitDate || !creatorUserId) {
      errorCode = 422;
      throw new Error("Favor preencher todos os campos!");
    }

    limitDate = alterDate(limitDate);

    const result = await connection("TodoListTask").insert({
      id,
      title,
      description,
      limit_date: limitDate,
      creator_user_id: creatorUserId,
    });

    res.status(201).send(`A tarefa foi criada com sucesso ${result}`);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || { message: error.message });
  }
});

// PEGAR TAREFA PELO ID
app.get("/task/:id", async (req, res) => {
  let errorCode = 500;
  try {
    const id = req.params.id;
    if (!id) {
      errorCode = 422;
      throw new Error("Informe o id da tarefa");
    }

    const result = await connection("TodoListTask").where({ id });
    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || { message: error.message });
  }
});

// PEGAR TODOS OS USUARIOS
app.get("/users/all", async, (req, res) => {
  try {
    const result = await connection("TodoListUser");
    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || { message: error.message });
  }
});

export default app;
