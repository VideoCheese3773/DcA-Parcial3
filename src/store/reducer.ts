import { RecipeActions } from "../types/store";
import { Actions, AppState } from "../types/store";

export const reducer = (actions: Actions, state: AppState) => {
  const { action, payload } = actions;
  switch (action) {
    case RecipeActions.SAVE_RECIPE:
      state.recipes = [...state.recipes, payload]
      console.log("reducer action/payload", { action, payload })
      return state;

    case RecipeActions.GET_RECIPE:
      state.recipes = payload
      console.log("reducer action/payload", { action, payload })
      return state;

    default:
      return state;
  }
}