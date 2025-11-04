import Text from '../components/components/Text/Text'
import Icon from '../components/components/Icon/Icon'
import Badge from '../components/components/Badge/Badge'
import ButtonIcon from '../components/components/ButtonIcon/ButtonIcon'
import Button from '../components/components/Button/Button'
import Input from '../components/components/Input/Input'
import Checkbox from '../components/components/Checkbox/Checkbox'
import Card from '../components/components/Card/Card'
import Container from '../components/components/Container/Container'
import Skeleton from '../components/components/Skeleton/Skeleton'

import CheckIcon from '../assets/icons/check-regular.svg?react'
import CheckCircleIcon from '../assets/icons/checkcircle-fill.svg?react'
import CheckSquareIcon from '../assets/icons/checksquare-fill.svg?react'
import CircleDutoneIcon from '../assets/icons/circle-dutone.svg?react'
import ClipBoardTextIcon from '../assets/icons/clipboardtext.svg?react'
import PencilSimpleIcon from '../assets/icons/pencilsimple-regular.svg?react'
import PlusRegularIcon from '../assets/icons/plus-regular.svg?react'
import SpinnerIcon from '../assets/icons/spinner.svg?react'
import SquareDutoneIcon from '../assets/icons/square-duotone.svg?react'
import SquareRegularIcon from '../assets/icons/square-regular.svg?react'
import XRegularIcon from '../assets/icons/x-regular.svg?react'
import TrashIcon from '../assets/icons/trash-regular.svg?react'

export default function PageComponents() {
  return (
    <Container>
      <Text as="h1" variant={'body-md-semibold'}>Text Component</Text>
      <Text as="h1">Text Component</Text>
      <Text as="h1" variant={'body-sm-semibold'}>Text Component</Text>
      <br />
      <br />
      <div className="flex gap-2">
        <Icon svg={CheckIcon} />
        <Icon svg={CheckCircleIcon} />
        <Icon svg={CheckSquareIcon} />
        <Icon svg={CircleDutoneIcon} />
        <Icon svg={ClipBoardTextIcon} />
        <Icon svg={PencilSimpleIcon} />
        <Icon svg={PlusRegularIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={SquareDutoneIcon} />
        <Icon svg={SquareRegularIcon} />
        <Icon svg={XRegularIcon} />
        <Icon svg={TrashIcon} />
        <Icon svg={TrashIcon} loading />
      </div>
      <br />
      <br />
      <div className="flex gap-2">
        <Badge variant={"primary"}>01</Badge>
        <Badge variant={"secondary"}>02</Badge>
        <Badge loading>02</Badge>
      </div>
      <br />
      <br />
      <div className="flex gap-2">
        <ButtonIcon icon={TrashIcon}></ButtonIcon>
        <ButtonIcon icon={TrashIcon} variant={'secondary'}></ButtonIcon>
        <ButtonIcon icon={TrashIcon} variant={'terciary'}></ButtonIcon>
        <ButtonIcon icon={TrashIcon} disabled></ButtonIcon>
        <ButtonIcon icon={TrashIcon} loading></ButtonIcon>
      </div>
      <br />
      <br />
      <div className="flex flex-col gap-2">
        <Button icon={PlusRegularIcon}>Nova Tarefa</Button>
        <Button icon={PlusRegularIcon} disabled>Nova Tarefa</Button>
        <Button icon={PlusRegularIcon} loading>Nova Tarefa</Button>
      </div>
      <br />
      <br />
      <Input />
      <Input loading />
      <br />
      <br />
      <div className="flex gap-2">
        <Checkbox />
        <Checkbox loading />
      </div>
      <br />
      <br />
      <div className="flex flex-col gap-2">
        <Card>OOPA</Card>
        <Card loading>OOPA</Card>
      </div>
      <br />
      <br />
      <Card size='md' className='flex flex-row justify-between g-4 items-center'>
        <Checkbox />
        <Input />
        <Icon svg={TrashIcon} size={'sm'} />
        <Icon svg={PencilSimpleIcon} size={'sm'} />
      </Card>
      <br />
      <br />
      <Card size='md' className='flex flex-row justify-between g-4' loading>
        <Checkbox loading />
        <Input loading />
        <Icon svg={TrashIcon} size={'sm'} loading />
        <Icon svg={PencilSimpleIcon} size={'sm'} loading />
      </Card>
      <br />
      <br />
      <Skeleton className={"h-8 mb-2"} />
      <Skeleton className={"h-8 mb-2"} rounded="sm" />
      <Skeleton className={"h-8 mb-2 w-96"} rounded="full" />
    </Container>
  );
}