import express from "express";
import cors from "cors";
import { Account, clients, User } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

// Criar conta

app.post("/labebank/createAccount", (req, res) => {
  let errorCode: number = 500;
  try {
    const { name, cpf, birth } = req.body;

    if (!name || !cpf || !birth) {
      errorCode = 422;
      throw new Error("Favor verificar os campos solicitados");
    } else if (birth.length < 10 || birth.length > 10) {
      errorCode = 422;
      throw new Error("Favor verifique a data de nascimento");
    }

    const id = Date.now();
    const newAccount: User = { id, name, cpf, birth };

    // Validação da idade
    const currentYear: number = new Date().getFullYear();
    const birthYear: number = Number(birth.substr(6, 10));
    const ofAge: number = currentYear - birthYear;

    if (ofAge < 18) {
      errorCode = 401;
      throw new Error("Para abrir uma conta você precisa ter mais de 18 anos");
    }

    // Verificação de cpfs já existente
    const seeCpfs = clients.map((item) => item.user.cpf).join();
    const cpfNewClient = newAccount.cpf;
    if (cpfNewClient === seeCpfs) {
      errorCode = 422;
      throw new Error("CPF já cadastrado");
    }

    // Adiciona o novo Cliente no vetor clients
    clients?.push({
      user: newAccount,
      extract: [],
    });

    res.status(201).send(clients);
    // res.status(201).send("Conta criada com sucesso!");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Pegar Saldo

app.get("/labebank/balance", (req, res) => {
  let errorCode = 500;
  try {
    const name: string | undefined = req.query.name as string;
    const cpf: string | undefined = req.query.cpf as string;

    if (!name || !cpf) {
      errorCode = 422;
      throw new Error("Favor informar os seu dados para consulta");
    }

    //verifica se o nome ou cpf existe
    const checkName = clients.find((item) => item.user.name.includes(name));
    const checkCpf = clients.find((item) => item.user.cpf.includes(cpf));

    if (!checkCpf || cpf.length !== 14) {
      errorCode = 404;
      throw new Error("CPF não encontrado");
    } else if (!checkName) {
      errorCode = 404;
      throw new Error("Nome de usuário não encontrado");
    }

    const getBalanceClient = clients.map((client) => {
      if (client.user.name === name && client.user.cpf === cpf) {
        return client.extract.map((item) => item.balance);
      }
    });

    res.status(200).send(`O saldo da sua conta é: ${getBalanceClient}`);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Fazer depósito

app.post("/labebank/deposit", (req, res) => {
  let errorCode = 500;
  try {
    const name: string | undefined = req.query.name as string;
    const cpf: string | undefined = req.query.cpf as string;
    const value: string | undefined = req.query.value as string;

    if (!name || !cpf || !value) {
      errorCode = 422;
      throw new Error("Favor informar os seu dados para depósito");
    }

    // Verificar se nome ou cpf existem
    const checkName = clients.find((item) => item.user.name.includes(name));
    const checkCpf = clients.find((item) => item.user.cpf.includes(cpf));

    if (!checkCpf || cpf.length !== 14) {
      errorCode = 404;
      throw new Error("CPF não encontrado");
    } else if (!checkName) {
      errorCode = 404;
      throw new Error("Nome de usuário não encontrado");
    }


    const balanceDeposit = clients.map((client) => {
      if (client.user.name === name && client.user.cpf === cpf) {
        return client.extract.map((item) => item.balance + Number(value));
      }
    });

    res
      .status(201)
      .send(`Depósito efetuado com sucesso! Saldo atual: ${balanceDeposit}`);
    console.log(balanceDeposit);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Efetuar pagamento

app.post("/labebank/pay", (req, res) => {
  let errorCode = 500;
});
