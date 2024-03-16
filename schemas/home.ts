export default {
  name: 'home',
  type: 'document',
  title: 'Início',
  description: 'Conteúdos da página Home',
  fields: [
    // HERO
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
    // DESCRIPTION
    {
      name: 'descriptionTitle',
      type: 'string',
      title: 'Título do painel "O que é?"',
      description: 'Título do painel "O que é?"',
    },
    {
      name: 'descriptionFirstParagraph',
      type: 'string',
      title: 'Primeiro parágrafo do painel "O que é?"',
      description: 'Primeiro parágrafo do painel "O que é?"',
    },
    {
      name: 'descriptionSecondParagraph',
      type: 'string',
      title: 'Segundo parágrafo do painel "O que é?"',
      description: 'Segundo parágrafo do painel "O que é?"',
    },
    // HOW IT WORKS
    {
      name: 'howItWorksTitle',
      type: 'string',
      title: 'Título do painel "Como funciona?"',
      description: 'Título do painel "Como funciona?"',
    },
    {
      name: 'howItWorksSubtitle',
      type: 'string',
      title: 'Subtítulo do painel "Como funciona?"',
      description: 'Subtítulo do painel "Como funciona?"',
    },
    {
      name: 'howItWorksTopics',
      type: 'array',
      title: 'Tópicos do painel "Como funciona?"',
      description: 'Tópicos do painel "Como funciona?"',
      of: [
        {
          type: 'string',
        },
      ],
    },
    // WHO IS IT FOR?
    {
      name: 'howIsItForTitle',
      type: 'string',
      title: 'Título do painel "Posso me inscrever?"',
      description: 'Título do painel "Posso me inscrever?"',
    },
    {
      name: 'howIsItForSubtitle',
      type: 'string',
      title: 'Subtítulo do painel "Posso me inscrever?"',
      description: 'Subtítulo do painel "Posso me inscrever?"',
    },
    {
      name: 'howIsItForVolunteerText',
      type: 'string',
      title: 'Texto para voluntários',
      description: 'Texto para voluntários',
    },
    {
      name: 'howIsItForVolunteerLabelButton',
      type: 'string',
      title: 'Label do botão para voluntários',
      description: 'Label do botão para voluntários',
    },
    {
      name: 'howIsItForMentorText',
      type: 'string',
      title: 'Texto para mentores',
      description: 'Texto para mentores',
    },
    {
      name: 'howIsItForMentorLabelButton',
      type: 'string',
      title: 'Label do botão para mentores',
      description: 'Label do botão para mentores',
    },
    // WORTH IT?
    {
      name: 'worthItTitle',
      type: 'string',
      title: 'Título do painel "Vale a pena?"',
      description: 'Título do painel "Vale a pena?"',
    },
    {
      name: 'worthItTopics',
      type: 'array',
      title: 'Tópicos do painel "Vale a pena?"',
      description: 'Tópicos do painel "Vale a pena?"',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              type: 'number',
              title: 'Chave',
              description: 'Chave do objeto.',
            },
            {
              name: 'metric',
              type: 'string',
              title: 'Valor',
              description: 'Valor do objeto.',
            },
          ],
        },
      ],
    },
    // DEPOSITIONS
    {
      name: 'depositionsTitle',
      type: 'string',
      title: 'Título do painel "Depoimentos"',
      description: 'Título do painel "Depoimentos"',
    },
    {
      name: 'depositionsTopics',
      type: 'array',
      title: 'Depoimentos de quem já participou',
      description: 'Depoimentos de quem já participou',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'deposition',
              type: 'string',
              title: 'Depoimento',
              description: 'Depoimento.',
            },
            {
              name: 'author',
              type: 'string',
              title: 'Autor',
              description: 'Autor do depoimento.',
            },
          ],
        },
      ],
    },
    // FAQ
    {
      name: 'faqTitle',
      type: 'string',
      title: 'Título do painel "Perguntas frequentes"',
      description: 'Título do painel "Perguntas frequentes"',
    },
    {
      name: 'faqTopics',
      type: 'array',
      title: 'Perguntas e respostas do painel "Perguntas frequentes"',
      description: 'Perguntas e respostas do painel "Perguntas frequentes"',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Pergunta',
              description: 'Pergunta.',
            },
            {
              name: 'answer',
              type: 'string',
              title: 'Resposta',
              description: 'Resposta.',
            },
          ],
        },
      ],
    },
  ],
}
