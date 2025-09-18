import { useFlashMessage } from "@/contexts/flash-message-context";
import React from "react";
import FlashMessage from "./flash-message";

export default function FlashMessageGlobal() {
  const { flashMessage, hideMessage } = useFlashMessage();

  return (
    <FlashMessage
      message={flashMessage.message}
      icon={flashMessage.icon}
      type={flashMessage.type}
      visible={flashMessage.visible}
      duration={flashMessage.duration}
      onHide={hideMessage}
    />
  );
}
