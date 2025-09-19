import { useDynamicIsland } from "@/hooks/use-dynamic-island";
import { useEffect, useRef, useState } from "react";
import { Animated, Platform } from "react-native";
import { FLASH_MESSAGE_CONFIG } from "../constants";

interface UseFlashMessageAnimationProps {
  visible: boolean;
  duration: number;
  onHide?: () => void;
}

export const useFlashMessageAnimation = ({
  visible,
  duration,
  onHide,
}: UseFlashMessageAnimationProps) => {
  const {
    hasDynamicIsland,
    height: islandHeight,
    width: islandWidth,
    safeAreaTop,
  } = useDynamicIsland();

  // Animações
  const animatedValue = useRef(new Animated.Value(0)).current;
  const expandAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const expandHeightAnim = useRef(new Animated.Value(0)).current;

  // Estados
  const [contentHeight, setContentHeight] = useState(0);
  const [statusBarHidden, setStatusBarHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<"light" | "dark">(
    "light"
  );

  const hideMessage = () => {
    if (hasDynamicIsland) {
      // Animação de saída da ilha dinâmica em duas etapas (inverso)
      Animated.sequence([
        // Primeiro: contrair altura
        Animated.timing(expandHeightAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: false,
        }),
        // Segundo: contrair largura e desaparecer
        Animated.parallel([
          Animated.timing(expandAnim, {
            toValue: 0,
            duration: FLASH_MESSAGE_CONFIG.animationDuration.hide,
            useNativeDriver: false,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0,
            duration: FLASH_MESSAGE_CONFIG.animationDuration.hide,
            useNativeDriver: false,
          }),
        ]),
      ]).start(() => {
        // Mostrar status bar novamente apenas quando a animação terminar completamente
        if (Platform.OS === "ios" && hasDynamicIsland) {
          setStatusBarHidden(false);
        }
        onHide?.();
      });
    } else {
      // Animação normal de saída - usar native driver
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: FLASH_MESSAGE_CONFIG.animationDuration.hide,
        useNativeDriver: true,
      }).start(() => {
        onHide?.();
      });
    }
  };

  useEffect(() => {
    if (visible) {
      // Esconder status bar no iOS quando a notificação aparecer
      if (Platform.OS === "ios" && hasDynamicIsland) {
        setStatusBarHidden(true);
      }

      if (hasDynamicIsland) {
        // Animação da ilha dinâmica em duas etapas
        Animated.sequence([
          // Primeiro: aparecer e expandir largura
          Animated.parallel([
            Animated.timing(opacityAnim, {
              toValue: 1,
              duration: FLASH_MESSAGE_CONFIG.animationDuration.expand,
              useNativeDriver: false,
            }),
            Animated.timing(expandAnim, {
              toValue: 1,
              duration: FLASH_MESSAGE_CONFIG.animationDuration.show,
              useNativeDriver: false,
            }),
          ]),
          // Segundo: expandir altura
          Animated.timing(expandHeightAnim, {
            toValue: 1,
            duration: FLASH_MESSAGE_CONFIG.animationDuration.expand,
            useNativeDriver: false,
          }),
        ]).start();
      } else {
        // Animação normal do FlashMessage - usar native driver
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: FLASH_MESSAGE_CONFIG.animationDuration.show,
          useNativeDriver: true,
        }).start();
      }

      // Esconder automaticamente após a duração especificada
      const timer = setTimeout(() => {
        hideMessage();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      hideMessage();
    }
  }, [visible, duration, hasDynamicIsland]);

  return {
    animatedValue,
    expandAnim,
    opacityAnim,
    expandHeightAnim,
    contentHeight,
    setContentHeight,
    statusBarHidden,
    statusBarStyle,
    setStatusBarStyle,
    hasDynamicIsland,
    islandHeight,
    islandWidth,
    safeAreaTop,
  };
};
