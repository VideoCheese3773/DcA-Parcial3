import { Recipe } from "./recipe";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  //screen: Screen;
  recipes: Recipe[]
};

export enum RecipeActions {
  "SAVE_RECIPE" = "SAVE_RECIPE",
  "GET_RECIPE" = "GET_RECIPE"
}

export interface SaveRecipeAction {
  action: RecipeActions.SAVE_RECIPE;
  payload: Recipe;
}

export interface GetRecipeAction {
  action: RecipeActions.GET_RECIPE;
  payload: Recipe[];
}

export type Actions = SaveRecipeAction | GetRecipeAction;
