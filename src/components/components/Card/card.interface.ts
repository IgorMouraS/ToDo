import type { VariantProps } from "class-variance-authority";

import { cardCva } from "./card.cva";
import type { ComponentProps } from "react";

export interface CardProps extends ComponentProps<"div">, VariantProps<typeof cardCva> {
  as?: keyof React.JSX.IntrinsicElements;
  loading?: boolean;
}