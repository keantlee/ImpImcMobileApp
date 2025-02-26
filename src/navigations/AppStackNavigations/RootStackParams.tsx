import { z } from 'zod';
import AuthValidation from '../../actions/validations/authValidation';

const {logInAuth} = AuthValidation;

export type RootStackParamList  = {
    LogIn: {
        email: string;
        password: string;
    }; 
    Otp: {
        otp: number
    },
    Profile: undefined;
    BottomTabs: undefined;
};