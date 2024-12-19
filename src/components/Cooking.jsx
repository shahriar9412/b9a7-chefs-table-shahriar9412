import PropTypes from 'prop-types';

const Cooking = ({cooking}) => {
    const { recipe_name, preparing_time, calories } = cooking;
    return (
        <div>
            <div className='flex justify-between px-10 py-3 bg-orange-50'>
            <h1>{recipe_name}</h1>
            <h1>{preparing_time}</h1>
            <h1>{calories}</h1>
            </div>
        </div>
    );
};
Cooking.propTypes = {
    cooking: PropTypes.object
}

export default Cooking;