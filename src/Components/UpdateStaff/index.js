import React, { useEffect, useState } from 'react';
import API from '../../Services/API';
import { useParams } from 'react-router-dom';
import StaffContext from '../../Services/StaffContext';
import { useContext } from 'react';

const UpdateStaff = () => {

  let { id } = useParams();
  const context = useContext(StaffContext);

  return (
    <div>
      <form>
        <h3>Update Staff</h3>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input name="firstName" onChange={context.handleFirstNameChange}></input>
        <br />
        <label htmlFor="assignment">Assignment</label>
        <br />
        <input name="assignment" onChange={context.handleAssignmentChange}></input>
        <br />
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