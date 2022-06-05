import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/Home"
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/add" element={<AddUser />} /> 
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/:id" element={<ViewUser />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
