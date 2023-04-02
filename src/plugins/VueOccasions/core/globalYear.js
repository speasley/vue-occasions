const globalYear = (override) => {
  let year = new Date().getFullYear();
  let override_year = null;

  if (override && override.length > 4) {
    override_year = override.slice(-4);
    year = parseInt(override_year, 10);
  }

  return year;
};

export { globalYear }
