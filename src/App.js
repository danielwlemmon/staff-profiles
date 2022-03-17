import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AllStaff from './Components/AllStaff'
import API from './Services/API';

function App() {

  const [allStaff, setAllStaff] = useState([]);
  const [newStaff, setNewStaff] = useState({
    name: "",
    preference: "",
  });

  useEffect(() => {
    getAllStaff();
  }, []);



  const getAllStaff = () => {
    API.getAll().then(res => {

      setAllStaff(res.data)
    })
  }

  const handleNameChange = (e) => {
    const { value } = e.target;
    setNewStaff({ ...newStaff, name: value });
  }

  const handlePreferenceChange = (e) => {
    const { value } = e.target;
    setNewStaff({ ...newStaff, preference: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    API.createStaff(newStaff).then(res => {
      console.log(res)
    })
  }

  return (
    <div className="App">
      <AllStaff
        staffData={allStaff}
        handleNameChange={handleNameChange}
        handlePreferenceChange={handlePreferenceChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
