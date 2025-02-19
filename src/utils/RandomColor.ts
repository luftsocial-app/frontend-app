import { GB_COLORS } from "@/fixtures";


export function  getRandomColor() {
  const colorKeys = Object.keys(GB_COLORS) as (keyof typeof GB_COLORS)[];
  const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
  return GB_COLORS[randomKey];
}
