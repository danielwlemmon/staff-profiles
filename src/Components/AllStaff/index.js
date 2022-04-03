import React from 'react';
import CreateStaff from '../CreateStaff';
import StaffContext from '../../Services/StaffContext';
import { useContext } from 'react';

const AllStaff = ({ staffData }) => {

  const context = useContext(StaffContext);

  return (
    <div>
      
      {staffData.map((staff, i) => (
        <div class="staff_list" key={staff.id}>
          <h3>Name: {staff.name}</h3>
          <h5>Assigned to: {staff.preference}</h5>
          <a href={`one-staff/${staff.id}`}>
            {" "}
            View Staff{" "}</a>

          <a href={`update-staff/${staff.id}`}>
            {" "}
            Update Staff{" "}</a>
          <button onClick={() => context.handleDelete(staff.id)}>Delete</button>
        </div>
      ))}
      <CreateStaff />
    </div>
  )
}

export default AllStaff;