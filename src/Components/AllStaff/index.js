import React from 'react';
import CreateStaff from '../CreateStaff';

const AllStaff = ({ staffData, handleSubmit, handleNameChange, handlePreferenceChange }) => {

  return (
    <div>
      <CreateStaff handleSubmit={handleSubmit} handleNameChange={handleNameChange} handlePreferenceChange={handlePreferenceChange} />
      {staffData.map((staff, i) => (
        <div key={staff.id}>
          <h3>{staff.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default AllStaff;