import {z} from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Email is not valid',
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, {
        message: 'Invalid password'
    }),
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
    }).email({
        message: 'Email is not valid',
    }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, {
        message: 'Invalid password',
    }),
});