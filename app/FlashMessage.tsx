import { useFlashMessage } from "@/components/FlashMessage";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useDynamicIsland } from "@/hooks/use-dynamic-island";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function FlashMessageScreen() {
  const { showMessage } = useFlashMessage();
  const { hasDynamicIsland, safeAreaTop } = useDynamicIsland();

  const handleSuccessMessage = () => {
    showMessage({
      message: "Operação realizada com sucesso!",
      type: "success",
    });
  };

  const handleErrorMessage = () => {
    showMessage({
      message: "Erro ao processar solicitação",
      type: "error",
    });
  };

  const handleWarningMessage = () => {
    showMessage({
      message: "Atenção: Verifique os dados inseridos",
      type: "warning",
    });
  };

  const handleInfoMessage = () => {
    showMessage({
      message:
        "Informação importante para você Informação importante para você Informação importante para você Informação importante para você Informação importante para você Informação importante para você Informação importante para você Informação importante para você Informação importante para você ",
      type: "info",
    });
  };

  const handleDynamicIslandMessage = () => {
    showMessage({
      message: "Mensagem na ilha dinâmica!",
      type: "success",
    });
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText style={styles.title}>FlashMessage Demo</ThemedText>

        <TouchableOpacity
          style={[styles.button, styles.successButton]}
          onPress={handleSuccessMessage}
        >
          <ThemedText style={styles.buttonText}>Success Message</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.errorButton]}
          onPress={handleErrorMessage}
        >
          <ThemedText style={styles.buttonText}>Error Message</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.warningButton]}
          onPress={handleWarningMessage}
        >
          <ThemedText style={styles.buttonText}>Warning Message</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.infoButton]}
          onPress={handleInfoMessage}
        >
          <ThemedText style={styles.buttonText}>Info Message</ThemedText>
        </TouchableOpacity>

        <ThemedText style={styles.sectionTitle}>Device Info</ThemedText>

        <ThemedText style={styles.infoText}>
          Safe Area Top: {safeAreaTop}px
        </ThemedText>

        <ThemedText style={styles.infoText}>
          Has Dynamic Island: {hasDynamicIsland ? "Sim" : "Não"}
        </ThemedText>

        {hasDynamicIsland && (
          <>
            <ThemedText style={styles.sectionTitle}>
              Dynamic Island Test
            </ThemedText>

            <TouchableOpacity
              style={[styles.button, styles.dynamicIslandButton]}
              onPress={handleDynamicIslandMessage}
            >
              <ThemedText style={styles.buttonText}>
                Testar Ilha Dinâmica
              </ThemedText>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Fundo escuro
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 200,
    alignItems: "center",
  },
  successButton: {
    backgroundColor: "#28a745",
  },
  errorButton: {
    backgroundColor: "#dc3545",
  },
  warningButton: {
    backgroundColor: "#ffc107",
  },
  infoButton: {
    backgroundColor: "#17a2b8",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
    color: "#fff",
  },
  dynamicIslandButton: {
    backgroundColor: "#6c757d",
  },
  infoText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
});
