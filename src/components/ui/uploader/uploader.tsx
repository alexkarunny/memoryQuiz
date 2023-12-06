import { ChangeEvent, ReactNode, useRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'
import { ZodError } from 'zod'

import s from './uploader.module.scss'

import { UploaderPayload, uploaderSchema } from '.'

export type UploaderProps = {
  children: ReactNode
  className?: string
  onLoadCover: (file: UploaderPayload) => void
  onLoadError: (error: string) => void
}

export const Uploader = ({ children, className, onLoadCover, onLoadError }: UploaderProps) => {
  const ref = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    try {
      uploaderSchema.parse(file)
      if (file) {
        onLoadCover(file)
      }
    } catch (e) {
      const error = e as Error | ZodError

      if (error instanceof ZodError) {
        onLoadError('Zod error: ' + error.errors[0].message)
      } else {
        onLoadError('Native error: ' + error.message)
      }
    }
  }

  const classNames = {
    fileInput: clsx(s.fileInput),
    uploader: clsx(s.uploader, className),
  }

  return (
    <Typography
      as={'label'}
      className={classNames.uploader}
      onClick={() => ref.current?.click()}
      variant={'subtitle2'}
    >
      {children}
      <input className={classNames.fileInput} onChange={onChangeHandler} ref={ref} type={'file'} />
    </Typography>
  )
}
