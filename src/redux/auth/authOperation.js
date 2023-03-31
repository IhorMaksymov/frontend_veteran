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
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const login = createAsyncThunk(
    'auth/login',
    async (object, thunkAPI) => {
        try {
            const response = await axios.post('/api/admin/login', object);
            console.log(response)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
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
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export { signup, login, logout };