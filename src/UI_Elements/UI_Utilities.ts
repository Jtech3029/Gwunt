import { useMemo } from "react";

export enum Glimmers {
  GOLD = "via-yellow-200",
  WHITE = "via-white",
}

export enum Shadows {
  BLUE = "#06b6d440",
  GOLD = "#ffbf0050",
}

export enum HoverColors {
  PINK = "#f4c7d9",
}

export function useTransitionConfig() {
  return useMemo(
    () => ({
      boxShadow: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    }),
    [],
  );
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
