import { FLASH_MESSAGE_CONFIG, FLASH_MESSAGE_ICONS } from "../constants";
import { FlashMessageType } from "../types/types";

export const getFlashMessageIcon = (type: FlashMessageType): string => {
  return FLASH_MESSAGE_ICONS[type];
};

export const getFlashMessageColors = (type: FlashMessageType) => {
  return FLASH_MESSAGE_CONFIG.colors[type];
};

export const detectPageColor = (
  colorScheme: "light" | "dark" | null
): "light" | "dark" => {
  return colorScheme === "dark" ? "light" : "dark";
};

export const createAnimationSequence = (
  animations: any[],
  useNativeDriver: boolean = true
) => {
  return animations.map((animation) => ({
    ...animation,
    useNativeDriver,
  }));
};
