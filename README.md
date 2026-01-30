# 🔋 Maiores Geradores de Energia do Brasil - Frontend

Aplicação web desenvolvida para visualizar e analisar os maiores geradores de energia do Brasil. Este projeto foi desenvolvido como parte do desafio técnico para a posição júnior na Bolt Energy Inc.

## 📋 Sobre o Projeto

Esta aplicação frontend consome uma API REST que fornece dados sobre usinas e geradores de energia no Brasil. A interface permite visualizar, pesquisar, ordenar e paginar informações sobre os principais empreendimentos de geração de energia do país.

### ✨ Funcionalidades

- 📊 **Visualização em Tabela**: Exibição organizada dos dados de geradores de energia
- 🔍 **Pesquisa em Tempo Real**: Busca por nome do empreendimento, UF, tipo de geração ou origem do combustível
- 🔄 **Ordenação Dinâmica**: Ordenação por qualquer coluna (nome, potência, UF, tipo, origem, situação)
- 📄 **Paginação Server-Side**: Navegação eficiente entre grandes volumes de dados
- 📱 **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- ⚡ **Performance Otimizada**: Carregamento rápido com paginação e busca no servidor

### 📊 Dados Exibidos

- **Ranking**: Posição do gerador por potência
- **Empreendimento**: Nome da usina/gerador
- **Potência**: Capacidade de geração em MW (convertida de kW)
- **UF**: Unidade Federativa principal
- **Tipo**: Tipo de geração (EOL, UFV, UHE, etc.)
- **Origem**: Origem do combustível/fonte de energia
- **Situação**: Status atual da obra

## 🚀 Tecnologias Utilizadas

- **[React](https://react.dev/)** 18.2.0 - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** 5.0+ - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** 5.0+ - Build tool e dev server de alta performance
- **[Axios](https://axios-http.com/)** 1.6.0 - Cliente HTTP para requisições à API
- **[React Data Table Component](https://react-data-table-component.netlify.app/)** 7.6.2 - Componente de tabela com recursos avançados
- **[Styled Components](https://styled-components.com/)** 6.1.0 - Estilização CSS-in-JS

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** 16.x ou superior
- **npm** 8.x ou superior (ou yarn/pnpm)
- **Backend API** rodando em `http://localhost:8080`

## 🔧 Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd process-file-frontend
```

2. **Instale as dependências**
```bash
npm install
```

## 🎮 Como Executar

### Modo Desenvolvimento

Inicia o servidor de desenvolvimento com hot-reload:

```bash
npm run dev
```

A aplicação estará disponível em: **http://localhost:3000**

### Build para Produção

Gera os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

### Preview da Build

Visualiza a versão de produção localmente:

```bash
npm run preview
```

## 🔌 Configuração da API

O frontend está configurado para se comunicar com o backend através de um proxy configurado no Vite:

- **URL da API**: `http://localhost:8080`
- **Endpoint**: `/api/v1/power-plants`
- **Porta do Frontend**: `3000`

Para alterar a URL do backend, edite o arquivo `vite.config.ts`:

```typescript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8080', // Altere aqui
      changeOrigin: true,
      secure: false
    }
  }
}
```

## 📁 Estrutura do Projeto

```
process-file-frontend/
├── src/
│   ├── App.tsx           # Componente principal da aplicação
│   ├── main.tsx          # Ponto de entrada do React
│   ├── index.css         # Estilos globais
│   └── types.ts          # Definições de tipos TypeScript
├── index.html            # Template HTML
├── package.json          # Dependências e scripts
├── tsconfig.json         # Configuração do TypeScript
├── vite.config.ts        # Configuração do Vite
└── README.md            # Este arquivo
```

## 🎨 Características da Interface

### Tabela de Dados
- Cabeçalhos clicáveis para ordenação
- Indicador visual de coluna ordenada
- Linhas alternadas para melhor legibilidade
- Hover effect nas linhas

### Busca
- Campo de pesquisa com placeholder descritivo
- Busca em tempo real (debounced)
- Pesquisa em múltiplos campos simultaneamente

### Paginação
- Seleção de itens por página (10, 25, 50, 100)
- Navegação entre páginas
- Contador de registros totais
- Textos em português

## 🔄 Fluxo de Dados

1. Usuário interage com a interface (pesquisa, ordena, muda de página)
2. Estado do React é atualizado
3. `useEffect` detecta mudança e dispara `fetchData`
4. Requisição HTTP é enviada ao backend com parâmetros
5. Backend processa e retorna dados paginados
6. Estado é atualizado com novos dados
7. Tabela é re-renderizada com as informações

## 🛠️ Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run preview` | Visualiza build de produção |

## 🌐 Compatibilidade de Navegadores

- Chrome/Edge (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)

## 📝 Notas de Desenvolvimento

### Formatação de Dados
- Potência é convertida de kW para MW automaticamente
- Números formatados no padrão brasileiro (pt-BR)
- Badges coloridos para UF e tipo de geração

### Performance
- Paginação server-side para lidar com grandes volumes
- Ordenação server-side para melhor performance
- Busca server-side para resultados mais rápidos
- `useCallback` para evitar re-renders desnecessários

## 🤝 Contribuindo

Este é um projeto de desafio técnico. Para sugestões ou melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido como parte de um desafio técnico para a Bolt Energy Inc.

## 👤 Autor

Desenvolvido como parte do desafio técnico para posição júnior na **Bolt Energy Inc**.

---

⚡ **Bolt Energy Inc** - Transformando o futuro da energia no Brasil