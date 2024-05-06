import { React, useState } from 'react';
import styles from '../styles/GetStarted.module.css'
import axios from 'axios';

function GetStarted() {
    const [ingredient, setIngredient] = useState('')
    const [ingredientsList, setIngredientsList] = useState([])

    const addIngredient = (e) => {
        e.preventDefault()
        const newIngredient = {
            id: Math.floor(Math.random()*1000),
            value: ingredient
        }

        const newList = [...ingredientsList, newIngredient]
        setIngredientsList(newList)
    }

    const deleteIngredient = (id) => {
         const newList = ingredientsList.filter( (ingredient) => {
            return ingredient.id != id
         })
         setIngredientsList(newList)
    }

    const sendIngredients = async () => {
        const response = await axios.get('http://localhost:3311/recipes/chicken')
        console.log(response.data)
    }

    console.log(ingredientsList)
    return (
        <div className={styles.container}>
            <div className={styles.shareIngredients}>
                <h1 className={styles.pleaseShare}> Please Share the Ingredients You'd Like to Use</h1>
                <p className={styles.typeIngredients}>Type each ingredient seperately that you want to want to use in your dish. <span className={styles.minimum}> Minimum of 3 ingredients required. </span></p>
                <form onSubmit={addIngredient} className={styles.form}>
                    <input placeholder='Enter Your Ingredients' onChange={(e)=>setIngredient(e.target.value)} className={styles.enterIngredients}></input>
                </form>
            </div>
            <div className={styles.yourIngredients}>
                <h1 className={styles.pleaseShare}> Your Ingredients</h1>
                <div className={styles.ingredientsList}>
                    <ul className={styles.list}>
                        {ingredientsList.map( (ingredient) => {
                            return (
                            <li key={ingredient.id} className={styles.ingredient}>
                                {ingredient.value}
                                <button onClick={() => deleteIngredient(ingredient.id)}>X</button>
                            </li>
                            )
                        } 
                        )}
                    </ul>
                </div>
                <button className={styles.searchButton} onClick={sendIngredients}>Search for Recipes</button>
            </div>
        </div>
    )
}

export default GetStarted