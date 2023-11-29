import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowBackIcon } from '@/assets'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from '@/components/ui/goBack/goBack.module.scss'

export const GoBack = forwardRef<
  ElementRef<typeof Button>,
  ComponentPropsWithoutRef<typeof Button>
>(({ ...rest }) => {
  const classNames = {
    container: clsx(s.container),
    text: clsx(s.text),
  }

  const navigate = useNavigate()
  const backHandler = () => {
    navigate(-1)
  }

  return (
    <Button {...rest} className={classNames.container} onClick={backHandler}>
      <ArrowBackIcon />
      <Typography className={classNames.text} variant={'body2'}>
        Back to Packs List
      </Typography>
    </Button>
  )
})
