import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cx } from './cn'

export type ButtonVariant = 'primary' | 'ghost' | 'plain'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-cream hover:bg-heat hover:border-heat hover:-translate-y-0.5',
  ghost: 'hover:bg-cream hover:-translate-y-0.5',
  plain: '',
}

export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  href: string
  children: ReactNode
}

/** Renders the legacy .btn / .btn.primary / .btn.ghost anchor styles. */
export function Button({ variant = 'plain', href, children, className, ...rest }: ButtonProps) {
  return (
    <a
      href={href}
      className={cx(
        'inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-[9px] rounded-full border-2 border-ink px-[21px] font-[900] no-underline transition duration-200 ease-in-out',
        variantClasses[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  )
}
