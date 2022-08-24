const formatCurrency = (num: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  })
    .format(num)
    .split('.')[0];

export default formatCurrency;
