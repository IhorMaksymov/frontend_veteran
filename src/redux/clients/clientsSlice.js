import { createSlice } from "@reduxjs/toolkit";

import { listClients, addClient, deleteClient } from "./clientsOperation";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
}

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        valueClientFilter(state, action) {
            state.filter = action.payload;
        }
    },
    extraReducers: {
        [listClients.pending](state) {
            state.isLoading = true;
        },
        [listClients.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [listClients.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addClient.pending](state) {
            state.isLoading = true;
        },
        [addClient.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addClient.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteClient.pending](state) {
            state.isLoading = true;
        },
        [deleteClient.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(client => client._id === action.payload.id);
            state.items.splice(index, 1);
        },
        [deleteClient.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const { valueClientFilter } = clientsSlice.actions;

export const clientsReducer = clientsSlice.reducer;