export const currencyFormat = num => {
  return (
    'R$ ' +
    num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  );
};

export const dateFormat = date => {
  return new Date(date).toLocaleDateString('pt-br', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};
