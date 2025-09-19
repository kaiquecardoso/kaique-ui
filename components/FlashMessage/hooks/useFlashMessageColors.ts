import { useColorScheme } from "@/hooks/use-color-scheme";
import { FlashMessageType } from "../types/types";
import { detectPageColor, getFlashMessageColors } from "../utils/utils";

export const useFlashMessageColors = (type: FlashMessageType) => {
  const colorScheme = useColorScheme();
  const colors = getFlashMessageColors(type);

  const statusBarStyle = detectPageColor(colorScheme || "light");

  return {
    backgroundColor: colors.background,
    textColor: colors.text,
    iconColor: colors.icon,
    statusBarStyle,
  };
};
