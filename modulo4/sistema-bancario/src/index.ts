import express from "express";
import cors from "cors";
import { Account, clients, User } from "./data";
import { userInfo } from "os";

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

    const balanceDeposit: string = clients
      .map((client) => {
        if (client.user.name === name && client.user.cpf === cpf) {
          return client.extract.map((item) => (item.balance += Number(value)));
        }
      })
      .join();

    res
      .status(201)
      .send(`Depósito efetuado com sucesso! Saldo atual: ${balanceDeposit}`);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Efetuar pagamento

app.post("/labebank/pay", (req, res) => {
  let errorCode = 500;
  try {
    // Query

    const name: string = req.query.name as string;
    const cpf: string = req.query.cpf as string;

    // Body

    const paymentValue: number = req.body.value as number;
    const paymentDescription: string = req.body.description as string;
    let paymentDate: string = req.body.date as string;

    // Formatação da data atual

    const currentDay: number = new Date().getDate();
    const currentMonth: number = new Date().getMonth();
    const currentYear: number = new Date().getFullYear();
    const currentDate: string = `${
      currentDay >= 10 ? currentDay : `0${currentDay}`
    }/${currentMonth >= 10 ? currentMonth : `0${currentMonth}`}/${currentYear}`;

    // Verificação da data

    if (paymentDate) {
      const arrPaymentDate = paymentDate.split("/");
      const paymentDay: number = Number(arrPaymentDate[0]);
      const paymentMonth: number = Number(arrPaymentDate[1]);
      const paymentYear: number = Number(arrPaymentDate[2]);
      if (
        paymentDate &&
        paymentDay < currentDay &&
        paymentMonth <= currentMonth &&
        paymentYear <= currentYear
      ) {
        errorCode = 422;
        throw new Error("Favor digitar uma data válida");
      }
    }

    // Saldo atual e alteração do saldo

    const checkCpf: string = clients
      .map((item) => {
        if (cpf === item.user.cpf) {
          return item.extract.map((item) => item.balance as number);
        }
      })
      .join();

    const checkBalance = clients.map((item) => {
      if (paymentDate === currentDate || !paymentDate) {
        let newBalance = item.extract.map(
          (item) => (item.balance -= paymentValue)
        );
        return newBalance;
      } else {
        let futureBalance = item.extract.map(
          (item) => item.balance - paymentValue
        );
        return futureBalance;
      }
    });

    let currentBalance: number = Number(checkCpf);

    if (!name || !cpf) {
      errorCode = 404;
      throw new Error("Usuário não encontrado");
    } else if (!paymentValue) {
      errorCode = 422;
      throw new Error("Favor digitar o valor para efetuar o pagamento");
    } else if (!paymentDescription) {
      errorCode = 422;
      throw new Error("Favor digitar a descrição da conta");
    } else if (!checkCpf) {
      errorCode = 404;
      throw new Error("Favor verificar o seu cpf");
    } else if (currentBalance < paymentValue) {
      errorCode = 422;
      throw new Error("Saldo insuficiente");
    } else if (paymentDate === "") {
      errorCode = 422;
      throw new Error("Favor digitar uma data válida");
    }

    if (
      paymentDate > currentDate &&
      paymentValue &&
      paymentDescription &&
      paymentDate > currentDate
    ) {
      res
        .status(201)
        .send(
          `Pagamento agendado com sucesso! \n No dia ${paymentDate} o seu saldo será de: ${checkBalance}`
        );
    } else if (paymentValue && paymentDescription) {
      res
        .status(201)
        .send(
          `Pagamendo realizado com sucesso! \n O seu novo saldo é de de: ${checkBalance}`
        );
    }
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Transferência Interna

app.post("/labebank/transfer", (req, res) => {
  let errorCode = 500;
  try {
    // Qurey

    const name: string = req.query.name as string;
    const cpf: string = req.query.cpf as string;

    // Body

    const transferName: string = req.body.transferName as string;
    const value: number = req.body.value as number;

    const checkUser = clients.find((user) => transferName === user.user.name);

    const checkCpf = clients.find(
      (item) => item.user.cpf === cpf && item.user.name === name
    );

    const getBalanceUser = clients
      .map((user) => {
        if (user.user.cpf === cpf) {
          return user.extract.map((item) => item.balance);
        }
      })
      .join();
    const balanceUser: number = Number(
      getBalanceUser.substring(0, getBalanceUser.length - 1)
    );
    // console.log(balanceUser);

    if (!checkUser) {
      res.status(404);
      throw new Error("Usuário destinatário não encontrado");
    } else if (!checkCpf) {
      errorCode = 404;
      throw new Error("Usuário não encontrado");
    } else if (!name || !cpf || !transferName || !value) {
      res.status(422);
      throw new Error("Favor preencher todos os campos");
    } else if (value > balanceUser) {
      errorCode = 422;
      throw new Error("Saldo insuficiente para completar a transferência");
    }

    clients
      .map((item) => {
        if (cpf === item.user.cpf && name === item.user.cpf) {
          return item.extract.map((item) => (item.balance -= value));
        }
      })
      .join();
    clients
      .map((item) => {
        if (transferName === item.user.name) {
          return item.extract.map((item) => (item.balance += value));
        }
      })
      .join();

    res
      .status(201)
      .send(`Transferência no valor de ${value} realizada com sucesso!`);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});
