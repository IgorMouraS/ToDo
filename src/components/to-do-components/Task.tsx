import Card from "../components/Card/Card"
import Checkbox from "../components/Checkbox/Checkbox"
import Text from "../components/Text/Text"
import ButtonIcon from "../components/ButtonIcon/ButtonIcon"
import Input from "../components/Input/Input"

import TrashIcon from '../../assets/icons/trash-regular.svg?react'
import PencilSimpleIcon from '../../assets/icons/pencilsimple-regular.svg?react'
import XRegularIcon from '../../assets/icons/x-regular.svg?react'
import CheckRegularIcon from '../../assets/icons/check-regular.svg?react'
import { UseTasks } from "../../hooks/use-tasks"
import { useTask } from "../../hooks/use-task"
import { useState } from "react"
import Skeleton from "../components/Skeleton/Skeleton"

import SpinnerIcon from '../../assets/icons/spinner.svg?react'

export default function Task() {
  const { tasks, loading } = UseTasks()
  const { remove, setEditing, setConcluded, title } = useTask()

  const [input, setInput] = useState("")

  const handleConcludedTask = (id: string) => {
    setConcluded(id)
  }

  const handleDeleteTask = (id: string) => {
    remove.removeTask(id)
  }

  const handleEditTask = (id: string, title: string) => {
    setInput(title)
    setEditing(id)
  }

  const handleCancelEditTask = (id: string) => {
    setEditing(id)
  }

  const handleConfirmEditTask = async (id: string) => {
    if (input == "") remove.removeTask(id)
    else {
      await title.setTitle(id, input)
      setEditing(id)
    }
    setInput("")
  }

  return (
    <>
      {!loading && tasks.map((task) => {
        return (
          <Card key={task.id} size='sm' className='flex items-center gap-4 mt-2'>
            {!task.editing ? (
              <>
                <Checkbox checked={task.concluded} onClick={() => handleConcludedTask(task.id)} />
                <Text className={`flex-1 break-all ${task.concluded ? "line-through" : ""}`} variant={'body-md'}>{task.title}</Text>
                <div className="flex gap-1">
                  {remove.loadingRemove && remove.returnId == task.id ? (
                    <>
                      <ButtonIcon icon={SpinnerIcon} animate={true} variant={'terciary'} />
                      <ButtonIcon icon={PencilSimpleIcon} variant={'terciary'} disabled />
                    </>
                  ) : (
                    <>
                      <ButtonIcon icon={TrashIcon} variant={'terciary'} onClick={() => handleDeleteTask(task.id)} />
                      <ButtonIcon icon={PencilSimpleIcon} variant={'terciary'} onClick={() => handleEditTask(task.id, task.title)} />
                    </>
                  )}
                </div>
              </>
            )
              :
              (
                <>
                  <Input className="flex-1" value={input} onChange={(e) => setInput(e.target.value)} />
                  <div className="flex gap-1">
                    {title.loadingTitle && title.returnId == task.id ? (
                      <>
                        <ButtonIcon icon={XRegularIcon} variant={'secondary'} disabled />
                        <ButtonIcon icon={SpinnerIcon} animate={true} variant={'primary'} />
                      </>
                    ) : (
                      <>
                        <ButtonIcon icon={XRegularIcon} variant={'secondary'} onClick={() => handleCancelEditTask(task.id)} />
                        <ButtonIcon icon={CheckRegularIcon} variant={'primary'} onClick={() => handleConfirmEditTask(task.id)} />
                      </>
                    )}
                  </div>
                </>
              )
            }
          </Card>
        )
      })}
      {loading && (
        <Card size='sm' className='flex items-center gap-4 mt-2'>
          <Checkbox loading />
          <Skeleton className={"flex-1 h-8"} rounded="sm" />
          <div className="flex gap-2">
            <ButtonIcon icon={TrashIcon} loading />
            <ButtonIcon icon={PencilSimpleIcon} loading />
          </div>
        </Card>
      )}
    </>
  )
}