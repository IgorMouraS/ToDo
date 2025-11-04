import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import type Icon from "../Icon/Icon";

import { buttonBgCva } from "./button.cva";

export interface ButtonProps extends
  Omit<ComponentProps<"button">, "size" | "disabled">,
  VariantProps<typeof buttonBgCva> {
  icon: ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
  animate?: boolean;
}
