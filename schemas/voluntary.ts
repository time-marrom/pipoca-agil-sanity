export default {
  name: 'voluntary',
  type: 'document',
  title: 'Voluntário',
  description: 'Conteúdos da página de inscrição de voluntários',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      description: 'Texto que ficará em evidência na página.',
    },
    {
      name: 'steps',
      type: 'array',
      title: 'Passos',
      description: 'Textos que guiarão o voluntário no processo de inscrição.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'step',
              type: 'number',
              title: 'Passo',
              description: 'Número do passo.',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Descrição',
              description: 'Texto que descreve o passo.',
            },
          ],
        },
      ],
    },
    {
      name: 'warningTitle',
      type: 'string',
      title: 'Título do Aviso',
      description: 'Título do aviso para o voluntário.',
    },
    {
      name: 'warning',
      type: 'string',
      title: 'Aviso',
      description: 'Texto de alerta para o voluntário.',
    },
    {
      name: 'titleOfRules',
      type: 'string',
      title: 'Título das Regras',
      description: 'Texto que ficará em evidência na seção de regras e pré-requisitos.',
    },
    {
      name: 'rules',
      type: 'array',
      title: 'Regras',
      description: 'Textos que descrevem as regras e pré-requisitos para ser voluntário.',
      of: [{type: 'string'}],
    },
    {
      name: 'LGPDWarningTitle',
      type: 'string',
      title: 'Título do Aviso LGPD',
      description: 'Título do aviso sobre a LGPD.',
    },
    {
      name: 'LGPDWarning',
      type: 'string',
      title: 'Aviso LGPD',
      description: 'Texto de alerta sobre a LGPD.',
    },
    {
      name: 'buttonToOpenTerms',
      type: 'string',
      title: 'Botão para abrir os termos',
      description: 'Texto do botão para abrir os termos de inscrição.',
    },
    {
      name: 'termsTitle',
      type: 'string',
      title: 'Título dos Termos',
      description: 'Texto que ficará em evidência na seção de termos de inscrição.',
    },
    {
      name: 'terms',
      type: 'blockContent',
      title: 'Termos',
      description: 'Textos que descrevem os termos de inscrição.',
    },
    {
      name: 'acceptTheTerms',
      type: 'string',
      title: 'Aceitar os Termos',
      description: 'Texto do checkbox para aceitar os termos de inscrição.',
    },
    {
      name: 'buttonToSubmit',
      type: 'string',
      title: 'Botão para enviar',
      description: 'Texto do botão para enviar a inscrição.',
    },
    {
      name: 'buttonToCancel',
      type: 'string',
      title: 'Botão para cancelar',
      description: 'Texto do botão para cancelar a inscrição.',
    },
  ],
}
