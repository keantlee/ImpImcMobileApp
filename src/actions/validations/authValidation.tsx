import { z } from 'zod';

const logInAuth = z.object({
    email: z.string({
        required_error: "*Email is required",
    }).email({ message: "*Invalid email address" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "Invalid email address" }),

    password: z.string({
        required_error: "*Password is required",
    })
});

const otpAuth = z.object({
    otp: z.string({
        required_error: "*OTP is required!",
    })
    .min(6, { message: "*OTP is a maximum of 6 digits" }) 
    .regex(/^\d+$/, { message: "*OTP must contain only numbers" }),
});

const forgotPasswordAuth = z.object({
    password: z.string({
        required_error: "*Password is required",
    })
    .min(8, { message: "*Password should be minimum of 8 characters long." })
    .max(20, { message: "*Password should be maximum of 20 characters." })
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, { message: "*Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character."}),
});

const confirmPassword = {
    required: "*Confirm password is required!",
    pattern:{
          value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          message: "*Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character."
    }
}

const mobile = {
    required:"*Mobile is required!",
    minLength: {
        value: 11,
        message: "*Minimum 11 digits!",
    },
    maxLength: {
        value: 12,
        message: "*Maximum 12 digits!"
    },
    pattern: {
        value: /^[0-9]+$/,
        message: "*Digits only!"
    }
}

const confimationCode = {
    required: '*Confirmation Code is required!',
    maxLength: {
        value: 6,
        message: "*Confirmation code must be atleast 6 digits",
    },
}

const address = {
    required: "*Address is required!",
}

export default { logInAuth, otpAuth, forgotPasswordAuth };