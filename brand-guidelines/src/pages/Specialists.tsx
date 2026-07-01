import Page from '../components/Page'
import ImageSlot from '../components/ImageSlot'
import PageNumber from '../components/PageNumber'
import { IMAGE_SLOTS } from '../data/imageSlots'
import { colors } from '../theme'

function BlueCard({ name, role, body }: { name: string; role: string; body: string }) {
  return (
    <div
      style={{
        background: colors.signalBlue,
        color: '#fff',
        borderRadius: 16,
        padding: '26px 26px 28px',
        minHeight: 270,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-0.02em' }}>{name}</div>
      <div style={{ marginTop: 6, fontSize: 14, fontWeight: 600, letterSpacing: '0.04em', color: 'rgba(255,255,255,.8)' }}>
        {role}
      </div>
      <p style={{ marginTop: 16, fontSize: 15, fontWeight: 400, lineHeight: 1.55, color: 'rgba(255,255,255,.94)' }}>{body}</p>
    </div>
  )
}

export default function Specialists() {
  return (
    <Page style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '50px 66px 0' }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: colors.signalBlue,
          }}
        >
          Section 08 · The Specialists
        </div>
        <h1 style={{ marginTop: 10, fontSize: 44, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.02, color: colors.ink }}>
          Max. Sal. Pip. The method made visible.
        </h1>
      </div>

      <div style={{ padding: '24px 66px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
        <BlueCard
          name="Max"
          role="Words + Strategy"
          body="Max runs the repeatable content and strategy work: briefs, copy decks, research synthesis, discovery documents. Max is the words behind the partner."
        />
        <div
          style={{
            background: '#fff',
            border: `1px solid ${colors.border}`,
            borderRadius: 16,
            overflow: 'hidden',
            minHeight: 270,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ background: colors.signalBlue, color: '#fff', padding: '22px 26px' }}>
            <div style={{ fontSize: 38, fontWeight: 700, letterSpacing: '-0.02em' }}>Sal</div>
          </div>
          <div style={{ padding: '20px 26px 26px', flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.04em', color: colors.signalBlue }}>
              Pixels + Design
            </div>
            <p style={{ marginTop: 14, fontSize: 15, fontWeight: 400, lineHeight: 1.55, color: colors.bodyGrey }}>
              Sal does the design work: brand guidelines, site builds, visual assets. Sal is the eye behind the partner.
            </p>
          </div>
        </div>
        <BlueCard
          name="Pip"
          role="Social"
          body="Pip runs social: platforms, posts, cadences. Pip is the voice in the feed."
        />
      </div>

      <div style={{ padding: '20px 66px 0' }}>
        <div
          style={{
            background: colors.mist,
            borderLeft: `4px solid ${colors.signalBlue}`,
            borderRadius: '0 12px 12px 0',
            padding: '18px 24px',
          }}
        >
          <p style={{ fontSize: 15.5, fontWeight: 400, lineHeight: 1.5, color: colors.ink }}>
            The specialists are how the method is shown working. They are never presented as separate products. The
            accountable human is always the partner.
          </p>
        </div>
      </div>

      <div style={{ flex: 1, position: 'relative', margin: '20px 66px 40px' }}>
        <ImageSlot spec={IMAGE_SLOTS.s8Monitors} />
      </div>

      <PageNumber n="19" />
    </Page>
  )
}
