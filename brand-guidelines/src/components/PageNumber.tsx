import { colors } from '../theme'

/**
 * Bottom-centre page number. `onDark` switches to a light tone for pages
 * whose footer sits on a Signal Blue field.
 */
export default function PageNumber({
  n,
  onDark = false,
  bottom = 22,
}: {
  n: string
  onDark?: boolean
  bottom?: number
}) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 11,
        letterSpacing: '0.06em',
        color: onDark ? 'rgba(255,255,255,.7)' : colors.pageNumGrey,
      }}
    >
      {n}
    </div>
  )
}
