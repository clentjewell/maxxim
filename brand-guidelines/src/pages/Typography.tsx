import Page from '../components/Page'
import PageNumber from '../components/PageNumber'
import { colors } from '../theme'

function ScaleRow({
  specimen,
  spec,
  style,
  last = false,
}: {
  specimen: string
  spec: string
  style: React.CSSProperties
  last?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        padding: '12px 0',
        borderBottom: last ? 'none' : `1px solid ${colors.borderSoft}`,
      }}
    >
      <span style={{ color: colors.ink, ...style }}>{specimen}</span>
      <span style={{ fontSize: 13.5, color: colors.labelGrey }}>{spec}</span>
    </div>
  )
}

export default function Typography() {
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
          Section 05 · Typography
        </div>
        <h1 style={{ marginTop: 12, fontSize: 50, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.02, color: colors.ink }}>
          Poppins. Weight does the work.
        </h1>
        <div style={{ marginTop: 20, height: 2, background: colors.signalBlue, width: '100%' }} />
      </div>

      <div style={{ padding: '26px 66px 0' }}>
        <p style={{ fontSize: 16, fontWeight: 400, lineHeight: 1.6, color: colors.bodyGrey, maxWidth: 900 }}>
          Poppins is a geometric sans-serif: modern, clean, even, approachable without being playful or decorative. It
          carries the operator-to-operator plainness of the brand voice and the builder precision of the Creator
          archetype. Weight and hierarchy create emphasis, not ornament.
        </p>
      </div>

      <div style={{ padding: '22px 66px 0' }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: colors.labelGrey,
            textTransform: 'uppercase',
          }}
        >
          5.2 · Type Scale
        </div>
        <div style={{ marginTop: 14, borderTop: `1px solid ${colors.border}` }}>
          <ScaleRow specimen="Display / Hero" spec="Bold · 64–72pt · cover headlines" style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em' }} />
          <ScaleRow specimen="H1 Section heading" spec="SemiBold · 40–48pt · section titles" style={{ fontSize: 34, fontWeight: 600, letterSpacing: '-0.015em' }} />
          <ScaleRow specimen="H2 Sub-section heading" spec="Medium · 28–32pt · sub-sections" style={{ fontSize: 27, fontWeight: 500, letterSpacing: '-0.01em' }} />
          <ScaleRow specimen="H3 Panel heading" spec="SemiBold · 20–22pt · panel headings" style={{ fontSize: 21, fontWeight: 600 }} />
          <ScaleRow specimen="Body copy, the running text of the document" spec="Regular · 16–18pt · running text" style={{ fontSize: 17, fontWeight: 400 }} />
          <ScaleRow specimen="Caption and data label text" spec="Regular · 12–14pt · captions" style={{ fontSize: 14, fontWeight: 400 }} />
          <ScaleRow specimen="Small and legal fine print" spec="Light · 10–12pt · footnotes" style={{ fontSize: 12, fontWeight: 300 }} last />
        </div>
      </div>

      <PageNumber n="11" />
    </Page>
  )
}
