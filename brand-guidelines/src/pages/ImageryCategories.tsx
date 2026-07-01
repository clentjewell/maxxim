import Page from '../components/Page'
import ImageSlot from '../components/ImageSlot'
import PageNumber from '../components/PageNumber'
import { IMAGE_SLOTS } from '../data/imageSlots'
import { colors } from '../theme'

function CategoryColumn({
  no,
  title,
  body,
  slot,
}: {
  no: string
  title: string
  body: string
  slot: (typeof IMAGE_SLOTS)[keyof typeof IMAGE_SLOTS]
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: colors.signalBlue }}>{no}</span>
        <span style={{ fontSize: 19, fontWeight: 600, color: colors.ink }}>{title}</span>
      </div>
      <p style={{ marginTop: 8, fontSize: 14.5, color: colors.bodyGrey, lineHeight: 1.45 }}>{body}</p>
      <div style={{ flex: 1, position: 'relative', marginTop: 14 }}>
        <ImageSlot spec={slot} />
      </div>
    </div>
  )
}

export default function ImageryCategories() {
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
          6.2 · Image Categories, continued
        </div>
      </div>

      <div style={{ flex: 1, padding: '22px 66px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26 }}>
        <CategoryColumn
          no="CATEGORY 2"
          title="The Finished Outcome"
          body="Actual digital deliverables. Live websites in a browser, proposal documents, a phone showing a post."
          slot={IMAGE_SLOTS.s6Cat2}
        />
        <CategoryColumn
          no="CATEGORY 3"
          title="The Table / Community"
          body="Partners together. A meeting at a table, people reviewing shared work. Warm and collaborative."
          slot={IMAGE_SLOTS.s6Cat3}
        />
      </div>

      <PageNumber n="14" />
    </Page>
  )
}
