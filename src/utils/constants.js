const friendlyErrorMessages = {
  signup: {
    e400: {
      message: 'Erro no aplicativo. Verifique se o mesmo está atualizado.',
      details: {},
    },
    e409: {
      message: 'Email já existente',
      details: {
        email: {
          uniqueViolation: 'Insira outro email e tente novamente',
        },
      },
    },
    e422: {
      message: 'Verifique os campos abaixo',
      details: {
        email: {
          invalidField: 'Campo obrigatório',
          invalidEmail: 'Email inválido',
        },
        password: {
          invalidField: 'Campo obrigatório',
          minSizeField: 'Senha deve conter no mínimo 8 caracteres',
        },
        passwordVerification: {
          invalidField: 'Campo obrigatório',
          doesNotMatch: 'Senhas digitadas não são iguais',
        },
      },
    },
    e500: {
      message:
        'Erro interno no servidor. Aguarde alguns instantes e tente novamente.',
      details: {},
    },
    unknown: {
      message: 'Erro desconhecido. Por favor, tente novamente.',
      details: {},
    },
  },
};

export {friendlyErrorMessages};
