import { cva } from "class-variance-authority";

export const cardCva = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "bg-white border border-solid border-gray-200 shadow-sm rounded-lg"
    },
    size: {
      none: "h-15",
      md: "p-4",
      sm: "p-2"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})