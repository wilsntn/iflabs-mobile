import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const httpClient = axios.create({
  baseURL: process.env.API_URL,
  timeout: 8000,
});
httpClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});