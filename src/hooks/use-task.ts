import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../model/tasks";
import { useEffect, useState } from "react";
import { fetchDelay } from "../helper/fetch-simutate";

interface useTaskProps {
  loading: boolean;
  add: {
    addTask: (title: string) => void;
    loadingAdd: boolean;
  };
  remove: {
    returnId: string;
    removeTask: (id: string) => void;
    loadingRemove: boolean;
  };
  setEditing: (id: string) => void;
  setConcluded: (id: string) => void;
  title: {
    returnId: string;
    setTitle: (id: string, title: string) => void;
    loadingTitle: boolean;
  }
}

export function useTask(): useTaskProps {
  const [tasksData, setTaskData] = useLocalStorage<Task[]>(TASKS_KEY, [])
  const [tasks, setTask] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [loadingAdd, setLoadingAdd] = useState<boolean>(false)
  const [loadingRemove, setLoadingRemove] = useState<boolean>(false)
  const [loadingTitle, setLoadingTitle] = useState<boolean>(false)
  const [returnId, setReturnId] = useState<string>("")

  const fetchTask = async () => {
    if (loading) {
      await fetchDelay(1000)
      setLoading(false)
    }
    setTask(tasksData)
  }

  useEffect(() => {
    fetchTask()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksData])

  async function addTask(title: string) {
    setLoadingAdd(true)
    await fetchDelay(200)
    setTaskData([...tasks, {
      id: Math.random().toString(36).substring(2, 9),
      title,
      concluded: false,
      editing: false
    }])
    setLoadingAdd(false)
  }

  async function removeTask(id: string) {
    setLoadingRemove(true)
    setReturnId(id)
    await fetchDelay(200)
    setTaskData(tasks.filter((task) => task.id != id))
    setLoadingRemove(false)
  }

  async function setEditing(id: string) {
    setTaskData(tasks.map((task) => {
      if (task.id == id) {
        task.editing = !task.editing
        return task
      }
      return task
    }))
  }

  async function setConcluded(id: string) {
    setTaskData(tasks.map((task) => {
      if (task.id == id) {
        task.concluded = !task.concluded
        return task
      }
      return task
    }))
  }

  async function setTitle(id: string, title: string) {
    setLoadingTitle(true)
    setReturnId(id)
    await fetchDelay(200)
    setTaskData(tasks.map((task) => {
      if (task.id == id) {
        task.title = title
        return task
      }
      return task
    }))
    setLoadingTitle(false)
  }

  return {
    loading,
    add: { addTask, loadingAdd },
    remove: { returnId, removeTask, loadingRemove },
    setEditing,
    setConcluded,
    title: { returnId, setTitle, loadingTitle }
  }
}