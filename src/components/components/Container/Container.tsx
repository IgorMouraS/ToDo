import { createElement } from "react";
import type { ContainerProps } from "./container.interface";
import { containerCva } from "./container.cva";

export default function Container({ size, as = 'div', className, children, ...props }: ContainerProps) {
  return createElement(
    as,
    {
      className: containerCva({ size, className }),
      ...props
    },
    children
  )
}