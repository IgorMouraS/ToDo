import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../model/tasks";
import { fetchDelay } from "../helper/fetch-simutate";
import { useEffect, useState } from "react";

interface UseTasksProps {
  tasks: Task[],
  tasksCount: {
    tasks: number;
    concludedTasks: string
  },
  loading: boolean
}

export function UseTasks(): UseTasksProps {
  const [taskData] = useLocalStorage<Task[]>(TASKS_KEY, [])
  const [tasks, setTask] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchTask = async () => {
    if (loading) {
      await fetchDelay(200)
      setLoading(false)
    }
    setTask(taskData)
  }

  useEffect(() => {
    fetchTask()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskData])

  const totalConcludedTasks = tasks.filter((task) => task.concluded == true)

  return {
    tasks,
    tasksCount: {
      tasks: tasks.length,
      concludedTasks: `${totalConcludedTasks.length || 0} de ${tasks.length}`
    },
    loading
  }
}