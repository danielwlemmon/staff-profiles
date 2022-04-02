import React, { useCallback, useContext } from 'react';
import StaffContext from '../../Services/StaffContext';

const CreateStaff = () => {


  const context = useContext(StaffContext);

  return (
    <div>
      <form onSubmit={context.handleSubmit} className="forms">
        <label htmlFor="name">Staff Name</label>
        <br />
        <input name="name" onChange={context.handleNameChange}></input>
        <br />
        <label htmlFor="preference">Assignment Preference</label>
        <br />
        <input name="preference" onChange={context.handlePreferenceChange}></input>
        <br />
        <button className="btn" type="submit">
          Add Staff
        </button>
      </form>
    </div>
  )
}

export default CreateStaff;