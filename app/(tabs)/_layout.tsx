import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";

import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="ic_menu_mylocation" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="components">
        <Label>Componentes</Label>
        <Icon sf="square.grid.2x2.fill" drawable="ic_menu_mylocation" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Label>Settings</Label>
        <Icon sf="gear" drawable="ic_settings" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
