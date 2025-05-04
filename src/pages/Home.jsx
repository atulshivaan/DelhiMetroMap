import MetroCard from "../utils/MetroCard";

const Home = () => {
  const Metro = [
    {
      id: 1,
      img: "image3.jpg",
      name: "Red Line",
      description:"The Red Line is the first line of the Delhi Metro and connects Rithala to Shaheed Sthal.",
      
    },
    {
      id: 2,
      img: "image2.jpg",
      name: "Blue Line",
      description:"The Blue Line is the longest line of the Delhi Metro and connects Dwarka Sector 21 to Noida.",
      
    },
    {
      id: 3,
      img: "image1.jpg",
      name: "Yellow Line",
      description:"The Yellow Line connects Samaypur Badli to HUDA City Centre and is one of the busiest lines.",
     
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-4 px-6 py-4 rounded-sm font-bold w-[90%] mx-auto mt-12 text-black">
      <div className="text-center mb-6">
        <h1 className="text-2xl">
          Welcome to the <span className="text-red-500 font-bold">Delhi Metro App</span>
        </h1>
      </div>

      <div className="flex flex-row justify-between gap-4 max-w-xl w-full">
        <MetroCard Metro={Metro} />
      </div>
    </div>
  );
};

export default Home;
