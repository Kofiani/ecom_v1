const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
    style: 'decimal'
})

const formatCurrency = (num) => {
  return CURRENCY_FORMAT.format(num)
}

export default formatCurrency