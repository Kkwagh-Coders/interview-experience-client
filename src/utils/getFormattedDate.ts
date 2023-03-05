const getFormattedDate = (date: string) => {
  const dateObject = new Date(date);

  return dateObject.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export default getFormattedDate;
