import { Request, Response } from 'express';
import RecipeData from '../data/RecipeData';
import Recipe from '../model/Recipe';
import { Authenticator } from '../services/Authenticator';
import CurrentDate from '../services/CurrentDate';
import IdGenerator from '../services/IdGenerator';

class RecipeControll {
  public createRecipes = async (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const idGenerator = new IdGenerator();
      const id = idGenerator.generator();

      const currentDate = new CurrentDate();
      const date = currentDate.sendDate();

      const { title, description } = req.body;
      if (!title || !description) {
        errorCode = 422;
        throw new Error('Informe os campos "title" e "description" ');
      }

      const token: string = req.headers.authorization as string;
      if (!token) {
        errorCode = 422;
        throw new Error('Token não encontrado');
      }
      const authenticator = new Authenticator();
      const tokenData = authenticator.tokenData(token);
      if (!tokenData.role) {
        errorCode = 409;
        throw new Error('Informe um token válido');
      }
      const userId = tokenData.id;

      const newRecipe = new Recipe(id, title, description, date, userId);
      const recipeData = new RecipeData();
      await recipeData.createRecipe(newRecipe);

      res.status(201).send({ message: 'Receita criada com sucesso!' });
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };

  public getRecipes = async (req: Request, res: Response) => {
    let errorCode = 500;
    try {
      const id: string = req.params.id as string;

      const token: string = req.headers.authorization as string;
      if (!token) {
        errorCode = 422;
        throw new Error('Token não encontrado');
      }
      const authenticator = new Authenticator();
      const tokenData = authenticator.tokenData(token);
      if (!tokenData.role) {
        errorCode = 409;
        throw new Error('Informe um token válido');
      }

      const recipeData = new RecipeData();
      const recipe = await recipeData.getRecipe(id);

      res.status(201).send(recipe);
    } catch (error: any) {
      res
        .status(errorCode)
        .send(error.sqlMessage || { message: error.message });
    }
  };
}

export default RecipeControll;
