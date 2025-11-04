import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import { badgeBgCva } from "./badge.cva";

export interface BadgeProps extends ComponentProps<"div">, VariantProps<typeof badgeBgCva> {
  loading?: boolean
}