import React, { useEffect, useState } from 'react';
import API from '../../Services/API';
import { useParams } from 'react-router-dom';

const UpdateStaff = ( {handleNameChange, handlePreferenceChange, updateStaff}) => {

  let { id } = useParams();

  return (
    <div>
      <form>
        <h3>Update Staff</h3>
        <label htmlFor="name">Staff Name</label>
        <br />
        <input name="name" onChange={handleNameChange}></input>
        <br />
        <label htmlFor="preference">Assignment Preference</label>
        <br />
        <input name="preference" onChange={handlePreferenceChange}></input>
        <br />
        <button 
        className="btn" 
        type="button" 
        value="Submit" 
        onClick={() => updateStaff(id)}
        >
          Update Staff
        </button>
      </form>
    </div>
  );
};

export default UpdateStaff;