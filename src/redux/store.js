import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth/authSlice";
import { clientsReducer } from "./clients/clientsSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        clients: clientsReducer,
    }
})

export default store;