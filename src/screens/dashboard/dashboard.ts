import "../../components/export"
import { getRecipes } from "../../store/actions";

class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        await getRecipes()
        this.render()
    }

    render() {
        const recipeForm = this.ownerDocument.createElement('recipe-form');
        const recipeList = this.ownerDocument.createElement('recipe-list');
        this.shadowRoot?.appendChild(recipeForm);
        this.shadowRoot?.appendChild(recipeList);
    }
}

customElements.define('app-dashboard', Dashboard)