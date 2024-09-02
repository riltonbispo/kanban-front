import { tasks } from '@/data/defaultData'
import { TaskType } from '@/type/tasksType'
import { create } from 'zustand'

type TaskStore = {
  tasks: TaskType[]
  addTask: (item: TaskType) => void
  removeTask: (id: string) => void
  updateTask: (id: string, newStatus: string) => void
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: tasks,
  addTask: (item) => set(state => ({ tasks: [...state.tasks, item] })),
  removeTask: (id) => set(state => ({ tasks: state.tasks.filter(task => task.id !== id) })),
  updateTask: (id, newStatus) => set(state => ({
    tasks: state.tasks.map( task => task.id === id ? {...task, status: newStatus} : task)
  }))
}))
