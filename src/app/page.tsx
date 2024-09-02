import TaskColumn from '@/components/Kanban/TaskColumn';
import { Crosshair } from 'lucide-react';

export default function Home() {

  return (
    <main className="max-w-[1100px] mx-auto">
      <div className='flex gap-6 mt-8'>
        <TaskColumn
          title='To Do'
          status='todo'
          icon={<Crosshair />}
        />
        <TaskColumn
          title='Doing'
          status='doing'
          icon={<Crosshair />}
        />
        <TaskColumn
          title='Done'
          status='done'
          icon={<Crosshair />}
        />
      </div>
    </main>
  );
}