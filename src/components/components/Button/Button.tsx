import Icon from "../Icon/Icon"
import Text from "../Text/Text"

import type { ButtonProps } from "./button.interface"

import { buttonBgCva, buttonIconCva } from "./button.cva"
import Skeleton from "../Skeleton/Skeleton"

export default function Button({ loading, animate, variant, size, disabled, icon, className, children, ...props }: ButtonProps) {
  if (loading) return <Skeleton rounded={'sm'} className={buttonBgCva({ variant: 'none', size, className })} />

  return (
    <button className={buttonBgCva({ variant, size, disabled, className })} {...props}>
      <Icon animate={animate} svg={icon} className={buttonIconCva({ variant, size })}></Icon>
      <Text variant={'body-sm-semibold'}>{children}</Text>
    </button>
  )
}