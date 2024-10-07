import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
})

export const registerSchema = z.object({
    fullName: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
    // firstName: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
    address: z.string().min(2, { message: 'Address must be at least 2 characters long' }),
    email: z.string().email(),
    phoneNumber: z.string().startsWith('0', {message: 'Phone number must be start with 0'}).min(10, { message: 'Phone number must be at 10-digit number' }).max(10, { message: 'Phone number must be at 10-digit number' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Confirm password doesn't match",
    path: ['confirmPassword'], // path of error
})