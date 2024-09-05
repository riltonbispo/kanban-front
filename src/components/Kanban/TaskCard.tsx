import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card'
import { TaskType } from '@/type/tasksType'
import { useTaskStore } from '@/store/TaskStore'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Trash } from 'lucide-react'
import { useActiveCard } from '@/store/ActiveCardStore'
import { dateFormatter } from '@/lib/utils'

type props = {
  task: TaskType
}

const TaskCard = ({ ...props }: props) => {
  const removeTask = useTaskStore(state => state.removeTask)
  const setActiveCard = useActiveCard(state => state.setActiveCard)

  const handleDragStart = () => {
    setActiveCard(props.task)
  }

  const handleDragEnd = () => {
    setActiveCard(null)
  }

  const { text: formattedDate, color: dateColor } = dateFormatter(
    props.task.deadline
  );

  const formattedDoneDate = props.task.doneDate && dateFormatter(props.task.doneDate)

  console.log(dateColor)

  return (
    <Card
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`active:opacity-30`}
    >
      <CardHeader className={`${props.task.status === 'done' && 'line-through'}`}>
        <CardTitle>{props.task.title}</CardTitle>
        <CardDescription>{props.task.description}</CardDescription>
      </CardHeader>
      <CardFooter className='flex-col items-start gap-4'>
        {
          props.task.priority && (
            <Badge variant="outline" className='mr-2'>
              Prioridade
            </Badge>
          )
        }
        <p className={`text-[13px] no-underline font-medium font-sans ${dateColor}`}>{formattedDate}</p>
        {props.task.doneDate && (<p className={`text-[13px] no-underline font-medium font-sans}`}>{formattedDoneDate?.text}</p>)}

        <Button variant="destructive" onClick={() => removeTask(props.task.id)}>
          <Trash className="mr-2 h-4 w-4" />
          Deletar
        </Button>
      </CardFooter>
    </Card>
  )
}

export default TaskCard