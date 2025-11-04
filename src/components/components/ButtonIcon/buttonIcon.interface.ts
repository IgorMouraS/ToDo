import type { VariantProps } from "class-variance-authority";
import type { iconBgCva } from './buttonIcon.cva'
import type { ComponentProps } from "react";

import type Icon from "../Icon/Icon";

export interface ButtonIconProps extends Omit<ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof iconBgCva> {
  icon: ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
  animate?: boolean;
}