import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface DynamicIslandInfo {
  hasDynamicIsland: boolean;
  height: number;
  width: number;
  safeAreaTop: number;
}

export function useDynamicIsland(): DynamicIslandInfo {
  const insets = useSafeAreaInsets();

  // Detectar ilha dinâmica baseado no safe area top
  // Valores conhecidos para ilha dinâmica: 59, 62, 63 (dependendo da versão do iOS e modelo)
  // Valores para outros iPhones: 20, 44, 47, 50
  const hasDynamicIsland =
    Platform.OS === "ios" &&
    (insets.top === 59 || insets.top === 62 || insets.top === 63);

  return {
    hasDynamicIsland,
    height: hasDynamicIsland ? 40 : 0, // Altura aproximada da ilha dinâmica
    width: hasDynamicIsland ? 126 : 0, // Largura aproximada da ilha dinâmica
    safeAreaTop: insets.top,
  };
}
