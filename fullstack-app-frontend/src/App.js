import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/icons/person-circle.svg"
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div class="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/adduser" element={<AddUser/>}></Route>
          <Route exact path="/updateuser/:id" element={<EditUser/>}></Route>
          <Route exact path="/viewuser/:id" element={<ViewUser/>}></Route>

        </Routes>
        
        {/* <AddUser /> */}
      </Router>
    </div>
  );
}

export default App;
