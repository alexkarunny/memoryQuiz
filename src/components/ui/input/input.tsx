import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { CloseIcon, ClosedEyeIcon, OpenEyeIcon, SearchIcon } from '@/assets'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './input.module.scss'

export type TextFieldProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  placeholder: string
  type?: string
  value?: string
  variant?: 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>
export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  (
    {
      className,
      disabled,
      error,
      label,
      onChange,
      onValueChange,
      placeholder,
      value,
      variant,
      ...rest
    },
    ref
  ) => {
    const classNames = {
      input: clsx(variant && s[variant], className, error && s.inputError),
      label: clsx(s.label),
    }
    const [currentValue, setInputValue] = useState<string | undefined>(value)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value)
      onChange && onChange(e)
      onValueChange && onValueChange(e.currentTarget.value)
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
            {label}
          </Typography>
        )}
        <div className={s.inputContainer}>
          <input
            className={classNames.input}
            disabled={disabled}
            id={'input'}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
            type={finalType}
            {...rest}
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
          {variant === 'password' && currentValue && (
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
)
