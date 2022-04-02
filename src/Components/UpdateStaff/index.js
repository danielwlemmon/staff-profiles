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
        <label htmlFor="name">Staff Name</label>
        <br />
        <input name="name" onChange={context.handleNameChange}></input>
        <br />
        <label htmlFor="preference">Assignment Preference</label>
        <br />
        <input name="preference" onChange={context.handlePreferenceChange}></input>
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