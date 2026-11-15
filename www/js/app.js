// módulo principal do app. o 'ionic' traz os componentes mobile (cards, menu, popups...)
angular.module('ucsalApp', ['ionic'])

  // ---------- rotas (ui-router) ----------
  // cada estado liga uma URL a um template HTML e ao controller daquela tela
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl',
      })

      // estado "pai" com o menu lateral. as outras telas abrem dentro dele
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl',
      })

      .state('app.noticias', {
        url: '/noticias',
        views: {
          menuContent: { templateUrl: 'templates/noticias.html', controller: 'NoticiasCtrl' },
        },
      })

      // :id vem da URL, ex.: /app/noticias/3
      .state('app.noticia', {
        url: '/noticias/:id',
        views: {
          menuContent: { templateUrl: 'templates/noticia-detalhe.html', controller: 'NoticiaDetalheCtrl' },
        },
      })

      .state('app.perfil', {
        url: '/perfil',
        views: {
          menuContent: { templateUrl: 'templates/perfil.html', controller: 'PerfilCtrl' },
        },
      })

      .state('app.financeiro', {
        url: '/financeiro',
        views: {
          menuContent: { templateUrl: 'templates/financeiro.html', controller: 'FinanceiroCtrl' },
        },
      })

    // qualquer endereço que não existe volta pro login
    $urlRouterProvider.otherwise('/login')
  })

  // ---------- proteção das telas ----------
  // se não tiver aluno logado, não deixa entrar nas telas do app
  .run(function ($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function (evento, destino) {
      if (destino.name !== 'login' && !AuthService.alunoLogado()) {
        evento.preventDefault()
        $state.go('login')
      }
    })
  })
