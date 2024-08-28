'use client'

import { Reorder, useDragControls } from "framer-motion"
import { Fragment, useState } from "react";
import { tasks } from "@/data/defaultData";
import { ColumnType, TaskType, defaultCols } from "@/type/tasksType";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-4">
        {defaultCols.map((item) => (
          <Fragment key={item.id}>
            <Column
              data={item}
              tasks={tasks.filter(tasks => tasks.columnId === item.id)}
            />
          </Fragment>
        ))}
      </div>

    </main>
  );
}

const Item = ({ item }: { item: TaskType }) => {
  const controls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      dragListener={false}
      dragControls={controls}
      className="cursor-grab active:cursor-grabbing"
    >
      <div
        className="reorder-handle select-none"
        onPointerDown={(e) => controls.start(e)}
      >
        <Card className="max-w-80">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardFooter>
            <p className="text-zinc-400 text-sm">{item.deadline.toDateString()}</p>
          </CardFooter>
        </Card>
      </div>
    </Reorder.Item>
  );
}

const Column = ({ data, tasks }: { data: ColumnType, tasks: TaskType[] }) => {
  const [items, setItems] = useState(tasks);

  return (
    <div>
      <h1>{data.title}</h1>
      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item) => (
          <Fragment key={item.id}>
            <Item item={item} />
          </Fragment>
        ))}
      </Reorder.Group>
    </div>
  )
}