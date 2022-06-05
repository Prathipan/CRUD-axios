import { React, useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

function Home() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://61efbd81732d93001778e565.mockapi.io/userdata"
    );
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`https://61efbd81732d93001778e565.mockapi.io/userdata/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <h1>User Data</h1>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                <Link className="btn btn-primary mx-2" to={`/users/${user.id}`}>View</Link>
                <Link className="btn btn-outline-primary mx-2" to={`/users/edit/${user.id}`}>Edit</Link>
                <button className="btn btn-danger mx-2" onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
