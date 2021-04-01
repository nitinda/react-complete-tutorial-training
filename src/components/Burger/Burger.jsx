import React from 'react'
import './Burger.css'

import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
    const transfommedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    });
    console.log({transfommedIngredients})

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transfommedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger