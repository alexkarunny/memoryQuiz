import { z } from 'zod'

export const uploaderSchema = z
  .instanceof(File)
  .refine(file => file.size <= 4000000)
  .refine(file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type))

export type UploaderPayload = z.infer<typeof uploaderSchema>
