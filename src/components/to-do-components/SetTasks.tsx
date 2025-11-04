import { useRef, useState } from "react";

import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import ButtonIcon from "../components/ButtonIcon/ButtonIcon";
import Text from "../components/Text/Text";

import PlusRegularIcon from '../../assets/icons/plus-regular.svg?react'
import XRegularIcon from '../../assets/icons/x-regular.svg?react'
import CheckIcon from '../../assets/icons/check-regular.svg?react'
import { useTask } from "../../hooks/use-task";

import SpinnerIcon from '../../assets/icons/spinner.svg?react'

export default function SetTasks() {
  const inputTask = useRef<HTMLInputElement>(null)
  const [writing, setWriting] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const { add, loading } = useTask()

  const handleNewTask = () => {
    setWriting(true)
  }

  const handleCancelTask = () => {
    if (error) setError(false)
    setWriting(false)
  }

  const handleConfirmTask = () => {
    const title = inputTask.current?.value.trim()
    if (title && title != '') {
      add.addTask(title)
      if (error) setError(false)
      setWriting(false)
    } else {
      setError(true)
    }
  }

  if (add.loadingAdd) {
    return (<>
      <Button disabled icon={SpinnerIcon} animate={true}>Criando Tarefa</Button>
    </>)
  }

  return (
    <>
      {!writing ? (
        <>
          <Button disabled={loading} icon={PlusRegularIcon} onClick={handleNewTask}>Nova Tarefa</Button>
        </>
      ) : (
        <>
          <Card size='md' className='flex justify-center items-center gap-4'>
            <Input ref={inputTask} />
            <div className="flex gap-1">
              <ButtonIcon icon={XRegularIcon} variant={'secondary'} onClick={handleCancelTask}></ButtonIcon>
              <ButtonIcon icon={CheckIcon} onClick={handleConfirmTask}></ButtonIcon>
            </div>
          </Card>
          {!!error && (
            <Text color={'pink-dark'} variant={'body-sm-semibold'}>Defina uma Tarefa!</Text>
          )}
        </>
      )
      }
    </>
  )
}