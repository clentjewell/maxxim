import Page from '../components/Page'
import PageNumber from '../components/PageNumber'
import { colors } from '../theme'

function Pair({ label, doText, dontText }: { label: string; doText: string; dontText: string }) {
  return (
    <div>
      <div style={{ fontSize: 14, fontWeight: 600, color: colors.ink, marginBottom: 9 }}>{label}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ background: colors.signalBlue, borderRadius: 14, padding: '20px 24px' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,.75)' }}>DO</div>
          <p style={{ marginTop: 8, fontSize: 15.5, lineHeight: 1.5, color: '#fff' }}>{doText}</p>
        </div>
        <div style={{ background: '#fff', border: `1.5px solid ${colors.dontRedBorder}`, borderRadius: 14, padding: '20px 24px' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: colors.dontRed }}>DON'T</div>
          <p style={{ marginTop: 8, fontSize: 15.5, lineHeight: 1.5, color: colors.labelGrey }}>{dontText}</p>
        </div>
      </div>
    </div>
  )
}

export default function VoiceDoDont() {
  return (
    <Page>
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
          7.2 · Do / Don't Copy Examples
        </div>
      </div>

      <div style={{ padding: '24px 66px 0', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Pair
          label="Confidence"
          doText="The method has run with real clients for years. Pottsville is launched, and the client owns it. Jewell now runs the whole model in market."
          dontText="Maxxim is the revolutionary AI platform transforming marketing forever."
        />
        <Pair
          label="Formality"
          doText="AI runs the repeatable 80 percent at speed. You own the 20 percent clients pay for."
          dontText="Our synergistic end-to-end solution leverages cutting-edge artificial intelligence to optimise outcomes."
        />
        <Pair
          label="Accountability"
          doText="A named human signs off at every gate, so the work is something you can stand behind."
          dontText="Our AI handles everything automatically, no human needed."
        />
      </div>

      <PageNumber n="17" />
    </Page>
  )
}
