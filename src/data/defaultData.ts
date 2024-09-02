import { TaskType } from "@/type/tasksType";

export const tasks: TaskType[] = [
  {
    id: 'task-1',
    status: 'doing',
    title: 'Desenvolver página inicial',
    description: 'Desenvolver a estrutura e layout da página inicial, incluindo navegação e conteúdo estático.',
    deadline: new Date("2024-02-09"),

  },
  {
    id: 'task-2',
    status: 'todo',
    title: 'Revisar design do dashboard',
    description: 'Analisar e ajustar o design do dashboard, garantindo que esteja visualmente consistente e funcional.',
    deadline: new Date('2024-09-01'),
  },
  {
    id: 'task-3',
    status: 'doing',
    title: 'Configurar ambiente de testes',
    description: 'Preparar o ambiente de desenvolvimento para rodar testes automatizados, configurando todas as dependências necessárias.',
    deadline: new Date('2024-12-10'),
  },
  {
    id: 'task-4',
    status: 'done',
    title: 'Criar documentação da API',
    description: 'Elaborar a documentação da API, detalhando os endpoints, parâmetros e exemplos de uso.',
    deadline: new Date('2024-09-15'),
  },
  {
    id: 'task-5',
    status: 'doing',
    title: 'Testar integração com o banco de dados',
    description: 'Executar testes para garantir que a integração entre o sistema e o banco de dados esteja funcionando corretamente.',
    deadline: new Date('2024-09-20'),
  },
];
