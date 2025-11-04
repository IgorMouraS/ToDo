import type { SkeletonProps } from "./skeleton.interface";

import { skeletonCva } from "./skeleton.cva";

export default function Skeleton({ rounded, className, ...props }: SkeletonProps) {
  return <div className={skeletonCva({ rounded, className })} {...props} />
}