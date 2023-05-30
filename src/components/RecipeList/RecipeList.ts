import { addObserver, appState, dispatch } from "../../store";

class RecipeList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ""

        appState.recipes.forEach((e) => {
            const formContainer = this.ownerDocument.createElement('article')

            const lRecipe = this.ownerDocument.createElement('h3');
            lRecipe.textContent = e.recipe

            const lIngredients = this.ownerDocument.createElement('h3');
            lIngredients.textContent = e.ingredients

            const lInstructions = this.ownerDocument.createElement('h3');
            lInstructions.textContent = e.instructions

            const lImage = this.ownerDocument.createElement('img');
            lImage.src = e.image

            formContainer?.appendChild(lRecipe);
            formContainer?.appendChild(lIngredients);
            formContainer?.appendChild(lInstructions);
            formContainer?.appendChild(lImage);
            this.shadowRoot?.appendChild(formContainer);
        })

    }
}

customElements.define('recipe-list', RecipeList)
export default RecipeList