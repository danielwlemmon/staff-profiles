import React, { useEffect, useState } from 'react';
import API from '../../Services/API';
import { useParams } from 'react-router-dom';
import StaffContext from '../../Services/StaffContext';
import { useContext } from 'react';

const OneStaff = () => {

  const context = useContext(StaffContext);
  const [ staff, setStaff ] = useState({});

  // getting id params using use params
  const { id } = useParams();

  useEffect(() => {
    // get all staff and set state 
    const getStaff = () => {
      API.getStaffById(id).then(res => {
        setStaff(res.data);
      })
    }
    getStaff();
  }, [])


  return (
  <div>
    <h3>{staff.name}</h3>
    <p>{staff.preference}</p>
    <button onClick={() => context.handleDelete(staff.id)}>Delete</button>
    <a href={`/update-staff/${staff.id}`}>Update</a>
  </div>
  )
};


export default OneStaff;