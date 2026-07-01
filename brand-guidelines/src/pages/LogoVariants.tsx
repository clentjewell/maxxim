import Page from '../components/Page'
import Monogram from '../components/Monogram'
import PageNumber from '../components/PageNumber'
import { colors } from '../theme'

const card: React.CSSProperties = {
  background: colors.mist,
  border: `1px solid ${colors.border}`,
  borderRadius: 16,
}

export default function LogoVariants() {
  return (
    <Page style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: colors.signalBlue, color: '#fff', padding: '44px 66px 40px' }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.75)',
          }}
        >
          Section 03 · Logo System
        </div>
        <h1 style={{ marginTop: 10, fontSize: 50, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.02 }}>
          The mark. Edition 03.
        </h1>
      </div>

      <div style={{ flex: 1, padding: '38px 66px 0' }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: colors.labelGrey,
            textTransform: 'uppercase',
          }}
        >
          3.1 · Variants
        </div>

        <div
          style={{
            ...card,
            marginTop: 18,
            padding: '34px 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, color: colors.signalBlue }}>
            <Monogram size={70} />
            <span style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-0.02em', color: colors.ink }}>Maxxim</span>
          </div>
          <div style={{ textAlign: 'right', maxWidth: 300 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: colors.ink }}>Horizontal lockup</div>
            <div style={{ marginTop: 6, fontSize: 14, fontWeight: 400, color: colors.captionGrey, lineHeight: 1.45 }}>
              Default. Website, proposals, email signature.
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <div style={{ ...card, padding: 30, display: 'flex', alignItems: 'center', gap: 26 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                color: colors.signalBlue,
              }}
            >
              <Monogram size={58} />
              <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em', color: colors.ink }}>Maxxim</span>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: colors.ink }}>Stacked lockup</div>
              <div style={{ marginTop: 6, fontSize: 14, fontWeight: 400, color: colors.captionGrey, lineHeight: 1.45 }}>
                Square and vertical formats, merch, slides.
              </div>
            </div>
          </div>
          <div style={{ ...card, padding: 30, display: 'flex', alignItems: 'center', gap: 26 }}>
            <Monogram size={70} style={{ flex: 'none', color: colors.signalBlue }} />
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: colors.ink }}>Icon only</div>
              <div style={{ marginTop: 6, fontSize: 14, fontWeight: 400, color: colors.captionGrey, lineHeight: 1.45 }}>
                Favicon, app icon, avatar. 16px minimum.
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageNumber n="06" />
    </Page>
  )
}
