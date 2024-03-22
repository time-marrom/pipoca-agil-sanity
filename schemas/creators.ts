export default {
  name: 'creators',
  type: 'document',
  title: 'Criadores',
  description: 'Conteúdos da página Criadores',
  fields: [
    {
      name: 'creatorsHeroTitle',
      type: 'string',
      title: 'Título',
      description: 'Título do Hero da página Criadores',
    },
    {
      name: 'creatorsHeroSubtitle',
      type: 'string',
      title: 'Subtítulo',
      description: 'Subtítulo do Hero da página Criadores',
    },
    {
      name: 'creatorsHeroFirstParagraph',
      type: 'string',
      title: 'Primeiro parágrafo',
      description: 'Primeiro parágrafo do Hero da página Criadores',
    },
    {
      name: 'creatorsHeroSecondParagraph',
      type: 'string',
      title: 'Segundo parágrafo',
      description: 'Segundo parágrafo do Hero da página Criadores',
    },
    {
      name: 'creatorsGridTitle',
      type: 'string',
      title: 'Título da grade de criadores',
      description: 'Título da grade de criadores',
    },
    {
      name: 'creatorsGridSubtitle',
      type: 'string',
      title: 'Subtítulo da grade de criadores',
      description: 'Subtítulo da grade de criadores',
    },
    {
      name: 'creatorsGridFirstParagraph',
      type: 'string',
      title: 'Primeiro parágrafo da grade de criadores',
      description: 'Primeiro parágrafo da grade de criadores',
    },
    {
      name: 'creatorsGridSecondParagraph',
      type: 'string',
      title: 'Segundo parágrafo da grade de criadores',
      description: 'Segundo parágrafo da grade de criadores',
    },
    {
      name: 'creatorsGrid',
      type: 'array',
      title: 'Criadores',
      description: 'Criadores que serão exibidos na grade',
      of: [
        {
          type: 'reference',
          to: [{type: 'creator'}],
        },
      ],
    },
  ],
}
