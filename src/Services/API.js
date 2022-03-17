import axios from "axios";

const baseURL = "http://localhost:3000/staff"

const API = {
  getAll: () => {
    return axios.get(baseURL);
  },
  createStaff: (newStaff) => {
    return axios.post(baseURL, newStaff);
  }

}

export default API;