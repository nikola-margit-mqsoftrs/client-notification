/** @jsx jsx */
import { jsx } from '@emotion/core'

export default function ServiceCardButton({ children, title, onClick }) {
  return (
    <button
      onClick={onClick}
      css={{
        border: 'none',
        display: 'inline',
        backgroundColor: 'transparent',
        margin: 0,
      }}>
      <span css={{ display: 'block', fontSize: '1.2rem' }}>{children}</span>
      <span>{title}</span>
    </button>
  )
}
