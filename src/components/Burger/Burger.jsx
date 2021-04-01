import React from 'react'
import './Burger.css'

import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger = (props) => {
    let transfommedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((arr,el)=> {
        return arr.concat(el)
    }, []);



    if (transfommedIngredients.length===0) {
        transfommedIngredients = <p>Please start adding some ingredients</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transfommedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger