import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AllStaff from './Components/AllStaff'
import API from './Services/API';

function App() {

  const [allStaff, setAllStaff] = useState([]);

  useEffect(() => {
    getAllStaff();
  }, []);



  const getAllStaff = () => {
    API.getAll().then(res => {

      setAllStaff(res.data)
    })
  }


  return (
    <div className="App">
      <AllStaff staffData={allStaff}/>
    </div>
  );
}

export default App;
