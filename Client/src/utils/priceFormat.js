export const priceFormat = (price) => {
  // format number to US dollar
  const USDollar = new Intl.NumberFormat('en-US', {
    // style: 'currency',
    // currency: 'USD',
    // useGrouping: 'currency',
  });

  return USDollar.format(price);
};
