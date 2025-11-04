import { createElement } from 'react'

import type { TextProps } from './text.interface'
import { textCva } from './text.cva'

export default function Text({ as = "span", className = "", variant, color, children, ...props }: TextProps) {
  return createElement(as, { className: textCva({ variant, color, className }), ...props }, children)
}