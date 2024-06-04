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
          emailMustBeUnique: 'Insira um email diferente e tente novamente',
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
  login: {
    e400: {
      message: 'Erro no aplicativo. Verifique se o mesmo está atualizado.',
      details: {},
    },
    e401: {
      message: 'Usuário e senha não conferem',
      details: {},
    },
    e404: {
      message: 'Usuário não cadastrado',
      details: {},
    },
    e422: {
      message: 'Verifique os campos abaixo',
      details: {
        email: {
          invalidValue: 'Campo obrigatório',
          invalidEmailFormat: 'Digite um email válido',
        },
        password: {
          invalidValue: 'Campo obrigatório',
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
  getTransactions: {
    e400: {
      message: 'Erro no aplicativo. Verifique se o mesmo está atualizado.',
      details: {},
    },
    e401: {
      message: 'Sua sessão expirou. Faça login novamente antes de continuar.',
      details: {},
    },
    e403: {
      message: 'Não autorizado.',
      details: {},
    },
    e404: {
      message: 'Conta não encontrada.',
      details: {},
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
  createTransaction: {
    e400: {
      message: 'Erro no aplicativo. Verifique se o mesmo está atualizado.',
      details: {},
    },
    e401: {
      message: 'Sua sessão expirou. Faça login novamente antes de continuar.',
      details: {},
    },
    e403: {
      message: 'Não autorizado.',
      details: {},
    },
    e404: {
      message: 'Conta não encontrada.',
      details: {},
    },
    e422: {
      message: 'Verifique os campos abaixo',
      details: {
        description: {
          invalidValue: 'Campo obrigatório',
          maxSizeOf255Characters:
            'A descrição não deve ultrapassar 255 caracteres.',
        },
        amount: {
          mustBeANumber: 'Campo precisa ser um número',
        },
        date: {
          mustBeAValidDate: 'Campo precisa ser uma data válida',
        },
        notes: {
          maxSizeOf1000Characters:
            'As notas não devem ultrapassar 1000 caracteres.',
        },
        isIncome: {
          invalidValue: 'Campo obrigatório',
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
  viewTransaction: {
    e400: {
      message: 'Erro no aplicativo. Verifique se o mesmo está atualizado.',
      details: {},
    },
    e401: {
      message: 'Sua sessão expirou. Faça login novamente antes de continuar.',
      details: {},
    },
    e403: {
      message: 'Não autorizado.',
      details: {},
    },
    e404: {
      message: 'Transação não encontrada.',
      details: {},
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
  updateTransaction: {
    e400: {
      message: 'Erro no aplicativo. Verifique se o mesmo está atualizado.',
      details: {},
    },
    e401: {
      message: 'Sua sessão expirou. Faça login novamente antes de continuar.',
      details: {},
    },
    e403: {
      message: 'Não autorizado.',
      details: {},
    },
    e404: {
      message: 'Conta ou transação não encontrada.',
      details: {},
    },
    e422: {
      message: 'Verifique os campos abaixo',
      details: {
        description: {
          invalidValue: 'Campo obrigatório',
          maxSizeOf255Characters:
            'A descrição não deve ultrapassar 255 caracteres.',
        },
        amount: {
          mustBeANumber: 'Campo precisa ser um número',
        },
        date: {
          mustBeAValidDate: 'Campo precisa ser uma data válida',
        },
        notes: {
          maxSizeOf1000Characters:
            'As notas não devem ultrapassar 1000 caracteres.',
        },
        isIncome: {
          invalidValue: 'Campo obrigatório',
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
  deleteTransaction: {
    e400: {
      message: 'Erro no aplicativo. Verifique se o mesmo está atualizado.',
      details: {},
    },
    e401: {
      message: 'Sua sessão expirou. Faça login novamente antes de continuar.',
      details: {},
    },
    e403: {
      message: 'Não autorizado.',
      details: {},
    },
    e404: {
      message: 'Transação não encontrada.',
      details: {},
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
