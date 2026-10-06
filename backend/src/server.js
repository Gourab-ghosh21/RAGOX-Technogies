import app from './app.js';
import { config } from './config/env.config.js';

const server = app.listen(config.port, () => {
  console.log('====================================================');
  console.log(`⚡ REGOX API Server is running on port ${config.port}`);
  console.log(`🌐 Health check: http://localhost:${config.port}/api/health`);
  console.log(`📬 Contact endpoint: http://localhost:${config.port}/api/contact`);
  console.log(`Environment: ${config.nodeEnv}`);
  console.log('====================================================');
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log('REGOX API Server stopped.');
    process.exit(0);
  });
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
