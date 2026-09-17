import type { ReactNode } from 'react'
import { cx } from './cn'

export function Eyebrow({
  children,
  center,
  className,
}: {
  children: ReactNode
  center?: boolean
  className?: string
}) {
  return (
    <div
      className={cx(
        "mb-[18px] flex items-center gap-[10px] text-[.78rem] font-[900] tracking-[.13em] uppercase before:h-[3px] before:w-[30px] before:bg-heat before:content-['']",
        center && 'justify-center',
        className,
      )}
    >
      {children}
    </div>
  )
}
