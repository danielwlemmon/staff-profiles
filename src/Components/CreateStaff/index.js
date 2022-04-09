import React from 'react';


const CreateStaff = ({ handleSubmit, handleNameChange, handlePreferenceChange }) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="forms">
        <label htmlFor="name">Staff Name</label>
        <br />
        <input name="name" onChange={handleNameChange}></input>
        <br />
        <label htmlFor="preference">Assignment Preference</label>
        <br />
        <input name="preference" onChange={handlePreferenceChange}></input>
        <br />
        <label htmlFor="restrict">Avoid Assigment</label>
        <br />
        <input name="restrict" onChange={context.handleRestrictChange}></input>
        <br />
        <label for="provider">Provider?</label>
        <br />
        <select name="provider">
          <option value="true">Yes</option>
          <option value="false" selected >No</option>
        </select>
        <button className="btn" type="submit">
          Add Staff
        </button>
      </form>
    </div>
  )
}

export default CreateStaff;