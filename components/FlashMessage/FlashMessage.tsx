import { StatusBar } from "expo-status-bar";
import React from "react";
import { Animated, Dimensions, Platform, Text, View } from "react-native";
import { DYNAMIC_ISLAND_CONFIG } from "./constants";
import { useFlashMessageAnimation } from "./hooks/useFlashMessageAnimation";
import { useFlashMessageColors } from "./hooks/useFlashMessageColors";
import { styles } from "./styles";
import { FlashMessageProps } from "./types/types";
import { getFlashMessageIcon } from "./utils/utils";

const { width: screenWidth } = Dimensions.get("window");

export default function FlashMessage({
  message,
  icon,
  type = "info",
  visible,
  duration = 3000,
  onHide,
}: FlashMessageProps) {
  const {
    animatedValue,
    expandAnim,
    opacityAnim,
    expandHeightAnim,
    contentHeight,
    setContentHeight,
    statusBarHidden,
    statusBarStyle,
    hasDynamicIsland,
    islandHeight,
    islandWidth,
    safeAreaTop,
  } = useFlashMessageAnimation({
    visible,
    duration,
    onHide,
  });

  const { backgroundColor, textColor, iconColor } = useFlashMessageColors(type);

  const getIcon = () => {
    return icon || getFlashMessageIcon(type);
  };

  if (!visible) return null;

  // Interpolações para ilha dinâmica
  const dynamicWidth = expandAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [islandWidth, screenWidth - 40],
  });

  const dynamicHeight = expandHeightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [islandHeight, DYNAMIC_ISLAND_CONFIG.expandedHeight],
  });

  const borderRadius = expandHeightAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [islandHeight / 2, DYNAMIC_ISLAND_CONFIG.borderRadius],
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
            backgroundColor,
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
            opacity: 1,
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
            <View style={styles.dynamicIslandRow}>
              <Text style={[styles.icon, { color: iconColor }]}>
                {getIcon()}
              </Text>
              <Text style={[styles.message, { color: textColor }]}>
                {message}
              </Text>
            </View>
          </View>
        ) : (
          <View style={styles.content}>
            <View style={styles.iconContainer}>
              {typeof getIcon() === "string" ? (
                <Text style={[styles.icon, { color: iconColor }]}>
                  {getIcon()}
                </Text>
              ) : (
                getIcon()
              )}
            </View>
            <Text style={[styles.message, { color: textColor }]}>
              {message}
            </Text>
          </View>
        )}
      </Animated.View>
    </>
  );
}
