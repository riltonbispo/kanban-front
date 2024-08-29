"use client";

import React, { useState } from "react";

import { tasks } from "@/data/defaultData";
import { TaskType } from "@/type/tasksType";

import Column from "./Column";

export const Kanban = () => {
  const [cards, setCards] = useState<TaskType[]>([...tasks]);

  const columns: string[] = [
    "To Do",
    "In Progress",
    "Review",
  ]

  return (
    <div className="flex h-full gap-7 p-6 overflow-x-scroll !pb-5 lg:justify-center lg:overflow-x-hidden">
      {columns.map((column) => (
        <Column
          key={column}
          title={column}
          column={column}
          cards={cards}
          setCards={setCards}
        />
      ))}
    </div>
  );
};
