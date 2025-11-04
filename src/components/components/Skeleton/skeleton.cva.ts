import { cva } from "class-variance-authority";

export const skeletonCva = cva("animate-pulse bg-gray-200", {
  variants: {
    rounded: {
      sm: "rounded-sm",
      lg: "rounded-lg",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    rounded: "lg"
  }
})