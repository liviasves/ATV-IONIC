// RF04 – consulta financeira por semestre
angular.module('ucsalApp').controller('FinanceiroCtrl', function ($scope, $ionicLoading, FinanceiroService) {
  $scope.semestres = FinanceiroService.semestres()

  // começa no semestre mais recente. o ng-model do select muda esse valor
  $scope.filtro = { semestre: $scope.semestres[$scope.semestres.length - 1] }

  $scope.mensalidades = function () {
    return FinanceiroService.listar($scope.filtro.semestre)
  }

  // soma o que ainda falta pagar no semestre escolhido
  $scope.totalAPagar = function () {
    return $scope.mensalidades()
      .filter(function (m) { return m.status === 'A Pagar' })
      .reduce(function (soma, m) { return soma + m.valor }, 0)
  }

  // copia a linha digitável e mostra um aviso rápido na tela
  $scope.copiar = function (mensalidade) {
    if (navigator.clipboard) navigator.clipboard.writeText(mensalidade.codigo)

    $ionicLoading.show({
      template: '<i class="icon ion-checkmark-circled"></i> Código de barras copiado!',
      duration: 1500,
      noBackdrop: true,
    })
  }
})
