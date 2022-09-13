import express from "express";
import axios from "axios";
import { baseUrl } from "./constants";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

type User = {
  id: string;
  name: string;
  email: string;
};

const getAllSubscribers = async (): Promise<User[]> => {
  const response = await axios.get(`${baseUrl}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

const createNews = async (
  title: string,
  content: string,
  date: number
): Promise<void> => {
  await axios.put(`${baseUrl}/news`, {
    title: title,
    content: content,
    date: date,
  });
};

const sendNotifications = async (users: User[]): Promise<void> => {
  try {
    const promises = users.map((user) => {
      axios.post(`${baseUrl}/notifications`, {
        subscriberId: user.id,
        message: "Notificação de teste",
      });
    });
    await Promise.all(promises).then(() => {
      console.log(`Notificação enviada com sucesso`);
    });
  } catch (error: any) {
    console.log("error");
  }
};

const main = async () => {
  try {
    const subscribers = await getAllSubscribers();
    const notifications = await sendNotifications(subscribers);
    return notifications;
  } catch (error: any) {
    const response = error.response.data || error.message;
    console.log(response);
  }
};

main();
