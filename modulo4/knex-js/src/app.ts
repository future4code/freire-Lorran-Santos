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

// Exercício 1

// a) a resposta do raw se da em um array com 2 arrays dentro, um contendo os objetos da requisição feita, outro com objetos de configuração

// b)
app.get("/actor/:name", async (req, res) => {
  let errorCode = 500;
  try {
    const name: string = req.params.name as string;
    const result = await connection("Actor").where({ name });
    res.status(200).send(result);
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || { message: error.message });
  }
});

// c)
// const getGoupByGender = async (gender: string) => {
//   const result = await connection("Actor").count().where({ gender });
//   return result;
// };

// getGoupByGender("female")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Exercício 2
// a)
// const updateSalary = async (id: string, salary: number) => {
//   const result = await connection("Actor").update({ salary }).where({ id });
//   return result;
// };

// updateSalary("005", 9000)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// b)
// const deleteActor = async (id: string) => {
//   const result = await connection("Actor").delete().where({ id });
//   return result;
// };

// deleteActor("009")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// c)
// const avgSalary = async (gender: string) => {
//   const result = await connection("Actor")
//     .avg("salary as average")
//     .where({ gender });
//   return result;
// };

// avgSalary("female")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Exercício 3

// a)

// const getActorById = async (id: string) => {
//   const result = await connection("Actor").where({ id: id });
//   return result;
// };

// app.get("/actor", async (req, res) => {
//   let errorCode = 500;
//   try {
//     const id: string = req.query.id as string;
//     const actor = await getActorById(id);
//     // const result = await connection("Actor").where({ id: id });
//     res.status(200).send(actor);
//   } catch (error: any) {
//     res.status(errorCode).send(error.sqlMessage || { message: error.message });
//   }
// });

// b)
// app.get("/actor", async (req, res) => {
//   let errorCode = 500;
//   try {
//     const gender = req.query.gender;
//     const countActorsGender = await connection("Actor")
//       .count()
//       .where({ gender });
//     res.status(200).send({
//       quantity: countActorsGender,
//     });
//   } catch (error: any) {
//     res.status(errorCode).send(error.sqlMessage || { message: error.message });
//   }
// });

// Exercício 4
// app.post("/actor", async (req, res) => {
//   let errorCode = 500;
//   try {
//     const id = req.body.id;
//     const name = req.body.name;
//     const salary = req.body.salary;
//     const birth_date = new Date(req.body.birth_date);
//     const gender = req.body.gender;
//     const result = await connection("Actor").insert({
//       id,
//       name,
//       salary,
//       birth_date,
//       gender,
//     });
//     res.status(201).send("Ator criado com sucesso!");
//   } catch (error: any) {
//     res.status(errorCode).send(error.sqlMessage || { message: error.message });
//   }
// });

// a)
// app.put("/actor", async (req, res) => {
//   try {
//     const id = req.body.id;
//     const salary = req.body.salary;

//     await connection("Actor").update({ salary }).where({ id });
//     res.status(201).send("Atualizado com sucesso");
//   } catch (error: any) {
//     res.send(error.sqlMessage);
//   }
// });

// b)
app.delete("/actor/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await connection("Actor").delete().where({ id });
    res.send("Ator deletado com sucesso!");
  } catch (error: any) {
    res.send(error.sqlMessage || { message: error.message });
  }
});
