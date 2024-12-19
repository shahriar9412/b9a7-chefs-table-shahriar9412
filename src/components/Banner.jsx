
const Banner = () => {
  return (
    <div className="mx-20 py-36 text-center bg-[url(/banner.jpg)] bg-no-repeat rounded-2xl">
      <div className="px-[200px] text-white">
        <h1 className="font-extrabold text-5xl">Discover an exceptional cooking
          class tailored for you!</h1>
        <h1 className="py-5">Savor the essence of culinary delight at our restaurant, where each dish is crafted with passion and precision, promising an unforgettable dining experience.</h1>
      </div>
      <div>
        <button

          className='bg-green-400 px-5 py-3 text-violet-950 font-bold rounded-3xl mr-5'>Explore Now</button>
        <button

          className='border-2 border-white text-white px-5 py-3 font-bold rounded-3xl'>Our Feedback</button>

      </div>

    </div>
  );
};

export default Banner;