import { Link } from "react-router-dom";


const Navbar = () => {
 
  return (
    <div className="text-black">
      <nav className="flex justify-center mt-3 shadow-md  items-center h-16 px-6 py-2 font-bold w-[90%] mx-auto text-black ">
        <div className="flex gap-6">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/map">Map</Link>
          <Link className="hover:underline" to="/help">Help</Link>
        </div>
       
      </nav>
    </div>
  );
};

export default Navbar;
