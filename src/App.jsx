import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import WantCooks from "./components/WantCooks";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookings from "./components/Cookings";

function App() {

  const [wantCooks, setWantCooks] = useState([]);
  const [cookings, setCookings] = useState([]);

  const handleAddRecipe = recipe => {
    if (!wantCooks.includes(recipe)) {
      setWantCooks(prevElements => [...prevElements, recipe]);
    }
    else
      toast("Already Exist!");
    // console.log('recipe adding soon');
    // console.log(recipe);
  }

  const handleCooking = cooking => {
    const currentWantCooks = wantCooks.filter(e => e.recipe_id !== cooking.recipe_id);
    setWantCooks(currentWantCooks);
    setCookings(prev => [...prev, cooking]);

    // console.log('clicked');
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <h1 className="text-4xl text-center mt-16 font-bold text-violet-950">Our Recipes</h1>
      <h1 className="text-center my-8 mx-[400px] text-gray-600">Delight in the fiery kick of our Spicy Thai Basil Chicken or indulge in the creamy comfort of our Mushroom Risotto. Flavor-packed dishes await your table!</h1>

      <div className="flex mb-5 mx-20">
        <Recipes handleAddRecipe={handleAddRecipe}></Recipes>

        <div className="w-[70%] border-2 border-gray-200 rounded-lg">

          <WantCooks handleCooking={handleCooking} wantCooks={wantCooks}></WantCooks>
          <Cookings cookings={cookings}></Cookings>

        </div>

      </div>
    </>
  )
}

export default App
