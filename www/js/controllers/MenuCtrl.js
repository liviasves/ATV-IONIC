// menu lateral: mostra o aluno logado e tem o botão de sair
angular.module('ucsalApp').controller('MenuCtrl', function ($scope, $state, $ionicHistory, $ionicPopup, AuthService) {
  // função (e não o valor), pra sempre mostrar o aluno logado agora
  $scope.aluno = AuthService.alunoLogado

  $scope.sair = function () {
    $ionicPopup
      .confirm({ title: 'Sair', template: 'Quer mesmo sair do portal?', cancelText: 'Cancelar', okText: 'Sair' })
      .then(function (confirmou) {
        if (!confirmou) return
        AuthService.sair()
        // limpa as telas guardadas, pra não aparecer dado do aluno anterior
        $ionicHistory.clearCache().then(function () {
          $ionicHistory.clearHistory()
          $state.go('login')
        })
      })
  }
})
