import { cva } from 'class-variance-authority'

export const textCva = cva("font-sans", {
  variants: {
    color: {
      "gray-400": "text-gray-400",
      "gray-300": "text-gray-300",
      "pink-dark": "text-pink-dark"
    },
    variant: {
      "body-md": "text-base/6 font-normal",
      "body-md-semibold": "text-base/6 font-semibold",
      "body-sm-semibold": "text-sm/5 font-semibold"
    }
  },
  defaultVariants: {
    variant: "body-md",
    color: "gray-400"
  }
})