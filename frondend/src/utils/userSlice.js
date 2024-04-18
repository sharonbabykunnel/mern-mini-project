import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem("userInfo") ?
        JSON.parse(localStorage('userInfo')) :
        null,
};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null
        }
    }
})

export const { setCredentials, removeUser } = userSlice.actions;

export default userSlice.reducer