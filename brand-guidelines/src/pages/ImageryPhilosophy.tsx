import Page from '../components/Page'
import ImageSlot from '../components/ImageSlot'
import PageNumber from '../components/PageNumber'
import { IMAGE_SLOTS } from '../data/imageSlots'
import { colors } from '../theme'

export default function ImageryPhilosophy() {
  return (
    <Page style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '52px 66px 0' }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: colors.signalBlue,
          }}
        >
          Section 06 · Imagery Direction
        </div>
        <h1 style={{ marginTop: 12, fontSize: 48, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.04, color: colors.ink }}>
          Real over illustrated. Outcome over abstract.
        </h1>
        <div style={{ marginTop: 20, height: 2, background: colors.signalBlue, width: '100%' }} />
      </div>

      <div style={{ padding: '24px 66px 0' }}>
        <div
          style={{
            background: colors.mist,
            borderLeft: `4px solid ${colors.signalBlue}`,
            borderRadius: '0 12px 12px 0',
            padding: '22px 28px',
          }}
        >
          <p style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.55, color: colors.ink }}>
            The brand sells finished, owned outcomes. Imagery must show real launched work and real people accountable
            for it, the live site on a browser, the named partner at the table, not stock AI abstractions of glowing
            brains and circuit boards. Abstract AI imagery undercuts the human-at-the-wheel position.
          </p>
        </div>
      </div>

      <div style={{ padding: '24px 66px 0', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: colors.signalBlue }}>
            CATEGORY 1
          </span>
          <span style={{ fontSize: 20, fontWeight: 600, color: colors.ink }}>The Partner at Work</span>
          <span style={{ fontSize: 14, color: colors.labelGrey }}>
            · real operators doing skilled, focused work. Candid, natural light.
          </span>
        </div>
        <div style={{ flex: 1, position: 'relative', marginTop: 16, marginBottom: 40 }}>
          <ImageSlot spec={IMAGE_SLOTS.s6Cat1} />
        </div>
      </div>

      <PageNumber n="13" />
    </Page>
  )
}
