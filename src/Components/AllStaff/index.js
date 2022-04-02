import React from 'react';
import CreateStaff from '../CreateStaff';

const AllStaff = ({ staffData, handleSubmit, handleNameChange, handlePreferenceChange, handleDelete }) => {

  return (
    <div>
      <CreateStaff handleSubmit={handleSubmit} handleNameChange={handleNameChange} handlePreferenceChange={handlePreferenceChange} />
      {staffData.map((staff, i) => (
        <div key={staff.id}>
          <h3>{staff.name}</h3>

          <a href={`one-staff/${staff.id}`}>
            {" "}
            View Staff{" "}</a>

            <a href={`update-staff/${staff.id}`}>
            {" "}
            Update Staff{" "}</a>
            <button onClick={() => handleDelete(staff.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default AllStaff;