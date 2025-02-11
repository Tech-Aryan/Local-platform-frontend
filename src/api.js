import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your actual backend URL

export const signupAdmin = (adminData) => {
  return axios.post(`${API_URL}/admin/signup`, adminData);
};

export const loginAdmin = (adminData) => {
  return axios.post(`${API_URL}/admin/login`, adminData);
};
