import {
  Topbar,
  NavNote,
  Footer,
  Section,
  SectionTitle,
  SectionIntro,
  Hero,
  HeroVisual,
  H1,
  Slash,
  Lede,
  Actions,
  Button,
  OrderButton,
  ProofSection,
  FinalCta,
  StickyOrder,
  Eyebrow,
} from '../../components'
import { CAMPAIGNS } from '../../lib/order'
import { Chooser } from './Chooser'

const campaign = CAMPAIGNS['find-your-box']

export function FindYourBoxPage() {
  return (
    <>
      <Topbar right={<NavNote>Your order in 15 seconds</NavNote>} />
      <main>
        <Hero
          visual={
            <HeroVisual
              src="/assets/chicken-bowl.jpg"
              alt="Chicken over rice and salad from Box'd Kitchen"
              stamp="Two choices. Done."
            />
          }
        >
          <Eyebrow>Skip the menu spiral</Eyebrow>
          <H1>
            Find your <Slash>Box.</Slash>
          </H1>
          <Lede>Pick a protein. Pick a format. We’ll send you toward the right first order.</Lede>
          <Actions>
            <Button variant="primary" href="#chooser">
              Choose mine →
            </Button>
          </Actions>
        </Hero>

        <Section tone="white" id="chooser">
          <div className="wrap">
            <SectionTitle>Build the move.</SectionTitle>
            <SectionIntro>No twenty-step customization. Just the two decisions that matter.</SectionIntro>
            <Chooser />
          </div>
        </Section>

        <Section>
          <ProofSection
            image={{ src: '/assets/boxd-spread.jpg', alt: "A selection of Box'd Kitchen bowls" }}
            imageFirst
            quote={
              <>
                Still stuck? The <strong>chicken bowl</strong> is the clean first move.
              </>
            }
            rows={[
              { label: 'Want richer?', value: 'Choose lamb' },
              { label: 'Want handheld?', value: 'Choose a wrap' },
              { label: 'Want no meat?', value: 'Choose falafel over rice' },
            ]}
          />
        </Section>

        <FinalCta tone="dark" eyebrow="Decision made" title="Now go get the box.">
          <OrderButton campaign={campaign.id} utm={campaign.utm} placement="final" variant="primary">
            Open direct ordering →
          </OrderButton>
        </FinalCta>
      </main>
      <Footer
        left="Box’d Kitchen · 909 W Main St · Charlottesville"
        right="Pickup + delivery available"
      />
      <StickyOrder>
        <OrderButton campaign={campaign.id} utm={campaign.utm} placement="sticky" variant="primary">
          Order your box →
        </OrderButton>
      </StickyOrder>
    </>
  )
}
