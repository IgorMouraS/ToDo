import Badge from "../components/Badge/Badge";
import Text from "../components/Text/Text";
import { UseTasks } from "../../hooks/use-tasks"

export default function StatusTask() {

  const { tasksCount, loading } = UseTasks()

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant={'body-sm-semibold'} color={'gray-300'}>Tarefas Criadas</Text>
        <Badge variant={"secondary"} loading={loading}>{tasksCount.tasks}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant={'body-sm-semibold'} color={'gray-300'}>Concluídas</Text>
        <Badge variant={"primary"} loading={loading}>{tasksCount.concludedTasks}</Badge>
      </div>
    </>
  )
}