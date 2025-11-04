import { cx } from "class-variance-authority";

import Skeleton from "../Skeleton/Skeleton";
import Text from "../Text/Text"

import type { BadgeProps } from "./badge.interface"

import { badgeBgCva, badgeTextCva, skeletonBadgeCva } from "./badge.cva";

export default function Badge({ loading, variant, size, className, children, ...props }: BadgeProps) {
  if (loading) return <Skeleton rounded={'full'}
    className={cx(badgeBgCva({ variant: "none", size }), skeletonBadgeCva({ size }), className)} />

  return (
    <div {...props} className={cx(badgeBgCva({ variant, size, className }))}>
      <Text variant={'body-sm-semibold'} className={badgeTextCva({ variant, className })}>{children}</Text>
    </div>
  )
}