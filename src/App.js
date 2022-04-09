import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AllStaff from './Components/AllStaff'
import API from './Services/API';
import OneStaff from './Components/OneStaff';
import UpdateStaff from './Components/UpdateStaff';

function App() {

  const [allStaff, setAllStaff] = useState([]);
  const [newStaff, setNewStaff] = useState({
    name: "",
    preference: "",
    restrict: null,
    provider: false,
  });

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
    },
    handleRestrictChange: (e) => {
      const { value } = e.target;
      setNewStaff({...newStaff, restrict: value });
    }
  };

  useEffect(() => {
    getAllStaff();
  }, []);


  const navigate = useNavigate();

  const getAllStaff = () => {
    API.getAll().then(res => {

      setAllStaff(res.data)
    })
  }

  const handleNameChange = (e) => {

    // deconstructing e.target.value
    const { value } = e.target;
    setNewStaff({ ...newStaff, name: value });
  }

  const handlePreferenceChange = (e) => {
    const { value } = e.target;
    setNewStaff({ ...newStaff, preference: value });
  }

  // submits updated newStaff state of staff
  const handleSubmit = (e) => {
    e.preventDefault();
    API.createStaff(newStaff).then(res => {
      console.log(res)
    })
  }

  useEffect(() => {
    getAllStaff();
  }, [refresh]);

  const updateStaff = (id) => {

    API.updateStaff(id, newStaff).then(res => {
      console.log(res);
      setRefresh({...refresh, count: refresh.count + 1});
      navigate("/");

    })
  }

  const handleDelete = (id) => {
    API.deleteJournal(id).then(res => {
      console.log(res);
      setRefresh({...refresh, count: refresh.count + 1});
      navigate("/");

    })
  }

  return (
    <div className="App">
      <Routes>

        <Route path="/" exact element={<AllStaff
          staffData={allStaff}
          handleNameChange={handleNameChange}
          handlePreferenceChange={handlePreferenceChange}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
        />} />

        <Route path="/one-staff/:id" element={<OneStaff handleDelete={handleDelete}/>} />
        <Route path="/update-staff/:id" element={<UpdateStaff
          handleNameChange={handleNameChange}
          handlePreferenceChange={handlePreferenceChange}
          updateStaff={updateStaff}
        />} />

      </Routes>
    </div>
  );
}

export default App;
