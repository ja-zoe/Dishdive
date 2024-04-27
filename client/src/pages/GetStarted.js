import { React, useState } from 'react';
import styles from '../styles/GetStarted.module.css'

function GetStarted() {
    const [ingredient, setIngredient] = useState('')
    const [ingredientsList, setIngredientsList] = useState([])

    const addIngredient = (e) => {
        e.preventDefault()
        const newList = [...ingredientsList, ingredient]
        setIngredientsList(newList)
    }

    return (
        <div className={styles.container}>
            <div className={styles.shareIngredients}>
                <h1 className={styles.pleaseShare}> Please Share the Ingredients You'd Like to Use</h1>
                <p className={styles.typeIngredients}>Type each ingredient seperately that you want to want to use in your dish. <span className={styles.minimum}> Minimum of 3 ingredients required. </span></p>
                <form onSubmit={addIngredient}>
                    <input placeholder='Enter Your Ingredients' onChange={(e)=>setIngredient(e.target.value)}></input>
                </form>
            </div>
            <div className={styles.yourIngredients}>
                <h1 className={styles.pleaseShare}> Your Ingredients</h1>
                <div className={styles.ingredientsList}>
                    <p> 
                    
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetStarted