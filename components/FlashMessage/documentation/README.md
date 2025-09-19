# FlashMessage Component

Uma biblioteca de componentes React Native para exibir mensagens flash com suporte à Dynamic Island do iOS.

## Estrutura

```
FlashMessage/
├── index.ts                    # Exports principais
├── FlashMessage.tsx           # Componente principal
├── FlashMessageContext.tsx    # Context e Provider
├── FlashMessageGlobal.tsx     # Componente global
├── types.ts                   # Tipos e interfaces
├── constants.ts               # Constantes e configurações
├── utils.ts                   # Funções utilitárias
├── styles.ts                  # Estilos do componente
└── hooks/
    ├── useFlashMessageAnimation.ts
    └── useFlashMessageColors.ts
```

## Uso

### 1. Configurar o Provider

```tsx
import {
  FlashMessageProvider,
  FlashMessageGlobal,
} from "@/components/FlashMessage";

export default function App() {
  return (
    <FlashMessageProvider>
      {/* Seu app */}
      <FlashMessageGlobal />
    </FlashMessageProvider>
  );
}
```

### 2. Usar o Hook

```tsx
import { useFlashMessage } from "@/components/FlashMessage";

function MyComponent() {
  const { showMessage } = useFlashMessage();

  const handleSuccess = () => {
    showMessage({
      message: "Operação realizada com sucesso!",
      type: "success",
      duration: 3000,
    });
  };

  return (
    <TouchableOpacity onPress={handleSuccess}>
      <Text>Mostrar Mensagem</Text>
    </TouchableOpacity>
  );
}
```

### 3. Usar o Componente Diretamente

```tsx
import { FlashMessage } from "@/components/FlashMessage";

function MyComponent() {
  const [visible, setVisible] = useState(false);

  return (
    <FlashMessage
      message="Mensagem personalizada"
      type="info"
      visible={visible}
      onHide={() => setVisible(false)}
    />
  );
}
```

## Tipos de Mensagem

- `success` - Mensagem de sucesso (verde)
- `error` - Mensagem de erro (vermelho)
- `warning` - Mensagem de aviso (laranja)
- `info` - Mensagem informativa (azul)

## Recursos

- ✅ Suporte à Dynamic Island do iOS
- ✅ Animações suaves
- ✅ Configuração de duração personalizada
- ✅ Ícones personalizáveis
- ✅ Context API para gerenciamento global
- ✅ Hooks personalizados
- ✅ TypeScript completo
- ✅ Estilos separados
- ✅ Arquitetura modular

## Configuração

As configurações podem ser ajustadas no arquivo `constants.ts`:

```tsx
export const FLASH_MESSAGE_CONFIG = {
  defaultDuration: 3000,
  animationDuration: {
    show: 300,
    hide: 300,
    expand: 200,
  },
  colors: {
    // Cores personalizadas para cada tipo
  },
};
```
