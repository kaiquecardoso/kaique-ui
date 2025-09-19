// Componentes principais
export { default as FlashMessage } from "./FlashMessage";
export { default as FlashMessageGlobal } from "./FlashMessageGlobal";

// Context e Provider
export {
  FlashMessageProvider,
  useFlashMessage,
} from "./contexts/FlashMessageContext";

// Tipos
export type {
  FlashMessageConfig,
  FlashMessageContextType,
  FlashMessageData,
  FlashMessageProps,
  FlashMessageType,
} from "./types/types";

// Hooks
export { useFlashMessageAnimation } from "./hooks/useFlashMessageAnimation";
export { useFlashMessageColors } from "./hooks/useFlashMessageColors";

// Utilitários
export {
  createAnimationSequence,
  detectPageColor,
  getFlashMessageColors,
  getFlashMessageIcon,
} from "./utils/utils";

// Constantes
export {
  DYNAMIC_ISLAND_CONFIG,
  FLASH_MESSAGE_CONFIG,
  FLASH_MESSAGE_ICONS,
} from "./constants";

// Estilos
export { styles } from "./styles";
