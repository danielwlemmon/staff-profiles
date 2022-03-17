import React from 'react';


const AllStaff = ({ staffData }) => {

  console.log(staffData);

  return (
    <div>
      {staffData.map((staff, i) => (
        <div key={staff.id}>
          <h3>{staff.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default AllStaff;