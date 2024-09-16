import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 
 export  const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",]
  
  interface EventData{
    event_name: string,
    type_of_event: string,
    event_categories: string,
    start_date: string,
    end_date: string,
    mode: string,
    price_worth: number,
    uploads: boolean,
    event_id: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    featured: boolean
}

export type Event={
    id: number,
    attributes:EventData 
}