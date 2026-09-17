import type { ReactNode } from 'react'
import { cx } from './cn'
import { Eyebrow } from './Eyebrow'
import { SECTION_TONE_CLASSES, type SectionTone } from './Section'

/** .section.final-cta: the final-cta padding (88px/72px at max-phone) wins over the plain
 *  .section padding because it is declared later in the legacy stylesheet (and the max-phone
 *  .section rule wins back on phones because media queries come last). Built as its own
 *  section rather than composing Section to avoid two conflicting py-* utilities on one node. */
export function FinalCta({
  eyebrow,
  title,
  children,
  tone = 'dark',
  id,
  className,
}: {
  eyebrow: ReactNode
  title: ReactNode
  children: ReactNode
  tone?: SectionTone
  id?: string
  className?: string
}) {
  return (
    <section
      id={id}
      className={cx('py-[88px] text-center max-phone:py-[72px]', SECTION_TONE_CLASSES[tone], className)}
    >
      <div className="wrap">
        <Eyebrow center>{eyebrow}</Eyebrow>
        <h2 className="mx-auto mb-[30px] max-w-[850px] text-[clamp(2.8rem,6vw,6rem)] leading-[.92] tracking-[-.06em]">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
