import { cva } from "class-variance-authority";

export const checkboxCva = cva("inline-flex items-center justify-center cursor-pointer relative group rounded", {
  variants: {
    variant: {
      none: "",
      primary: "fill-green-base hover:fill-green-dark"
    },
    size: {
      md: "h-8 w-8"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})