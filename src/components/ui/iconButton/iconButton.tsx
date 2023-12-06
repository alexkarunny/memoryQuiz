import { CSSProperties, ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import s from './iconButton.module.scss'

type IconButtonProps = {
  icon: ReactNode
  size?: number
} & ComponentPropsWithoutRef<'button'>

export const IconButton = forwardRef<ElementRef<'button'>, IconButtonProps>(
  ({ icon, size, ...rest }, ref) => {
    const IconButtonStyle: CSSProperties = {
      height: size,
      width: size,
    }

    return (
      <button className={s.IconButton} ref={ref} style={IconButtonStyle} {...rest}>
        {icon}
      </button>
    )
  }
)
