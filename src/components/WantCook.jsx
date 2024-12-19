import PropTypes from 'prop-types';
const WantCook = ({ wantCook, handleCooking }) => {
    const { recipe_name, preparing_time, calories } = wantCook;
    return (
        <div>
            <div className='flex justify-between px-10 py-3 bg-orange-50'>
            <h1>{recipe_name}</h1>
            <h1>{preparing_time}</h1>
            <h1>{calories}</h1>
            <button
            onClick={()=>handleCooking(wantCook)}
                className='bg-green-400 px-3 py-2 mt-3 text-violet-950 font-bold rounded-3xl'>Preparing</button>
            </div>
        </div>
    );
};
WantCook.propTypes = {
    wantCook: PropTypes.object,
    handleCooking: PropTypes.func
}

export default WantCook;