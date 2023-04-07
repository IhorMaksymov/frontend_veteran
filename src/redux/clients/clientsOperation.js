import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://gks-veteran.onrender.com';

const listClients = createAsyncThunk(
    'clients/listClients',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/api/clients')
            if (!response) {
                return;
            }
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const addClient = createAsyncThunk(
    'clients/addClient',
    async ({ name, email, phone }, thunkAPI) => {
        try {
            const response = await axios.post('/api/clients', { name, email, phone });
            return response.data;
        } catch (error) {
           return thunkAPI.rejectWithValue(error.message); 
        }
    }
)

const deleteClient = createAsyncThunk(
    'clients/deleteClient',
    async ( id , thunkAPI) => {
        try {
            const response = await axios.delete(`/api/clients/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export { listClients, addClient, deleteClient }