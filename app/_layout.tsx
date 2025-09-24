import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
    FlashMessageGlobal,
    FlashMessageProvider,
} from "@/components/FlashMessage";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

function AppContent() {
  const colorScheme = useColorScheme();

  return (
    <NavigationThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
        <Stack.Screen
          name="FlashMessage"
          options={{ title: "FlashMessage Demo" }}
        />
        <Stack.Screen
          name="Button"
          options={{ title: "Button Components" }}
        />
        <Stack.Screen
          name="Input"
          options={{ title: "Input Components" }}
        />
        <Stack.Screen
          name="Card"
          options={{ title: "Card Components" }}
        />
      </Stack>
      <StatusBar style="auto" />
      <FlashMessageGlobal />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <FlashMessageProvider>
          <AppContent />
        </FlashMessageProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
