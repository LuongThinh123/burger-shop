export const getCurrentDateTime = () => {
  return new Date().toLocaleString();
};

export const dayFormat = (date) => {
  date = new Date(date);
  return date.toLocaleString();
};
