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
          emailMustBeUnique: 'Insira outro email e tente novamente',
        },
      },
    },
    e422: {
      message: 'Verifique os campos abaixo',
      details: {
        email: {
          invalidValue: 'Campo obrigatório',
          invalidEmailFormat: 'Email inválido',
        },
        password: {
          invalidValue: 'Campo obrigatório',
          minimumSizeOf8Characters: 'Senha deve conter no mínimo 8 caracteres',
        },
        passwordVerification: {
          invalidValue: 'Campo obrigatório',
          passwordsHaveToMatch: 'Senhas digitadas não são iguais',
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
