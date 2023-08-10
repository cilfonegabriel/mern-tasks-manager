import axios from 'axios';

const API = 'http://localhost:3000/api';

export const RegisterRequest = user => axios.post(`${API}/register`, user)

export const loginRequest = user => axios.post(`${API}/login`, user);