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

const NAV_LINKS = [
  { href: '#campaigns', label: 'Campaigns' },
  { href: '#team', label: 'Team' },
  { href: '#process', label: 'Process' },
]

const TRUST_ITEMS = ['Leidos', 'AWS', 'Icarus Medical']

type CardBg = 'cream' | 'heat' | 'acid'

const CARD_BG_CLASSES: Record<CardBg, string> = {
  cream: 'bg-cream',
  heat: 'bg-heat',
  acid: 'bg-acid',
}

const CAMPAIGN_CARDS: { href: string; n: string; title: string; desc: string; code: string; bg: CardBg }[] = [
  {
    href: '/five-reasons/',
    n: 'Campaign 01 → Site 01',
    title: 'For the Casual',
    desc: 'Fast call-outs that make Box’d the obvious next meal.',
    code: 'Offer code · WHYBOXD',
    bg: 'cream',
  },
  {
    href: '/uva-favorite/',
    n: 'Campaign 02 → Site 02',
    title: 'For the Athlete',
    desc: 'Students, athletes and regulars turn a restaurant into a campus spot.',
    code: 'Offer code · HOOSBOXD',
    bg: 'heat',
  },
  {
    href: '/find-your-box/',
    n: 'Campaign 03 → Site 03',
    title: 'For the Craver',
    desc: 'A craveable decision helper that ends in a specific order.',
    code: 'Offer code · MYBOXD',
    bg: 'acid',
  },
]

type ScopeBg = 'acid' | 'heat' | undefined

const SCOPE_ITEMS: { n: string; title: string; desc: string; bg?: ScopeBg }[] = [
  {
    n: '01',
    title: 'Audit the consumer journey',
    desc: 'Map how UVA students currently discover Box’d and their favorite orders. Then identify the biggest points of friction in their consumer journey.',
  },
  {
    n: '02',
    title: 'Create the content',
    desc: 'Plan and produce three organic content sets; built around rational proof, social proof, and product utility.',
    bg: 'acid',
  },
  {
    n: '03',
    title: 'Fine tune conversion pages',
    desc: 'Send users to three distinct landing pages to maximize conversion, instead of just one generic page.',
  },
  {
    n: '04',
    title: 'Connect Online Ordering',
    desc: 'Route orders to Box’d-branded Toast Online Ordering for pickup or delivery.',
    bg: 'heat',
  },
  {
    n: '05',
    title: 'Collect Customer Data',
    desc: 'Track landing views, menu selections, order clicks, chooser results, and promo redemptions.',
  },
  {
    n: '06',
    title: 'Optimize weekly',
    desc: 'Review performance, identify the strongest hooks and offers, then tweak the funnel for next week.',
    bg: 'acid',
  },
]

// Hand-picked, non-uniform nudges so the scope cards read as scattered stops
// along a path rather than a rigid grid. Index matches SCOPE_ITEMS order.
const SCOPE_JITTER: { x: number; y: number; r: number }[] = [
  { x: -10, y: -12, r: -1.6 },
  { x: 14, y: 16, r: 1.2 },
  { x: -16, y: 4, r: -1.1 },
  { x: 10, y: -14, r: 1.4 },
  { x: -12, y: 10, r: -1.3 },
  { x: 16, y: -6, r: 0.9 },
]

const TEAM_MEMBERS: {
  count: string
  name: string
  role: string
  bullets: string[]
  funFact: string
  lead?: boolean
}[] = [
    {
      count: '01',
      name: 'Conrad',
      role: 'Strategy lead',
      bullets: [
        'Sets the campaign hypotheses and maps the B2C journey',
        'Directs landing pages and Toast routing',
        'Defines tracking and leads client communication',
        'Makes weekly optimization decisions',
      ],
      funFact: 'Fun fact: add one here',
      lead: true,
    },
    {
      count: '02',
      name: 'Jackson',
      role: 'AI & systems',
      bullets: [
        'Organizes footage and campaign data',
        'Extracts hooks and transcripts',
        'Supports workflow automation and measurement structure',
      ],
      funFact: 'Fun fact: add one here',
    },
    {
      count: '03',
      name: 'Bach',
      role: 'Content',
      bullets: [
        'Plans shots and films food and people',
        'Edits short-form content',
        'Turns each campaign idea into platform-native Reels and Stories',
      ],
      funFact: 'Fun fact: add one here',
    },
    {
      count: '04',
      name: 'Name TBD',
      role: 'Role TBD',
      bullets: [
        'Add responsibility here',
        'Add responsibility here',
        'Add responsibility here',
      ],
      funFact: 'Fun fact: add one here',
    },
    {
      count: '05',
      name: 'Name TBD',
      role: 'Role TBD',
      bullets: [
        'Add responsibility here',
        'Add responsibility here',
        'Add responsibility here',
      ],
      funFact: 'Fun fact: add one here',
    },
  ]

const PROCESS_ITEMS = [
  {
    n: '01',
    title: 'Plan',
    desc: 'We pick the week’s audience, message, offer, and what we’re trying to prove.',
  },
  {
    n: '02',
    title: 'Shoot',
    desc: 'One 90-minute shoot captures food, team, and student footage for all three campaigns.',
  },
  {
    n: '03',
    title: 'Organize',
    desc: 'Footage, hooks, transcripts, and links get organized so nothing slows down launch.',
  },
  {
    n: '04',
    title: 'Post',
    desc: 'Three Reels go live each week, each pointing to its matching landing page and Toast order path.',
  },
  {
    n: '05',
    title: 'Review',
    desc: 'We check views, clicks, and orders, then carry what worked into next week.',
  },
]

const TIMELINE_ITEMS: { week: string; title: string; desc: string; bg?: 'acid' }[] = [
  {
    week: 'Week 01',
    title: 'First creatives',
    desc: 'Publish first creatives and see initial reactions from UVA students.',
  },
  {
    week: 'Week 02',
    title: 'Test hooks',
    desc: 'Compare opening lines, visual patterns, and audience response.',
  },
  {
    week: 'Week 03',
    title: 'Test CTAs and offers',
    desc: 'Refine the strongest creatives to make them hit harder.',
  },
  {
    week: 'Week 04',
    title: 'Scale the winner',
    desc: 'Double down on what worked, document findings for the next growth cycle.',
    bg: 'acid',
  },
]

const PREP_ITEMS = [
  { n: '01', text: 'Toast dashboard access or a screen share (no passwords needed!)' },
  { n: '02', text: 'Current pickup and delivery ordering links' },
  { n: '03', text: 'Top sellers and highest-priority menu items' },
  { n: '04', text: 'Approved discount and rewards boundaries' },
  { n: '05', text: 'Brand assets and recent Instagram insights' },
]

export function HubPage() {
  return (
    <>
      <Topbar right={<HubNav links={NAV_LINKS} />} />
      <main>
        <section className="wrap pt-24 pb-[104px] max-phone:pt-14">
          <H1 className="max-w-[1040px] text-[clamp(3.6rem,8vw,7.8rem)]! max-phone:text-[clamp(3.6rem,8vw,7.8rem)]!">
            Everyone at UVA eats.<Slash> Not enough of them eat BOX'd</Slash>
          </H1>
          <Lede className="max-w-[760px]!">
            We created a custom campaign system just for BOX'd. Including 3 custom landing pages, an organic content pipeline and data tracking systems to
            make BOX’D the go-to spot in UVA.
          </Lede>
          <Actions>
            <Button variant="primary" href="#campaigns">
              See the campaign system ↓
            </Button>
            <Button variant="ghost" href="#team">
              Meet the team
            </Button>
          </Actions>
        </section>

        <section aria-label="Trust" className="bg-ink text-cream">
          <div className="wrap pt-7">
            <span className="text-[.68rem] font-[800] tracking-[.14em] text-[#8a8378] uppercase">
              Team previously worked at
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
              Three pages.
              <br />
              For three demographics that don’t know BOX’D yet.
            </SectionTitle>
            <SectionIntro>
              Our 3 custom campaigns are designed to pull in the diverse student body at UVA to BOX'd. Below, are three landing pages we built for these target audiences.
            </SectionIntro>
          </div>
          <div className="wrap grid grid-cols-3 gap-[18px] pt-1.5 max-tab:grid-cols-1 max-phone:pb-20" aria-label="Campaign landing pages">
            {CAMPAIGN_CARDS.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className={cx(
                  'flex min-h-[480px] flex-col justify-between rounded-[22px] border-2 border-ink p-7 no-underline [transition:.25s_ease] max-tab:min-h-[330px] hover:-translate-y-2 hover:shadow-[10px_12px_0_var(--color-ink)]',
                  CARD_BG_CLASSES[card.bg],
                )}
              >
                <div className="text-[.78rem] font-[900] tracking-[.12em] uppercase">{card.n}</div>
                <div>
                  <h3 className="mb-[15px] text-[3rem] leading-[.93] tracking-[-.055em]">
                    {card.title}
                  </h3>
                  <p className="m-0 text-[#4b463f]">{card.desc}</p>
                  <div className="mt-5 inline-block border border-current px-[9px] py-[6px] text-[.68rem] font-[900] tracking-[.1em] uppercase opacity-50">
                    {card.code}
                  </div>
                  <div className="mt-[26px] text-right font-[950]">Open page →</div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        <Section tone="white" id="scope">
          <div className="wrap">
            <SectionTitle className="mb-11!">How we will get BOX’D the attention it deserves</SectionTitle>
            <div className="relative">
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full max-tab:hidden"
                viewBox="0 0 1000 500"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 145 100 C 300 60, 380 190, 530 155 C 650 130, 760 40, 860 90 C 700 200, 320 260, 140 410 C 260 470, 400 380, 515 340 C 640 300, 760 460, 855 405"
                  fill="none"
                  stroke="var(--color-ink)"
                  strokeOpacity="0.35"
                  strokeWidth="3"
                  strokeDasharray="2 14"
                  strokeLinecap="round"
                />
              </svg>
              <div className="relative grid grid-cols-3 gap-x-10 gap-y-16 max-tab:grid-cols-2 max-tab:gap-8 max-phone:grid-cols-1">
                {SCOPE_ITEMS.map((item, i) => (
                  <article
                    key={item.n}
                    style={{
                      transform: `translate(${SCOPE_JITTER[i].x}px, ${SCOPE_JITTER[i].y}px) rotate(${SCOPE_JITTER[i].r}deg)`,
                    }}
                    className="min-h-[260px] border-2 border-ink bg-cream p-6 shadow-card max-tab:transform-none!"
                  >
                    <span className="text-[.72rem] font-[950] tracking-[.12em] uppercase">
                      {item.n}
                    </span>
                    <h3 className="mt-[58px] mb-[10px] text-[1.35rem] tracking-[-.025em]">
                      {item.title}
                    </h3>
                    <p className="m-0 text-[.94rem] text-[#4f4941]">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section tone="dark" id="team">
          <div className="wrap">
            <SectionTitle>Meet the team.</SectionTitle>
            <SectionIntro dark>
              Our team of five people consists of videographers, marketers, programmers and UI/UX
              designers. And all five of us are excited to make BOX’D go campus-viral.
            </SectionIntro>
            <div className="grid grid-cols-2 gap-4 max-phone:grid-cols-1">
              {TEAM_MEMBERS.map((member) => (
                <article
                  key={member.count}
                  className={cx(
                    'grid gap-5 rounded-[22px] border p-[30px] max-phone:grid-cols-[62px_1fr] max-phone:p-[22px]',
                    member.lead
                      ? 'col-span-2 grid-cols-[110px_1fr] border-heat bg-heat text-ink max-phone:col-span-1'
                      : 'grid-cols-[72px_1fr] border-[#4a453e] bg-[#201e1a]',
                  )}
                >
                  <div
                    className={cx(
                      'flex items-center justify-center rounded-full text-[1.6rem] font-[950]',
                      member.lead ? 'size-[80px] bg-ink text-acid' : 'size-[56px] bg-[#332f28] text-acid',
                    )}
                    aria-hidden="true"
                  >
                    {member.name[0]}
                  </div>
                  <div>
                    <div
                      className={cx(
                        'text-[.72rem] font-[900] tracking-[.12em] uppercase',
                        member.lead ? 'text-ink' : 'text-acid',
                      )}
                    >
                      {member.count} · {member.role}
                    </div>
                    <h3 className="mt-[14px] mb-[10px] text-[2rem] leading-none tracking-[-.04em]">
                      {member.name}
                    </h3>
                    <ul
                      className={cx(
                        'm-0 mb-3 list-disc pl-5',
                        member.lead ? 'text-[#321b15]' : 'text-[#c8c0b5]',
                      )}
                    >
                      {member.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <p className={cx('m-0 text-[.88rem] italic', member.lead ? 'text-[#321b15]' : 'text-[#c8c0b5]')}>
                      {member.funFact}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="process">
          <div className="wrap">
            <SectionTitle>How each week runs.</SectionTitle>
            <div className="grid grid-cols-5 border-t-2 border-ink max-tab:grid-cols-2 max-tab:border-l-2 max-phone:grid-cols-1">
              {PROCESS_ITEMS.map((item, index) => (
                <article
                  key={item.n}
                  className={cx(
                    'relative min-h-[330px] border-r border-line px-[22px] py-6',
                    'max-tab:border-r-2 max-tab:border-b-2 max-tab:border-ink',
                    'max-phone:min-h-[285px]',
                    index === 0 && 'border-l border-line',
                    index === PROCESS_ITEMS.length - 1 &&
                    'max-tab:col-span-2 max-phone:col-auto',
                  )}
                >
                  <b className="text-[2.4rem] tracking-[-.06em] text-heat">{item.n}</b>
                  <h3 className="mt-[58px] mb-[10px] text-[1.45rem]">{item.title}</h3>
                  <p className="m-0 text-[.92rem] text-[#514b43]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section tone="white" id="timeline">
          <div className="wrap">
            <SectionTitle>We find the winning ads, so you don’t have to.</SectionTitle>
            <div className="grid grid-cols-4 gap-[14px] max-tab:grid-cols-2 max-phone:grid-cols-1">
              {TIMELINE_ITEMS.map((item) => (
                <article
                  key={item.week}
                  className={cx(
                    'min-h-[270px] rounded-[18px] border-2 border-ink p-[25px]',
                    item.bg === 'acid' ? 'bg-acid' : 'bg-paper',
                  )}
                >
                  <span className="text-[.72rem] font-[950] tracking-[.12em] uppercase">
                    {item.week}
                  </span>
                  <h3 className="mt-16 mb-[10px] text-[1.35rem] leading-[1.05]">{item.title}</h3>
                  <p className="m-0 text-[.92rem] text-[#514b43]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section tone="heat">
          <div className="wrap grid grid-cols-[.9fr_1.1fr] items-start gap-[70px] max-tab:grid-cols-1 max-tab:gap-[35px]">
            <div>
              <SectionTitle className="max-w-[530px]!">
                What we need from you!
              </SectionTitle>
            </div>
            <ul className="m-0 list-none border-t-2 border-ink p-0">
              {PREP_ITEMS.map((item) => (
                <li
                  key={item.n}
                  className="grid grid-cols-[50px_1fr] gap-[15px] border-b-2 border-ink py-5 font-[850]"
                >
                  <span className="text-[.72rem] tracking-[.1em]">{item.n}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>
      <Footer
        left="Box’d Kitchen · 909 W Main St · Charlottesville"
        right="UVA organic growth pilot · Client overview"
      />
    </>
  )
}
