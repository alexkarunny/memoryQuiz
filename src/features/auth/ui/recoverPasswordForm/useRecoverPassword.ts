import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const recoverPasswordSchema = z.object({
  email: z.string().email({ message: 'Enter a valid email address' }),
})

export type recoverPasswordValue = z.infer<typeof recoverPasswordSchema>

export const useRecoverPassword = () =>
  useForm<recoverPasswordValue>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(recoverPasswordSchema),
  })
