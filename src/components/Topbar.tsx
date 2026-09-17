import type { ReactNode } from 'react'
import { cx } from './cn'

export function Topbar({ right, className }: { right?: ReactNode; className?: string }) {
  return (
    <header
      className={cx(
        'wrap relative z-[5] flex min-h-[76px] items-center justify-between border-b border-line max-phone:min-h-[66px]',
        className,
      )}
    >
      <a href="/" className="text-[1.15rem] font-[950] tracking-[-.04em] no-underline">
        BOX'D{' '}
        <span className="ml-1 inline-block -rotate-2 bg-ink px-[7px] py-[2px] text-paper">
          KITCHEN
        </span>
      </a>
      {right}
    </header>
  )
}

export function NavNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cx(
        'text-[.82rem] font-[750] tracking-[.08em] text-muted uppercase max-phone:hidden',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function HubNav({
  links,
  className,
}: {
  links: { href: string; label: string }[]
  className?: string
}) {
  return (
    <nav aria-label="Project overview" className={cx('flex gap-6 max-phone:hidden', className)}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-[.78rem] font-[850] tracking-[.08em] text-muted uppercase no-underline hover:text-heat"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
