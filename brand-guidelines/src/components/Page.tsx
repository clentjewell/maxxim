import type { CSSProperties, ReactNode } from 'react'

/**
 * A single A4-landscape page (1123×794). Wraps content in the floating-sheet
 * frame and adds `break-after` for clean one-page-per-sheet PDF export.
 */
export default function Page({
  children,
  style,
}: {
  children: ReactNode
  style?: CSSProperties
}) {
  return (
    <div className="page" style={style}>
      {children}
    </div>
  )
}
