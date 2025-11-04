import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import { iconCva } from './icon.cva'

export interface IconProps extends ComponentProps<"svg">, VariantProps<typeof iconCva> {
  loading?: boolean;
  svg: React.FC<ComponentProps<"svg">>
}