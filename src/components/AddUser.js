import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



const AddUser = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
      name: "",
      email: "",  
      mobile: ""
    });
  
    const { name, email, mobile} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("https://61efbd81732d93001778e565.mockapi.io/userdata", user);
      navigate("/");
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your email"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group my-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="mobile"
                value={mobile}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddUser;