import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import parsePhoneNumber from "libphonenumber-js";

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

export function formatPhoneNumber(phoneNumberString: string) {
  const phone = parsePhoneNumber(phoneNumberString)?.format("E.164", {
    fromCountry: "US",
  });
  return phone;
}
