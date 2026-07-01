import Page from '../components/Page'
import PageNumber from '../components/PageNumber'
import { colors } from '../theme'

const kicker: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '0.06em',
  color: colors.labelGrey,
  textTransform: 'uppercase',
}

export default function StrategyFoundation() {
  return (
    <Page>
      <div style={{ padding: '58px 66px 0' }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: colors.signalBlue,
          }}
        >
          Section 02 · Brand Strategy Foundation
        </div>
        <h1 style={{ marginTop: 12, fontSize: 50, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.04, color: colors.ink }}>
          Sage + Creator. Trust that moves.
        </h1>
        <div style={{ marginTop: 22, height: 2, background: colors.signalBlue, width: '100%' }} />
      </div>

      <div style={{ padding: '34px 66px 0' }}>
        <div style={kicker}>2.1 · Archetype</div>
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          <div style={{ background: colors.signalBlue, color: '#fff', borderRadius: 18, padding: '30px 32px' }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', color: 'rgba(255,255,255,.72)' }}>
              PRIMARY ARCHETYPE
            </div>
            <div style={{ marginTop: 10, fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em' }}>Sage</div>
            <p style={{ marginTop: 12, fontSize: 16, fontWeight: 400, lineHeight: 1.55, color: 'rgba(255,255,255,.9)' }}>
              Wise, trustworthy, analytical, evidence-led, never hyperbolic.
            </p>
          </div>
          <div
            style={{
              background: colors.mist,
              color: colors.ink,
              borderRadius: 18,
              padding: '30px 32px',
              border: `1px solid ${colors.border}`,
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', color: colors.signalBlue }}>
              SUPPORTING ARCHETYPE
            </div>
            <div style={{ marginTop: 10, fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em' }}>Creator</div>
            <p style={{ marginTop: 12, fontSize: 16, fontWeight: 400, lineHeight: 1.55, color: colors.bodyGrey }}>
              Structured, methodical, a builder of real things.
            </p>
          </div>
        </div>
        <p style={{ marginTop: 20, fontSize: 16, fontWeight: 400, lineHeight: 1.55, color: colors.bodyGrey }}>
          The blend: authoritative knowledge delivered through a method that builds.
        </p>
      </div>

      <div style={{ padding: '26px 66px 0' }}>
        <div style={kicker}>2.2 · Brand Positioning</div>
        <div style={{ marginTop: 14, background: colors.ink, color: '#fff', borderRadius: 18, padding: '30px 36px' }}>
          <p style={{ fontSize: 20, fontWeight: 400, lineHeight: 1.55, color: '#fff' }}>
            For growing businesses and the operators who serve them, Maxxim is the only AI-powered marketing platform
            that combines a proven method, a named human at every gate, and a partner community, so that outcomes are{' '}
            <span style={{ color: colors.blueTint, fontWeight: 600 }}>finished, owned, and delivered at speed.</span>
          </p>
        </div>
      </div>

      <PageNumber n="04" />
    </Page>
  )
}
