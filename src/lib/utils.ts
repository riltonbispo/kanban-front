import { type ClassValue, clsx } from "clsx"
import { isYesterday, format, isToday, isTomorrow } from "date-fns";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dateFormatter = (date: Date) => {
  const day = format(date, "dd");
  const month = format(date, "MMM");

  if (isToday(date)) return { text: "Today", color: "text-black" };
  if (isTomorrow(date)) return { text: "Tomorrow", color: "text-blue-500" };
  if (isYesterday(date)) return { text: "Yesterday", color: "text-[#E34141]" };
  return { text: `${day} ${month}`, color: "text-gray-400" };
};