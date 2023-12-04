import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import CreateUserPage from "./Pages/CreateUserPage";
import DetailsUserPage from "./Pages/DetailsUserPage";
import EditUserPage from "./Pages/EditUserPage";
import GetUsersPage from "./Pages/GetUsersPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GetUsersPage />} />
          <Route path="/api/user/add" element={<CreateUserPage />} />
          <Route path="/api/user/edit/:id" element={<EditUserPage />} />
          <Route path="api/user/details/:id" element={<DetailsUserPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
