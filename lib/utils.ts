import type { ClassNameValue } from "@/types/index";

export function cn(...classes: ClassNameValue[]): string {
  return classes.filter(Boolean).join(" ");
}
