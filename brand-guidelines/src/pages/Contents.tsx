import Page from '../components/Page'
import Monogram from '../components/Monogram'
import { colors } from '../theme'

const ENTRIES: { no: string; title: string; page: string }[] = [
  { no: '01', title: 'Brand Philosophy', page: '03' },
  { no: '02', title: 'Brand Strategy Foundation', page: '04' },
  { no: '03', title: 'Logo System', page: '06' },
  { no: '04', title: 'Colour Palette', page: '09' },
  { no: '05', title: 'Typography', page: '11' },
  { no: '06', title: 'Imagery Direction', page: '13' },
  { no: '07', title: 'Brand Voice', page: '16' },
  { no: '08', title: 'The Specialists', page: '19' },
  { no: '09', title: 'Application Examples', page: '20' },
]

export default function Contents() {
  return (
    <Page style={{ display: 'flex' }}>
      <div
        style={{
          width: 360,
          flex: 'none',
          background: colors.ink,
          color: '#fff',
          padding: '68px 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Monogram size={52} style={{ color: colors.signalBlue }} />
          <h1 style={{ marginTop: 40, fontSize: 46, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.02 }}>
            Contents
          </h1>
          <p style={{ marginTop: 20, fontSize: 15, fontWeight: 300, lineHeight: 1.6, color: 'rgba(255,255,255,.66)' }}>
            The proven method, run by a human, at AI speed.
          </p>
        </div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,.5)',
          }}
        >
          Edition 03 · 2026
        </div>
      </div>
      <div
        style={{
          flex: 1,
          padding: '78px 72px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {ENTRIES.map((e, i) => (
          <div
            key={e.no}
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 22,
              padding: '19px 0',
              borderBottom: i === ENTRIES.length - 1 ? 'none' : `1px solid ${colors.border}`,
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 600, color: colors.signalBlue, width: 34 }}>{e.no}</span>
            <span style={{ flex: 1, fontSize: 22, fontWeight: 500, color: colors.ink }}>{e.title}</span>
            <span style={{ fontSize: 15, color: colors.labelGrey }}>{e.page}</span>
          </div>
        ))}
      </div>
    </Page>
  )
}
