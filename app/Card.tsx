import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
import React from "react";
import { Alert, Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CardScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  
  const handleCardPress = (title: string) => {
    Alert.alert("Card Pressionado", `Você clicou no card: ${title}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
          <View style={styles.header}>
            <ThemedText style={styles.title}>Card Components</ThemedText>
            <ThemedText style={styles.subtitle}>
              Diferentes estilos de cartões de conteúdo
            </ThemedText>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Card Básico</ThemedText>
            <TouchableOpacity 
              style={styles.basicCard}
              onPress={() => handleCardPress("Card Básico")}
            >
              <ThemedText style={styles.cardTitle}>Título do Card</ThemedText>
              <ThemedText style={styles.cardDescription}>
                Esta é uma descrição simples do conteúdo do card. 
                Clique para interagir.
              </ThemedText>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Card com Ícone</ThemedText>
            <TouchableOpacity 
              style={styles.iconCard}
              onPress={() => handleCardPress("Card com Ícone")}
            >
              <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                  <ThemedText style={styles.icon}>🎉</ThemedText>
                </View>
                <View style={styles.cardHeaderText}>
                  <ThemedText style={styles.cardTitle}>Parabéns!</ThemedText>
                  <ThemedText style={styles.cardSubtitle}>Você completou a tarefa</ThemedText>
                </View>
              </View>
              <ThemedText style={styles.cardDescription}>
                Este card mostra informações com um ícone de destaque.
              </ThemedText>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Card com Imagem</ThemedText>
            <TouchableOpacity 
              style={styles.imageCard}
              onPress={() => handleCardPress("Card com Imagem")}
            >
              <Image
                source={require('@/assets/images/react-logo.png')}
                style={styles.cardImage}
              />
              <View style={styles.cardContent}>
                <ThemedText style={styles.cardTitle}>React Native</ThemedText>
                <ThemedText style={styles.cardDescription}>
                  Framework para desenvolvimento mobile multiplataforma.
                </ThemedText>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Cards em Grid</ThemedText>
            <View style={styles.gridContainer}>
              <TouchableOpacity 
                style={styles.gridCard}
                onPress={() => handleCardPress("Card 1")}
              >
                <ThemedText style={styles.gridIcon}>📊</ThemedText>
                <ThemedText style={styles.gridTitle}>Estatísticas</ThemedText>
                <ThemedText style={styles.gridDescription}>Ver dados</ThemedText>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.gridCard}
                onPress={() => handleCardPress("Card 2")}
              >
                <ThemedText style={styles.gridIcon}>⚙️</ThemedText>
                <ThemedText style={styles.gridTitle}>Configurações</ThemedText>
                <ThemedText style={styles.gridDescription}>Ajustar app</ThemedText>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.gridCard}
                onPress={() => handleCardPress("Card 3")}
              >
                <ThemedText style={styles.gridIcon}>💬</ThemedText>
                <ThemedText style={styles.gridTitle}>Mensagens</ThemedText>
                <ThemedText style={styles.gridDescription}>Chat</ThemedText>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.gridCard}
                onPress={() => handleCardPress("Card 4")}
              >
                <ThemedText style={styles.gridIcon}>👤</ThemedText>
                <ThemedText style={styles.gridTitle}>Perfil</ThemedText>
                <ThemedText style={styles.gridDescription}>Minha conta</ThemedText>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Card com Ações</ThemedText>
            <View style={styles.actionCard}>
              <ThemedText style={styles.cardTitle}>Notificação Importante</ThemedText>
              <ThemedText style={styles.cardDescription}>
                Você tem uma nova mensagem importante para revisar.
              </ThemedText>
              <View style={styles.actionButtons}>
                <TouchableOpacity 
                  style={styles.secondaryButton}
                  onPress={() => Alert.alert("Ignorado")}
                >
                  <ThemedText style={styles.secondaryButtonText}>Ignorar</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.primaryButton}
                  onPress={() => Alert.alert("Visualizado")}
                >
                  <ThemedText style={styles.primaryButtonText}>Ver Agora</ThemedText>
                </TouchableOpacity>
              </View>
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
  basicCard: {
    backgroundColor: colors.systemSecondaryGroupedBackground,
    borderRadius: 12,
    padding: 20,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: colors.shadowOpacity,
    shadowRadius: 3,
    elevation: 1,
  },
  iconCard: {
    backgroundColor: colors.systemSecondaryGroupedBackground,
    borderRadius: 12,
    padding: 20,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: colors.shadowOpacity,
    shadowRadius: 3,
    elevation: 1,
  },
  imageCard: {
    backgroundColor: colors.systemSecondaryGroupedBackground,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: colors.shadowOpacity,
    shadowRadius: 3,
    elevation: 1,
  },
  actionCard: {
    backgroundColor: colors.systemSecondaryGroupedBackground,
    borderRadius: 12,
    padding: 20,
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: colors.shadowOpacity,
    shadowRadius: 3,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.systemTertiaryGroupedBackground,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    fontSize: 20,
  },
  cardHeaderText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.label,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: colors.secondaryLabel,
    fontWeight: "400",
  },
  cardDescription: {
    fontSize: 15,
    color: colors.secondaryLabel,
    lineHeight: 20,
  },
  cardImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  cardContent: {
    padding: 20,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  gridCard: {
    backgroundColor: colors.systemSecondaryGroupedBackground,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    flex: 1,
    minWidth: "45%",
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: colors.shadowOpacity,
    shadowRadius: 3,
    elevation: 1,
  },
  gridIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.label,
    marginBottom: 4,
    textAlign: "center",
  },
  gridDescription: {
    fontSize: 12,
    color: colors.secondaryLabel,
    textAlign: "center",
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
  },
  primaryButton: {
    backgroundColor: Colors.common.blue,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  primaryButtonText: {
    color: Colors.common.white,
    fontSize: 15,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.separator,
  },
  secondaryButtonText: {
    color: colors.secondaryLabel,
    fontSize: 15,
    fontWeight: "600",
  },
});
