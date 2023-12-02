import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { CloseIcon } from '@/assets'
import { Close, Content, Portal, Root } from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

import { Card } from '../card'
import { Typography } from '../typography'

export type ModalProps = {
  children?: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  title?: string
} & ComponentPropsWithoutRef<typeof Root>

export const Modal = forwardRef<ElementRef<typeof Root>, ModalProps>(
  ({ children, open, setOpen, title, ...rest }, ref) => {
    const classNames = {
      close: clsx(s.close),
      content: clsx(s.content),
      header: clsx(s.header),
    }

    return (
      <Root onOpenChange={setOpen} open={open}>
        {open && (
          <Portal forceMount>
            <div ref={ref} {...rest}>
              <Content className={classNames.content} forceMount>
                <Card>
                  <div className={classNames.header}>
                    <Typography variant={'h2'}>{title}</Typography>
                    <Close asChild className={classNames.close}>
                      <CloseIcon />
                    </Close>
                  </div>
                  <div>{children}</div>
                </Card>
              </Content>
            </div>
          </Portal>
        )}
      </Root>
    )
  }
)
