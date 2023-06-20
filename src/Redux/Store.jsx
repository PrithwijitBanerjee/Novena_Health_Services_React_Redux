import {configureStore} from '@reduxjs/toolkit'
import { LoginSlice } from './LoginSlice';
import { RegistrationSlice } from './RegistrationSlice';
import { hospitalSlice } from '../Services/Api';

export const Store=configureStore({
    reducer:{
        signIn:LoginSlice.reducer,
        signUp:RegistrationSlice.reducer,
        hospital:hospitalSlice.reducer
    }
});