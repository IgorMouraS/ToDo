import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import { inputCva } from "./input.cva";

export interface InputProps extends Omit<ComponentProps<"input">, "size" | "disabled">, VariantProps<typeof inputCva> {
  loading?: boolean
}