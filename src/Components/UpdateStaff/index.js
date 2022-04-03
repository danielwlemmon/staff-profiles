import React, { useEffect, useState } from 'react';
import API from '../../Services/API';
import { useParams } from 'react-router-dom';
import StaffContext from '../../Services/StaffContext';
import { useContext } from 'react';

const UpdateStaff = () => {

  let { id } = useParams();
  const context = useContext(StaffContext);
  const [ staff, setStaff ] = useState({});

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
      <form>
        <h3>Update Staff</h3>
        <p>{staff.name}</p>
        <p>{staff.preference}</p>
        <p>{staff.restrict}</p>
        <label htmlFor="name">Enter Name Change</label>
        <br />
        <input name="name" onChange={context.handleNameChange}></input>
        <br />
        <label htmlFor="preference">Change Assignment Preference</label>
        <br />
        <input name="preference"  onChange={context.handlePreferenceChange}></input>
        <br />
        <label htmlFor="restrict">Change Avoid Assignment</label>
        <br />
        <input name="restrict"  onChange={context.handleRestrictChange}></input>
        <br />
        <label for="provider">Provider?</label>
        <br />
        <select name="provider">
          <option value="true">Yes</option>
          <option value="false" selected >No</option>
        </select>
        <button 
        className="btn" 
        type="button" 
        value="Submit" 
        onClick={() => context.updateStaff(id)}
        >
          Update Staff
        </button>
      </form>
    </div>
  );
};

export default UpdateStaff;