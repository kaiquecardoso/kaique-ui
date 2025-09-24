/**
 * Cores seguindo os padrões do iOS/Apple
 * Baseado no Apple Human Interface Guidelines
 */

export const Colors = {
  light: {
    // Cores de sistema
    background: '#ffffff',
    secondaryBackground: '#f2f2f7',
    tertiaryBackground: '#ffffff',
    
    // Cores de texto
    text: '#000000',
    secondaryText: '#8e8e93',
    tertiaryText: '#c7c7cc',
    
    // Cores de separadores e bordas
    separator: '#c6c6c8',
    opaqueSeparator: '#c6c6c8',
    
    // Cores de elementos interativos
    link: '#007aff',
    
    // Cores de sistema para elementos
    systemBackground: '#ffffff',
    systemSecondaryBackground: '#f2f2f7',
    systemTertiaryBackground: '#ffffff',
    systemGroupedBackground: '#f2f2f7',
    systemSecondaryGroupedBackground: '#ffffff',
    systemTertiaryGroupedBackground: '#f2f2f7',
    
    // Cores de preenchimento
    systemFill: '#78788033',
    systemSecondaryFill: '#78788028',
    systemTertiaryFill: '#7676801e',
    systemQuaternaryFill: '#74748014',
    
    // Cores de labels
    label: '#000000',
    secondaryLabel: '#3c3c4399',
    tertiaryLabel: '#3c3c434c',
    quaternaryLabel: '#3c3c432d',
    
    // Cores específicas para inputs
    inputBackground: '#ffffff',
    inputBorder: '#e5e5ea',
    inputText: '#000000',
    placeholderText: '#8e8e93',
    
    // Cores para cards
    cardBackground: '#ffffff',
    cardBorder: '#e5e5ea',
    
    // Sombras
    shadowColor: '#000000',
    shadowOpacity: 0.05,
  },
  
  dark: {
    // Cores de sistema
    background: '#000000',
    secondaryBackground: '#1c1c1e',
    tertiaryBackground: '#2c2c2e',
    
    // Cores de texto
    text: '#ffffff',
    secondaryText: '#8e8e93',
    tertiaryText: '#48484a',
    
    // Cores de separadores e bordas
    separator: '#38383a',
    opaqueSeparator: '#38383a',
    
    // Cores de elementos interativos
    link: '#0a84ff',
    
    // Cores de sistema para elementos
    systemBackground: '#000000',
    systemSecondaryBackground: '#1c1c1e',
    systemTertiaryBackground: '#2c2c2e',
    systemGroupedBackground: '#000000',
    systemSecondaryGroupedBackground: '#1c1c1e',
    systemTertiaryGroupedBackground: '#2c2c2e',
    
    // Cores de preenchimento
    systemFill: '#7878805b',
    systemSecondaryFill: '#78788051',
    systemTertiaryFill: '#7676803d',
    systemQuaternaryFill: '#74748029',
    
    // Cores de labels
    label: '#ffffff',
    secondaryLabel: '#ebebf599',
    tertiaryLabel: '#ebebf54c',
    quaternaryLabel: '#ebebf52d',
    
    // Cores específicas para inputs
    inputBackground: '#1c1c1e',
    inputBorder: '#38383a',
    inputText: '#ffffff',
    placeholderText: '#8e8e93',
    
    // Cores para cards
    cardBackground: '#1c1c1e',
    cardBorder: '#38383a',
    
    // Sombras
    shadowColor: '#ffffff',
    shadowOpacity: 0.1,
  },
  
  // Cores que são iguais em ambos os temas
  common: {
    // Cores de sistema do iOS
    blue: '#007aff',
    blueDark: '#0a84ff',
    green: '#34c759',
    greenDark: '#30d158',
    indigo: '#5856d6',
    indigoDark: '#5e5ce6',
    orange: '#ff9500',
    orangeDark: '#ff9f0a',
    pink: '#ff2d92',
    pinkDark: '#ff375f',
    purple: '#af52de',
    purpleDark: '#bf5af2',
    red: '#ff3b30',
    redDark: '#ff453a',
    teal: '#5ac8fa',
    tealDark: '#64d2ff',
    yellow: '#ffcc00',
    yellowDark: '#ffd60a',
    
    // Cores neutras
    gray: '#8e8e93',
    gray2: '#aeaeb2',
    gray3: '#c7c7cc',
    gray4: '#d1d1d6',
    gray5: '#e5e5ea',
    gray6: '#f2f2f7',
    
    // Cores especiais
    clear: 'transparent',
    white: '#ffffff',
    black: '#000000',
  }
} as const;

export type ColorScheme = 'light' | 'dark';
export type ThemeColors = typeof Colors.light;
