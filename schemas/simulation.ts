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
    {
      name: 'overviewPanelTitle',
      type: 'string',
      title: 'Título do painel "O que é?"',
      description: 'Título do painel "O que é?"',
    },
    {
      name: 'overviewPanelSubtitle',
      type: 'string',
      title: 'Subtítulo do painel "O que é?"',
      description: 'Subtítulo do painel "O que é?"',
    },
    {
      name: 'overviewPanelTopics',
      type: 'array',
      title: 'Tópicos do painel "O que é?"',
      description: 'Tópicos do painel "O que é?"',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'howToPanelTitle',
      type: 'string',
      title: 'Título do painel "Como funciona?"',
      description: 'Título do painel "Como funciona?"',
    },
    {
      name: 'howToPanelSubtitle',
      type: 'string',
      title: 'Subtítulo do painel "Como funciona?"',
      description: 'Subtítulo do painel "Como funciona?"',
    },
    {
      name: 'howToPanelTopics',
      type: 'array',
      title: 'Tópicos do painel "Como funciona?"',
      description: 'Tópicos do painel "Como funciona?"',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'whoIsPanelTitle',
      type: 'string',
      title: 'Título do painel "Para quem é?"',
      description: 'Título do painel "Para quem é?"',
    },
    {
      name: 'volunteerText',
      type: 'string',
      title: 'Texto para "Quero me voluntariar"',
      description: 'Texto para "Quero me voluntariar"',
    },
    {
      name: 'volunteerLabelButton',
      type: 'string',
      title: 'Label do botão para "Quero me voluntariar"',
      description: 'Label do botão para "Quero me voluntariar"',
    },
    {
      name: 'mentorText',
      type: 'string',
      title: 'Texto para "Quero mentorar um time"',
      description: 'Texto para "Quero mentorar um time"',
    },
    {
      name: 'mentorLabelButton',
      type: 'string',
      title: 'Label do botão para "Quero mentorar um time"',
      description: 'Label do botão para "Quero mentorar um time"',
    },
    {
      name: 'metricsPanelTitle',
      type: 'string',
      title: 'Título do painel "Vale a pena?"',
      description: 'Título do painel "Vale a pena?"',
    },
    {
      name: 'metricsPanelObject',
      type: 'array',
      title: 'Objeto do painel "Vale a pena?"',
      description: 'Objeto do painel "Vale a pena?"',
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
    {
      name: 'faqPanelTitle',
      type: 'string',
      title: 'Título do painel "Perguntas frequentes"',
      description: 'Título do painel "Perguntas frequentes"',
    },
    {
      name: 'faqPanelQuestions',
      type: 'array',
      title: 'Perguntas do painel "Perguntas frequentes"',
      description: 'Perguntas do painel "Perguntas frequentes"',
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
