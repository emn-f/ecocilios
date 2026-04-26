# EcoCílios - Biomimética e Prevenção Inteligente de Enchentes Urbanas

## 🌱 Sobre o Projeto

**EcoCílios** é um protótipo de sistema inteligente de contenção de resíduos para bueiros que integra design mecânico inspirado na mata ciliar (biomimética) e Internet das Coisas (IoT). O projeto foi desenvolvido como atividade extensionista na disciplina "Ciência, Natureza e Sociedade" da Universidade Católica do Salvador.

### Problema Identificado

As enchentes urbanas representam uma crise ambiental severa agravada pelo descarte inadequado de resíduos sólidos, que obstrui bueiros e contamina recursos hídricos. No Brasil, especialmente na região Sudeste, desastres climáticos extremos afetam populações vulneráveis de forma desproporcional, refletindo a ausência de planejamento urbano eficaz e infraestrutura de drenagem adequada.

### Solução Proposta

O EcoCílios funciona como:

1. **Barreira Física**: Filtra e direciona resíduos para um cesto coletor interno
2. **Monitor em Tempo Real**: Sensores acoplados que rastreiam:
   - Nível de carga de lixo
   - Integridade do equipamento
   - Indicadores de qualidade da água (pH e turbidez)
3. **Plataforma Inteligente**: Transmite dados para nuvem, permitindo:
   - Rotas de limpeza preditivas
   - Coibição de crimes ambientais
   - Otimização de recursos públicos
   - Proteção de serviços ecossistêmicos urbanos

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: React + Vite
- **Roteamento**: React Router
- **Deploy**: Vercel

---

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/emn-f/ecocilios.git
cd ecocilios

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Build para Produção

```bash
npm run build
```

---

## 🗂️ Estrutura do Projeto

```
ecocilios/
├── src/
│   ├── components/
│   │   └── Layout.jsx       # Layout principal da aplicação
│   ├── pages/
│   │   ├── Login.jsx        # Tela de login
│   │   ├── Dashboard.jsx    # Dashboard principal
│   │   ├── Map.jsx          # Mapa de dispositivos
│   │   └── Devices.jsx      # Lista de dispositivos
│   ├── data/
│   │   └── mockData.js      # Dados simulados para prototipagem
│   ├── App.jsx              # Componente raiz com roteamento
│   └── main.jsx             # Entrada da aplicação
├── public/                  # Arquivos estáticos
├── vite.config.js           # Configuração Vite
├── vercel.json              # Configuração de SPA routing no Vercel
└── README.md                # Este arquivo
```

---

## 🔐 Acesso

**URL**: https://ecocilios.vercel.app/

Ao acessar, você será redirecionado para a tela de **Login**. Use credenciais de teste para explorar o protótipo.

---

## 📋 Funcionalidades Prototipadas

- ✅ Tela de Login
- ✅ Dashboard com visualizações de dados
- ✅ Mapa interativo de dispositivos
- ✅ Lista de dispositivos conectados
- ✅ Monitoramento em tempo real (dados simulados)

---

## 👥 Autores

- Arthur Pereira Moreira
- Emanuel Arlan Sousa Silva Ferreira
- Gabriel Cancio Simplicio dos Santos
- Guilherme Luiz de Almeida Santos
- Joanderson dos Santos de Almeida
- Joao Victor Ferreira Gerson
- Luis Henrique Batista Souza da Silva Santos
- Luis Henrique Lourenço das Mercês

**Instituição**: Universidade Católica do Salvador
**Período**: 2026.1

---

## 📄 Licença

Este projeto é um protótipo acadêmico desenvolvido como atividade extensionista.

---

## 📞 Contato & Suporte

Para dúvidas ou sugestões sobre o projeto, abra uma issue no repositório.

---

**Nota**: Este é um protótipo em desenvolvimento. Dados exibidos na plataforma são simulados para fins de demonstração.
