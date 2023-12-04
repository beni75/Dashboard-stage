import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" fixed top-0 left-0 h-full w-1/5 flex flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <p className="font-sans font-bold text-center text-xl">Dashboard</p>
      <Link
        to="/"
        className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Home
      </Link>
      <Link
        to="/api/user/add"
        className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Add user
      </Link>
    </div>
  );
};

export default Header;
