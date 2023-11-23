import {z} from 'zod';
import {useForm} from 'react-hook-form';

const signUpSchema = z.object({
    email: z.string().email({message: 'Enter a valid email address'}),
    password: z.string().min(3, 'Use 3 or more characters'),
    confirmPassword: z.string().min(3, 'Use 3 or more characters')
})
.refine(data => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirm']

} )

export type SignUpFormValues = z.infer<typeof signUpSchema>

export const useSignUp = () =>
    useForm<SignUpFormValues>({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        }
    })