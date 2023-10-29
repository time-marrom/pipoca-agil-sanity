export default {
  name: 'maintenance',
  type: 'document',
  title: 'Manutenção',
  description: 'Conteúdos da página em manutenção',
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
