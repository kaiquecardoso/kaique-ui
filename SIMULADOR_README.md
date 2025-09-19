# 📱 Configuração do Simulador iPhone 17 Pro

Este projeto está configurado para usar o **iPhone 17 Pro** como simulador padrão para desenvolvimento iOS.

## 🚀 Como Usar

### Opção 1: Script Automático (Recomendado)
```bash
# Inicia o iPhone 17 Pro e abre o app automaticamente
npm run ios:17pro
```

### Opção 2: Configuração Manual
```bash
# 1. Inicia o simulador iPhone 17 Pro
npm run ios:setup

# 2. Em outro terminal, inicia o Expo
npm run ios
```

### Opção 3: Comando Direto
```bash
# Inicia o Expo no iOS (usará o simulador ativo)
npm run ios
```

## 🔧 Scripts Disponíveis

- `npm run ios` - Inicia o Expo no iOS (usa simulador ativo)
- `npm run ios:17pro` - Script automático para iPhone 17 Pro
- `npm run ios:setup` - Inicia apenas o simulador iPhone 17 Pro

## 📋 Pré-requisitos

- Xcode instalado
- Simulador iPhone 17 Pro disponível
- Expo CLI configurado

## ✅ Verificação

Para verificar se o iPhone 17 Pro está ativo:
```bash
xcrun simctl list devices | grep "iPhone 17 Pro" | grep "Booted"
```

## 🎯 Notas Importantes

- O Expo não suporta a opção `--simulator` diretamente
- O simulador deve estar iniciado antes de executar `npm run ios`
- O script `ios:17pro` garante que o iPhone 17 Pro esteja ativo antes de iniciar o Expo

