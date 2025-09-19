# Estrutura do FlashMessage

## Organização de Arquivos

```
FlashMessage/
├── index.ts                    # Exports centralizados
├── styles.ts                   # Estilos do componente
├── constants.ts                # Constantes e configurações
├── FlashMessage.tsx           # Componente principal
├── FlashMessageGlobal.tsx     # Componente global
├── contexts/
│   └── FlashMessageContext.tsx # Context e Provider
├── types/
│   └── types.ts               # Tipos e interfaces
├── utils/
│   └── utils.ts               # Funções utilitárias
├── hooks/
│   ├── useFlashMessageAnimation.ts
│   └── useFlashMessageColors.ts
└── documentation/
    ├── README.md              # Documentação principal
    └── STRUCTURE.md           # Este arquivo
```

## Responsabilidades por Pasta

### 📁 **Raiz**

- `index.ts`: Exports centralizados para facilitar imports
- `styles.ts`: Estilos do componente
- `constants.ts`: Configurações e constantes
- `FlashMessage.tsx`: Componente principal
- `FlashMessageGlobal.tsx`: Componente global

### 📁 **contexts/**

- `FlashMessageContext.tsx`: Context API para gerenciamento de estado global

### 📁 **types/**

- `types.ts`: Todas as interfaces e tipos TypeScript

### 📁 **utils/**

- `utils.ts`: Funções utilitárias e helpers

### 📁 **hooks/**

- `useFlashMessageAnimation.ts`: Hook para gerenciar animações
- `useFlashMessageColors.ts`: Hook para gerenciar cores e temas

### 📁 **documentation/**

- `README.md`: Documentação principal com exemplos
- `STRUCTURE.md`: Este arquivo com estrutura do projeto

## Vantagens desta Organização

1. **Separação Clara**: Cada pasta tem uma responsabilidade específica
2. **Manutenibilidade**: Fácil localizar e modificar arquivos
3. **Escalabilidade**: Estrutura preparada para crescimento
4. **Reutilização**: Utilitários e tipos podem ser reutilizados
5. **Testabilidade**: Componentes menores e mais focados
6. **Documentação**: Pasta dedicada para documentação
