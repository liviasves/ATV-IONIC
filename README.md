# Portal do Aluno UCSal

Protótipo (MVP front-end) de aplicativo multiplataforma feito com **Ionic Framework v1 + AngularJS**.

Atividade IV – Ionic – Engenharia de Software (UCSal).

## Como rodar (GitHub Codespaces)

O app é só HTML, CSS e JavaScript (o Ionic já está em `www/lib/ionic`), então basta servir a pasta `www`:

```bash
cd www
python3 -m http.server 8000
```

Depois abra a porta **8000** na aba **Portas** (deixe como Pública e clique no globo).

**Login de teste:** matrícula `20261001` e senha `123456` (ou `20261002` / `654321`).

## Funcionalidades

| Requisito | Tela | O que faz |
|---|---|---|
| RF01 – Login | `login.html` | Valida matrícula e senha com os dados do `AuthService`, impede campos vazios e redireciona para o mural |
| RF02 – Mural | `noticias.html` / `noticia-detalhe.html` | Cards de notícias e eventos (título, data, categoria, imagem), filtro por categoria e "Ler mais" |
| RF03 – Cadastro | `perfil.html` | Nome, matrícula e curso só leitura; e-mail, telefone e endereço editáveis, salvos no `AlunoService` e no `localStorage` |
| RF04 – Financeiro | `financeiro.html` | Seletor de semestre, mensalidades com valor em R$, badge verde (Paga) ou laranja (A Pagar) e "Copiar Código de Barras" |

## Estrutura

```
www/
├── index.html                 ng-app + ion-nav-view
├── css/style.css              cores da UCSal (variáveis CSS) e ajustes
├── img/                       imagens ilustrativas do mural
├── lib/                       Ionic v1 (com AngularJS e ui-router) e idioma pt-BR do AngularJS
├── js/
│   ├── app.js                 módulo ucsalApp + rotas ($stateProvider) + proteção das telas
│   ├── controllers/           LoginCtrl, MenuCtrl, NoticiasCtrl, PerfilCtrl, FinanceiroCtrl
│   └── services/              AuthService, NoticiasService, AlunoService, FinanceiroService (dados mockados)
└── templates/                 login, menu, noticias, noticia-detalhe, perfil, financeiro
```

## Recursos do AngularJS usados

- **Módulo e rotas:** `angular.module('ucsalApp', ['ionic'])`, `$stateProvider` e `$urlRouterProvider`
- **Services/Factories:** todos os dados mockados ficam nos services (nada fixo no HTML ou nos controllers)
- **Controllers + `$scope`:** ligam os services às telas
- **Diretivas:** `ng-model`, `ng-repeat`, `ng-click`, `ng-if`, `ng-class`, `ng-disabled`, `ng-options`
- **Filtros:** `currency` (R$), `date` e `filter` (notícias por categoria)
- **Ionic:** `ion-side-menus`, `ion-nav-view`, cards, listas, `$ionicPopup` e `$ionicLoading`
