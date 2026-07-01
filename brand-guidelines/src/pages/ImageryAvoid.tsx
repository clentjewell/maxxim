import Page from '../components/Page'
import PageNumber from '../components/PageNumber'
import { colors } from '../theme'

function AvoidRow({ children, full = false }: { children: React.ReactNode; full?: boolean }) {
  return (
    <div
      style={{
        gridColumn: full ? '1 / -1' : undefined,
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        background: colors.mist,
        borderRadius: 14,
        padding: '22px 24px',
      }}
    >
      <span
        style={{
          width: 34,
          height: 34,
          flex: 'none',
          borderRadius: '50%',
          background: colors.dontRedBg,
          color: colors.dontRed,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        ✕
      </span>
      <span style={{ fontSize: 16.5, color: colors.ink, lineHeight: 1.4 }}>{children}</span>
    </div>
  )
}

export default function ImageryAvoid() {
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
          6.3 · What to Avoid
        </div>
        <h2 style={{ marginTop: 10, fontSize: 30, fontWeight: 600, letterSpacing: '-0.015em', color: colors.ink }}>
          Imagery that quietly breaks the position.
        </h2>
      </div>

      <div style={{ padding: '28px 66px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <AvoidRow>Glowing brains, neural networks, circuit-board overlays</AvoidRow>
        <AvoidRow>Robotic hands or AI robot imagery</AvoidRow>
        <AvoidRow>Heavily posed corporate stock photography</AvoidRow>
        <AvoidRow>Illustrated or cartoon icons as hero images</AvoidRow>
        <AvoidRow full>Purple, teal or neon colour washes · they undercut Signal Blue's leadership</AvoidRow>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 26,
          left: 66,
          right: 66,
          background: colors.signalBlue,
          borderRadius: 14,
          padding: '20px 28px',
        }}
      >
        <p style={{ fontSize: 16, fontWeight: 400, color: '#fff', lineHeight: 1.45 }}>
          When in doubt: choose the photograph that shows a real person accountable for real, finished work.
        </p>
      </div>

      <PageNumber n="15" bottom={6} />
    </Page>
  )
}
