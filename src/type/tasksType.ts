
export type TaskType = {
  id: string
  status: string
  title: string
  deadline: Date
  description: string
  priority: boolean
  doneDate?: Date
}