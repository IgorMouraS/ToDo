import { cva } from "class-variance-authority";

export const containerCva = cva("mx-auto", {
  variants: {
    size: {
      md: "max-w-[31.5rem] px-2"
    }
  },
  defaultVariants: {
    size: "md"
  }
}) 