import Page from '../components/Page'
import Monogram from '../components/Monogram'
import ImageSlot from '../components/ImageSlot'
import { IMAGE_SLOTS } from '../data/imageSlots'
import { colors } from '../theme'

export default function BackCover() {
  return (
    <Page style={{ background: colors.signalBlue }}>
      <ImageSlot spec={IMAGE_SLOTS.backHand} />
      <div style={{ position: 'absolute', inset: 0, background: colors.signalBlue, opacity: 0.9 }} />
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <Monogram size={58} style={{ color: '#fff' }} />
          <span style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.02em' }}>Maxxim</span>
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 15,
            fontWeight: 300,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.82)',
          }}
        >
          The human at the wheel
        </div>
        <div style={{ marginTop: 40, width: 56, height: 2, background: 'rgba(255,255,255,.5)' }} />
        <div style={{ marginTop: 38, fontSize: 14, fontWeight: 400, letterSpacing: '0.04em', color: 'rgba(255,255,255,.9)' }}>
          Edition 03 · July 2026
        </div>
        <div style={{ marginTop: 8, fontSize: 18, fontWeight: 300, letterSpacing: '0.3em', paddingLeft: '0.3em', color: '#fff' }}>
          maxxim.ai
        </div>
      </div>
    </Page>
  )
}
