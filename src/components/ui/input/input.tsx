import { ChangeEvent, ComponentPropsWithoutRef, ElementType, ReactNode, useState } from 'react'

import { ClearIcon, ClosedEyeIcon, OpenEyeIcon, SearchIcon } from '@/assets'
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
  label?: string
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
    label,
    placeholder,
    variant = 'primary',
  } = props
  const classNames = {
    closeIcon: clsx(s.closeIcon),
    error: clsx(s.error),
    eyeIcon: clsx(s.eyeIcon),
    input: clsx(s[variant], className, error && s.inputError, disabled && s.disabled),
    label: clsx(s.label, disabled && s.disabled),
    searchIcon: clsx(s.searchIcon),
  }
  const [currentValue, setInputValue] = useState<string | undefined>(inputValue)
  const [showPassword, setShowPassword] = useState<boolean>(true)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const onCloseClickHandler = () => {
    setInputValue('')
  }

  const finalType = variant === 'password' && !showPassword ? 'password' : 'text'

  const onClickShowPassword = () => currentValue && setShowPassword(true)
  const onClickHidePassword = () => setShowPassword(false)

  const SearchIconColor = () => {
    if (currentValue && !error) {
      return '#FFFFFF'
    } else if (disabled) {
      return '#4C4C4C'
    } else {
      return '#808080'
    }
  }

  return (
    <div className={s.textFieldContainer}>
      {label && (
        <Typography as={'label'} className={classNames.label} variant={'body2'}>
          {label}
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
            <SearchIcon className={classNames.searchIcon} color={SearchIconColor()} />
            {currentValue && (
              <ClearIcon
                className={classNames.closeIcon}
                color={'#FFFFFF'}
                onClick={onCloseClickHandler}
              />
            )}
          </>
        )}
        {variant === 'password' && (
          <>
            {showPassword ? (
              <OpenEyeIcon
                className={classNames.eyeIcon}
                color={disabled ? '#4C4C4C' : '#FFFFFF'}
                onClick={onClickHidePassword}
              />
            ) : (
              <ClosedEyeIcon
                className={classNames.eyeIcon}
                color={disabled ? '#4C4C4C' : '#FFFFFF'}
                onClick={onClickShowPassword}
              />
            )}
          </>
        )}
      </div>
      {error && (
        <Typography className={classNames.error} variant={'caption'}>
          {error}
        </Typography>
      )}
    </div>
  )
}
