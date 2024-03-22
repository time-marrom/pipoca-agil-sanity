export default {
  name: 'creator',
  type: 'document',
  title: 'Criador',
  description: 'Conteúdos de um criador',
  fields: [
    {
      name: 'creatorName',
      type: 'string',
      title: 'Nome',
      description: 'Nome do criador',
    },
    {
      name: 'creatorRole',
      type: 'string',
      title: 'Cargo',
      description: 'Cargo do criador',
    },
    {
      name: 'creatorImage',
      type: 'image',
      title: 'Imagem',
      description: 'Imagem do criador',
    },
    {
      name: 'creatorSocialNetworks',
      type: 'array',
      title: 'Redes sociais',
      description: 'Redes sociais do criador',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'socialNetworkName',
              type: 'string',
              title: 'Nome da rede social',
              description: 'Nome da rede social',
            },
            {
              name: 'socialNetworkUrl',
              type: 'string',
              title: 'URL da rede social',
              description: 'URL da rede social',
            },
          ],
        },
      ],
    },
  ],
}
