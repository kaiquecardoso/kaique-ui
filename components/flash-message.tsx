import { useColorScheme } from "@/hooks/use-color-scheme";
import { useDynamicIsland } from "@/hooks/use-dynamic-island";
import { StatusBar } from "expo-status-bar";
import React, { ReactNode } from "react";
import { Animated, Dimensions, Platform, Text, View } from "react-native";
import { styles } from "./flash-message.styles";

interface FlashMessageProps {
  message: string;
  icon?: ReactNode;
  type?: "success" | "error" | "warning" | "info";
  visible: boolean;
  duration?: number;
  onHide?: () => void;
}

const { width: screenWidth } = Dimensions.get("window");

export default function FlashMessage({
  message,
  icon,
  type = "info",
  visible,
  duration = 3000,
  onHide,
}: FlashMessageProps) {
  const colorScheme = useColorScheme();
  const {
    hasDynamicIsland,
    height: islandHeight,
    width: islandWidth,
    safeAreaTop,
  } = useDynamicIsland();
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const expandAnim = React.useRef(new Animated.Value(0)).current;
  const opacityAnim = React.useRef(new Animated.Value(0)).current;
  const expandHeightAnim = React.useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = React.useState(0);
  const [statusBarHidden, setStatusBarHidden] = React.useState(false);
  const [statusBarStyle, setStatusBarStyle] = React.useState<"light" | "dark">(
    "light"
  );

  // Função para detectar a cor da página atual
  const detectPageColor = () => {
    // Se estiver em modo escuro, usar status bar clara
    // Se estiver em modo claro, usar status bar escura
    return colorScheme === "dark" ? "light" : "dark";
  };

  React.useEffect(() => {
    if (visible) {
      // Esconder status bar no iOS quando a notificação aparecer
      if (Platform.OS === "ios" && hasDynamicIsland) {
        setStatusBarHidden(true);
        // Definir cor da status bar baseada no tema atual
        setStatusBarStyle(detectPageColor());
      }

      if (hasDynamicIsland) {
        // Animação da ilha dinâmica em duas etapas
        Animated.sequence([
          // Primeiro: aparecer e expandir largura
          Animated.parallel([
            Animated.timing(opacityAnim, {
              toValue: 1,
              duration: 200,
              useNativeDriver: false,
            }),
            Animated.timing(expandAnim, {
              toValue: 1,
              duration: 300,
              useNativeDriver: false,
            }),
          ]),
          // Segundo: expandir altura
          Animated.timing(expandHeightAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start();
      } else {
        // Animação normal do FlashMessage - usar native driver
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 300,
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

  // Atualizar cor da status bar quando o tema mudar
  React.useEffect(() => {
    if (Platform.OS === "ios" && hasDynamicIsland && !statusBarHidden) {
      setStatusBarStyle(detectPageColor());
    }
  }, [colorScheme, hasDynamicIsland, statusBarHidden]);

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
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]),
      ]).start(() => {
        // Mostrar status bar novamente apenas quando a animação terminar completamente
        if (Platform.OS === "ios" && hasDynamicIsland) {
          setStatusBarHidden(false);
          // Restaurar cor da status bar baseada no tema atual
          setStatusBarStyle(detectPageColor());
        }
        onHide?.();
      });
    } else {
      // Animação normal de saída - usar native driver
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        onHide?.();
      });
    }
  };

  const getBackgroundColor = () => {
    // Sempre preto para ilha dinâmica
    return "#000000";
  };

  const getTextColor = () => {
    // Cores claras para contrastar com fundo preto
    switch (type) {
      case "success":
        return "#4CAF50"; // Verde claro
      case "error":
        return "#F44336"; // Vermelho claro
      case "warning":
        return "#FF9800"; // Laranja claro
      case "info":
      default:
        return "#2196F3"; // Azul claro
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return "✓";
      case "error":
        return "✕";
      case "warning":
        return "⚠";
      case "info":
      default:
        return "ℹ";
    }
  };

  if (!visible) return null;

  // Interpolações para ilha dinâmica
  const dynamicWidth = expandAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [islandWidth, screenWidth - 40],
  });

  const dynamicHeight = expandHeightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [islandHeight, 100], // Altura inicial pequena, cresce na segunda etapa
  });

  const borderRadius = expandHeightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [islandHeight / 2, 20], // BorderRadius baseado na altura inicial real
  });

  // Centralização usando translateX
  const translateX = expandAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-islandWidth / 2, -(screenWidth - 40) / 2],
  });

  return (
    <>
      {Platform.OS === "ios" && hasDynamicIsland && (
        <StatusBar hidden={statusBarHidden} style={statusBarStyle} />
      )}
      <Animated.View
        style={[
          hasDynamicIsland ? styles.dynamicIslandContainer : styles.container,
          {
            backgroundColor: getBackgroundColor(),
            transform: [
              {
                translateY: hasDynamicIsland
                  ? 0
                  : animatedValue.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-100, 0],
                    }),
              },
              ...(hasDynamicIsland
                ? [
                    {
                      translateX: translateX,
                    },
                  ]
                : []),
            ],
            opacity: hasDynamicIsland ? opacityAnim : animatedValue,
            ...(hasDynamicIsland && {
              width: dynamicWidth,
              height: dynamicHeight,
              borderRadius: borderRadius,
            }),
          },
        ]}
      >
        {hasDynamicIsland ? (
          <View
            style={[
              styles.dynamicIslandContent,
              { paddingTop: safeAreaTop + 10 },
            ]}
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout;
              setContentHeight(height);
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
                paddingHorizontal: 20,
                gap: 12,
              }}
            >
              <Text style={[styles.icon, { color: getTextColor() }]}>
                {getIcon()}
              </Text>
              <Text style={[styles.message, { color: getTextColor() }]}>
                {message}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.content}>
            <View style={styles.iconContainer}>
              {icon ? (
                icon
              ) : (
                <Text style={[styles.icon, { color: getTextColor() }]}>
                  {getIcon()}
                </Text>
              )}
            </View>
            <Text style={[styles.message, { color: getTextColor() }]}>
              {message}
            </Text>
          </View>
        )}
      </Animated.View>
    </>
  );
}
