import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import s from './page.module.scss'
export const Page = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'>>(
  ({ ...rest }, ref) => {
    const classNames = {
      container: s.container,
    }

    return <div className={classNames.container} ref={ref} {...rest} />
  }
)
