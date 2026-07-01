import { useState } from 'react'
import { colors } from '../theme'
import type { ImageSlotSpec } from '../data/imageSlots'

/**
 * A fillable image location.
 *
 * If `public/images/<spec.file>` exists it renders the photo (object-fit
 * cover). Until then it shows an on-brand placeholder captioned with the
 * slot's intent. Drop a Higgsfield-generated file at the expected path to
 * fill it — see src/data/imageSlots.ts for each slot's generation prompt.
 */
export default function ImageSlot({
  spec,
  fit = 'cover',
  radius = 0,
  style,
}: {
  spec: ImageSlotSpec
  fit?: 'cover' | 'contain' | 'fill'
  radius?: number
  style?: React.CSSProperties
}) {
  const [failed, setFailed] = useState(false)
  const src = `${import.meta.env.BASE_URL}images/${spec.file}`

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        borderRadius: radius,
        overflow: 'hidden',
        ...style,
      }}
    >
      {!failed && (
        <img
          src={src}
          alt={spec.caption}
          onError={() => setFailed(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: fit,
            display: 'block',
          }}
        />
      )}
      {failed && (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: colors.mist,
            border: `1px dashed ${colors.blueSoft}`,
            borderRadius: radius,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            padding: 24,
            textAlign: 'center',
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect
              x="2.5"
              y="4.5"
              width="19"
              height="15"
              rx="2.5"
              stroke={colors.signalBlue}
              strokeWidth="1.6"
            />
            <circle cx="8.5" cy="9.5" r="1.8" stroke={colors.signalBlue} strokeWidth="1.6" />
            <path
              d="M4 18 L9.5 12.5 L13 15.5 L16 12.5 L20 17"
              stroke={colors.signalBlue}
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: colors.signalBlue,
            }}
          >
            Image
          </div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 400,
              lineHeight: 1.45,
              color: colors.captionGrey,
              maxWidth: 380,
            }}
          >
            {spec.caption}
          </div>
        </div>
      )}
    </div>
  )
}
