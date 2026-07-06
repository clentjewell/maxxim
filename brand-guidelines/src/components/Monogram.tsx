/**
 * Gated-M monogram — the icon half of the Maxxim mark (Edition 03 refresh).
 *
 * A solid rounded "gate" tile filled with `currentColor`, with the M knocked
 * out so it reveals the ground: Signal Blue tile + white M on light surfaces,
 * white tile + blue M on Signal Blue or dark. The Blue Frog is permanently
 * removed and must never appear.
 */
export default function Monogram({
  size = 100,
  style,
}: {
  size?: number
  style?: React.CSSProperties
}) {
  const id = 'mono-knockout'
  return (
    <span style={{ width: size, height: size, display: 'block', ...style }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', display: 'block' }}>
        <defs>
          <mask id={id}>
            <rect x="2" y="2" width="96" height="96" rx="26" fill="#fff" />
            <path
              d="M29 69 L29 32 L50 54 L71 32 L71 69"
              fill="none"
              stroke="#000"
              strokeWidth="9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
        </defs>
        <rect x="2" y="2" width="96" height="96" rx="26" fill="currentColor" mask={`url(#${id})`} />
      </svg>
    </span>
  )
}
