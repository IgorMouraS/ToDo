import { cva } from 'class-variance-authority'

export const badgeBgCva = cva("inline-flex justify-center items-center rounded-full", {
  variants: {
    variant: {
      none: "",
      primary: "bg-green-light",
      secondary: "bg-pink-light",
    },
    size: {
      sm: "py-0.5 px-2"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm"
  }
})

export const badgeTextCva = cva("", {
  variants: {
    variant: {
      none: "",
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary"
  }
})

export const skeletonBadgeCva = cva("", {
  variants: {
    size: {
      sm: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "sm"
  }
})