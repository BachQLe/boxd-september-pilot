export const TOAST_URL =
  'https://order.toasttab.com/online/box-d-kitchen-charlottesville-909-w-main-st'

/** Campaign ids for the three landing pages, and the utm_campaign value each uses on Toast links. */
export type Campaign = {
  id: 'five-reasons' | 'uva-favorite' | 'find-your-box'
  utm: string
}

export const CAMPAIGNS: Record<Campaign['id'], Campaign> = {
  'five-reasons': { id: 'five-reasons', utm: 'five_reasons' },
  'uva-favorite': { id: 'uva-favorite', utm: 'uva_eats_here' },
  'find-your-box': { id: 'find-your-box', utm: 'find_your_box' },
}

/** Builds a direct-ordering Toast URL tagged with the given utm_campaign value. */
export function orderUrl(utmCampaign: string): string {
  return `${TOAST_URL}?utm_source=instagram&utm_medium=organic&utm_campaign=${utmCampaign}`
}

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

/** Pushes an order_click event to window.dataLayer, mirroring legacy campaign.js. */
export function trackOrderClick(campaign: string, placement: string = 'page'): void {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'order_click', campaign, placement })
}
