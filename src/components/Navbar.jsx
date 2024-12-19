import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="mx-20 my-10">

      <div className="navbar bg-base-100">

        <div className="navbar-start">
          <h1 className="text-4xl font-bold text-violet-950">Recipe Calories</h1>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-600">
            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
        <input type="text" placeholder="Search" className=" bg-orange-50 px-5 border-none py-2 rounded-3xl focus:outline-none" />
          <button className='bg-green-400 text-2xl text-violet-950 font-bold p-2 rounded-full'>
            <FaRegUserCircle></FaRegUserCircle>
            
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
