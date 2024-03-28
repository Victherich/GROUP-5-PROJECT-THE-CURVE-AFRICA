import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const MySlice = createSlice({
    name: "user",
    initialState:{
        user: null,
        userToken: null,
        userUser:null,
        userUserId:null,
        userUserToken:null
    },
    reducers:{
        login: (state, { payload }) => {
            state.user = payload.user;
            state.userToken = payload.token;
            
        },
        logout: (state) => {
            state.user = null;
            state.userToken = null;
        
        },

        userUserLogin:(state,{payload})=>{
            state.userUserId=payload.id;
            state.userUser=payload.user
            state.userUserToken=payload.userToken
        },

        userUserLogout: (state) => {
            state.userUserId=null;
            state.userUser=null;
            state.userUserToken=null;
        }
    }
})

export const { login, logout ,userUserLogin ,userUserLogout} = MySlice.actions;
export default MySlice.reducer;
