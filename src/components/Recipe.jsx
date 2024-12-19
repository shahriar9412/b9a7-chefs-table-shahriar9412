import PropTypes from 'prop-types';
import { TfiTimer } from "react-icons/tfi";
import { SlFire } from "react-icons/sl";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe, handleAddRecipe }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div className='border-2 border-gray-200 p-3 rounded-lg'>
            <img className='w-[275px] h-44 rounded-lg' src={recipe_image} alt="" />
            <h1 className='text-xl font-bold mt-3'>{recipe_name}</h1>
            <h1>{short_description}</h1>
            <div>
                <h1 className='text-xl font-bold'>Ingredients: 6</h1>
                
                    <li>{ingredients[0]},</li>
                    <li>{ingredients[1]},</li>
                    <li>{ingredients[2]}</li>
            
            </div>
            <div className='flex justify-between mt-3'>
                <h1><TfiTimer></TfiTimer>{preparing_time}</h1>
                <h1><SlFire></SlFire>{calories}</h1>
            </div>
            <div>
            <button
            onClick={()=>handleAddRecipe(recipe)}
                className='bg-green-400 px-3 py-2 mt-3 text-violet-950 font-bold rounded-3xl'>Want to Cook</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleAddRecipe: PropTypes.func
}

export default Recipe;