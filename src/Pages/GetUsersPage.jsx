import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const GetUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
        setisLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      // Si la suppression a réussi, met à jour la liste des utilisateurs
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.log(error.message);
    }
  };

  return isLoading ? (
    <>
      <Header />
      <div className=" flex flex-col w-4/5 fixed top-0 right-0 h-full p-4">
        <h1 className="font-sans font-bold text-left text-xl mb-2">Home </h1>
        <p className="font-sans font-semibold">No users found</p>
      </div>
    </>
  ) : (
    <>
      <Header />
      <div className="flex flex-col w-4/5 fixed top-0 right-0 h-full p-4">
        <h1 className="font-sans font-bold text-left text-xl mb-2">Home </h1>
        {users.map((user) => (
          <div
            className="bg-gray-100 rounded-lg w-full flex justify-between items-center p-4 mb-4
          "
            key={user.id}
          >
            <span>{user.pseudo}</span>
            <div className="flex gap-4">
              <Link
                className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                to={`api/user/details/${user.id}`}
              >
                More informations
              </Link>
              <Link
                className="select-none rounded-lg bg-amber-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                to={`/api/user/edit/${user.id}`}
              >
                Modifier
              </Link>
              <button
                className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetUsersPage;
