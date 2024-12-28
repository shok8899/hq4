const Decimal = require('decimal.js');

function formatPriceForMT4(symbol, price) {
  const decimal = new Decimal(price);
  return {
    symbol,
    bid: decimal.toString(),
    ask: decimal.plus(decimal.times(0.0001)).toString(),
    timestamp: Date.now()
  };
}

module.exports = { formatPriceForMT4 };