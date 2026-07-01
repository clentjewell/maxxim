/**
 * Gated-M monogram — the icon half of the Maxxim mark.
 *
 * A rounded-square "gate" enclosing an M stroke. Drawn with `currentColor`
 * so a parent's `color` sets the mark colour (Signal Blue, white, or Ink).
 * The Blue Frog is permanently removed and must never appear.
 */
export default function Monogram({
  size = 100,
  style,
}: {
  size?: number
  style?: React.CSSProperties
}) {
  return (
    <span style={{ width: size, height: size, display: 'block', ...style }}>
      <svg
        viewBox="0 0 100 100"
        style={{ width: '100%', height: '100%', display: 'block' }}
        fill="none"
      >
        <rect x="5" y="5" width="90" height="90" rx="24" stroke="currentColor" strokeWidth="7" />
        <path
          d="M27 71 V33 L50 57 L73 33 V71"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
