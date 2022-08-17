import express from "express";
import { AddressInfo } from "net";
import { productsList } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server rodando em http://${address.port}`);
  } else {
    console.log(`Falha ao iniciar o server`);
  }
});

app.get("/products", (req, res) => {
  const token = req.headers.authorization === "lorran";
  const newProductsList = productsList;
  const name = req.query.name;

  try {
    if (!token) {
      res.status(401);
      throw new Error("Erro na autenticação");
    }
    if (name === undefined) {
      const allProducts = newProductsList.map((item) => item);
      return res.send(allProducts);
    } else {
      const test = newProductsList.filter((item) => {
        if (
          item.name.toLocaleLowerCase() === String(name).toLocaleLowerCase()
        ) {
          return item;
        }
      });
      return res.send(test);
    }
  } catch (error: any) {
    {
      error.message ? res.send(error.message) : res.status(500);
    }
  }
});

// Adicionar Produto Novo

app.post("/products/add", (req, res) => {
  const productName = req.body.name;
  const productPrice = req.body.price;
  const token = req.headers.authorization === "lorran";
  const newProducts = productsList;

  try {
    if (!token) {
      res.status(401);
      throw new Error("Erro na autenticação");
    } else if (!productName || !productPrice) {
      res.status(404);
      throw new Error(`Informe os campos "name" e "price"`);
    } else if (typeof productName !== "string") {
      res.status(404);
      throw new Error("Nome do produto inválido");
    } else if (typeof productPrice !== "number") {
      res.status(404);
      throw new Error("Preço do produto inválido");
    } else if (productPrice <= 0) {
      res.status(404);
      throw new Error("Favor digitar um valor maior que zero");
    } else {
      const addProduct = [
        ...newProducts,
        {
          id: String(Date.now()),
          name: productName,
          price: productPrice,
        },
      ];
      res.status(201).send([addProduct]);
    }
  } catch (error: any) {
    res.send(error.message);
  }
});

// Atualizar Preço ou Nome do Produto

app.put("/products/:id", (req, res) => {
  const token = req.headers.authorization === "lorran";
  const newProductsList = productsList;
  const newName = req.body.name;
  const newPrice = req.body.price;
  const getIdProducts = newProductsList.map((item) => item.id);
  const id = req.params.id;

  try {
    if (!token) {
      res.status(401);
      throw new Error("Token não encontrado");
    } else if (!newName && !newPrice) {
      res.status(404);
      throw new Error("Valores não encontrados");
    } else if (newPrice <= 0 || newName === "") {
      res.status(404);
      throw new Error("Digite o valor ou nome válido");
    } else if (typeof newName !== "string" && typeof newPrice !== "number") {
      res.status(422);
      throw new Error("Favor digitar um valor válido");
    } else if (!id || id === ":id" || !getIdProducts.includes(id)) {
      res.status(404);
      throw new Error("Produto não encontrado");
    }

    const editing = newProductsList.map((item) => {
      if (item.id === id) {
        newName ? (item.name = newName) : item.name;
        Number(newPrice) ? (item.price = newPrice) : item.price;
      }
      return item;
    });
    res.status(200).send(editing);
  } catch (error: any) {
    {
      error.message ? res.send(error.message) : res.status(500);
    }
  }
});

app.delete("/products/del/:id", (req, res) => {
  const token = req.headers.authorization === "lorran";
  const newProductsList = productsList;
  const id = req.params.id;
  const getIdProducts = newProductsList.map((item) => item.id);
  try {
    if (!token || !id || id === ":id") {
      throw new Error("Token não encontrado");
    } else if (!id || id === ":id" || !getIdProducts.includes(id)) {
      res.status(404);
      throw new Error("Produto não encontrado");
    }

    const deletingProduct = newProductsList.map((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    return res.send(deletingProduct);
  } catch (error: any) {
    {
      error.message ? res.send(error.message) : res.status(500);
    }
  }
});
