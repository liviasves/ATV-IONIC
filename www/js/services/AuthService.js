// AuthService: credenciais mockadas e o aluno que está logado
angular.module('ucsalApp').factory('AuthService', function () {
  // "banco" de logins (mock). os dados cadastrais completos ficam no AlunoService
  var credenciais = [
    { matricula: '20261001', senha: '123456', nome: 'Mariana Souza Lima' },
    { matricula: '20261002', senha: '654321', nome: 'Pedro Henrique Costa' },
  ]

  var logado = null // guarda o aluno logado em memória

  return {
    // procura a matrícula e a senha na lista. devolve o aluno ou null
    login: function (matricula, senha) {
      var encontrado = credenciais.find(function (c) {
        return c.matricula === matricula && c.senha === senha
      })
      logado = encontrado ? { matricula: encontrado.matricula, nome: encontrado.nome } : null
      return logado
    },

    alunoLogado: function () {
      return logado
    },

    sair: function () {
      logado = null
    },
  }
})
