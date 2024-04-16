import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice";
import { apiSlice } from './apiSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,[apiSlice.reducerPath]:apiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})

export default appStore;