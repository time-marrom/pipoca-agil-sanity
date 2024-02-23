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
      name: 'overviewPanelFirstParagraph',
      type: 'string',
      title: 'Primeiro parágrafo do painel "O que é?"',
      description: 'Primeiro parágrafo do painel "O que é?"',
    },
    {
      name: 'overviewPanelSecondParagraph',
      type: 'string',
      title: 'Segundo parágrafo do painel "O que é?"',
      description: 'Segundo parágrafo do painel "O que é?"',
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
      name: 'canISignUpTitle',
      type: 'string',
      title: 'Título do painel "Posso me inscrever?"',
      description: 'Título do painel "Posso me inscrever?"',
    },
    {
      name: 'canISignUpSubtitle',
      type: 'string',
      title: 'Subtítulo do painel "Posso me inscrever?"',
      description: 'Subtítulo do painel "Posso me inscrever?"',
    },
    {
      name: 'canISignUpVolunteerText',
      type: 'string',
      title: 'Texto para voluntários',
      description: 'Texto para voluntários',
    },
    {
      name: 'canISignUpVolunteerLabelButton',
      type: 'string',
      title: 'Label do botão para voluntários',
      description: 'Label do botão para voluntários',
    },
    {
      name: 'canISignUpMentorText',
      type: 'string',
      title: 'Texto para mentores',
      description: 'Texto para mentores',
    },
    {
      name: 'canISignUpMentorLabelButton',
      type: 'string',
      title: 'Label do botão para mentores',
      description: 'Label do botão para mentores',
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
      name: 'depositionsTitle',
      type: 'string',
      title: 'Título do painel "Depoimentos"',
      description: 'Título do painel "Depoimentos"',
    },
    {
      name: 'depositionsTopics',
      type: 'array',
      title: 'Depoimentos',
      description: 'Depoimentos',
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
