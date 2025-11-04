import { cva } from "class-variance-authority";

export const inputCva = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none"
    },
    size: {
      md: "w-full h-8"
    },
    disabled: {
      true: "pointer-events-none"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false
  }
})