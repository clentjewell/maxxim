import Page from '../components/Page'
import PageNumber from '../components/PageNumber'
import { colors } from '../theme'

const pillar = (no: string, title: string, sub: string) => (
  <div
    style={{
      background: colors.mist,
      border: `1px solid ${colors.border}`,
      borderTop: `4px solid ${colors.signalBlue}`,
      borderRadius: 12,
      padding: '20px 22px',
    }}
  >
    <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: colors.signalBlue }}>{no}</div>
    <div style={{ marginTop: 8, fontSize: 19, fontWeight: 600, lineHeight: 1.25, color: colors.ink }}>{title}</div>
    <div style={{ marginTop: 8, fontSize: 14, fontWeight: 400, color: colors.captionGrey }}>{sub}</div>
  </div>
)

const audience = (label: string, body: string) => (
  <div style={{ background: '#fff', borderRadius: 14, padding: '22px 24px' }}>
    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', color: colors.signalBlue }}>{label}</div>
    <p style={{ marginTop: 12, fontSize: 16, fontWeight: 400, lineHeight: 1.5, color: colors.ink }}>{body}</p>
  </div>
)

export default function StrategyHierarchy() {
  return (
    <Page style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '52px 66px 0' }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: colors.labelGrey,
            textTransform: 'uppercase',
          }}
        >
          2.3 · Messaging Hierarchy
        </div>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              background: colors.signalBlue,
              color: '#fff',
              borderRadius: 12,
              padding: '16px 34px',
              textAlign: 'center',
              maxWidth: 660,
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.16em', color: 'rgba(255,255,255,.7)' }}>
              BRAND IDEA
            </div>
            <div style={{ marginTop: 4, fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em' }}>
              The proven method, run by a human, at AI speed
            </div>
          </div>
          <div style={{ width: 2, height: 20, background: colors.blueSoft }} />
          <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
            {pillar('PILLAR 1', 'The engine for your judgement', '80 / 20')}
            {pillar('PILLAR 2', 'The human at every gate', 'Trust gap')}
            {pillar('PILLAR 3', 'The community is the moat', 'Stronger together')}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 30, flex: 1, background: colors.signalBlue, padding: '26px 66px 30px' }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: 'rgba(255,255,255,.72)',
            textTransform: 'uppercase',
          }}
        >
          2.4 · Audience Segments
        </div>
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
          {audience('A1 · CAPACITY-CAPPED OPERATOR', 'AI runs the 80 percent. You own the 20 percent clients pay for.')}
          {audience('A2 · NETWORKED REFERRER', 'Refer and earn, no delivery required.')}
          {audience('A3 · SCOPED SPECIALIST', 'Do your one thing brilliantly, leave the rest to the engine.')}
        </div>
      </div>

      <PageNumber n="05" onDark bottom={20} />
    </Page>
  )
}
