# Distribuidora Vidralpha — Site Institucional

Site institucional em uma única página (one-page) para a **Distribuidora Vidralpha**, empresa de Carapicuíba/SP especializada em **Alumínio, Ferragens e Vidros**.

Construído em **HTML, CSS e JavaScript puros** — sem frameworks, sem build step. Basta abrir o `index.html` no navegador.

## 🖼️ Preview

O site conta com:
- Header fixo com efeito de vidro (glassmorphism) ao rolar a página
- Hero com chamada principal e imagem dos caminhões de entrega
- Faixa animada (ticker) com os segmentos de atuação
- Seção "Sobre" com destaques da empresa
- Seção "Segmentos" (Alumínio, Ferragens, Vidros) em cards
- Seção "Diferenciais"
- Banner de chamada para ação (CTA)
- Seção de contato com formulário e dados reais da loja
- Botão flutuante de WhatsApp
- Totalmente responsivo (desktop, tablet e mobile)

## 📁 Estrutura de pastas

```
vidralpha/
├── index.html              # Estrutura (HTML)
├── README.md                # Este arquivo
└── assets/
    ├── css/
    │   └── styles.css       # Estilização
    ├── js/
    │   └── main.js          # Comportamento (menu mobile, scroll, animações)
    └── img/
        ├── logo.png
        ├── hero-trucks.png
        └── brand-card.png
```

## 🚀 Como rodar localmente

Não precisa de instalação nem servidor. Basta:

1. Baixar/clonar este repositório mantendo a estrutura de pastas intacta
2. Abrir o arquivo `index.html` diretamente no navegador

Ou, se preferir servir localmente (recomendado para evitar bloqueios de caminho relativo em alguns navegadores):

```bash
# Python
python3 -m http.server 8000

# Node (com o pacote serve instalado)
npx serve .
```

Depois acesse `http://localhost:8000`.

## 🎨 Identidade visual

| Elemento     | Cor                                |
|--------------|-------------------------------------|
| Azul marinho | `#061B36`                          |
| Azul primário| `#0B4EA2`                          |
| Azul claro   | `#4FA0E8`                          |
| Dourado      | `#E7B93E`                          |
| Dourado escuro| `#C68F1E`                         |

Tipografia: **Space Grotesk** (títulos) + **Inter** (texto), via Google Fonts.

## ✏️ Personalização

- **Textos e seções**: editar diretamente em `index.html`
- **Cores, espaçamentos e estilos**: editar `assets/css/styles.css` (variáveis no `:root`)
- **Comportamento (menu mobile, header ao rolar, animações)**: `assets/js/main.js`
- **Imagens**: substituir os arquivos em `assets/img/` mantendo os mesmos nomes, ou atualizar os caminhos no HTML

## 📌 Dados da empresa usados no site

- **Razão social/Fantasia:** Distribuidora Vidralpha
- **CNPJ:** 16.879.263/0001-52
- **Endereço:** Rua Grandiuva, 291 — Alto de Santa Lúcia, Carapicuíba/SP — CEP 06361-460
- **Contato:** (11) 5493-9787 · almeida-90@hotmail.com

## 👨‍💻 Desenvolvedor

Desenvolvido por **Israel Calista de Pontes**

- LinkedIn: [linkedin.com/in/israel-calista-de-pontes](https://www.linkedin.com/in/israel-calista-de-pontes/)
- GitHub: [github.com/IsraelPontes](https://github.com/IsraelPontes)
- E-mail: [israelcpontes@hotmail.com](mailto:israelcpontes@hotmail.com)
- WhatsApp: [(11) 99375-3442](https://wa.me/5511993753442)

## 📄 Licença

Projeto de uso exclusivo da Distribuidora Vidralpha.
