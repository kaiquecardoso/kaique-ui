import { ReactNode } from "react";

export type FlashMessageType = "success" | "error" | "warning" | "info";

export interface FlashMessageData {
  message: string;
  icon?: ReactNode;
  type: FlashMessageType;
  visible: boolean;
  duration?: number;
}

export interface FlashMessageProps {
  message: string;
  icon?: ReactNode;
  type?: FlashMessageType;
  visible: boolean;
  duration?: number;
  onHide?: () => void;
}

export interface FlashMessageContextType {
  flashMessage: FlashMessageData;
  showMessage: (data: Omit<FlashMessageData, "visible">) => void;
  hideMessage: () => void;
}

export interface FlashMessageConfig {
  defaultDuration: number;
  animationDuration: {
    show: number;
    hide: number;
    expand: number;
  };
  colors: {
    [K in FlashMessageType]: {
      background: string;
      text: string;
      icon: string;
    };
  };
}
