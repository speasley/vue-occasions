const timestamp = (month, day, year) => {
  const ts = new Date(year, month, day).getTime() / 1000;
  return ts;
};

export { timestamp }
