import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/contexts/ThemeContext";
import React, { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InputScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
          <View style={styles.header}>
            <ThemedText style={styles.title}>Input Components</ThemedText>
            <ThemedText style={styles.subtitle}>
              Diferentes tipos de campos de entrada
            </ThemedText>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Input Básico</ThemedText>
            <View style={styles.inputContainer}>
              <ThemedText style={styles.label}>Nome</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                placeholderTextColor={colors.placeholderText}
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Input com Email</ThemedText>
            <View style={styles.inputContainer}>
              <ThemedText style={styles.label}>E-mail</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="exemplo@email.com"
                placeholderTextColor={colors.placeholderText}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Input de Senha</ThemedText>
            <View style={styles.inputContainer}>
              <ThemedText style={styles.label}>Senha</ThemedText>
              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor={colors.placeholderText}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Input de Busca</ThemedText>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, styles.searchInput]}
                placeholder="🔍 Buscar..."
                placeholderTextColor={colors.placeholderText}
                value={search}
                onChangeText={setSearch}
                returnKeyType="search"
              />
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Textarea</ThemedText>
            <View style={styles.inputContainer}>
              <ThemedText style={styles.label}>Descrição</ThemedText>
              <TextInput
                style={[styles.input, styles.textarea]}
                placeholder="Digite uma descrição detalhada..."
                placeholderTextColor={colors.placeholderText}
                value={description}
                onChangeText={setDescription}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Input Desabilitado</ThemedText>
            <View style={styles.inputContainer}>
              <ThemedText style={styles.label}>Campo Bloqueado</ThemedText>
              <TextInput
                style={[styles.input, styles.disabledInput]}
                placeholder="Este campo está desabilitado"
                placeholderTextColor={colors.tertiaryText}
                value="Valor fixo"
                editable={false}
              />
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Valores Atuais</ThemedText>
            <View style={styles.valuesContainer}>
              <ThemedText style={styles.valueText}>Nome: {name || "Não preenchido"}</ThemedText>
              <ThemedText style={styles.valueText}>E-mail: {email || "Não preenchido"}</ThemedText>
              <ThemedText style={styles.valueText}>Senha: {password ? "•".repeat(password.length) : "Não preenchida"}</ThemedText>
              <ThemedText style={styles.valueText}>Busca: {search || "Não preenchida"}</ThemedText>
              <ThemedText style={styles.valueText}>Descrição: {description || "Não preenchida"}</ThemedText>
            </View>
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
    padding: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    paddingTop: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: colors.label,
    marginBottom: 4,
    letterSpacing: -0.4,
    lineHeight: 42,
  },
  subtitle: {
    fontSize: 17,
    color: colors.secondaryLabel,
    fontWeight: "400",
    lineHeight: 22,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.label,
    marginBottom: 12,
  },
  inputContainer: {
    backgroundColor: colors.systemSecondaryGroupedBackground,
    borderRadius: 12,
    padding: 16,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: colors.shadowOpacity,
    shadowRadius: 3,
    elevation: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.label,
    marginBottom: 8,
  },
  input: {
    fontSize: 17,
    color: colors.inputText,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 8,
    backgroundColor: colors.inputBackground,
  },
  searchInput: {
    backgroundColor: colors.systemTertiaryGroupedBackground,
    borderWidth: 0,
  },
  textarea: {
    height: 100,
    paddingTop: 12,
  },
  disabledInput: {
    backgroundColor: colors.systemTertiaryGroupedBackground,
    color: colors.tertiaryLabel,
  },
  valuesContainer: {
    backgroundColor: colors.systemSecondaryGroupedBackground,
    borderRadius: 12,
    padding: 16,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: colors.shadowOpacity,
    shadowRadius: 3,
    elevation: 1,
  },
  valueText: {
    fontSize: 15,
    color: colors.label,
    marginBottom: 8,
    fontFamily: "monospace",
  },
});
