export default {
  name: 'simulation',
  type: 'document',
  title: 'Simulação',
  description: 'Conteúdos da página de simulação do Pipoca Ágil',
  fields: [
    {
      name: 'heroTitle',
      type: 'string',
      title: 'Título',
      description: 'Texto que ficará em evidência na página.',
    },
    {
      name: 'heroSubtitle',
      type: 'string',
      title: 'Subtítulo',
      description: 'Texto que dará contexto a página.',
    },
    {
      name: 'heroLabelButton',
      type: 'string',
      title: 'Label do botão do Hero',
      description: 'Label do botão do Hero.',
    },
  ],
}
