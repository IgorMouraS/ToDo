import type { VariantProps } from "class-variance-authority";

import { textCva } from './text.cva'

export interface TextProps extends VariantProps<typeof textCva> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}