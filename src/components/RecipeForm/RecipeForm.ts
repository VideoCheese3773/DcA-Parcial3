import { dispatch } from "../../store";
import { saveRecipe } from "../../store/actions";
import { Recipe } from "../../types/recipe";

const recipeInput: Recipe = {
    recipe: "",
    ingredients: "",
    instructions: "",
    image: "",
}

class RecipeForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const formContainer = this.ownerDocument.createElement('article')

        const lRecipe = this.ownerDocument.createElement('label');
        lRecipe.textContent = "Recipe Name"
        const recipe = this.ownerDocument.createElement('input');
        recipe.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            recipeInput.recipe = e.target.value
        })

        const lIngredients = this.ownerDocument.createElement('label');
        lIngredients.textContent = "Ingredients"
        const ingredients = this.ownerDocument.createElement('input');
        ingredients.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            recipeInput.ingredients = e.target.value
        })

        const lInstructions = this.ownerDocument.createElement('label');
        lInstructions.textContent = "Instructions"
        const instructions = this.ownerDocument.createElement('input');
        instructions.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            recipeInput.instructions = e.target.value
        })

        const lImage = this.ownerDocument.createElement('label');
        lImage.textContent = "Image (URL)"
        const image = this.ownerDocument.createElement('input');
        image.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            recipeInput.image = e.target.value
        })

        const btn = this.ownerDocument.createElement('button')
        btn.textContent = "Submit Recipe"
        btn.addEventListener("click", async () => {
            console.log(recipeInput)
            dispatch(await saveRecipe(recipeInput))
        })

        formContainer?.appendChild(lRecipe);
        formContainer?.appendChild(recipe);
        formContainer?.appendChild(lIngredients);
        formContainer?.appendChild(ingredients);
        formContainer?.appendChild(lInstructions);
        formContainer?.appendChild(instructions);
        formContainer?.appendChild(lImage);
        formContainer?.appendChild(image);
        formContainer?.appendChild(btn);
        this.shadowRoot?.appendChild(formContainer);
    }
}

customElements.define('recipe-form', RecipeForm)
export default RecipeForm