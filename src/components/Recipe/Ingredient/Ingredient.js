import React from 'react';
import './Ingredient.scss';

class Ingredient extends React.Component {
    render() {
        const {
            ingredient,
        } = this.props;

        return (
            <li className='ingredient'>
                {ingredient}
            </li>
        )
    }
}

export default Ingredient;