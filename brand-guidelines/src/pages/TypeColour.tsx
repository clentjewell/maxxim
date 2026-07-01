import Page from '../components/Page'
import ImageSlot from '../components/ImageSlot'
import PageNumber from '../components/PageNumber'
import { IMAGE_SLOTS } from '../data/imageSlots'
import { colors } from '../theme'

const kicker: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: '0.06em',
  color: colors.labelGrey,
  textTransform: 'uppercase',
}

const rule = (glyph: string, glyphColor: string, children: React.ReactNode, textColor: string) => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
    <span style={{ color: glyphColor, fontWeight: 700, marginTop: 1 }}>{glyph}</span>
    <span style={{ fontSize: 16, color: textColor, lineHeight: 1.45 }}>{children}</span>
  </div>
)

export default function TypeColour() {
  return (
    <Page style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '52px 66px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 }}>
        <div>
          <div style={kicker}>5.3 · Type Colour Rules</div>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {rule('›', colors.signalBlue, <>Body on white: <span style={{ fontWeight: 600 }}>Ink #0A0A0A</span></>, colors.ink)}
            {rule('›', colors.signalBlue, <>Headlines on white: <span style={{ fontWeight: 600 }}>Ink or Signal Blue</span></>, colors.ink)}
            {rule('›', colors.signalBlue, <>Any text on Signal Blue: <span style={{ fontWeight: 600 }}>White only</span></>, colors.ink)}
            {rule('✕', colors.dontRed, <>Never coloured type in non-brand hues, or script and decorative fonts alongside Poppins.</>, colors.bodyGrey)}
          </div>
        </div>
        <div>
          <div style={kicker}>5.4 · Tracked Display Text</div>
          <div
            style={{
              marginTop: 16,
              background: colors.mist,
              borderRadius: 16,
              padding: '44px 30px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 180,
            }}
          >
            <div style={{ fontSize: 48, fontWeight: 700, color: colors.signalBlue, letterSpacing: '0.2em', paddingLeft: '0.2em' }}>
              MAXXIM
            </div>
            <div style={{ marginTop: 14, fontSize: 13, color: colors.labelGrey }}>
              Poppins Bold · tracking +200 · Signal Blue on white
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '30px 66px 0' }}>
        <div style={{ background: colors.ink, borderRadius: 16, padding: '40px 44px' }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', color: colors.blueTint }}>SPECIMEN</div>
          <div style={{ marginTop: 14, fontSize: 34, fontWeight: 600, letterSpacing: '-0.015em', color: '#fff', lineHeight: 1.25 }}>
            The proven method, run by a human, at AI speed.
          </div>
          <div style={{ marginTop: 14, fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,.7)' }}>
            Poppins Light through Bold, one family carries the whole system.
          </div>
        </div>
      </div>

      <div style={{ flex: 1, position: 'relative', margin: '26px 66px 40px' }}>
        <ImageSlot spec={IMAGE_SLOTS.s5Doc} />
      </div>

      <PageNumber n="12" />
    </Page>
  )
}
