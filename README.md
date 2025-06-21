# 🎧 Comparação de Produtos - Frontend

Uma aplicação React para comparação de produtos, inspirada no design do Mercado Livre. Permite visualizar e comparar produtos da mesma categoria em diferentes formatos (cards e tabela).

## ✨ Funcionalidades

- **Visualização em Cards**: Grid responsivo com cards de produtos
- **Visualização em Tabela**: Comparação detalhada em formato tabular
- **Design Responsivo**: Adaptável a desktop, tablet e smartphone
- **Interface Intuitiva**: Toggle para alternar entre visualizações
- **Dados Mock**: Produtos de exemplo para demonstração
- **Design Moderno**: Interface limpa inspirada no Mercado Livre

## 🚀 Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para interfaces
- **Styled Components 6.0.0** - CSS-in-JS para estilização
- **React Icons 4.10.1** - Ícones para a interface
- **Axios 1.4.0** - Cliente HTTP para requisições
- **Create React App** - Configuração e build

## 📦 Instalação

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd item-comparision-frontend
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm start
```

4. **Acesse a aplicação:**
- Local: `http://localhost:3000`
- Rede: `http://192.168.15.6:3000` (para testar no smartphone)

## 🎯 Como Usar

### Visualização em Cards
- Padrão da aplicação
- Grid responsivo com informações dos produtos
- Cards com imagem, preço, avaliações e botão de ação

### Visualização em Tabela
- Clique no botão "Tabela" para alternar
- Comparação lado a lado dos produtos
- Informações organizadas em colunas

### Teste no Smartphone
1. Conecte o smartphone à mesma rede Wi-Fi
2. Acesse: `http://192.168.15.6:3000`
3. Teste a responsividade e navegação

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ProductCard.js      # Card individual do produto
│   ├── ProductTable.js     # Tabela de comparação
│   ├── LayoutToggle.js     # Toggle entre visualizações
│   ├── LoadingSpinner.js   # Componente de carregamento
│   └── ErrorMessage.js     # Componente de erro
├── services/
│   ├── api.js             # Serviços de API
│   └── mockData.js        # Dados mock para demonstração
├── App.js                 # Componente principal
└── index.js              # Ponto de entrada
```

## 🎨 Design System

### Cores
- **Primária**: `#3483fa` (Azul Mercado Livre)
- **Secundária**: `#ffd600` (Amarelo Mercado Livre)
- **Sucesso**: `#00a650` (Verde para envio grátis)
- **Erro**: `#f06464` (Vermelho para desconto)

### Tipografia
- **Títulos**: Font-weight 600, tamanhos variados
- **Texto**: Font-weight 400, cores em escala de cinza
- **Botões**: Font-weight 600, com hover effects

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- **Desktop**: Layout otimizado para telas grandes
- **Tablet**: Adaptação automática do grid
- **Smartphone**: Cards empilhados, navegação touch-friendly

## 🔧 Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm run build      # Cria build de produção
npm test           # Executa os testes
npm run eject      # Ejetar configurações (irreversível)
```

## 🌐 API Integration

A aplicação está preparada para integração com APIs reais:

### Estrutura de Dados Esperada
```javascript
{
  id: "string",
  name: "string",
  image_url: "string",
  price: {
    current: number,
    original: number,
    currency: "string",
    discount: "string"
  },
  rating: {
    stars: number,
    reviews: number
  },
  vendor: "string",
  specifications: {
    // especificações do produto
  }
}
```

### Configuração da API
Edite `src/services/api.js` para conectar à sua API:
```javascript
const API_BASE_URL = 'https://sua-api.com';
```

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Servir Build Localmente
```bash
npx serve -s build
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido como projeto de demonstração para comparação de produtos.

---

**Nota**: Esta aplicação usa dados mock para demonstração. Para uso em produção, configure a integração com sua API real. 