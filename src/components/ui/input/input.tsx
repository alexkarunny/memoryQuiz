import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  children?: ReactNode
  className?: string
  disabled?: boolean
  error?: string
  labelText?: string
  placeholderText?: string
  type?: string
  value: string
  variant?: 'icon' | 'primary' | 'search'
} & ComponentPropsWithoutRef<T>
export const Input = <T extends ElementType = 'input'>(
  props: InputProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputProps<T>>
) => {
  const {
    as: Component = 'input',
    className,
    disabled,
    error,
    labelText,
    placeholderText,
    type = 'text',
    value,
    variant = 'primary',
  } = props
  const classNames = {
    all: clsx(s[variant], className, error && s.inputError, disabled && s.disabledInput),
  }

  return (
    <div className={s.inputContainer}>
      {variant === 'search' || (
        <label htmlFor={'input'}>
          <Typography className={s.label} variant={'body2'}>
            {labelText}
          </Typography>
        </label>
      )}
      <Component
        className={classNames.all}
        disabled={disabled}
        id={'input'}
        placeholder={placeholderText}
        type={type}
        value={value}
      />
      {error && (
        <Typography className={s.error} variant={'caption'}>
          {error}
        </Typography>
      )}
    </div>
  )
}
