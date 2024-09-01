"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { EllipsisVertical } from 'lucide-react';

import { dateFormatter } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { TaskType } from "@/type/tasksType";
import DropIndicator from "@/components/Kanban/DropIndicator";
import AddModal from "../Modals/AddCardModal";


export interface CardProps extends TaskType {
  handleDragStart: (e: React.DragEvent, card: TaskType) => void;
  setCards: Dispatch<SetStateAction<TaskType[]>>;
}

const Card: React.FC<CardProps> = ({
  title,
  id,
  column,
  deadline,
  description,
  handleDragStart,
  setCards,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleMotionDragStart = (e: MouseEvent | TouchEvent | PointerEvent) => {
    handleDragStart(e as unknown as React.DragEvent, {
      title,
      id,
      column,
      deadline,
      description,
    });
  };

  const handleMouseHover = (hoverState: boolean) => {
    setIsHovered(hoverState);
  };

  const { text: formattedDate, color: dateColor } = dateFormatter(
    new Date(deadline)
  );

  const handleDelete = () => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const handleEdit = (updatedTask: TaskType) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === updatedTask.id ? updatedTask : card))
    );
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={handleMotionDragStart}
        onMouseEnter={() => handleMouseHover(true)}
        onMouseLeave={() => handleMouseHover(false)}
        className="flex flex-col gap-4 w-full bg-white rounded-xl border-2 border-[#F5F6F8] py-4 px-3.5 cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-start justify-between gap-3">
          <h1 className="leading-6">{title}</h1>
          <div className={isHovered ? "visible" : "invisible"}>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-500 hover:text-black border-0">
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="font-medium transition text-black text-sm cursor-pointer hover:!bg-[#F9F9F9]" onSelect={() => setIsEditModalOpen(true)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="font-medium transition text-red-600 text-sm cursor-pointer hover:!bg-[#F9F9F9]" onSelect={handleDelete}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex-col justify-between items-center gap-8">
          <p className="text-sm text-zinc-500">{description}</p>
          <p className={`text-[13px] font-medium font-sans ${dateColor}`}>{formattedDate}</p>
        </div>
      </motion.div>

      <AddModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        setOpen={setIsEditModalOpen}
        handleAddTask={handleEdit}
        column={column}
        initialTaskData={{
          id,
          title,
          description: "",
          deadline,
          column,
        }}
      />

    </div>
  );
};

export default Card;
