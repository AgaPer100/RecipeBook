import React from 'react';
import './App.css';
import IngredientsSearch from './components/IngredientsSearch/IngredientsSearch';
import RecipeList from './components/RecipeList/RecipeList';
import Title from './components/Title/Title';
import mockData from './mocks/mockData';

class App extends React.Component {
  state = {
    fullRecipeList: mockData,
    filteredRecipeList: mockData
  }

  onSearch = query => {
    const filteredRecipeList = this.state.fullRecipeList.filter((recipe) => {
      const recipeIngredients = recipe.ingredients.split(', ');

      return recipeIngredients.includes(query);
    })

    this.setState({ filteredRecipeList })
  }

  render() {
    const filteredRecipeList = this.state.filteredRecipeList;
    return (
      <div className='App'>
        <Title />
        <IngredientsSearch onSearch={this.onSearch} />
        <RecipeList recipes={filteredRecipeList} />

      </div>
    );
  }
}
export default App;
