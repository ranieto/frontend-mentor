export type Difficulty =
  | "Newbie"
  | "Junior"
  | "Intermediate"
  | "Advanced"
  | "Guru";

export type Challenge = {
  name: string;
  href: string;
  difficulty: Difficulty;
  url: string;
  dateCompleted: string;
};
