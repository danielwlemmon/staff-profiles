import axios from "axios";

const baseURL = "http://localhost:3000/staff"

const API = {
  getAll: () => {
    return axios.get(baseURL);
  },
  createStaff: (newStaff) => {
    return axios.post(baseURL, newStaff);
  },
  getStaffById: (id) => {
    return axios.get(`${baseURL}/${id}`);
  },
  updateStaff: (id, updatedStaff) => {
    return axios.put(`${baseURL}/${id}`, updatedStaff);
  },
  deleteJournal: (id) => {
    return axios.delete(`${baseURL}/${id}`)
  }

}

export default API;