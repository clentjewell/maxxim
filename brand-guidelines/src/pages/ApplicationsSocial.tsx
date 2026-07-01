import Page from '../components/Page'
import Monogram from '../components/Monogram'
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

export default function ApplicationsSocial() {
  return (
    <Page>
      <div style={{ padding: '52px 66px 0', display: 'grid', gridTemplateColumns: '0.8fr 1fr', gap: 26 }}>
        <div>
          <div style={kicker}>9.3 · Social Post Template</div>
          <div
            style={{
              marginTop: 14,
              background: '#fff',
              border: `1px solid ${colors.border}`,
              borderRadius: 16,
              padding: '28px 28px 22px',
              boxShadow: '0 8px 24px rgba(10,10,10,.05)',
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2, color: colors.signalBlue }}>
              AI runs the 80 percent. You own the 20 percent clients pay for.
            </div>
            <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.5, color: colors.bodyGrey }}>
              The engine handles the repeatable work. A named human signs off every gate, and the client owns what
              ships.
            </p>
            <div
              style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: `1px solid ${colors.borderSoft}`,
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                color: colors.signalBlue,
              }}
            >
              <Monogram size={24} />
              <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: colors.ink }}>Maxxim</span>
            </div>
          </div>
        </div>
        <div>
          <div style={kicker}>In hand</div>
          <div style={{ marginTop: 14, position: 'relative', height: 326 }}>
            <ImageSlot spec={IMAGE_SLOTS.s9Social} />
          </div>
        </div>
      </div>

      <div style={{ padding: '26px 66px 0' }}>
        <div style={kicker}>9.4 · Website Hero</div>
        <div
          style={{
            marginTop: 14,
            border: `1px solid ${colors.border}`,
            borderRadius: 14,
            overflow: 'hidden',
            boxShadow: '0 12px 30px rgba(10,10,10,.06)',
          }}
        >
          <div style={{ background: colors.borderSoft, padding: '11px 16px', display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#D6D9E0' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#D6D9E0' }} />
            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#D6D9E0' }} />
            <span style={{ marginLeft: 14, fontSize: 12, color: colors.labelGrey }}>maxxim.ai</span>
          </div>
          <div style={{ background: colors.signalBlue, color: '#fff' }}>
            <div
              style={{
                padding: '16px 34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255,255,255,.16)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <Monogram size={26} />
                <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em' }}>Maxxim</span>
              </div>
              <div style={{ display: 'flex', gap: 24, fontSize: 14, color: 'rgba(255,255,255,.85)' }}>
                <span>Method</span>
                <span>Partners</span>
                <span>Proof</span>
              </div>
            </div>
            <div style={{ padding: '44px 34px 46px' }}>
              <div style={{ fontSize: 46, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.05 }}>
                The human at the wheel.
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 18,
                  fontWeight: 300,
                  color: 'rgba(255,255,255,.85)',
                  maxWidth: 640,
                  lineHeight: 1.45,
                }}
              >
                AI runs the repeatable 80 percent. You own the 20 percent clients pay for.
              </div>
              <div
                style={{
                  marginTop: 24,
                  background: '#fff',
                  color: colors.signalBlue,
                  fontSize: 16,
                  fontWeight: 600,
                  padding: '13px 26px',
                  borderRadius: 10,
                  display: 'inline-block',
                }}
              >
                Become a Partner
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageNumber n="21" />
    </Page>
  )
}
