import React from 'react';
import './Recipe.scss';
import Ingredient from './Ingredient/Ingredient';

class Recipe extends React.Component {
    render() {
        const {
            title,
            link,
            ingredientList,
            image
        } = this.props;

        const ingredientArray = ingredientList.split(',');

        return (
            <div className='recipeWrapper'>
                <h1>{title}</h1>
                <img className='image' src={image} />

                <ul className='ingredientList'>
                    {
                        ingredientArray.map((ingredient, index) => (
                            <Ingredient
                                key={index}
                                ingredient={ingredient}
                            />
                        ))
                    }
                </ul>

                <a href={link} target='_blank'>Recipe link</a>
            </div>
        )
    }
}

export default Recipe;