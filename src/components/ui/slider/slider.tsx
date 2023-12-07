import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './slider.module.scss'

export type SliderProps = {
  label?: string
  onValueCommit?: (values: number[]) => void
  values?: number[]
} & ComponentPropsWithoutRef<typeof Root>

export const Slider = forwardRef<ElementRef<typeof Root>, SliderProps>(({ label }, ref) => {
  const classNames = {
    range: clsx(s.range),
    root: clsx(s.root),
    sliderContainer: clsx(s.sliderContainer),
    sliderInput: clsx(s.sliderInput),
    thumb: clsx(s.thumb),
    track: clsx(s.track),
  }

  return (
    <div>
      <Typography as={'label'} variant={'body2'}>
        {label}
      </Typography>
      <div className={classNames.sliderContainer}>
        <input className={classNames.sliderInput} max={98} min={1} type={'number'} />
        <Root className={classNames.root} minStepsBetweenThumbs={1} ref={ref} step={1}>
          <Track className={classNames.track}>
            <Range className={classNames.range} />
          </Track>
          <Thumb className={classNames.thumb} />
          <Thumb className={classNames.thumb} />
        </Root>
        <input className={classNames.sliderInput} max={99} min={2} type={'number'} />
      </div>
    </div>
  )
})
