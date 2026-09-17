import type { ReactNode } from 'react'
import { cx } from './cn'

export function Hero({
  children,
  visual,
  className,
}: {
  children: ReactNode
  visual: ReactNode
  className?: string
}) {
  return (
    <section
      className={cx(
        'wrap grid min-h-[680px] grid-cols-[1.05fr_.95fr] items-center gap-16 pt-[68px] pb-[86px]',
        'max-tab:min-h-0 max-tab:grid-cols-1 max-tab:gap-[58px]',
        'max-phone:pt-[54px] max-phone:pb-[70px]',
        className,
      )}
    >
      <div>{children}</div>
      {visual}
    </section>
  )
}

export function HeroVisual({
  src,
  alt,
  stamp,
  className,
}: {
  src: string
  alt: string
  stamp: ReactNode
  className?: string
}) {
  return (
    <div
      className={cx(
        "relative max-tab:max-w-[620px]",
        "before:absolute before:[inset:-22px_22px_22px_-22px] before:-rotate-3 before:rounded-[26px] before:bg-heat before:content-['']",
        'max-phone:before:[inset:-12px_12px_12px_-12px]',
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        className="relative aspect-[1/1.04] rounded-3xl border-[3px] border-ink object-cover shadow-card"
      />
      <div
        className={cx(
          'absolute -right-6 -bottom-[25px] z-[2] grid h-[124px] w-[124px] rotate-[9deg] place-items-center rounded-full border-[3px] border-ink bg-acid p-[15px] text-center text-[.78rem] leading-[1.15] font-[950] uppercase',
          'max-phone:right-[-4px] max-phone:h-[102px] max-phone:w-[102px] max-phone:text-[.66rem]',
        )}
      >
        {stamp}
      </div>
    </div>
  )
}
