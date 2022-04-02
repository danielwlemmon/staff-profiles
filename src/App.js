import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AllStaff from './Components/AllStaff'
import API from './Services/API';
import OneStaff from './Components/OneStaff';
import UpdateStaff from './Components/UpdateStaff';
import StaffContext from './Services/StaffContext';

function App() {
  const [allStaff, setAllStaff] = useState([]);
  const [newStaff, setNewStaff] = useState({
    name: "",
    preference: "",
  });
  const [refresh, setRefresh] = useState({ count: 0 });
  const navigate = useNavigate();

  const contextObject = {
    handleSubmit: (e) => {
      e.preventDefault();
      API.createStaff(newStaff).then(res => {
        setRefresh({ ...refresh, count: refresh.count + 1 });
      });
    },
    handleNameChange: (e) => {
      const { value } = e.target;
      setNewStaff({ ...newStaff, name: value });
    },
    handlePreferenceChange: (e) => {
      const { value } = e.target;
      setNewStaff({ ...newStaff, preference: value });
    },
    updateStaff: (id) => {
      API.updateStaff(id, newStaff).then(res => {
        setRefresh({ ...refresh, count: refresh.count + 1 });
        navigate("/");

      });
    },
    handleDelete: (id) => {
      API.deleteJournal(id).then(res => {
        setRefresh({ ...refresh, count: refresh.count + 1 });
        navigate("/");
      });
    }
  };

  useEffect(() => {
    getAllStaff();
  }, []);

  useEffect(() => {
    getAllStaff();
  }, [refresh]);

  const getAllStaff = () => {
    API.getAll().then(res => {

      setAllStaff(res.data)
    })
  };

  return (
    <div className="App" >
      <StaffContext.Provider value={contextObject}>
        <Routes>
          <Route path="/"
            exact
            element={<AllStaff staffData={allStaff} />}
          />

          <Route path="/one-staff/:id" element={<OneStaff />} />
          <Route path="/update-staff/:id" element={<UpdateStaff />}
          />

        </Routes>
      </StaffContext.Provider>
    </div >
  );
}

export default App;