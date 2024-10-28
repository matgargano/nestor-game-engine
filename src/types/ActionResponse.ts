export type ActionType = "clear" | "look";

export type ActionResponse = {
  message: string | string[];
  success: boolean;
  metadata?: ActionType[];
};
