import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://gks-veteran.onrender.com';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = '';
}

const signup = createAsyncThunk(
    'auth/signup',
    async (object, thunkAPI) => {
        try {
            const response = await axios.post('/api/admin/signup', object);
            console.log(response.data.data)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)

const login = createAsyncThunk(
    'auth/login',
    async (object, thunkAPI) => {
        try {
            const response = await axios.post('/api/admin/login', object);
            setAuthHeader(response.data.token);
            console.log(response)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)

const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.get('/api/admin/logout');
            clearAuthHeader();
        } catch (error) {
            console.log(error);
        }
    }
)

// const logout = async () => {
//     try {
//         await axios.get(`${API_URL}/api/admin/logout`);
//     } catch (error) {
//         console.log(error);
//     }
// }

export { signup, login, logout };