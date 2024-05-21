import { React, useState } from 'react'; // Import React and useState hook
import styles from '../styles/GetStarted.module.css'; // Import CSS module for styling
import axios from 'axios'; // Import axios for making HTTP requests

function GetStarted() {
    const [ingredient, setIngredient] = useState(''); // State for the current ingredient input
    const [ingredientsList, setIngredientsList] = useState([]); // State for the list of ingredients
    const [recipes, setRecipes] = useState(); // State for the recipes fetched from the server

    // Function to add an ingredient to the list
    const addIngredient = (e) => {
        e.preventDefault(); // Prevent form submission from reloading the page
        const newIngredient = {
            id: Math.floor(Math.random() * 1000), // Generate a random ID for the ingredient
            value: ingredient // Use the current ingredient input value
        };

        const newList = [...ingredientsList, newIngredient]; // Create a new list with the added ingredient
        setIngredientsList(newList); // Update the state with the new list

        document.getElementById('ingredientInput').value = ''; // Clear the input field
    };

    // Function to delete an ingredient from the list
    const deleteIngredient = (id) => {
         const newList = ingredientsList.filter((ingredient) => {
            return ingredient.id !== id; // Filter out the ingredient with the matching ID
         });
         setIngredientsList(newList); // Update the state with the new list
    };

    // Function to send the list of ingredients to the server and fetch recipes
    const sendIngredients = async () => {
        const query = ingredientsList.map(object => object.value); // Extract the values of the ingredients
        try {
            const response = await axios.get('http://localhost:3311/recipes/' + query); // Make a GET request to the server
            setRecipes(response.data); // Update the state with the fetched recipes
        } catch (error) {
            console.log(error); // Log any errors
        }
    };

    // Function to clear all ingredients from the list
    const clearAll = () => {
        setIngredientsList([]); // Set the ingredients list to an empty array
    };

    // Log the recipes to the console if they exist
    recipes && console.log(recipes);

    return (
        <div className={styles.container}>
            <div className={styles.shareIngredients}>
                <h1 className={styles.pleaseShare}>Please Share the Ingredients You'd Like to Use</h1>
                <p className={styles.typeIngredients}>
                    Type each ingredient separately that you want to use in your dish.
                    <span className={styles.minimum}> Minimum of 3 ingredients required. </span>
                </p>
                <form onSubmit={addIngredient} className={styles.form}>
                    <input id='ingredientInput' placeholder='Enter Your Ingredients' onChange={(e) => setIngredient(e.target.value)} className={styles.enterIngredients}></input>
                </form>
            </div>
            <div className={styles.yourIngredients}>
                <h1 className={styles.pleaseShare}>Your Ingredients</h1>
                <div className={styles.ingredientsList}>
                    <ul className={styles.list}>
                        {ingredientsList.map((ingredient) => {
                            return (
                                <li key={ingredient.id} className={styles.ingredient}>
                                    <p className={styles.ingredientValue}>{ingredient.value}</p>
                                    <button onClick={() => deleteIngredient(ingredient.id)} className={styles.ingredientButton}>X</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <button className={styles.searchButton} onClick={sendIngredients}>Search for Recipes</button>
                <button className={styles.clearAll} onClick={clearAll}>Clear All</button>
            </div>
            <div className={styles.containerTwo}>
                <div className={styles.recipesContainer}>
                    <h1 className={styles.yourRecipesText}>Recipes</h1>
                    <div className={styles.recipesList}>
                        {recipes && (recipes.hits.map((current) => {
                            return (
                                <a key={current.recipe.url} href={current.recipe.url} target='_blank'>
                                    <img className={styles.recipeImage} src={current.recipe.images.SMALL.url} />
                                </a>
                            );
                        }))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted; // Export the GetStarted component as the default export
