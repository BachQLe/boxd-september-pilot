import type { ReactNode } from 'react'
import { cx } from './cn'

export function Footer({
  left,
  right,
  className,
}: {
  left: ReactNode
  right: ReactNode
  className?: string
}) {
  return (
    <footer className={cx('border-t border-line py-[28px] pb-[90px] text-[.85rem] text-muted', className)}>
      <div className="wrap flex justify-between gap-[30px] max-phone:flex-col">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </footer>
  )
}
