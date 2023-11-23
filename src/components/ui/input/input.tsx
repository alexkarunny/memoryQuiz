import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { ClearIcon, ClosedEyeIcon, OpenEyeIcon, SearchIcon } from '@/assets'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './input.module.scss'

export type TextFieldProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  error?: string
  inputValue?: string
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
      closeIcon: clsx(s.closeIcon),
      error: clsx(s.error),
      eyeIcon: clsx(s.eyeIcon),
      input: clsx(variant && s[variant], className, error && s.inputError, disabled && s.disabled),
      label: clsx(s.label, disabled && s.disabled),
      searchIcon: clsx(s.searchIcon),
    }
    const [currentValue, setInputValue] = useState<string | undefined>(value)
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value)
      onChange && onChange(e)
      onValueChange && onValueChange(e.currentTarget.value)
    }

    const onCloseClickHandler = () => {
      setInputValue('')
    }

    const finalType = variant === 'password' && !showPassword ? 'password' : 'text'

    const onClickHideShowPassword = () => setShowPassword(currentValue => !currentValue)

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
          <input
            className={classNames.input}
            disabled={disabled}
            id={'input'}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
            type={finalType}
            value={currentValue}
            {...rest}
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
                  onClick={onClickHideShowPassword}
                />
              ) : (
                <ClosedEyeIcon
                  className={classNames.eyeIcon}
                  color={disabled ? '#4C4C4C' : '#FFFFFF'}
                  onClick={onClickHideShowPassword}
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
)
