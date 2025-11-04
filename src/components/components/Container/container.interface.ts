import type { VariantProps } from "class-variance-authority";

import { containerCva } from "./container.cva";
import type { ComponentProps } from "react";

export interface ContainerProps extends ComponentProps<"div">, VariantProps<typeof containerCva> {
  as?: keyof React.JSX.IntrinsicElements
}