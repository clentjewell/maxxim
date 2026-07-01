import Page from '../components/Page'
import PageNumber from '../components/PageNumber'
import { colors } from '../theme'

function MisuseCell({
  bg,
  preview,
  label,
  center = false,
  gap,
}: {
  bg: string
  preview: React.ReactNode
  label: string
  center?: boolean
  gap?: number
}) {
  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        borderRadius: 14,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          flex: 1,
          background: bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: center ? gap : undefined,
        }}
      >
        {preview}
      </div>
      <div
        style={{
          padding: '12px 18px',
          borderTop: `1px solid ${colors.border}`,
          display: 'flex',
          gap: 8,
          alignItems: 'center',
        }}
      >
        <span style={{ color: colors.dontRed, fontWeight: 700 }}>✕</span>
        <span style={{ fontSize: 13.5, color: colors.bodyGrey }}>{label}</span>
      </div>
    </div>
  )
}

const mark = (extra: React.CSSProperties, color: string = colors.signalBlue): React.CSSProperties => ({
  fontSize: 30,
  fontWeight: 700,
  letterSpacing: '-0.02em',
  color,
  ...extra,
})

export default function LogoMisuse() {
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
          3.5 · Logo Misuse
        </div>
        <h2 style={{ marginTop: 10, fontSize: 30, fontWeight: 600, letterSpacing: '-0.015em', color: colors.ink }}>
          Six things the mark never does.
        </h2>
      </div>

      <div
        style={{
          padding: '26px 66px 0',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 20,
          height: 560,
        }}
      >
        <MisuseCell
          bg={colors.mist}
          label="Stretched or skewed mark"
          preview={<span style={mark({ transform: 'scaleX(1.9)' })}>Maxxim</span>}
        />
        <MisuseCell
          bg={colors.signalBlue}
          label="Blue on blue, no contrast"
          preview={<span style={mark({})}>Maxxim</span>}
        />
        <MisuseCell
          bg="#fff"
          label="White on white, no contrast"
          preview={<span style={mark({ textShadow: `0 0 1px ${colors.border}` }, '#fff')}>Maxxim</span>}
        />
        <MisuseCell
          bg={colors.mist}
          label="Rotated mark"
          preview={<span style={mark({ transform: 'rotate(-18deg)' })}>Maxxim</span>}
        />
        <MisuseCell
          bg={colors.mist}
          label="Shadow, glow or gradient"
          preview={<span style={mark({ textShadow: '0 6px 10px rgba(45,91,255,.5)' })}>Maxxim</span>}
        />
        <MisuseCell
          bg={colors.mist}
          center
          gap={8}
          label="Any animal or mascot alongside"
          preview={
            <>
              <span style={mark({})}>Maxxim</span>
              <span style={{ fontSize: 30, color: '#9AA0AC' }}>+ mascot</span>
            </>
          }
        />
      </div>

      <PageNumber n="08" />
    </Page>
  )
}
