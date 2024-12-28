const PAIRS = [
  'BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT', 'ADAUSDT',
  'DOGEUSDT', 'DOTUSDT', 'UNIUSDT', 'LTCUSDT', 'LINKUSDT',
  'SOLUSDT', 'MATICUSDT', 'AVAXUSDT', 'ATOMUSDT', 'VETUSDT'
];

const WS_PORT = 8080;
const HTTP_PORT = process.env.PORT || 3000;

module.exports = {
  PAIRS,
  WS_PORT,
  HTTP_PORT
};