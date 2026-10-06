import express from 'express';
import cors from 'cors';
import { config } from './config/env.config.js';
import healthRoutes from './routes/health.routes.js';
import contactRoutes from './routes/contact.routes.js';
import { securityHeaders } from './middleware/securityHeaders.middleware.js';
import { errorHandler } from './middleware/errorHandler.middleware.js';

const app = express();

// Disable x-powered-by to avoid fingerprinting
app.disable('x-powered-by');

// Apply security headers
app.use(securityHeaders);

// CORS configuration (Strictly enforced in production)
const corsOptions = {
  origin: (origin, callback) => {
    // In production, require matching origin unless origin is undefined (e.g. server-to-server or curl)
    if (!origin) return callback(null, true);

    if (config.corsOrigins.includes(origin)) {
      return callback(null, true);
    }

    // In development mode only, permit localhost on any port for flexibility
    if (config.nodeEnv !== 'production' && /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS origin ${origin} not permitted.`));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
  maxAge: 86400, // 24 hours preflight cache
};

app.use(cors(corsOptions));

// Strict request size limiter: 20kb is plenty for contact submissions
app.use(express.json({ limit: '20kb' }));

// Safe request logger (prevents CWE-117 log injection)
app.use((req, res, next) => {
  const start = Date.now();
  const safeMethod = String(req.method).replace(/[\r\n]/g, '');
  const safeUrl = String(req.originalUrl).replace(/[\r\n]/g, '');

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[API] ${safeMethod} ${safeUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// API Routes
app.use('/api', healthRoutes);
app.use('/api', contactRoutes);

// Root index (Safe metadata only, no internals)
app.get('/', (req, res) => {
  res.json({
    service: 'REGOX API Server',
    status: 'online',
  });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Requested endpoint not found.',
  });
});

// Global error handler
app.use(errorHandler);

export default app;
