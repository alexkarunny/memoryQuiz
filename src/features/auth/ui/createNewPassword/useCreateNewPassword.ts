import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const createNewPasswordSchema = z.object({
    password: z.string().min(3, 'Use 3 or more characters for your password'),
})

export type createNewPasswordFormValues = z.infer<typeof createNewPasswordSchema>

export const useCreateNewPassword = () =>
    useForm<createNewPasswordFormValues>({
        defaultValues: {
            password: '',
        },
        resolver: zodResolver(createNewPasswordSchema),
    })
