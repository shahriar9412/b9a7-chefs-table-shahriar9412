import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({handleAddRecipe}) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('recipes.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])
  return (
    <div className="grid grid-cols-2 gap-3 mr-3">
      {
        recipes.map(recipe => <Recipe
          key={recipe.recipe_id}
          recipe={recipe}
          handleAddRecipe={handleAddRecipe}
          >
            
        </Recipe>)
      }
    </div>
  );
};
Recipes.propTypes = {
  handleAddRecipe: PropTypes.func
}

export default Recipes;
