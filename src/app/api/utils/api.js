import axios from 'axios';

const API_BASE_URL = 'https://tugendane-backend.onrender.com/api/v1/';  // Replace with your actual API base URL

// Create an Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const createAgent = async (userData) => {
    try {
      const response = await apiClient.post('/users', userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };


  