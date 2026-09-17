import { cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'
import { cx } from './cn'

/** Legacy .sticky-order: hidden by default, a fixed full-width bar with a shadowed button
 *  only at max-phone. Expects a single Button/OrderButton child; clones it so the button
 *  itself gets the full-width + shadow treatment (the container is only ever visible on
 *  phone widths, so those classes don't need their own max-phone: prefix). */
export function StickyOrder({ children, className }: { children: ReactNode; className?: string }) {
  const content = isValidElement(children)
    ? cloneElement(children as ReactElement<{ className?: string }>, {
        className: cx(
          (children as ReactElement<{ className?: string }>).props.className,
          'w-full shadow-[0_8px_30px_rgba(17,16,14,.28)]',
        ),
      })
    : children

  return (
    <div
      className={cx(
        'hidden max-phone:fixed max-phone:inset-x-[13px] max-phone:bottom-3 max-phone:z-10 max-phone:block',
        className,
      )}
    >
      {content}
    </div>
  )
}
