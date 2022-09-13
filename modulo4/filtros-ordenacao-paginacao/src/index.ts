import {
  allFunctions,
  getAllUsers,
  getTypes,
  orderByEmail,
  userLimit,
} from "./endpoints/getAllUsers";
import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

export const app = express();

app.use(express.json());
app.use(cors());

app.get("/user", getAllUsers);
app.get("/user/type", getTypes);
app.get("/user/order", orderByEmail);
app.get("/user/limit", userLimit);
app.get("/user/allfunctions", allFunctions);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
