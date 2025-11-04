import { cva } from 'class-variance-authority'

export const iconCva = cva("", {
  variants: {
    animate: {
      true: 'animate-spin',
    },
    size: {
      md: "h-8 w-8",
      sm: "h-6 w-6"
    }
  },
  defaultVariants: {
    animate: false,
    size: "md"
  }
})

export const skeletonIconCva = cva("", {
  variants: {
    size: {
      md: 'h-8 w-8',
      sm: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "md"
  }
})