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

export default function ApplicationsProposal() {
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
          Section 09 · Application Examples
        </div>
        <h1 style={{ marginTop: 12, fontSize: 50, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.02, color: colors.ink }}>
          The system in the world.
        </h1>
        <div style={{ marginTop: 20, height: 2, background: colors.signalBlue, width: '100%' }} />
      </div>

      <div style={{ padding: '26px 66px 0', display: 'grid', gridTemplateColumns: '0.85fr 1fr', gap: 26 }}>
        <div>
          <div style={kicker}>9.1 · Proposal Cover</div>
          <div
            style={{
              marginTop: 14,
              background: colors.signalBlue,
              borderRadius: 14,
              height: 340,
              padding: '30px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: '#fff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Monogram size={30} />
              <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>Maxxim</span>
            </div>
            <div>
              <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.15 }}>
                Growth Partnership Proposal
              </div>
              <div style={{ marginTop: 12, fontSize: 15, fontWeight: 300, color: 'rgba(255,255,255,.82)' }}>
                Prepared for [Client Name]
              </div>
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,.25)',
                paddingTop: 14,
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: '0.04em',
                color: 'rgba(255,255,255,.85)',
              }}
            >
              Maxxim · Jewell Projects
            </div>
          </div>
        </div>
        <div>
          <div style={kicker}>In context</div>
          <div style={{ marginTop: 14, position: 'relative', height: 340 }}>
            <ImageSlot spec={IMAGE_SLOTS.s9Proposal} />
          </div>
        </div>
      </div>

      <div style={{ padding: '24px 66px 0' }}>
        <div style={kicker}>9.2 · Email Signature</div>
        <div
          style={{
            marginTop: 12,
            background: colors.mist,
            border: `1px solid ${colors.border}`,
            borderRadius: 14,
            padding: '22px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ lineHeight: 1.5 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: colors.ink }}>[Partner Name]</div>
            <div style={{ fontSize: 14, color: colors.bodyGrey }}>Maxxim Partner</div>
            <div style={{ fontSize: 14, color: colors.bodyGrey }}>partner@theirdomain.com</div>
            <div style={{ marginTop: 8, fontSize: 14, color: colors.bodyGrey }}>
              Maxxim, the human at the wheel.&nbsp;&nbsp;·&nbsp;&nbsp;maxxim.ai
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: colors.signalBlue }}>
            <Monogram size={26} />
            <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>Maxxim</span>
          </div>
        </div>
      </div>

      <PageNumber n="20" />
    </Page>
  )
}
