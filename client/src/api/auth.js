import axios from './axios';

const API = 'http://localhost:3000/api';

export const RegisterRequest = user => axios.post(`/register`, user)

export const loginRequest = user => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get(`/verify`)