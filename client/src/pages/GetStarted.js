import { React, useState } from 'react';
import styles from '../styles/GetStarted.module.css'
import axios from 'axios';

function GetStarted() {
    const [ingredient, setIngredient] = useState('')
    const [ingredientsList, setIngredientsList] = useState([])
    const [recipes, setRecipes] = useState()

    const addIngredient = (e) => {
        e.preventDefault()
        const newIngredient = {
            id: Math.floor(Math.random()*1000),
            value: ingredient
        }

        const newList = [...ingredientsList, newIngredient]
        setIngredientsList(newList)

        document.getElementById('ingredientInput').value = ''
    }

    const deleteIngredient = (id) => {
         const newList = ingredientsList.filter( (ingredient) => {
            return ingredient.id !== id
         })
         setIngredientsList(newList)
    }

    const sendIngredients = async () => {
        const query = ingredientsList.map( object => object.value)
        try {
            const response = await axios.get('http://localhost:3311/recipes/'+query)
            setRecipes(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const clearAll = () => {
        setIngredientsList([])
    }

    recipes && console.log(recipes)
    return (
        <div className={styles.container}>
            <div className={styles.shareIngredients}>
                <h1 className={styles.pleaseShare}> Please Share the Ingredients You'd Like to Use</h1>
                <p className={styles.typeIngredients}>Type each ingredient seperately that you want to want to use in your dish. <span className={styles.minimum}> Minimum of 3 ingredients required. </span></p>
                <form onSubmit={addIngredient} className={styles.form}>
                    <input id='ingredientInput' placeholder='Enter Your Ingredients' onChange={(e)=>setIngredient(e.target.value)} className={styles.enterIngredients}></input>
                </form>
            </div>
            <div className={styles.yourIngredients}>
                <h1 className={styles.pleaseShare}> Your Ingredients</h1>
                <div className={styles.ingredientsList}>
                    <ul className={styles.list}>
                        {ingredientsList.map( (ingredient) => {
                            return (
                            <li key={ingredient.id} className={styles.ingredient}>
                                <p className={styles.ingredientValue}>{ingredient.value}</p>
                                <button onClick={() => deleteIngredient(ingredient.id)} className={styles.ingredientButton}>X</button>
                            </li>
                            )
                        } 
                        )}
                    </ul>
                </div>
                <button className={styles.searchButton} onClick={sendIngredients}>Search for Recipes</button>
                <button className={styles.clearAll} onClick={clearAll}>Clear All</button>
            </div>
            <div className={styles.containerTwo}>
                <div className={styles.recipesContainer}>
                    <h1 className={styles.yourRecipesText}>Recipes</h1>
                    <div className={styles.recipesList}>
                        {recipes && (recipes.hits.map( (current) => {
                            return (
                                <a key={current.recipe.url} href={current.recipe.url} target='_blank'>
                                    <img className={styles.recipeImage} src={current.recipe.images.SMALL.url} />
                                </a>
                            )
                        } ))}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default GetStarted