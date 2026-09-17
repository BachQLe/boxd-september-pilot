import {
  Topbar,
  NavNote,
  Footer,
  Section,
  SectionTitle,
  Hero,
  HeroVisual,
  H1,
  Slash,
  Lede,
  Actions,
  Micro,
  Eyebrow,
  Button,
  OrderButton,
  Ticker,
  ProofSection,
  FinalCta,
  StickyOrder,
  cx,
} from '../../components'
import { CAMPAIGNS } from '../../lib/order'

const CAMPAIGN = CAMPAIGNS['five-reasons']

const TICKER_ITEMS = [
  { b: '01', text: 'BIG PORTIONS' },
  { b: '02', text: 'FAST PICKUP' },
  { b: '03', text: 'REAL PROTEIN' },
  { b: '04', text: 'UVA CLOSE' },
  { b: '05', text: 'THAT WHITE SAUCE' },
]

const REASONS = [
  {
    num: '01',
    h3: 'A full meal, not a snack.',
    p: 'Protein, basmati rice, house salad and pita together.',
  },
  {
    num: '02',
    h3: 'Your protein actually has options.',
    p: 'Chicken, lamb, steak or falafel—bowl or wrap.',
  },
  {
    num: '03',
    h3: 'Close enough for the class-day gap.',
    p: 'Find Box’d at 909 W Main Street near UVA.',
  },
  {
    num: '04',
    h3: 'Direct ordering is simple.',
    p: 'Pickup and delivery through Box’d’s Toast menu.',
  },
  {
    num: '05',
    h3: 'The sauce does not miss.',
    p: 'Creamy white sauce plus heat turns a bowl into your order.',
  },
]

export function FiveReasonsPage() {
  return (
    <>
      <Topbar right={<NavNote>909 W Main · UVA</NavNote>} />
      <main>
        <Hero
          visual={
            <HeroVisual
              src="/assets/chicken-bowl.jpg"
              alt="Box'd Kitchen chicken over rice with salad and pita"
              stamp="The whole meal in one box"
            />
          }
        >
          <Eyebrow>If you're hungry near UVA</Eyebrow>
          <H1>
            5 reasons your next meal should be <Slash>Box'd.</Slash>
          </H1>
          <Lede>
            Big bowls. Real ingredients. Fast pickup. And enough flavor to make “what should we
            eat?” an easy question.
          </Lede>
          <Actions>
            <OrderButton campaign={CAMPAIGN.id} utm={CAMPAIGN.utm} placement="hero">
              Order direct →
            </OrderButton>
            <Button variant="ghost" href="#reasons">
              See all five
            </Button>
          </Actions>
          <Micro>Pickup or delivery · 909 W Main St</Micro>
        </Hero>

        <Ticker items={TICKER_ITEMS} />

        <Section tone="white" id="reasons">
          <div className="wrap">
            <SectionTitle>No vague food adjectives. Here’s the case.</SectionTitle>
            <div className="grid grid-cols-5 border-t-2 border-l-2 border-ink max-tab:grid-cols-2 max-phone:grid-cols-1">
              {REASONS.map((reason, index) => {
                const isEven = index % 2 === 1
                const isLast = index === REASONS.length - 1
                return (
                  <article
                    key={reason.num}
                    className={cx(
                      'min-h-[270px] border-r-2 border-b-2 border-ink p-[22px]',
                      isEven ? 'bg-acid' : 'bg-cream',
                      'max-phone:min-h-[230px]',
                      isLast && 'max-tab:col-span-2 max-tab:min-h-[200px] max-phone:col-auto max-phone:min-h-[230px]',
                    )}
                  >
                    <div className="text-[3.4rem] font-[950] tracking-[-.08em]">{reason.num}</div>
                    <h3 className="mt-[45px] mb-2 text-[1.15rem] leading-[1.05] max-phone:mt-[34px]">
                      {reason.h3}
                    </h3>
                    <p className="m-0 text-[.9rem] text-[#555048]">{reason.p}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </Section>

        <Section>
          <ProofSection
            image={{
              src: '/assets/boxd-spread.jpg',
              alt: "A spread of Box'd Kitchen bowls with chicken, rice, vegetables, pita and sauce",
            }}
            quote={
              <>
                Start with the <strong>chicken over rice.</strong> Come back for your real
                favorite.
              </>
            }
            rows={[
              { label: 'Direct price', value: '$13.58 on Toast' },
              { label: 'Direct ordering', value: 'No Toast platform service fee' },
              { label: 'Hours', value: 'Open daily for lunch and dinner' },
            ]}
          />
        </Section>

        <FinalCta eyebrow="Reason six" title="You’re already thinking about the white sauce." tone="dark">
          <OrderButton campaign={CAMPAIGN.id} utm={CAMPAIGN.utm} placement="final">
            Build the next order →
          </OrderButton>
        </FinalCta>
      </main>
      <Footer
        left="Box’d Kitchen · 909 W Main St · Charlottesville"
        right="Pickup + delivery available"
      />
      <StickyOrder>
        <OrderButton campaign={CAMPAIGN.id} utm={CAMPAIGN.utm} placement="sticky">
          Order Box’d →
        </OrderButton>
      </StickyOrder>
    </>
  )
}
