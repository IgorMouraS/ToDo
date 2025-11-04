import { cva } from "class-variance-authority";

export const buttonBgCva = cva("flex flex-row justify-center items-center gap-2 rounded", {
  variants: {
    variant: {
      none: "",
      primary: "bg-gray-200 hover:bg-pink-light"
    },
    size: {
      md: "w-full h-16.5 py-3 px-5"
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false
  }
})

export const buttonIconCva = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "fill-pink-base"
    },
    size: {
      md: "w-4 h-4"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})