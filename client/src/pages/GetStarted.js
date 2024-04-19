import React from 'react';
import styles from '../styles/GetStarted.module.css'

function GetStarted() {
    return (
        <div className={styles.container}>
            <div className={styles.shareIngredients}>
                <h1 className={styles.pleaseShare}> Please Share the Ingredients You'd Like to Use</h1>
                <p className={styles.typeIngredients}>Type each ingredient seperately that you want to want to use in your dish. <span className={styles.minimum}> Minimum of 3 ingredients required. </span></p>
                <form>
                    <input placeholder='Enter Your Ingredients'></input>
                </form>
            </div>
            <div className={styles.yourIngredients}>
                <h1 className={styles.pleaseShare}> Your Ingredients</h1>
            </div>
        </div>
    )
}

export default GetStarted