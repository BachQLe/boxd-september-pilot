import { useState } from 'react'
import { OrderButton } from '../../components'
import { CAMPAIGNS } from '../../lib/order'

type Protein = 'chicken' | 'lamb' | 'steak'
type Format = 'bowl' | 'wrap'

const PROTEIN_CHOICES: { value: Protein; label: string }[] = [
  { value: 'chicken', label: 'Chicken' },
  { value: 'lamb', label: 'Lamb' },
  { value: 'steak', label: 'Steak' },
]

const FORMAT_CHOICES: { value: Format; label: string }[] = [
  { value: 'bowl', label: 'Rice bowl' },
  { value: 'wrap', label: 'Wrap' },
]

/** Mirrors legacy campaign.js `names` lookup, character-identical copy. */
const RESULTS: Record<`${Protein}-${Format}`, [name: string, copy: string]> = {
  'chicken-bowl': ['Chicken over rice', 'Grilled chicken, Box’d basmati rice, house salad, white sauce and hot sauce.'],
  'lamb-bowl': ['Lamb over rice', 'Slow-cooked gyro lamb, Box’d basmati rice, house salad, white sauce and hot sauce.'],
  'steak-bowl': ['Steak over rice', 'Thinly sliced rib-eye, Box’d basmati rice, house salad, white sauce and hot sauce.'],
  'chicken-wrap': ['Chicken wrap', 'Grilled chicken, vegetables and feta folded into Box’d pita.'],
  'lamb-wrap': ['Lamb wrap', 'Gyro lamb, vegetables and feta folded into Box’d pita.'],
  'steak-wrap': ['Steak wrap', 'Thinly sliced rib-eye, vegetables and feta folded into Box’d flatbread.'],
}

/** A .chip: legacy `.chip` + `.chip[aria-pressed="true"]`. */
function Chip({
  label,
  pressed,
  onClick,
}: {
  label: string
  pressed: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className="min-h-[45px] cursor-pointer rounded-full border-2 border-ink bg-transparent px-4 font-[850] aria-pressed:bg-acid aria-pressed:shadow-[4px_4px_0_#11100e] aria-pressed:-translate-x-0.5 aria-pressed:-translate-y-0.5"
    >
      {label}
    </button>
  )
}

/** Ports the legacy #chooser interactive protein/format picker (campaign.js) to React state. */
export function Chooser() {
  const [protein, setProtein] = useState<Protein>('chicken')
  const [format, setFormat] = useState<Format>('bowl')

  const [name, copy] = RESULTS[`${protein}-${format}`]
  const campaign = CAMPAIGNS['find-your-box']

  return (
    <div className="chooser grid grid-cols-[1.15fr_.85fr] items-stretch gap-[26px] max-tab:grid-cols-1">
      <div className="rounded-3xl border-2 border-ink bg-cream p-[34px] max-phone:p-6">
        <div>
          <span className="mb-3 block text-[1.15rem] font-[950]">1. Choose your protein</span>
          <div className="flex flex-wrap gap-[9px]">
            {PROTEIN_CHOICES.map((choice) => (
              <Chip
                key={choice.value}
                label={choice.label}
                pressed={protein === choice.value}
                onClick={() => setProtein(choice.value)}
              />
            ))}
          </div>
        </div>
        <div className="mt-[30px]">
          <span className="mb-3 block text-[1.15rem] font-[950]">2. Choose your format</span>
          <div className="flex flex-wrap gap-[9px]">
            {FORMAT_CHOICES.map((choice) => (
              <Chip
                key={choice.value}
                label={choice.label}
                pressed={format === choice.value}
                onClick={() => setFormat(choice.value)}
              />
            ))}
          </div>
        </div>
        <div className="mt-[30px]">
          <span className="mb-3 block text-[1.15rem] font-[950]">3. Sauce rule</span>
          <p className="m-0 text-muted">
            White sauce is the base. Add hot sauce according to how brave class made you feel.
          </p>
        </div>
      </div>
      <div
        aria-live="polite"
        className="flex flex-col justify-between rounded-3xl bg-ink p-9 text-cream max-phone:p-6"
      >
        <div>
          <div className="text-[.78rem] font-[900] tracking-[.1em] text-acid uppercase">Your Box’d move</div>
          <h2 id="result-name" className="mt-[22px] mb-[10px] text-[clamp(2.5rem,5vw,5rem)] leading-[.92] tracking-[-.06em]">
            {name}
          </h2>
          <p id="result-copy" className="mt-0 mb-7 text-[#cbc4b8]">
            {copy}
          </p>
        </div>
        <OrderButton
          campaign={campaign.id}
          utm={campaign.utm}
          placement="result"
          variant="plain"
          className="self-start border-heat! bg-heat text-ink"
        >
          Order it direct →
        </OrderButton>
      </div>
    </div>
  )
}
