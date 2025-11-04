import type { IconProps } from './icon.interface'

import { iconCva, skeletonIconCva } from './icon.cva'
import Skeleton from '../Skeleton/Skeleton'

export default function Icon({ loading, svg: SvgComponent, size, animate, className, ...props }: IconProps) {
  if (loading) return <Skeleton rounded={'lg'} className={skeletonIconCva({ size, className })} />

  return <SvgComponent className={iconCva({ animate, size, className })} {...props} />
}