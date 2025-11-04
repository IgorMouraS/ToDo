import { checkboxCva } from "./checkbox.cva"
import type { CheckboxProps } from "./checkbox.interface"

import Icon from "../Icon/Icon"
import Skeleton from "../Skeleton/Skeleton"

import SquareDutoneIcon from '../../../assets/icons/square-duotone.svg?react'
import CheckSquareIcon from '../../../assets/icons/checksquare-fill.svg?react'


export default function Checkbox({ checked = false, loading, variant, size, className, ...props }: CheckboxProps) {

  if (loading) return <Skeleton rounded={'sm'} className={checkboxCva({ variant: "none", size, className })} />

  return (
    <label {...props}>
      <Icon svg={checked ? CheckSquareIcon : SquareDutoneIcon} className={checkboxCva({ variant, size, className })} />
    </label>
  )
}