import React from 'react';
import CreateStaff from '../CreateStaff';
import StaffContext from '../../Services/StaffContext';
import { useContext } from 'react';

const AllStaff = ({ staffData }) => {

  const context = useContext(StaffContext);

  return (
    <div>
      <CreateStaff />
      {staffData.map((staff, i) => (
        <div key={staff.id}>
          <h3>{staff.firstName}</h3>
          <h3>{staff.lastName}</h3>
          <a href={`one-staff/${staff.id}`}>
            {" "}
            View Staff{" "}</a>

          <a href={`update-staff/${staff.id}`}>
            {" "}
            Update Staff{" "}</a>
          <button onClick={() => context.handleDelete(staff.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default AllStaff;