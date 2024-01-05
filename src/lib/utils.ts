/* eslint-disable no-dupe-else-if */
import { Call } from "@/types/schema";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertSecondstoTime(givenSeconds: number) {
  const hours = Math.floor(givenSeconds / 3600);
  const minutes = Math.floor((givenSeconds - hours * 3600) / 60);
  const seconds = givenSeconds - hours * 3600 - minutes * 60;

  const timeString =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
  return timeString;
}

export function getNumber(data: Call) {
  if (data.direction == "outbound") {
    return data.to || data.via;
  } else {
    return data.from || data.via;
  }
}

export function capitalizeFirstChar(s: string | undefined) {
  if (!s) return "";
  return s[0].toUpperCase() + s.substring(1, s.length);
}
