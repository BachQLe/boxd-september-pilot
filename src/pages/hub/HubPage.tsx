import {
  Topbar,
  HubNav,
  Footer,
  Button,
  H1,
  Slash,
  Lede,
  Actions,
  Section,
  SectionTitle,
  SectionIntro,
  cx,
} from '../../components'

const NAV_LINKS = [{ href: '#campaigns', label: 'Campaigns' }]

const TRUST_ITEMS = ['Leidos', 'AWS', 'Icarus Medical']

type CardBg = 'cream' | 'heat' | 'acid'

const CARD_BG_CLASSES: Record<CardBg, string> = {
  cream: 'bg-cream',
  heat: 'bg-heat',
  acid: 'bg-acid',
}

const CAMPAIGN_CARDS: {
  href: string
  n: string
  title: string
  desc: string
  bg: CardBg
}[] = [
  {
    href: '/five-reasons/',
    n: 'Messaging angle 01',
    title: 'Why Box’d',
    desc: 'A clear case for choosing Box’d, centered on value, convenience, and the product itself.',
    bg: 'cream',
  },
  {
    href: '/uva-favorite/',
    n: 'Messaging angle 02',
    title: 'Box’d at UVA',
    desc: 'A campus-focused angle built around social proof, familiarity, and UVA identity.',
    bg: 'heat',
  },
  {
    href: '/find-your-box/',
    n: 'Messaging angle 03',
    title: 'Pick Your Box',
    desc: 'A product-discovery angle that helps customers move from indecision to a specific order.',
    bg: 'acid',
  },
]

export function HubPage() {
  return (
    <>
      <Topbar right={<HubNav links={NAV_LINKS} />} />
      <main>
        <section className="wrap pt-24 pb-[104px] max-phone:pt-14">
          <H1 className="max-w-[1040px] text-[clamp(3.6rem,8vw,7.8rem)]! max-phone:text-[clamp(3.6rem,8vw,7.8rem)]!">
            Everyone at UVA eats.<Slash> Not enough of them eat BOX’d.</Slash>
          </H1>
          <Lede className="max-w-[720px]!">
            We developed three distinct messaging angles for the same UVA audience, each paired
            with its own landing-page experience.
          </Lede>
          <Actions>
            <Button variant="primary" href="#campaigns">
              Explore the concepts ↓
            </Button>
          </Actions>
        </section>

        <section aria-label="Team experience" className="bg-ink text-cream">
          <div className="wrap pt-7">
            <span className="text-[.68rem] font-[800] tracking-[.14em] text-[#8a8378] uppercase">
              Team experience includes
            </span>
          </div>
          <div className="wrap flex flex-wrap items-center gap-x-12 gap-y-3 py-6 max-phone:gap-x-7">
            {TRUST_ITEMS.map((name) => (
              <span key={name} className="text-[1.05rem] font-[900] tracking-[-.01em] text-cream/90">
                {name}
              </span>
            ))}
          </div>
        </section>

        <Section id="campaigns">
          <div className="wrap">
            <SectionTitle>
              One audience.
              <br />
              Three messaging angles.
            </SectionTitle>
            <SectionIntro>
              These concepts are not aimed at different demographics. They test three different
              ways of positioning Box’d to UVA students: a reason to choose it, proof that it
              belongs at UVA, and help deciding what to order.
            </SectionIntro>
          </div>
          <div
            className="wrap grid grid-cols-3 gap-[18px] pt-1.5 pb-24 max-tab:grid-cols-1 max-phone:pb-20"
            aria-label="Campaign landing pages"
          >
            {CAMPAIGN_CARDS.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className={cx(
                  'flex min-h-[420px] flex-col justify-between rounded-[22px] border-2 border-ink p-7 no-underline [transition:.25s_ease] max-tab:min-h-[300px] hover:-translate-y-2 hover:shadow-[10px_12px_0_var(--color-ink)]',
                  CARD_BG_CLASSES[card.bg],
                )}
              >
                <div className="text-[.78rem] font-[900] tracking-[.12em] uppercase">{card.n}</div>
                <div>
                  <h3 className="mb-[15px] text-[3rem] leading-[.93] tracking-[-.055em]">
                    {card.title}
                  </h3>
                  <p className="m-0 text-[#4b463f]">{card.desc}</p>
                  <div className="mt-[26px] text-right font-[950]">Open page →</div>
                </div>
              </a>
            ))}
          </div>
        </Section>
      </main>
      <Footer
        left="Box’d Kitchen · 909 W Main St · Charlottesville"
        right="UVA campaign concepts"
      />
    </>
  )
}
