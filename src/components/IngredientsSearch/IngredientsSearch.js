import React from 'react';
import { ingredientList } from '../../mocks/mockIngredientList';
import './IngredientsSearch.scss';

class IngredientsSearch extends React.Component {

    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({ search: event.target.value })
    }
    handleSearch = (event) => {
        event.preventDefault()
        this.props.onSearch(this.state.search)
    }

    render() {
        const ingredientOptions = ingredientList.map((ingredient) => {
            return (<option key={ingredient} value={ingredient}>{ingredient}</option>)
        })

        const searchValue = this.state.search;

        return (
            <form className='searchForm'>
                <input onChange={this.handleChange} value={searchValue} className='searchBar' list='ingredients' />

                <datalist id='ingredients'>
                    {ingredientOptions}
                </datalist>
                <button onClick={this.handleSearch} className='searchButton'>Search</button>
            </form>
        )
    }
}

export default IngredientsSearch;