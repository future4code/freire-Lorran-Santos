import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";

const mapDefault = (item: any) => {
  return {
    id: item.id,
    name: item.name,
    email: item.email,
    type: item.type,
  };
};

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const name = req.query.name;

    if (name === "") {
      throw new Error("Necessário passar o parâmetro");
    }

    const result: User[] = await connection("aula48_exercicio").where(
      "name",
      "like",
      `%${name}%`
    );

    const users: User[] = result.map((item) => {
      return {
        id: item.id,
        name: item.name,
        email: item.email,
        type: item.type,
      };
    });

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

export const getTypes = async (req: Request, res: Response): Promise<void> => {
  try {
    let sort: string = req.query.sort as string;
    if (sort !== "name" && sort !== "type") {
      sort = "email";
    }

    let order: string = req.query.order as string;
    if (order !== "asc" && order !== "desc") {
      order = "asc";
    }

    const result: User[] = await connection("aula48_exercicio").orderBy(
      sort,
      order
    );

    const userByTypes: User[] = result.map(mapDefault);
    res.status(200).send(userByTypes);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const orderByEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let order = req.query.order;
    let sort = req.query.sort;

    if (order !== "asc" && order !== "desc") {
      order = "asc";
    }

    if (sort !== "name" && sort !== "type") {
      sort = "name";
    }

    const result: User[] = await connection("aula48_exercicio").orderBy(
      sort,
      order
    );

    const userOrder: User[] = result.map(mapDefault);
    if (userOrder.length < 1) {
      throw new Error("Nenhum usuário encontrado");
    }

    res.status(200).send(userOrder);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const userLimit = async (req: Request, res: Response): Promise<void> => {
  try {
    let page = Number(req.query.page);
    const size = 5;

    if (page < 1 || isNaN(page)) {
      page = 1;
    }

    let offset = (page - 1) * size;

    const result = await connection("aula48_exercicio").limit(5).offset(offset);
    const getUserLimit: User[] = result.map(mapDefault);
    res.status(200).send(getUserLimit);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

export const allFunctions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let type: string = req.query.type as string;
    let sort: string = req.query.sort as string;
    let page = Number(req.query.page);

    if (
      (type !== "Operations" && type !== "Teacher" && type !== "CX") ||
      !type
    ) {
      type = "";
    }

    let order: string = req.query.order as string;
    const size: number = 5;

    if (page < 1 || isNaN(page)) {
      page = 1;
    }

    let offset: number = (page - 1) * size;

    if (sort !== "name" && sort !== "type") {
      sort = "name";
    }

    if (order !== "asc" && order !== "desc") {
      order = "asc";
    }

    const result: User[] = await connection("aula48_exercicio")
      .where("type", "like", `%${type}%`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset);

    const getResult: User[] = result.map(mapDefault);

    res.status(200).send(getResult);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
