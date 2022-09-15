import Recipe from '../model/Recipe';
import BaseDataBase from './BaseDataBase';

class RecipeData extends BaseDataBase {
  public createRecipe = async (recipe: Recipe): Promise<void> => {
    try {
      await this.getConnection().from('cookenu_recipes').insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        date: recipe.getDate(),
        user_id: recipe.getUserId(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || { message: error.message });
    }
  };

  public getRecipe = async (id: string): Promise<Recipe> => {
    try {
      const [recipe] = await this.getConnection()
        .select('id', 'title', 'description', 'date')
        .from('cookenu_recipes')
        .where({ id });
      return recipe && Recipe.toUserModel(recipe);
    } catch (error: any) {
      throw new Error(error.sqlMessage || { message: error.message });
    }
  };
}

export default RecipeData;
