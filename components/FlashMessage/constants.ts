import { FlashMessageConfig } from "./types/types";

export const FLASH_MESSAGE_CONFIG: FlashMessageConfig = {
  defaultDuration: 3000,
  animationDuration: {
    show: 300,
    hide: 300,
    expand: 200,
  },
  colors: {
    success: {
      background: "#000000",
      text: "#4CAF50",
      icon: "#4CAF50",
    },
    error: {
      background: "#000000",
      text: "#F44336",
      icon: "#F44336",
    },
    warning: {
      background: "#000000",
      text: "#FF9800",
      icon: "#FF9800",
    },
    info: {
      background: "#000000",
      text: "#2196F3",
      icon: "#2196F3",
    },
  },
};

export const FLASH_MESSAGE_ICONS = {
  success: "✓",
  error: "✕",
  warning: "⚠",
  info: "ℹ",
} as const;

export const DYNAMIC_ISLAND_CONFIG = {
  expandedHeight: 100,
  borderRadius: 20,
  paddingHorizontal: 20,
  gap: 12,
} as const;
