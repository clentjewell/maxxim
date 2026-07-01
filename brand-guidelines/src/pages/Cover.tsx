import Page from '../components/Page'
import Monogram from '../components/Monogram'
import ImageSlot from '../components/ImageSlot'
import { IMAGE_SLOTS } from '../data/imageSlots'
import { colors } from '../theme'

export default function Cover() {
  return (
    <Page style={{ background: colors.signalBlue }}>
      <ImageSlot spec={IMAGE_SLOTS.coverCity} />
      <div style={{ position: 'absolute', inset: 0, background: colors.signalBlue, opacity: 0.86 }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
        <Monogram size={112} style={{ color: '#fff' }} />
        <div style={{ marginTop: 30, fontSize: 82, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>
          Maxxim
        </div>
        <div
          style={{
            marginTop: 34,
            fontSize: 22,
            fontWeight: 300,
            letterSpacing: '0.42em',
            textTransform: 'uppercase',
            paddingLeft: '0.42em',
          }}
        >
          Brand Guidelines
        </div>
        <div style={{ marginTop: 26, width: 64, height: 2, background: 'rgba(255,255,255,.55)' }} />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 52,
          right: 64,
          color: '#fff',
          fontSize: 15,
          fontWeight: 400,
          letterSpacing: '0.04em',
          opacity: 0.92,
        }}
      >
        Edition 03 · 2026
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 52,
          left: 64,
          color: '#fff',
          fontSize: 13,
          fontWeight: 400,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          opacity: 0.8,
        }}
      >
        The human at the wheel
      </div>
    </Page>
  )
}
