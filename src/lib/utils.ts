import { type ClassValue, clsx } from "clsx"
import { isYesterday, format, isToday, isTomorrow, isBefore, startOfDay } from "date-fns";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dateFormatter = (date: Date) => {
  const day = format(date, "dd");
  const month = format(date, "MMM");
  const today = startOfDay(new Date());

  if (isToday(date)) return { text: "Today", color: "text-black" };
  if (isTomorrow(date)) return { text: "Tomorrow", color: "text-blue-500" };
  if (isYesterday(date)) return { text: "Yesterday", color: "text-[#E34141]" };
  if (isBefore(date, today)) return { text: `${day} ${month}`, color: "text-[#E34141]" };
  return { text: `${day} ${month}`, color: "text-gray-400" };
};