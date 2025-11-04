import Icon from '../Icon/Icon'

import type { ButtonIconProps } from "./buttonIcon.interface"

import { iconBgCva, iconIconCva } from "./buttonIcon.cva"
import Skeleton from '../Skeleton/Skeleton'

export default function ButtonIcon({ loading, animate, variant, size, disabled, className, icon, ...props }: ButtonIconProps) {
  if (loading) return <Skeleton rounded={'lg'} className={iconBgCva({ variant: "none", size, className })} />

  return <button className={iconBgCva({ variant, size, disabled, className })} {...props}>
    <Icon svg={icon} className={iconIconCva({ variant, size })} animate={animate} />
  </button>
}