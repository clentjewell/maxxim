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

const styleRule = (text: React.ReactNode) => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
    <span style={{ color: colors.signalBlue, fontWeight: 700 }}>›</span>
    <span style={{ fontSize: 16, color: colors.ink, lineHeight: 1.45 }}>{text}</span>
  </div>
)

function ChannelRow({ name, tone, last = false }: { name: string; tone: string; last?: boolean }) {
  return (
    <div style={{ padding: '16px 20px', borderBottom: last ? 'none' : `1px solid ${colors.borderSoft}` }}>
      <div style={{ fontSize: 15, fontWeight: 600, color: colors.signalBlue }}>{name}</div>
      <div style={{ fontSize: 14, color: colors.bodyGrey, marginTop: 3, lineHeight: 1.4 }}>{tone}</div>
    </div>
  )
}

export default function VoiceStyle() {
  return (
    <Page>
      <div style={{ padding: '52px 66px 0', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 34 }}>
        <div>
          <div style={kicker}>7.3 · Style Rules</div>
          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {styleRule('Australian English throughout')}
            {styleRule('No em dashes. Use commas or full stops instead')}
            {styleRule('No exclamation marks. The claim carries the emphasis')}
            {styleRule('Short sentences over complex constructions')}
            {styleRule('Name the specialists, Max, Sal and Pip, to make the engine concrete. They are the method, not the hero')}
          </div>
        </div>
        <div>
          <div style={kicker}>7.4 · Channel Tone</div>
          <div style={{ marginTop: 18, border: `1px solid ${colors.border}`, borderRadius: 12, overflow: 'hidden' }}>
            <ChannelRow name="Website / partner hub" tone="Fullest Sage expression. Lead with position then proof." />
            <ChannelRow name="Community sessions" tone="Warmer, more reciprocal. Discovery and alignment, not pitch." />
            <ChannelRow name="End-client copy (via partners)" tone="Simpler, outcome-led. Done for you, owned by you, live in days." />
            <ChannelRow name="Proposals / gate sign-offs" tone="Most formal and precise. Separate locked from open explicitly." />
            <ChannelRow name="Social / short form" tone="Sage compressed. One sharp, true claim. No exclamation marks." last />
          </div>
        </div>
      </div>

      <PageNumber n="18" />
    </Page>
  )
}
