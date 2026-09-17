import type { ReactNode } from 'react'
import { cx } from './cn'

/** Legacy h1: clamp(3.45rem,7.8vw,7.35rem) desktop, clamp(3.25rem,17vw,5.1rem) at max-phone.
 *  Pass className to override size/max-width (e.g. the hub hero's larger clamp). */
export function H1({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1
      className={cx(
        'm-0 text-[clamp(3.45rem,7.8vw,7.35rem)] leading-[.88] font-[950] tracking-[-.075em]',
        'max-phone:text-[clamp(3.25rem,17vw,5.1rem)]',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function Slash({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cx('text-heat italic', className)}>{children}</span>
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cx('mt-[26px] mb-[30px] max-w-[590px] text-[clamp(1.05rem,2vw,1.3rem)] leading-[1.45] text-[#3c3933]', className)}>
      {children}
    </p>
  )
}

export function Actions({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx('flex flex-wrap items-center gap-3', className)}>{children}</div>
}

export function Micro({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx('mt-3 text-[.8rem] text-muted', className)}>{children}</div>
}
