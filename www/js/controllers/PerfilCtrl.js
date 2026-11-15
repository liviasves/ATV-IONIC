// RF03 – atualização cadastral
angular.module('ucsalApp').controller('PerfilCtrl', function ($scope, $ionicPopup, AuthService, AlunoService) {
  var matricula = AuthService.alunoLogado().matricula

  // cópia dos dados: o ng-model mexe aqui, e só vai pro service quando salvar
  $scope.aluno = AlunoService.obter(matricula)

  $scope.salvar = function () {
    AlunoService.salvar(matricula, $scope.aluno)

    // feedback visual com o popup do Ionic
    $ionicPopup.alert({
      title: 'Dados atualizados!',
      template: 'Suas alterações foram salvas com sucesso.',
      okText: 'OK',
      okType: 'button-positive',
    })
  }
})
