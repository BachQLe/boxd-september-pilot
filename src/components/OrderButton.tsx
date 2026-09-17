import type { MouseEvent } from 'react'
import { Button, type ButtonProps, type ButtonVariant } from './Button'
import { orderUrl, trackOrderClick } from '../lib/order'

export interface OrderButtonProps extends Omit<ButtonProps, 'href' | 'variant'> {
  /** Campaign identifier recorded as data-campaign and pushed to dataLayer. */
  campaign: string
  /** utm_campaign value used to build the Toast order URL. */
  utm: string
  /** Recorded as data-placement and pushed to dataLayer. Defaults to 'page'. */
  placement?: string
  variant?: ButtonVariant
}

/** A Button pre-wired to the Toast order URL with click tracking, mirroring legacy campaign.js. */
export function OrderButton({
  campaign,
  utm,
  placement = 'page',
  variant = 'primary',
  onClick,
  ...rest
}: OrderButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackOrderClick(campaign, placement)
    onClick?.(event)
  }

  return (
    <Button
      href={orderUrl(utm)}
      variant={variant}
      data-campaign={campaign}
      data-placement={placement}
      onClick={handleClick}
      {...rest}
    />
  )
}
