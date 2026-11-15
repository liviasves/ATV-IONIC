// NoticiasService: notícias institucionais e eventos da UCSal (mock)
angular.module('ucsalApp').factory('NoticiasService', function () {
  var noticias = [
    {
      id: 1,
      titulo: 'Rematrícula 2027.1: confira os prazos',
      data: '2026-11-10',
      categoria: 'Notícia',
      imagem: 'img/rematricula.svg',
      resumo: 'A rematrícula para o próximo semestre já tem calendário definido.',
      conteudo: 'A rematrícula para o semestre 2027.1 acontece de 1º a 15 de dezembro, pelo Portal do Aluno. Antes de escolher as disciplinas, confira se não há pendências financeiras e se os seus dados cadastrais estão atualizados.',
    },
    {
      id: 2,
      titulo: 'Semoc 2026: inscrições abertas',
      data: '2026-11-05',
      categoria: 'Evento',
      imagem: 'img/semoc.svg',
      resumo: 'A Semana de Mobilização Científica reúne palestras, oficinas e apresentações.',
      conteudo: 'A Semoc é o principal evento científico da UCSal. Nesta edição, a programação tem palestras, oficinas, minicursos e apresentação de trabalhos nos campi de Pituaçu e Federação. As inscrições são gratuitas para os alunos.',
    },
    {
      id: 3,
      titulo: 'Edital de Iniciação Científica',
      data: '2026-10-28',
      categoria: 'Notícia',
      imagem: 'img/iniciacao.svg',
      resumo: 'Novo edital com bolsas para projetos de pesquisa.',
      conteudo: 'Está aberto o edital de Iniciação Científica para o próximo ano. Os alunos interessados devem procurar um professor orientador e enviar o plano de trabalho até o fim do mês. Há bolsas e vagas voluntárias.',
    },
    {
      id: 4,
      titulo: 'Maratona de Programação',
      data: '2026-10-20',
      categoria: 'Evento',
      imagem: 'img/maratona.svg',
      resumo: 'Monte sua equipe e participe da maratona no campus Pituaçu.',
      conteudo: 'A maratona de programação acontece no laboratório de informática do campus Pituaçu. As equipes têm três integrantes e resolvem problemas de lógica e algoritmos. Os melhores colocados representam a UCSal na etapa regional.',
    },
    {
      id: 5,
      titulo: 'Projeto de extensão: inclusão digital',
      data: '2026-10-12',
      categoria: 'Evento',
      imagem: 'img/extensao.svg',
      resumo: 'Alunos ensinam idosos da comunidade a usar o celular.',
      conteudo: 'O projeto de extensão de inclusão digital está com inscrições abertas para voluntários. Os encontros acontecem aos sábados no campus Federação, com oficinas para idosos sobre aplicativos de mensagem, bancos e serviços públicos.',
    },
    {
      id: 6,
      titulo: 'Biblioteca com horário estendido',
      data: '2026-10-01',
      categoria: 'Notícia',
      imagem: 'img/biblioteca.svg',
      resumo: 'Durante o período de provas, a biblioteca abre até as 22h.',
      conteudo: 'No período de avaliações finais, as bibliotecas dos campi Pituaçu e Federação funcionam em horário estendido, de segunda a sexta, até as 22h. Lembre-se de levar a carteirinha de estudante.',
    },
  ]

  return {
    listar: function () {
      return noticias
    },

    buscar: function (id) {
      return noticias.find(function (n) { return n.id === id })
    },

    categorias: function () {
      return ['Notícia', 'Evento']
    },
  }
})
