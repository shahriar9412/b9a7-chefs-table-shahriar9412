import Cooking from "./Cooking";
import PropTypes from 'prop-types';

const Cookings = ({ cookings }) => {
    return (
        <div>
            <h1 className="text-xl font-bold text-center my-5">Currently cooking: {cookings.length} </h1>
            <div className='px-[100px]'><hr /></div>
            <div className='flex justify-between px-10 py-3'>
                <h1>Name</h1>
                <h1>Time</h1>
                <h1>Calories</h1>
            </div>
            {

                cookings.map(cooking => <Cooking key={cooking.recipe_id} cooking={cooking}></Cooking>)

            }
        </div>
    );
};
Cookings.propTypes = {
    cookings: PropTypes.array
}

export default Cookings;