import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './table-primitives.module.scss'

export type CellContentProps = {
  children?: ReactNode
  variant?:
    | 'cellCheckbox'
    | 'cellCheckboxText'
    | 'cellGrade'
    | 'cellIcons'
    | 'cellPhotoText'
    | 'cellText'
    | 'cellTextIcons'
    | 'columnName'
    | 'columnNameIcon'
} & ComponentPropsWithoutRef<'div'>

export const CellContent = forwardRef<HTMLDivElement, CellContentProps>(
  ({ className, variant = 'cellText', ...rest }, ref) => {
    const classNames = {
      root: clsx(s[variant], className),
    }

    return <div className={classNames.root} ref={ref} {...rest} />
  }
)
