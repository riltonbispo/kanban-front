import { TaskType } from "@/type/tasksType";


export const tasks: TaskType[] = [
  {
    id: 'task-1',
    columnId: 'in-progress',
    title: 'Desenvolver página inicial',
    deadline: new Date('2024-09-01'),
  },
  {
    id: 'task-2',
    columnId: 'todo',
    title: 'Revisar design do dashboard',
    deadline: new Date('2024-09-05'),
  },
  {
    id: 'task-3',
    columnId: 'in-progress',
    title: 'Configurar ambiente de testes',
    deadline: new Date('2024-09-10'),
  },
  {
    id: 'task-4',
    columnId: 'done',
    title: 'Criar documentação da API',
    deadline: new Date('2024-09-15'),
  },
  {
    id: 'task-5',
    columnId: 'in-progress',
    title: 'Testar integração com o banco de dados',
    deadline: new Date('2024-09-20'),
  },
];
