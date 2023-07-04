import { env } from "./env.mjs";

export const data = [
  {
    category: "Reaction",
    color: "text-light-red",
    icon: `./${env.NEXT_PUBLIC_BASE_URL}/icon-reaction.svg`,
    score: 80,
  },
  {
    category: "Memory",
    color: "text-orangey-yellow",
    icon: `./${env.NEXT_PUBLIC_BASE_URL}/icon-memory.svg`,
    score: 92,
  },
  {
    category: "Verbal",
    color: "text-green-teal",
    icon: `./${env.NEXT_PUBLIC_BASE_URL}/icon-verbal.svg`,
    score: 61,
  },
  {
    category: "Visual",
    color: "text-cobalt-blue",
    icon: `./${env.NEXT_PUBLIC_BASE_URL}/icon-visual.svg`,
    score: 72,
  },
];
