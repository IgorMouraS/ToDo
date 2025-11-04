import { cx } from "class-variance-authority";

import type { InputProps } from "./input.interface";

import { inputCva } from "./input.cva";
import { textCva } from "../Text/text.cva";
import Skeleton from "../Skeleton/Skeleton";

export default function Input({ loading, variant, size, disabled, className, ...props }: InputProps) {
  if (loading) return <Skeleton rounded={'sm'} className={inputCva({ variant, size, className })} />

  return <input className={cx(inputCva({ variant, size, disabled }), textCva(), className)} {...props} />
}