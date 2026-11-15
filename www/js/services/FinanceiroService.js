// FinanceiroService: mensalidades mockadas, agrupadas por semestre
angular.module('ucsalApp').factory('FinanceiroService', function () {
  var VALOR = 1289.9

  // linha digitável fictícia, só pra simular o boleto
  function codigoFicticio(mes) {
    return '23793.38128 60000.0' + mes + '003 00000.000400 1 98760000128990'
  }

  // monta uma parcela. status: 'Paga' ou 'A Pagar'
  function parcela(mes, vencimento, status) {
    return {
      mes: mes,
      vencimento: vencimento,
      valor: VALOR,
      status: status,
      codigo: status === 'A Pagar' ? codigoFicticio(vencimento.slice(5, 7)) : null,
    }
  }

  var mensalidades = {
    '2025.2': [
      parcela('Agosto', '2025-08-10', 'Paga'),
      parcela('Setembro', '2025-09-10', 'Paga'),
      parcela('Outubro', '2025-10-10', 'Paga'),
      parcela('Novembro', '2025-11-10', 'Paga'),
      parcela('Dezembro', '2025-12-10', 'Paga'),
    ],
    '2026.1': [
      parcela('Fevereiro', '2026-02-10', 'Paga'),
      parcela('Março', '2026-03-10', 'Paga'),
      parcela('Abril', '2026-04-10', 'Paga'),
      parcela('Maio', '2026-05-10', 'Paga'),
      parcela('Junho', '2026-06-10', 'Paga'),
    ],
    '2026.2': [
      parcela('Agosto', '2026-08-10', 'Paga'),
      parcela('Setembro', '2026-09-10', 'Paga'),
      parcela('Outubro', '2026-10-10', 'Paga'),
      parcela('Novembro', '2026-11-10', 'A Pagar'),
      parcela('Dezembro', '2026-12-10', 'A Pagar'),
    ],
  }

  return {
    // lista de semestres pro seletor: ['2025.2', '2026.1', '2026.2']
    semestres: function () {
      return Object.keys(mensalidades)
    },

    listar: function (semestre) {
      return mensalidades[semestre] || []
    },
  }
})
