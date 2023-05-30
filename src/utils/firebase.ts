import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Recipe } from "../types/recipe";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveRecipeInDB = async (recipe: Recipe) => {
    try {
        await addDoc(collection(db, "Recipes"), recipe);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

const getRecipesFromDB = async (): Promise<Recipe[]> => {
    console.log("Getting Recipes from DB...")
    const resp: Recipe[] = [];
    const querySnapshot = await getDocs(collection(db, "Recipes"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        resp.push({
            ...doc.data(),
        } as Recipe)
    });
    return resp;
};

export default { saveRecipeInDB, getRecipesFromDB }
