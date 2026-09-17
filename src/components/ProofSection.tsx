import type { ReactNode } from 'react'
import { cx } from './cn'

export interface ProofRow {
  label: string
  value: string
}

export function ProofSection({
  image,
  imageFirst = true,
  quote,
  rows,
  className,
}: {
  image: { src: string; alt: string }
  imageFirst?: boolean
  quote: ReactNode
  rows: ProofRow[]
  className?: string
}) {
  const imageEl = (
    <div>
      <img
        src={image.src}
        alt={image.alt}
        className="h-[560px] rounded-[22px] border-2 border-ink object-cover max-phone:h-[400px]"
      />
    </div>
  )

  const content = (
    <div>
      <p className="m-0 text-[clamp(2.3rem,4.5vw,4.8rem)] leading-[.98] font-[930] tracking-[-.055em] [&_strong]:text-heat">
        {quote}
      </p>
      <div className="mt-[34px] grid gap-0 border-t border-line">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between gap-5 border-b border-line py-4">
            <b className="font-[900]">{row.label}</b>
            <span className="text-right text-muted">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className={cx('wrap grid grid-cols-2 items-center gap-[50px] max-tab:grid-cols-1', className)}>
      {imageFirst ? (
        <>
          {imageEl}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageEl}
        </>
      )}
    </div>
  )
}
