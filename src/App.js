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
    firstName: "",
    lastName: "",
    assignment: "",
    duties:"",
    shiftStart:"",
    shiftEnd:"",
    seniorityDate:"",
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
    handleFirstNameChange: (e) => {
      const { value } = e.target;
      setNewStaff({ ...newStaff, firstName: value });
    },
    handleLastNameChange: (e) => {
      const { value } = e.target;
      setNewStaff({ ...newStaff, lastName: value });
    },
    handleAssignmentChange: (e) => {
      const { value } = e.target;
      setNewStaff({ ...newStaff, assignment: value });
    },
    handleDutiesChange: (e) => {
      const { value } = e.target;
      setNewStaff({ ...newStaff, duties: value });
    },
    handleShiftStartChange: (e) => {
      const { value } = e.target;
      setNewStaff({ ...newStaff, shiftStart: value });
    },
    handleShiftEndChange: (e) => {
      const { value } = e.target;
      setNewStaff({ ...newStaff, shiftEnd: value });
    },
    handleSeniorityDateChange: (e) => {
      const { value } = e.target;
      setNewStaff({ ...newStaff, seniorityDate: value });
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