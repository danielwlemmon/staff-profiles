import React, { useCallback, useContext } from 'react';
import StaffContext from '../../Services/StaffContext';

const CreateStaff = () => {


  const context = useContext(StaffContext);

  return (
    <div>
      <form onSubmit={context.handleSubmit} className="forms">
        <label htmlFor="firstName">First Name</label>
        <br />
        <input name="firstName" onChange={context.handleFirstNameChange}></input>
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input name="lastName" onChange={context.handleLastNameChange}></input>
        <br />
        <button className="btn" type="submit">
          Add Staff
        </button>
      </form>
    </div>
  )
}

export default CreateStaff;