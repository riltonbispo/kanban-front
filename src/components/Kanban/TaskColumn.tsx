'use client'

import { useTaskStore } from '@/store/TaskStore'
import React, { ReactNode } from 'react'
import TaskCard from './TaskCard'
import DropArea from './DropArea'
import { useActiveCard } from '@/store/ActiveCardStore'
import { ScrollArea } from '@/components/ui/scroll-area'

type props = {
  title: string
  icon: ReactNode
  status: string
}

const TaskColumn = ({ ...props }: props) => {
  const [tasks, updateTask] = useTaskStore(state => [state.tasks, state.updateTask])
  const activeCard = useActiveCard(state => state.activeCard)


  const filteredTasks = tasks
    .filter(task => task.status === props.status)
    .sort((a, b) => (a.priority === b.priority ? 0 : a.priority ? -1 : 1))

  const onDrop = (status: string) => {
    if (activeCard === null || activeCard === undefined) return
    updateTask(activeCard.id, status)
  }

  return (
    <section className='flex-1 space-y-4'>
      <header className='flex gap-5'>
        <h2>{props.title}</h2>
        {props.icon}
      </header>

      <ScrollArea className='border border-zinc-300 rounded-lg p-2 h-[80vh]'>
        <DropArea onDrop={() => onDrop(props.status)} />
        {filteredTasks.map((task) => (
          <React.Fragment key={task.id}>
            <TaskCard task={task} />
            <DropArea onDrop={() => onDrop(props.status)} />
          </React.Fragment>
        ))}
      </ScrollArea>
    </section>
  )
}

export default TaskColumn
