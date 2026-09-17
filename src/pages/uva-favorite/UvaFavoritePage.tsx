import {
  Topbar,
  NavNote,
  Footer,
  Eyebrow,
  Button,
  OrderButton,
  Hero,
  HeroVisual,
  H1,
  Slash,
  Lede,
  Actions,
  Micro,
  Ticker,
  Section,
  SectionTitle,
  SectionIntro,
  ProofSection,
  FinalCta,
  StickyOrder,
} from '../../components'
import { CAMPAIGNS } from '../../lib/order'
import { StoryGrid } from './StoryGrid'

const campaign = CAMPAIGNS['uva-favorite']

export function UvaFavoritePage() {
  return (
    <>
      <Topbar right={<NavNote>Growing with UVA since 2018</NavNote>} />
      <main>
        <Hero
          visual={
            <HeroVisual
              src="/assets/boxd-spread.jpg"
              alt="Several Box'd Kitchen meals ready to share"
              stamp="Powered by UVA students"
            />
          }
        >
          <Eyebrow>The regulars already know</Eyebrow>
          <H1>
            UVA eats <Slash>here.</Slash>
          </H1>
          <Lede>
            A local spot powered by UVA students, trusted by student-athletes and kept alive by
            the people who know their order before they walk in.
          </Lede>
          <Actions>
            <OrderButton campaign={campaign.id} utm={campaign.utm} placement="hero" variant="primary">
              Join the regulars →
            </OrderButton>
            <Button variant="ghost" href="#stories">
              Why Box’d
            </Button>
          </Actions>
          <Micro>Serving Charlottesville’s UVA community since 2018</Micro>
        </Hero>

        <Ticker
          items={[
            { b: 'UVA', text: 'REGULARS' },
            { b: 'LOCAL', text: 'SINCE 2018' },
            { b: '4.8', text: 'ON UBER EATS' },
            { b: '1,000+', text: 'RATINGS' },
          ]}
        />

        <Section tone="dark" id="stories">
          <div className="wrap">
            <SectionTitle>A campus favorite is built one regular at a time.</SectionTitle>
            <SectionIntro dark>
              This is not “influencer food.” It is the order people bring their teammates, friends
              and families back to.
            </SectionIntro>
            <StoryGrid />
          </div>
        </Section>

        <Section tone="white">
          <ProofSection
            imageFirst={false}
            image={{ src: '/assets/chicken-bowl.jpg', alt: "Box'd Kitchen chicken bowl with colorful salad" }}
            quote={
              <>
                Your new “meet me after class” spot is <strong>one order away.</strong>
              </>
            }
            rows={[
              { label: 'Where', value: '909 W Main Street' },
              { label: 'What', value: 'Mediterranean bowls, wraps + K-ramen' },
              { label: 'How', value: 'Dine in, pickup or delivery' },
            ]}
          />
        </Section>

        <FinalCta eyebrow="Your turn" title="What will your regular order be?" tone="paper">
          <OrderButton campaign={campaign.id} utm={campaign.utm} placement="final" variant="primary">
            Try Box’d →
          </OrderButton>
        </FinalCta>
      </main>
      <Footer
        left="Box’d Kitchen · 909 W Main St · Charlottesville"
        right="Growing with UVA since 2018"
      />
      <StickyOrder>
        <OrderButton campaign={campaign.id} utm={campaign.utm} placement="sticky" variant="primary">
          Join the regulars →
        </OrderButton>
      </StickyOrder>
    </>
  )
}
