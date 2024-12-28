# Crypto MT4 Market Data Server

This server provides real-time cryptocurrency market data from Binance for MT4 platforms.

## Features

- Real-time price updates via WebSocket
- Support for major cryptocurrency pairs
- Compatible with MT4 format
- Low latency data streaming

## Connection Details

- Server Address: `localhost` (or your deployed server address)
- WebSocket Port: 8080
- HTTP Port: 3000

## Supported Pairs

- BTC/USDT
- ETH/USDT
- BNB/USDT
- XRP/USDT
- And many more...

## MT4 Setup

1. Open MT4 platform
2. Add Custom Server:
   - Server: [Your Server Address]
   - Port: 8080
3. Connect using WebSocket

## API Endpoints

- Health Check: `GET /health`
- WebSocket: `ws://[server-address]:8080`