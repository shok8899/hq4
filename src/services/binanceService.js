const Binance = require('binance-api-node').default;
const { formatPriceForMT4 } = require('../utils/priceFormatter');
const { PAIRS } = require('../config');

class BinanceService {
  constructor() {
    this.client = Binance();
    this.prices = new Map();
  }

  startPriceStreams(onPrice) {
    const streams = PAIRS.map(symbol => `${symbol.toLowerCase()}@ticker`);
    
    this.client.ws.multiple(streams, ticker => {
      const formattedPrice = formatPriceForMT4(ticker.symbol, ticker.currentPrice);
      this.prices.set(ticker.symbol, formattedPrice);
      onPrice(formattedPrice);
    });
  }

  getPrices() {
    return this.prices;
  }
}

module.exports = new BinanceService();