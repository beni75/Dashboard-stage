import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [details, setDetails] = useState([]);
  const [pseudo, setPseudo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`);
        console.log(response.data);
        setDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserData();
  }, [id]);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const updatedUserData = {};

      // Vérifier chaque champ et mettre à jour les données utilisateur uniquement si le champ est rempli
      if (pseudo.trim() !== "") {
        updatedUserData.pseudo = pseudo;
      }
      if (name.trim() !== "") {
        updatedUserData.name = name;
      }
      if (email.trim() !== "") {
        updatedUserData.email = email;
      }

      if (Object.keys(updatedUserData).length > 0) {
        await axios.put(`/api/users/${id}`, updatedUserData);
      }

      navigate(`/`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center content-center items-center w-4/5 fixed right-0 h-full">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none absolute top-2 right-2"
          onClick={handleGoBack}
        >
          Back
        </button>
        <div className="relative flex flex-col text-black shadow rounded-xl bg-clip-border p-4">
          <h1 className="font-sans font-bold text-center text-xl mb-2">
            Update details of user
          </h1>
          <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
            <div className="flex flex-col  mb-1">
              <h6 className="block font-sans text-left text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Pseudo
              </h6>
              <div className="relative h-11 w-full min-w-[200px] mb-8">
                <input
                  value={pseudo}
                  placeholder={details.pseudo}
                  onChange={(event) => {
                    setPseudo(event.target.value);
                  }}
                  type="text"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
              </div>
              <h6 className="block font-sans text-left text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Name
              </h6>
              <div className="relative h-11 w-full min-w-[200px] mb-8">
                <input
                  value={name}
                  placeholder={details.name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
              </div>
              <h6 className="block  font-sans text-left text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Email
              </h6>
              <div className="relative h-11 w-full min-w-[200px] mb-8">
                <input
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placeholder={details.email}
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
              </div>
            </div>

            <button
              className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              onClick={handleUpdateUser}
            >
              Update informations
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserPage;
