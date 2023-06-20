import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../Authentication/Api/apiUrl'
import {toast} from 'react-toastify'
const initialState = {
    name: '',
    token: '',
    loading: false,
    error: '',
    redirectTo:null,
    logouttoggle:false
};

//Thunk-middleware.......
export const userSignIn = createAsyncThunk('user/signIn',
    async (formData) => {
        try {
            const res = await axiosInstance.post('login', formData);
            return res?.data;
        } catch (error) {
            toast.error(error?.response?.data?.message,{
                theme:'colored'
            });
        }
    });

export const LoginSlice=createSlice({
    name:'signIn/User',
    initialState,
    reducers:{
        checkToken:(state,{payload})=>{
            const token=localStorage.getItem('token');
            if(token!==null && token!=='' && token!==undefined)
            {
                state.logouttoggle=true;
            }
        },
        redirectToo:(state,{payload})=>{
            state.redirectTo=payload;
        },
        signOut:(state,{payload})=>{
            //clear localStorage...
            const name=localStorage.getItem('name');
            localStorage.removeItem('name');
            localStorage.removeItem('token');
            toast.success(`${name} Sign-Out successfully...`,{
                theme:'colored'
            });
            state.logouttoggle=false;
        },
        RegLog:(state)=>
        {
            localStorage.removeItem('name');//clearing localstorage...
            state.logouttoggle=false;
        }
    },
    extraReducers:builder=>{
        builder.addCase(userSignIn.pending,state=>{
            state.loading=true;
            state.error='';
        })
        .addCase(userSignIn.fulfilled,(state,{payload})=>{
            state.loading=false;
            if(payload?.status===200)
            {
                //setting user name and token in localStorage...
                localStorage.setItem('name',payload?.user?.name);
                localStorage.setItem('token',payload?.token);
                state.name=localStorage.getItem('name');
                state.token=localStorage.getItem('token');
                state.redirectTo='/';
                toast.success(`${state?.name} ${payload?.message}`,{
                    theme:'colored'
                });
                state.logouttoggle=true;
            }
        })
        .addCase(userSignIn.rejected,(state,{payload})=>{
                state.loading=false;
                state.error=payload;
                toast.error(state?.error, {
                    theme: 'colored'
                });
        })
    }
})    

export const {checkToken,signOut,redirectToo,RegLog}=LoginSlice.actions;