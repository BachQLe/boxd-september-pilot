import { cx } from '../../components'

type Story = {
  kicker: string
  title: string
  body: string
  variant?: 'heat'
}

const STORIES: Story[] = [
  {
    kicker: 'The athlete order',
    title: '“This is my spot.”',
    body: 'UVA quarterback Cole Geer recently brought a creator to the restaurant and shared why Box’d is his Charlottesville favorite.',
  },
  {
    kicker: 'The community',
    title: 'Made with UVA, not just near it.',
    body: 'Box’d describes the Charlottesville location as powered by UVA students and growing with the community since 2018.',
    variant: 'heat',
  },
  {
    kicker: 'The repeat order',
    title: 'No one has to explain the white sauce.',
    body: 'The chicken, lamb and steak bowls are the staples—the ritual is choosing how much heat goes on top.',
  },
]

/** Legacy .story-grid/.story-card/.kicker: 3 equal columns, the 2nd card in heat
 *  with an ink kicker/lifted position, others dark with an acid kicker. Implemented
 *  locally (not a shared component) since it's specific to this page's content. */
export function StoryGrid() {
  return (
    <div className="grid grid-cols-3 gap-[18px] max-tab:grid-cols-1">
      {STORIES.map((story) => (
        <article
          key={story.kicker}
          className={cx(
            'flex min-h-[340px] flex-col justify-between rounded-[20px] p-[28px] max-phone:min-h-[280px]',
            story.variant === 'heat'
              ? 'border border-heat bg-heat text-ink translate-y-[25px] max-tab:translate-y-0'
              : 'border border-[#454037] bg-[#24211d]',
          )}
        >
          <div
            className={cx(
              'text-[.75rem] font-[900] tracking-[.12em] uppercase',
              story.variant === 'heat' ? 'text-ink' : 'text-acid',
            )}
          >
            {story.kicker}
          </div>
          <div>
            <h3 className="my-5 text-[2rem] leading-[1.02] tracking-[-.04em]">{story.title}</h3>
            <p className={cx('m-0', story.variant === 'heat' ? 'text-[#271b16]' : 'text-[#d1c9bd]')}>
              {story.body}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
