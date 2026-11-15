// RF01 – tela de login
angular.module('ucsalApp').controller('LoginCtrl', function ($scope, $state, $ionicHistory, AuthService) {
  // ng-model do formulário guarda aqui o que foi digitado
  $scope.dados = { matricula: '', senha: '' }
  $scope.erro = ''

  $scope.entrar = function () {
    // não deixa enviar com campo vazio
    if (!$scope.dados.matricula || !$scope.dados.senha) {
      $scope.erro = 'Preencha a matrícula e a senha.'
      return
    }

    // confere com a lista mockada do AuthService
    var aluno = AuthService.login($scope.dados.matricula, $scope.dados.senha)
    if (!aluno) {
      $scope.erro = 'Matrícula ou senha incorretos.'
      return
    }

    // deu certo: limpa a tela e vai pro mural, sem botão de voltar pro login
    $scope.erro = ''
    $scope.dados = { matricula: '', senha: '' }
    $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true })
    $state.go('app.noticias')
  }
})
