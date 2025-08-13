import { useMemo } from "react";

export const Glimmers = {
  GOLD: "via-yellow-200",
  WHITE: "via-white",
} as const;

export const Shadows = {
  BLUE: "#06b6d440",
  GOLD: "#ffbf0050",
} as const;

export function useTransitionConfig() {
  const x = useMemo(
    () => ({
      boxShadow: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    }),
    [],
  );
  return x;
}

export function useHoverConfig(color: string) {
  return useMemo(
    () => ({
      boxShadow: `0 0 40px 30px ${color}`,
      y: -20,
    }),
    [color],
  );
}
