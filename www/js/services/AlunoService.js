// AlunoService: dados cadastrais mockados de cada aluno e o método para salvar as alterações
angular.module('ucsalApp').factory('AlunoService', function () {
  var CHAVE = 'ucsal-alunos' // nome usado no localStorage

  var alunos = {
    '20261001': {
      matricula: '20261001',
      nome: 'Mariana Souza Lima',
      curso: 'Engenharia de Software',
      email: 'mariana.lima@email.com',
      telefone: '(71) 99999-1001',
      endereco: { cep: '41740-090', rua: 'Av. Prof. Pinto de Aguiar, 100', bairro: 'Pituaçu', cidade: 'Salvador' },
    },
    '20261002': {
      matricula: '20261002',
      nome: 'Pedro Henrique Costa',
      curso: 'Engenharia de Software',
      email: 'pedro.costa@email.com',
      telefone: '(71) 99999-1002',
      endereco: { cep: '40210-020', rua: 'Rua Carlos Gomes, 200', bairro: 'Federação', cidade: 'Salvador' },
    },
  }

  // se já salvou antes, pega a versão do localStorage (assim não perde ao atualizar a página)
  var salvos = localStorage.getItem(CHAVE)
  if (salvos) alunos = JSON.parse(salvos)

  return {
    // devolve uma cópia, pra tela só mudar o original quando clicar em "Salvar"
    obter: function (matricula) {
      return angular.copy(alunos[matricula])
    },

    // só atualiza os campos que o aluno pode editar (matrícula, nome e curso não mudam)
    salvar: function (matricula, dados) {
      var aluno = alunos[matricula]
      aluno.email = dados.email
      aluno.telefone = dados.telefone
      aluno.endereco = angular.copy(dados.endereco)
      localStorage.setItem(CHAVE, JSON.stringify(alunos))
    },
  }
})
