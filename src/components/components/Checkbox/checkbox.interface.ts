import type { VariantProps } from "class-variance-authority";

import { checkboxCva } from "./checkbox.cva";
import type { ComponentProps } from "react";

export interface CheckboxProps extends ComponentProps<"label">, VariantProps<typeof checkboxCva> {
  loading?: boolean;
  checked?: boolean
}