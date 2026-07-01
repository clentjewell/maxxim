import Page from '../components/Page'
import Monogram from '../components/Monogram'
import ImageSlot from '../components/ImageSlot'
import PageNumber from '../components/PageNumber'
import { IMAGE_SLOTS } from '../data/imageSlots'
import { colors } from '../theme'

const caption: React.CSSProperties = {
  padding: '12px 18px',
  borderTop: `1px solid ${colors.border}`,
  fontSize: 13.5,
  color: colors.bodyGrey,
}

export default function ColourInUse() {
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
          4.3 · Colour in Use
        </div>
      </div>

      <div style={{ padding: '22px 66px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
        {/* CTA on white */}
        <div style={{ border: `1px solid ${colors.border}`, borderRadius: 14, overflow: 'hidden' }}>
          <div
            style={{
              background: '#fff',
              padding: '26px 24px 30px',
              height: 190,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ height: 9, width: '60%', background: colors.border, borderRadius: 6 }} />
            <div style={{ height: 9, width: '82%', background: colors.borderSoft, borderRadius: 6, marginTop: 10 }} />
            <div
              style={{
                marginTop: 22,
                background: colors.signalBlue,
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                padding: '12px 22px',
                borderRadius: 10,
                alignSelf: 'flex-start',
              }}
            >
              Become a Partner
            </div>
          </div>
          <div style={caption}>Signal Blue CTA on a white page</div>
        </div>

        {/* reversed header band */}
        <div style={{ border: `1px solid ${colors.border}`, borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ height: 190, display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                background: colors.signalBlue,
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                color: '#fff',
              }}
            >
              <Monogram size={26} />
              <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em' }}>Maxxim</span>
            </div>
            <div style={{ flex: 1, background: '#fff', padding: '18px 22px' }}>
              <div style={{ height: 9, width: '70%', background: colors.border, borderRadius: 6 }} />
              <div style={{ height: 9, width: '50%', background: colors.borderSoft, borderRadius: 6, marginTop: 10 }} />
            </div>
          </div>
          <div style={caption}>White wordmark reversed out of blue</div>
        </div>

        {/* mist card */}
        <div style={{ border: `1px solid ${colors.border}`, borderRadius: 14, overflow: 'hidden' }}>
          <div
            style={{
              background: colors.mist,
              padding: '26px 24px',
              height: 190,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontSize: 17, fontWeight: 600, color: colors.ink }}>Finished, not busy.</div>
            <div style={{ fontSize: 14, color: colors.bodyGrey, marginTop: 8, lineHeight: 1.5 }}>
              The client owns what gets built.
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: colors.signalBlue, marginTop: 14 }}>
              Read the method →
            </div>
          </div>
          <div style={caption}>Mist card, Ink text, Signal Blue link</div>
        </div>
      </div>

      <div style={{ flex: 1, position: 'relative', margin: '26px 66px 40px' }}>
        <ImageSlot spec={IMAGE_SLOTS.s4Flatlay} />
      </div>

      <PageNumber n="10" />
    </Page>
  )
}
