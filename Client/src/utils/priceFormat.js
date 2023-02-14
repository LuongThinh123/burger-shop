export const priceFormat = (price) => {
  // format number to US dollar
  const USDollar = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    // currency: 'USD',
  });

  return USDollar.format(price);
};
