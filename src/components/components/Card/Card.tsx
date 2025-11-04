import { createElement } from "react";
import type { CardProps } from "./card.interface";
import { cardCva } from "./card.cva";
import Skeleton from "../Skeleton/Skeleton";

export default function Card({ loading, variant, size, as = 'div', className, children, ...props }: CardProps) {
  if (loading) return <Skeleton rounded={'lg'} className={cardCva({ variant: "none", size: "none", className })} />

  return createElement(
    as,
    {
      className: cardCva({ variant, size, className }),
      ...props
    },
    children
  )
}