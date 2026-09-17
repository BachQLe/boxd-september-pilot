import { cx } from './cn'

export function Ticker({
  items,
  className,
}: {
  items: { b: string; text: string }[]
  className?: string
}) {
  return (
    <div
      className={cx(
        'overflow-hidden bg-ink py-[13px] font-[900] tracking-[.05em] whitespace-nowrap text-paper',
        className,
      )}
    >
      {items.map((item, index) => (
        <span key={index} className="inline-block pr-[46px]">
          <b className="text-acid">{item.b}</b> {item.text}
        </span>
      ))}
    </div>
  )
}
