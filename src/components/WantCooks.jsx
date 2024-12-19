import PropTypes from 'prop-types';
import WantCook from './WantCook';

const WantCooks = ({ wantCooks, handleCooking }) => {
    return (
        <div>
            <h1 className="text-xl font-bold text-center mt-5">Want to cook: {wantCooks.length} </h1>
            <div className='px-[100px] my-3'><hr /></div>
            <div className='flex justify-between pl-10 pr-44 mb-3'>
                <h1>Name</h1>
                <h1>Time</h1>
                <h1>Calories</h1>
            </div>
            {

                wantCooks.map(wantCook => <WantCook handleCooking={handleCooking} key={wantCook.recipe_id} wantCook={wantCook}></WantCook>)

            }
        </div>
    );
};
WantCooks.propTypes = {
    wantCooks: PropTypes.array,
    handleCooking: PropTypes.func
}

export default WantCooks;