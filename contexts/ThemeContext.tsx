import { Colors, ColorScheme, ThemeColors } from '@/constants/Colors';
import { useColorScheme as useSystemColorScheme } from '@/hooks/use-color-scheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type ThemeMode = 'system' | 'light' | 'dark';

interface ThemeContextType {
  colorScheme: ColorScheme;
  colors: ThemeColors;
  isDark: boolean;
  isLight: boolean;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const THEME_STORAGE_KEY = '@theme_mode';

export function ThemeProvider({ children }: ThemeProviderProps) {
  const systemColorScheme = useSystemColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');

  // Determina o esquema de cores baseado no modo selecionado
  const getColorScheme = (): ColorScheme => {
    if (themeMode === 'system') {
      return systemColorScheme ?? 'light';
    }
    return themeMode;
  };

  const colorScheme = getColorScheme();
  const colors = Colors[colorScheme];
  const isDark = colorScheme === 'dark';
  const isLight = colorScheme === 'light';

  // Carrega o tema salvo no AsyncStorage
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme && ['system', 'light', 'dark'].includes(savedTheme)) {
          setThemeModeState(savedTheme as ThemeMode);
        }
      } catch (error) {
        console.warn('Error loading theme:', error);
      }
    };
    loadTheme();
  }, []);

  // Função para alterar o tema e salvar no AsyncStorage
  const setThemeMode = async (mode: ThemeMode) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
      setThemeModeState(mode);
    } catch (error) {
      console.warn('Error saving theme:', error);
      setThemeModeState(mode); // Define mesmo se não conseguir salvar
    }
  };

  const value: ThemeContextType = {
    colorScheme,
    colors,
    isDark,
    isLight,
    themeMode,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Hook para obter cores dinamicamente
export function useThemeColors(): ThemeColors {
  const { colors } = useTheme();
  return colors;
}

// Hook para verificar se está no modo escuro
export function useIsDarkMode(): boolean {
  const { isDark } = useTheme();
  return isDark;
}
