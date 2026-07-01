import Page from '../components/Page'
import PageNumber from '../components/PageNumber'
import { colors } from '../theme'

function NeutralRow({
  swatch,
  swatchBorder,
  name,
  specs,
  usage,
}: {
  swatch: string
  swatchBorder?: boolean
  name: string
  specs: string
  usage: string
}) {
  return (
    <div style={{ border: `1px solid ${colors.border}`, borderRadius: 14, overflow: 'hidden', display: 'flex' }}>
      <div
        style={{
          width: 96,
          flex: 'none',
          background: swatch,
          borderRight: swatchBorder ? `1px solid ${colors.border}` : undefined,
        }}
      />
      <div style={{ padding: '14px 20px' }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: colors.ink }}>{name}</div>
        <div style={{ fontSize: 12.5, color: colors.labelGrey, marginTop: 2 }}>{specs}</div>
        <div style={{ fontSize: 13, color: colors.bodyGrey, marginTop: 7, lineHeight: 1.4 }}>{usage}</div>
      </div>
    </div>
  )
}

export default function Colour() {
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
          Section 04 · Colour Palette
        </div>
        <h1 style={{ marginTop: 12, fontSize: 46, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.04, color: colors.ink }}>
          Signal Blue leads. Everything else follows.
        </h1>
        <div style={{ marginTop: 20, height: 2, background: colors.signalBlue, width: '100%' }} />
      </div>

      <div style={{ padding: '30px 66px 0', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 26 }}>
        <div
          style={{
            background: colors.signalBlue,
            borderRadius: 18,
            padding: '34px 36px',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 420,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', color: 'rgba(255,255,255,.72)' }}>
                PRIMARY · SIGNAL BLUE
              </div>
              <div style={{ marginTop: 10, fontSize: 52, fontWeight: 700, letterSpacing: '-0.02em' }}>#2D5BFF</div>
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,.18)',
                borderRadius: 999,
                padding: '7px 16px',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.08em',
              }}
            >
              LOCKED
            </div>
          </div>
          <div style={{ display: 'flex', gap: 26, fontSize: 14, fontWeight: 400, color: 'rgba(255,255,255,.9)' }}>
            <div>
              <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12 }}>RGB</div>45 / 91 / 255
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12 }}>CMYK</div>82 / 64 / 0 / 0
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 12 }}>PANTONE</div>2727 C
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,.22)', paddingTop: 16 }}>
            <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.5, color: 'rgba(255,255,255,.94)' }}>
              Brand fields, positive mark on white, reverse field for white knockout, CTAs, links, accents. It leads
              everywhere.
            </p>
            <p style={{ marginTop: 10, fontSize: 13.5, fontWeight: 300, lineHeight: 1.5, color: 'rgba(255,255,255,.75)' }}>
              Blue reads as trust, reliability and competence. The electric saturation signals AI speed. "Signal" means
              clarity over noise.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <NeutralRow
            swatch={colors.ink}
            name="Ink · #0A0A0A"
            specs="RGB 10/10/10 · CMYK 0/0/0/96 · PMS Neutral Black C"
            usage="Primary text, mono mark, dark ground for reversed white mark."
          />
          <NeutralRow
            swatch="#fff"
            swatchBorder
            name="White · #FFFFFF"
            specs="RGB 255/255/255"
            usage="Primary background. Reversed mark knocked out of blue or dark."
          />
          <NeutralRow
            swatch={colors.mist}
            swatchBorder
            name="Mist · #F5F6F8"
            specs="RGB 245/246/248"
            usage="Light neutral surfaces, proposal covers, light end-client contexts."
          />
          <div style={{ fontSize: 12.5, color: colors.labelGrey, paddingLeft: 4 }}>
            Neutrals are recommended supporting colours, not locked.
          </div>
        </div>
      </div>

      <PageNumber n="09" />
    </Page>
  )
}
