import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/contexts/ThemeContext";
import { useRouter } from "expo-router";
import React from "react";
import {
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ComponentItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  onPress: () => void;
}

export default function ComponentsScreen() {
  const router = useRouter();
  const { colors, isDark } = useTheme();
  const styles = createStyles(colors);

  const components: ComponentItem[] = [
    {
      id: "flashmessage",
      title: "FlashMessage",
      description: "Sistema de notificações e mensagens flash",
      icon: "💬",
      onPress: () => router.push("/FlashMessage"),
    },
    {
      id: "button",
      title: "Button",
      description: "Componente de botão personalizado",
      icon: "🔘",
      onPress: () => router.push("/Button"),
    },
    {
      id: "input",
      title: "Input",
      description: "Campo de entrada de texto",
      icon: "📝",
      onPress: () => router.push("/Input"),
    },
    {
      id: "card",
      title: "Card",
      description: "Cartão de conteúdo",
      icon: "📄",
      onPress: () => router.push("/Card"),
    },
  ];

  const renderComponentItem = (item: ComponentItem) => (
    <TouchableOpacity
      key={item.id}
      style={styles.listItem}
      onPress={item.onPress}
      activeOpacity={0.7}
    >
      <View style={styles.itemContent}>
        <View style={styles.iconContainer}>
          <ThemedText style={styles.icon}>{item.icon}</ThemedText>
        </View>
        <View style={styles.textContainer}>
          <ThemedText style={styles.itemTitle}>{item.title}</ThemedText>
          <ThemedText style={styles.itemDescription}>{item.description}</ThemedText>
        </View>
        <View style={styles.chevronContainer}>
          <ThemedText style={styles.chevron}>›</ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={true}
      >
        <View style={styles.listContainer}>
          {components.map(renderComponentItem)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.systemGroupedBackground,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 34,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  listItem: {
    backgroundColor: colors.systemSecondaryGroupedBackground,
    borderRadius: 10,
    marginBottom: 8,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadowColor,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: colors.shadowOpacity,
        shadowRadius: 3,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 60,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.systemTertiaryGroupedBackground,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  icon: {
    fontSize: 22,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.label,
    marginBottom: 3,
    lineHeight: 22,
  },
  itemDescription: {
    fontSize: 15,
    color: colors.secondaryLabel,
    fontWeight: "400",
    lineHeight: 20,
  },
  chevronContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
  chevron: {
    fontSize: 16,
    color: colors.tertiaryLabel,
    fontWeight: "400",
  },
});
