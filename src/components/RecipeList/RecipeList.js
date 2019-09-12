import React from 'react';
import './RecipeList.scss';
import Recipe from '../Recipe/Recipe';

class RecipeList extends React.Component {
    render() {
        const recipes = this.props.recipes;

        return (
            <div className='wrapper'>
                {
                    recipes.map((recipe, index) => (
                        <Recipe
                            key={index}
                            title={recipe.title}
                            link={recipe.href}
                            ingredientList={recipe.ingredients}
                            image={recipe.thumbnail}
                        />
                    ))
                }
            </div>
        )
    }
}

export default RecipeList;