import React from 'react'
import style from './recipe.module.css'
const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div>
        {/*          <h1>{title}</h1>
            <ol>
                {ingredients.map(({text}, i) => (
                    <li key={i}>{text}</li>
                ))}
            </ol>
            <p>{calories}</p>
                */}
            <img className={style.image} src = {image} alt=""/>
        </div>
    )
}

export default Recipe;

