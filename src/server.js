const express = require('express');
const WebSocket = require('ws');
const binanceService = require('./services/binanceService');
const { WS_PORT, HTTP_PORT } = require('./config');

const app = express();
const wss = new WebSocket.Server({ port: WS_PORT });

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('New client connected');
  
  // Send current prices to new client
  binanceService.getPrices().forEach(price => {
    ws.send(JSON.stringify(price));
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start price streams
binanceService.startPriceStreams((price) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(price));
    }
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    pairs: Array.from(binanceService.getPrices().keys()) 
  });
});

// Start HTTP server
app.listen(HTTP_PORT, () => {
  console.log(`Server running on HTTP port ${HTTP_PORT}`);
  console.log(`WebSocket server running on port ${WS_PORT}`);
});