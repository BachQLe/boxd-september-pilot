import type { ReactNode } from 'react'
import { cx } from './cn'

export type SectionTone = 'paper' | 'white' | 'dark' | 'heat'

/** Background/text classes for each tone. Shared with FinalCta. */
export const SECTION_TONE_CLASSES: Record<SectionTone, string> = {
  paper: '',
  white: 'bg-cream',
  dark: 'bg-ink text-cream',
  heat: 'bg-heat',
}

export function Section({
  tone = 'paper',
  id,
  className,
  children,
}: {
  tone?: SectionTone
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={cx('py-24 max-phone:py-[72px]', SECTION_TONE_CLASSES[tone], className)}>
      {children}
    </section>
  )
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cx('m-0 mb-[42px] max-w-[760px] text-[clamp(2.4rem,5vw,4.7rem)] leading-[.96] tracking-[-.055em]', className)}>
      {children}
    </h2>
  )
}

export function SectionIntro({
  children,
  dark,
  className,
}: {
  children: ReactNode
  dark?: boolean
  className?: string
}) {
  return (
    <p
      className={cx(
        'mt-[-22px] mb-11 max-w-[650px] text-[1.08rem]',
        dark ? 'text-[#bbb3a7]' : 'text-muted',
        className,
      )}
    >
      {children}
    </p>
  )
}
