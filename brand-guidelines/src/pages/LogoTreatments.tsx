import Page from '../components/Page'
import Monogram from '../components/Monogram'
import PageNumber from '../components/PageNumber'
import { colors } from '../theme'

const kicker: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '0.06em',
  color: colors.labelGrey,
  textTransform: 'uppercase',
}

function TreatmentCard({
  bg,
  markColor,
  title,
  sub,
  textShadow,
}: {
  bg: string
  markColor: string
  title: string
  sub: string
  textShadow?: string
}) {
  return (
    <div style={{ border: `1px solid ${colors.border}`, borderRadius: 14, overflow: 'hidden' }}>
      <div
        style={{
          background: bg,
          height: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          color: markColor,
        }}
      >
        <Monogram size={38} />
        <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em', color: markColor, textShadow }}>
          Maxxim
        </span>
      </div>
      <div style={{ padding: '14px 18px', borderTop: `1px solid ${colors.border}` }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: colors.ink }}>{title}</div>
        <div style={{ fontSize: 12, color: colors.labelGrey, marginTop: 3 }}>{sub}</div>
      </div>
    </div>
  )
}

const clearSpaceX: React.CSSProperties = {
  position: 'absolute',
  background: colors.mist,
  fontSize: 12,
  fontWeight: 600,
  color: colors.signalBlue,
}

const sizeRow = (label: string, value: string, last = false) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px 22px',
      borderBottom: last ? 'none' : `1px solid ${colors.border}`,
    }}
  >
    <span style={{ fontSize: 15, fontWeight: 500, color: colors.ink }}>{label}</span>
    <span style={{ fontSize: 15, color: colors.signalBlue, fontWeight: 600 }}>{value}</span>
  </div>
)

export default function LogoTreatments() {
  return (
    <Page>
      <div style={{ padding: '52px 66px 0' }}>
        <div style={kicker}>3.2 · Colour Treatments</div>
        <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
          <TreatmentCard bg="#fff" markColor={colors.signalBlue} title="Signal Blue on white" sub="Positive · primary" />
          <TreatmentCard bg={colors.signalBlue} markColor="#fff" title="White on Signal Blue" sub="Reversed · inverse" />
          <TreatmentCard bg="#fff" markColor={colors.ink} title="Ink mono on white" sub="Single-colour print fallback" />
        </div>
      </div>

      <div style={{ padding: '30px 66px 0', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 26 }}>
        <div>
          <div style={kicker}>3.3 · Clear Space</div>
          <div style={{ marginTop: 16, background: colors.mist, borderRadius: 14, padding: 34, position: 'relative' }}>
            <div
              style={{
                border: `1.5px dashed ${colors.signalBlue}`,
                borderRadius: 8,
                padding: 34,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 14,
                color: colors.signalBlue,
                position: 'relative',
              }}
            >
              <Monogram size={34} />
              <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', color: colors.ink }}>Maxxim</span>
              <span style={{ ...clearSpaceX, top: -11, left: '50%', transform: 'translateX(-50%)', padding: '0 8px' }}>x</span>
              <span style={{ ...clearSpaceX, bottom: -11, left: '50%', transform: 'translateX(-50%)', padding: '0 8px' }}>x</span>
              <span style={{ ...clearSpaceX, left: -11, top: '50%', transform: 'translateY(-50%)', padding: '2px 0' }}>x</span>
              <span style={{ ...clearSpaceX, right: -11, top: '50%', transform: 'translateY(-50%)', padding: '2px 0' }}>x</span>
            </div>
            <p style={{ marginTop: 16, fontSize: 14, fontWeight: 400, lineHeight: 1.5, color: colors.captionGrey }}>
              Clear space equals the cap-height of the wordmark (x) on all four sides. Keep it free of type, imagery,
              and competing marks.
            </p>
          </div>
        </div>
        <div>
          <div style={kicker}>3.4 · Minimum Sizes</div>
          <div style={{ marginTop: 16, border: `1px solid ${colors.border}`, borderRadius: 14, overflow: 'hidden' }}>
            {sizeRow('Horizontal', '120px / 24mm')}
            {sizeRow('Stacked', '80px / 18mm')}
            {sizeRow('Icon floor', '16px favicon')}
            {sizeRow('Icon master', '1024px app', true)}
          </div>
        </div>
      </div>

      <PageNumber n="07" />
    </Page>
  )
}
