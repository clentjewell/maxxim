import Page from '../components/Page'
import PageNumber from '../components/PageNumber'
import { colors } from '../theme'

const GRID = '180px 1fr 1fr'

function DimRow({
  dim,
  more,
  less,
  last = false,
}: {
  dim: string
  more: string
  less: string
  last?: boolean
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: GRID, borderBottom: last ? 'none' : `1px solid ${colors.borderSoft}` }}>
      <div style={{ padding: '20px 22px', fontSize: 17, fontWeight: 600, color: colors.signalBlue }}>{dim}</div>
      <div style={{ padding: '20px 22px', fontSize: 15, lineHeight: 1.5, color: colors.ink, borderLeft: `1px solid ${colors.borderSoft}` }}>
        {more}
      </div>
      <div style={{ padding: '20px 22px', fontSize: 15, lineHeight: 1.5, color: colors.labelGrey, borderLeft: `1px solid ${colors.borderSoft}` }}>
        {less}
      </div>
    </div>
  )
}

export default function VoiceDimensions() {
  return (
    <Page>
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
          Section 07 · Brand Voice
        </div>
        <h1 style={{ marginTop: 12, fontSize: 50, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.02, color: colors.ink }}>
          Plain. Precise. Accountable.
        </h1>
        <div style={{ marginTop: 20, height: 2, background: colors.signalBlue, width: '100%' }} />
      </div>

      <div style={{ padding: '26px 66px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: GRID,
            background: colors.ink,
            color: '#fff',
            borderRadius: '12px 12px 0 0',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '14px 22px', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em' }}>DIMENSION</div>
          <div style={{ padding: '14px 22px', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', borderLeft: '1px solid rgba(255,255,255,.14)' }}>
            More like this ✓
          </div>
          <div style={{ padding: '14px 22px', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', borderLeft: '1px solid rgba(255,255,255,.14)' }}>
            Less like this ✗
          </div>
        </div>
        <div style={{ border: `1px solid ${colors.border}`, borderTop: 'none', borderRadius: '0 0 12px 12px', overflow: 'hidden' }}>
          <DimRow
            dim="Confidence"
            more="Assured and evidence-backed. Claims are sized to the proof."
            less="Boastful or hyperbolic. Claims outrun the evidence."
          />
          <DimRow
            dim="Formality"
            more="Plain operator-to-operator. Short sentences, exact words."
            less="Stiff corporate jargon, or loose and chatty filler."
          />
          <DimRow
            dim="Accountability"
            more="Names the human and shows the gate. The human is the hero."
            less="Faceless and automated. The machine is the hero."
          />
          <DimRow
            dim="Honesty"
            more="States what is locked, flags what is open, no false certainty."
            less="Papering over open questions with invented precision."
            last
          />
        </div>
      </div>

      <PageNumber n="16" />
    </Page>
  )
}
