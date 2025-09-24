import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';
import { Platform, ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const { colors, themeMode, setThemeMode, isDark } = useTheme();
  const styles = createStyles(colors);

  const handleThemeChange = (mode: 'system' | 'light' | 'dark') => {
    setThemeMode(mode);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.header}>
            <ThemedText style={styles.title}>Configurações</ThemedText>
            <ThemedText style={styles.subtitle}>
              Personalize sua experiência no app
            </ThemedText>
          </View>

          {/* Seção Aparência */}
          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Aparência</ThemedText>
            
            <View style={styles.settingGroup}>
              {/* Automático (Sistema) */}
              <TouchableOpacity 
                style={styles.settingItem}
                onPress={() => handleThemeChange('system')}
              >
                <View style={styles.settingContent}>
                  <View style={styles.settingInfo}>
                    <ThemedText style={styles.settingLabel}>Automático</ThemedText>
                    <ThemedText style={styles.settingDescription}>
                      Segue as configurações do sistema
                    </ThemedText>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={[
                      styles.radioButton, 
                      themeMode === 'system' && styles.radioButtonSelected
                    ]}>
                      {themeMode === 'system' && <View style={styles.radioButtonInner} />}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              {/* Modo Claro */}
              <TouchableOpacity 
                style={styles.settingItem}
                onPress={() => handleThemeChange('light')}
              >
                <View style={styles.settingContent}>
                  <View style={styles.settingInfo}>
                    <ThemedText style={styles.settingLabel}>Modo Claro</ThemedText>
                    <ThemedText style={styles.settingDescription}>
                      Interface sempre clara
                    </ThemedText>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={[
                      styles.radioButton, 
                      themeMode === 'light' && styles.radioButtonSelected
                    ]}>
                      {themeMode === 'light' && <View style={styles.radioButtonInner} />}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              {/* Modo Escuro */}
              <TouchableOpacity 
                style={styles.settingItem}
                onPress={() => handleThemeChange('dark')}
              >
                <View style={styles.settingContent}>
                  <View style={styles.settingInfo}>
                    <ThemedText style={styles.settingLabel}>Modo Escuro</ThemedText>
                    <ThemedText style={styles.settingDescription}>
                      Interface sempre escura
                    </ThemedText>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={[
                      styles.radioButton, 
                      themeMode === 'dark' && styles.radioButtonSelected
                    ]}>
                      {themeMode === 'dark' && <View style={styles.radioButtonInner} />}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Switch do iOS 26 */}
          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Modo Escuro (Switch)</ThemedText>
            
            <View style={styles.settingGroup}>
              <View style={styles.settingItem}>
                <View style={styles.settingContent}>
                  <View style={styles.settingInfo}>
                    <ThemedText style={styles.settingLabel}>Modo Escuro</ThemedText>
                    <ThemedText style={styles.settingDescription}>
                      Switch no estilo iOS 26
                    </ThemedText>
                  </View>
                  <Switch
                    value={isDark}
                    onValueChange={(value) => handleThemeChange(value ? 'dark' : 'light')}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* Info do Tema Atual */}
          <View style={styles.section}>
            <ThemedText style={styles.sectionTitle}>Informações</ThemedText>
            
            <View style={styles.infoContainer}>
              <ThemedText style={styles.infoText}>
                Tema atual: <ThemedText style={styles.infoValue}>{themeMode === 'system' ? 'Automático' : themeMode === 'light' ? 'Claro' : 'Escuro'}</ThemedText>
              </ThemedText>
              <ThemedText style={styles.infoText}>
                Esquema de cores: <ThemedText style={styles.infoValue}>{isDark ? 'Escuro' : 'Claro'}</ThemedText>
              </ThemedText>
              <ThemedText style={styles.infoText}>
                Plataforma: <ThemedText style={styles.infoValue}>{Platform.OS === 'ios' ? 'iOS' : 'Android'}</ThemedText>
              </ThemedText>
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
  content: {
    flex: 1,
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
  settingGroup: {
    backgroundColor: colors.systemSecondaryGroupedBackground,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: colors.shadowOpacity,
    shadowRadius: 3,
    elevation: 1,
  },
  settingItem: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.separator,
  },
  settingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    minHeight: 60,
  },
  settingInfo: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.label,
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 15,
    color: colors.secondaryLabel,
    fontWeight: "400",
  },
  radioContainer: {
    marginLeft: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.separator,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: colors.link,
  },
  radioButtonInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.link,
  },
  infoContainer: {
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
  infoText: {
    fontSize: 15,
    color: colors.secondaryLabel,
    marginBottom: 8,
  },
  infoValue: {
    fontWeight: "600",
    color: colors.label,
  },
});
