import React, {useContext, createContext, useState} from 'react';

import axios from 'axios';


export default StaffContext = createContext();



export const StraffProvider = (props) => {

  const baseURL = "http://localhost:3000/staff";

const [allStaff, setAllStaff] = useState()


  const getAll = () => {
    return axios.get(baseURL).then(response => {
      setAllStaff(response);
    });
  }




  return (
    <StaffContext.Provider
      value={{
        getAll,
        allStaff
      }}
    >

    </StaffContext.Provider>
  )





}


