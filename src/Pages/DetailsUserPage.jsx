import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const DetailsUserPage = () => {
  const [userDetails, setUserDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`);
        setUserDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserDetails();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="border-2 flex flex-col justify-center content-center items-center w-4/5 fixed top-0 right-0 h-full">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none absolute top-2 right-2"
          onClick={handleGoBack}
        >
          Back
        </button>
        <div className="relative flex flex-col text-black shadow rounded-xl bg-clip-border p-4">
          <h1 className="font-sans font-bold text-center text-xl mb-2">
            Details user
          </h1>
          <div className="relative flex flex-col text-black shadow-none rounded-xl bg-clip-border p-4">
            <div className="flex items-center">
              <span className="font-sans font-bold">Pseudo : </span>
              <p> {userDetails.pseudo}</p>
            </div>
            <div className="flex items-center">
              <span className="font-sans font-bold">Name : </span>
              <p> {userDetails.name}</p>
            </div>
            <div className="flex items-center">
              <span className="font-sans font-bold">Email : </span>
              <p> {userDetails.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsUserPage;
