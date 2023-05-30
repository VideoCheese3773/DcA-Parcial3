import { Screens } from "../types/navigation";
import { Recipe } from "../types/recipe"
import { Actions, RecipeActions } from "../types/store"
import firebase from "../utils/firebase"

export const navigate = (screen: Screens) => {
  return {
    type: "NAVIGATE",
    payload: screen,
  };
};

export const setUserCredentials = (user: string) => {
  return {
    type: "SETUSER",
    payload: user,
  };
};

export const saveRecipe = async (recipe: Recipe): Promise<Actions> => {
    await firebase.saveRecipeInDB(recipe);
    return{
        action: RecipeActions.SAVE_RECIPE,
        payload: recipe,
    }
}

export const getRecipes = async (): Promise<Actions> => {
    const recipes = await firebase.getRecipesFromDB();
    return{
        action: RecipeActions.GET_RECIPE,
        payload: recipes,
    }
}