export type ColumnType = {
  id: string;
  title: string;
} 

export const defaultCols = [
  {
    id: "todo" as const,
    title: "Todo",
  },
  {
    id: "in-progress" as const,
    title: "In progress",
  },
  {
    id: "done" as const,
    title: "Done",
  },
] satisfies ColumnType[];

export type ColumnId = (typeof defaultCols)[number]["id"];

export type TaskType = {
  id: string;
  columnId: ColumnId;
  title: string
  deadline: Date
}
