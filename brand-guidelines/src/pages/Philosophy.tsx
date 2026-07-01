import Page from '../components/Page'
import ImageSlot from '../components/ImageSlot'
import PageNumber from '../components/PageNumber'
import { IMAGE_SLOTS } from '../data/imageSlots'
import { colors } from '../theme'

export default function Philosophy() {
  return (
    <Page style={{ display: 'flex' }}>
      <div
        style={{
          width: 430,
          flex: 'none',
          background: colors.signalBlue,
          color: '#fff',
          padding: '76px 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.75)',
          }}
        >
          Section 01 · Brand Philosophy
        </div>
        <h1 style={{ fontSize: 60, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.04 }}>
          The human at the wheel.
        </h1>
        <div style={{ fontSize: 14, fontWeight: 300, letterSpacing: '0.04em', color: 'rgba(255,255,255,.8)' }}>
          Maxxim is a method, not a magic box.
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '76px 66px 40px' }}>
          <p style={{ fontSize: 21, fontWeight: 400, lineHeight: 1.62, color: colors.ink }}>
            Maxxim exists because the trust gap between AI capability and what clients will actually sign off on has
            not closed, and it will not close until a named human stands behind the outcome at every gate.
          </p>
          <p style={{ marginTop: 24, fontSize: 17, fontWeight: 400, lineHeight: 1.66, color: colors.bodyGrey }}>
            The engine runs at AI speed. The human stays at the wheel. The client owns what gets built. That is not a
            feature. It is the architecture.
          </p>
          <p style={{ marginTop: 20, fontSize: 17, fontWeight: 400, lineHeight: 1.66, color: colors.bodyGrey }}>
            Three values run the engagement: fast and accountable and method-backed. No one else has all three.
            Consultancies are accountable but slow. AI tools are fast but faceless. Maxxim is the only model that holds
            all three at once, with a 35-year live operator already running it in market.
          </p>
        </div>
        <div style={{ flex: 1, position: 'relative', margin: '0 66px 0' }}>
          <ImageSlot spec={IMAGE_SLOTS.s1Desk} />
        </div>
        <div style={{ height: 40 }} />
      </div>
      <PageNumber n="03" />
    </Page>
  )
}
