import React, { createContext, ReactNode, useContext, useState } from "react";

export interface FlashMessageData {
  message: string;
  icon?: ReactNode;
  type: "success" | "error" | "warning" | "info";
  visible: boolean;
  duration?: number;
}

interface FlashMessageContextType {
  flashMessage: FlashMessageData;
  showMessage: (data: Omit<FlashMessageData, "visible">) => void;
  hideMessage: () => void;
}

const FlashMessageContext = createContext<FlashMessageContextType | undefined>(
  undefined
);

interface FlashMessageProviderProps {
  children: ReactNode;
}

export function FlashMessageProvider({ children }: FlashMessageProviderProps) {
  const [flashMessage, setFlashMessage] = useState<FlashMessageData>({
    message: "",
    type: "info",
    visible: false,
    duration: 3000,
  });

  const showMessage = (data: Omit<FlashMessageData, "visible">) => {
    setFlashMessage({
      ...data,
      visible: true,
    });
  };

  const hideMessage = () => {
    setFlashMessage((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  return (
    <FlashMessageContext.Provider
      value={{
        flashMessage,
        showMessage,
        hideMessage,
      }}
    >
      {children}
    </FlashMessageContext.Provider>
  );
}

export function useFlashMessage() {
  const context = useContext(FlashMessageContext);
  if (context === undefined) {
    throw new Error(
      "useFlashMessage must be used within a FlashMessageProvider"
    );
  }
  return context;
}
