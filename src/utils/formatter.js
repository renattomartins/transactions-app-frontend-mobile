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
  const currentDate = new Date(date);

  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year}, ${hour}:${minutes}`;
};
