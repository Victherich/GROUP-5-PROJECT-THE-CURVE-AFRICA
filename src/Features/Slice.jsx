import { createSlice } from "@reduxjs/toolkit";


const MySlice = createSlice({
    name: "user",
    initialState:{
        user: null,
        userToken: null
    },
    reducers:{
        login: (state, { payload }) => {
            state.user = payload.user;
            state.userToken = payload.token;
        },
        logout: (state) => {
            state.user = null;
            state.userToken = null;
        }
    }
})

export const { login, logout } = MySlice.actions;
export default MySlice.reducer;
