import axios from 'axios';

const API_BASE_URL = 'https://681119363ac96f7119a391ba.mockapi.io/';

export const api = {
  async getPosts() {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
  },

  async getEvents() {
    const response = await axios.get(`${API_BASE_URL}/events`);
    return response.data;
  }
};