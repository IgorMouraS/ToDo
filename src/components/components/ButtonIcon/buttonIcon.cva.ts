import { cva } from "class-variance-authority"

export const iconBgCva = cva("inline-flex items-center justify-center transition group", {
  variants: {
    variant: {
      none: "",
      primary: "bg-green-base hover:bg-green-dark",
      secondary: "bg-gray-200 hover:bg-pink-base",
      terciary: "hover:bg-gray-200",
    },
    size: {
      sm: "w-6 h-6 p-1 rounded "
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
      false: "cursor-pointer"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
    disabled: false
  }
})

export const iconIconCva = cva("transition", {
  variants: {
    variant: {
      none: "",
      primary: "fill-white",
      secondary: "fill-pink-base group-hover:fill-white",
      terciary: "fill-gray-300 group-hover:fill-gray-400",
    },
    size: {
      sm: "w-4 h-4"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm"
  }
})