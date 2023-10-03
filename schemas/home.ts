export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  description: 'Conteúdos da página Home',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      description: 'Texto que ficará em evidência na página.',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Descrição',
      description: 'Texto que dará contexto a página.',
    },
  ],
}
