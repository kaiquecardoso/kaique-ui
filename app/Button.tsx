import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ButtonScreen() {
  const [count, setCount] = useState(0);
  const { colors, isDark } = useTheme();

  const handlePrimaryPress = () => {
    setCount(count + 1);
    Alert.alert("Botão Primário", `Pressionado ${count + 1} vezes!`);
  };

  const handleSecondaryPress = () => {
    Alert.alert("Botão Secundário", "Ação secundária executada!");
  };

  const handleDangerPress = () => {
    Alert.alert(
      "Ação Perigosa", 
      "Tem certeza que deseja continuar?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Continuar", style: "destructive" }
      ]
    );
  };

  const handleDisabledPress = () => {
    // Não faz nada - botão desabilitado
  };

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <ThemedText style={styles.title}>Button Components</ThemedText>
          <ThemedText style={styles.subtitle}>
            Diferentes estilos e estados de botões
          </ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Botão Primário</ThemedText>
          <TouchableOpacity style={styles.primaryButton} onPress={handlePrimaryPress}>
            <ThemedText style={styles.primaryButtonText}>
              Clique aqui ({count})
            </ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Botão Secundário</ThemedText>
          <TouchableOpacity style={styles.secondaryButton} onPress={handleSecondaryPress}>
            <ThemedText style={styles.secondaryButtonText}>
              Ação Secundária
            </ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Botão de Perigo</ThemedText>
          <TouchableOpacity style={styles.dangerButton} onPress={handleDangerPress}>
            <ThemedText style={styles.dangerButtonText}>
              Excluir Item
            </ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Botão Desabilitado</ThemedText>
          <TouchableOpacity 
            style={[styles.primaryButton, styles.disabledButton]} 
            onPress={handleDisabledPress}
            disabled={true}
          >
            <ThemedText style={styles.disabledButtonText}>
              Não Disponível
            </ThemedText>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Botões Pequenos</ThemedText>
          <View style={styles.row}>
            <TouchableOpacity style={styles.smallButton} onPress={() => Alert.alert("Sim!")}>
              <ThemedText style={styles.smallButtonText}>Sim</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.smallButton, styles.smallSecondaryButton]} onPress={() => Alert.alert("Não!")}>
              <ThemedText style={styles.smallSecondaryButtonText}>Não</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const createStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 30,
    paddingTop: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 4,
    letterSpacing: -0.4,
    lineHeight: 42,
  },
  subtitle: {
    fontSize: 17,
    color: colors.secondaryText,
    fontWeight: "400",
    lineHeight: 22,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: Colors.common.blue,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryButtonText: {
    color: Colors.common.white,
    fontSize: 17,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.common.blue,
  },
  secondaryButtonText: {
    color: Colors.common.blue,
    fontSize: 17,
    fontWeight: "600",
  },
  dangerButton: {
    backgroundColor: Colors.common.red,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  dangerButtonText: {
    color: Colors.common.white,
    fontSize: 17,
    fontWeight: "600",
  },
  disabledButton: {
    backgroundColor: colors.systemSecondaryBackground,
  },
  disabledButtonText: {
    color: colors.tertiaryText,
    fontSize: 17,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  smallButton: {
    backgroundColor: Colors.common.green,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  smallButtonText: {
    color: Colors.common.white,
    fontSize: 15,
    fontWeight: "600",
  },
  smallSecondaryButton: {
    backgroundColor: Colors.common.orange,
  },
  smallSecondaryButtonText: {
    color: Colors.common.white,
    fontSize: 15,
    fontWeight: "600",
  },
});
