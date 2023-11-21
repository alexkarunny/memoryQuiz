import { ChangeEvent, ComponentPropsWithoutRef, ElementType, ReactNode, useState } from 'react'

import { CloseIcon, ClosedEyeIcon, OpenEyeIcon, SearchIcon } from '@/assets'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './input.module.scss'

export type InputProps<T extends ElementType = 'input'> = {
  as?: T
  children?: ReactNode
  className?: string
  disabled?: boolean
  error?: string
  inputValue?: string
  labelText?: string
  placeholder: string
  type?: string
  variant?: 'password' | 'primary' | 'search'
} & ComponentPropsWithoutRef<T>
export const TextField = <T extends ElementType = 'input'>(
  props: InputProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof InputProps<T>>
) => {
  const {
    as: Component = 'input',
    className,
    disabled,
    error,
    inputValue,
    labelText,
    placeholder,
    variant = 'primary',
  } = props
  const classNames = {
    input: clsx(s[variant], className, error && s.inputError, disabled && s.disabledInput),
    label: clsx(s.label),
  }
  const [currentValue, setInputValue] = useState<string | undefined>(inputValue)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const onCloseClickHandler = () => {
    setInputValue('')
  }

  const finalType = variant === 'password' && !showPassword ? 'password' : 'text'

  const onClickShowPassword = () => currentValue && setShowPassword(true)
  const onClickHidePassword = () => setShowPassword(false)
  const activeColor = currentValue ? 'var(--color-light-100)' : ''

  return (
    <div className={s.textFieldContainer}>
      {variant === 'search' || (
        <Typography as={'label'} className={classNames.label} htmlFor={'input'} variant={'body2'}>
          {labelText}
        </Typography>
      )}
      <div className={s.inputContainer}>
        <Component
          className={classNames.input}
          disabled={disabled}
          id={'input'}
          onChange={onChangeHandler}
          placeholder={placeholder}
          type={finalType}
          value={currentValue}
        />
        {variant === 'search' && (
          <>
            <SearchIcon className={s.searchIcon} color={activeColor} />
            {currentValue && (
              <CloseIcon
                className={s.closeIcon}
                color={activeColor}
                onClick={onCloseClickHandler}
              />
            )}
          </>
        )}
        {variant === 'password' && (
          <>
            {showPassword ? (
              <OpenEyeIcon
                className={s.eyeIcon}
                color={activeColor}
                onClick={onClickHidePassword}
              />
            ) : (
              <ClosedEyeIcon
                className={s.eyeIcon}
                color={activeColor}
                onClick={onClickShowPassword}
              />
            )}
          </>
        )}
      </div>
      {error && (
        <Typography className={s.error} variant={'caption'}>
          {error}
        </Typography>
      )}
    </div>
  )
}
