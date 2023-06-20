import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../Authentication/Api/apiUrl';
import {toast} from 'react-toastify'
const initialState = {
    name: '',
    redirectReg: null,
    loading: false,
    error: ''
};


//Thunk Middleware........................
export const userSignUp = createAsyncThunk('user/signUp',
    async (userData) => {
        try {
            const res=await axiosInstance.post('register',userData);
            console.log('Response from Registration Server:',res?.data);
            return res?.data;
        } catch (error) {
            console.log('Catch Block Error:',error);
            toast.error('This Email Already Exist!!!',{
                theme:'colored'
            });
        }
    });

export const RegistrationSlice=createSlice({
    name:'signUp/user',
    initialState,
    reducers:{
        Redirect_To_Register:(state,{payload})=>{
            state.redirectReg=payload;
        }
    },
    extraReducers:builder=>{
        builder.addCase(userSignUp.pending,state=>{
            state.loading=true;
            state.error='';
        })
        .addCase(userSignUp.fulfilled,(state,{payload})=>{
            state.loading=false;
            if(payload?.success===true)
            {
                localStorage.setItem('name',payload?.data?.name);
                state.redirectReg='/signIn';
                toast.success(`hi ${payload?.data?.name} has successfully registered!!!`,
                {
                    theme:'colored'
                });
                state.error='';
            }
        })
        .addCase(userSignUp.rejected,(state,{payload})=>{
            state.loading=false;
            state.error=payload;
        })
    }
});

export const {Redirect_To_Register} =RegistrationSlice.actions;