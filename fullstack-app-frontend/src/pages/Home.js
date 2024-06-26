import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);


  const {id}=useParams()
  const loadUser = async () => {
    try {
      const response = await axios.get("http://localhost:8090/get");
      setUsers(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  const deleteUser=async(id)=>{
    await axios.delete(`http://localhost:8090/delete/${id}`)
        loadUser()
        alert("Record deleted successfully")
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead className="border-dark">
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                 <Link className="btn btn-primary mx-2"  to={`/viewuser/${user.id}`}>View</Link>
                 <Link className="btn btn-outline-primary mx-2" to={`/updateuser/${user.id}`}>Update</Link>
                 <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
