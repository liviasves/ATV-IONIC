// RF02 – mural de notícias e eventos
angular.module('ucsalApp')

  .controller('NoticiasCtrl', function ($scope, $state, NoticiasService) {
    $scope.noticias = NoticiasService.listar()
    $scope.categorias = NoticiasService.categorias()

    // usado no filtro do ng-repeat. '' = mostra tudo
    $scope.filtro = { categoria: '' }

    $scope.filtrar = function (categoria) {
      $scope.filtro.categoria = categoria
    }

    // botão "Ler mais": abre a tela de detalhe passando o id na URL
    $scope.abrir = function (noticia) {
      $state.go('app.noticia', { id: noticia.id })
    }
  })

  // tela de detalhe: pega o id da URL ($stateParams) e busca a notícia no service
  .controller('NoticiaDetalheCtrl', function ($scope, $stateParams, NoticiasService) {
    $scope.noticia = NoticiasService.buscar(Number($stateParams.id))
  })
