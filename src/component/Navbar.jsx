import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center items-center gap-4 px-4 py-2 rounded-sm font-bold w-[90%] mx-18 mt-2 bg-gray-800 text-white">
        <Link className="text-white hover:underline" to="/">
            Home
        </Link>
     
      <Link className="text-white hover:underline" to="/map">
        Map
      </Link>
      <Link className="text-white hover:underline" to="/help">
        Help
      </Link>
    </nav>
    </div>
  );
};

export default Navbar;
