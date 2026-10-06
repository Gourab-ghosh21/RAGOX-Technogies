// Lightweight Production In-Memory Rate Limiter & Honeypot Protection

const clientRequestCounts = new Map();

// Periodic cleanup of expired rate limit windows every 5 minutes
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of clientRequestCounts.entries()) {
    if (now > record.resetTime) {
      clientRequestCounts.delete(key);
    }
  }
}, CLEANUP_INTERVAL_MS).unref();

export const contactRateLimiter = (options = {}) => {
  const windowMs = options.windowMs || 15 * 60 * 1000; // 15 minutes default
  const maxRequests = options.maxRequests || 5; // Max 5 submissions per 15 min

  return (req, res, next) => {
    // 1. Honeypot check for automated bot protection
    // If the hidden honeypot field is filled, silently reject to avoid educating spammers
    const honeypot = req.body?._hp || req.body?.hp_field;
    if (honeypot && typeof honeypot === 'string' && honeypot.trim().length > 0) {
      console.warn(`[Abuse Protection] Spam honeypot triggered from IP: ${req.ip || 'unknown'}`);
      // Return synthetic success so automated bot does not retry with alternate vectors
      return res.status(200).json({
        success: true,
        message: 'Your inquiry has been received.',
        inquiryId: `inq_${Date.now()}`,
      });
    }

    // 2. Client IP rate limiting
    const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'anonymous';
    const now = Date.now();

    const record = clientRequestCounts.get(ip);

    if (!record || now > record.resetTime) {
      clientRequestCounts.set(ip, {
        count: 1,
        resetTime: now + windowMs,
      });
      return next();
    }

    if (record.count >= maxRequests) {
      const retryAfterSeconds = Math.ceil((record.resetTime - now) / 1000);
      res.setHeader('Retry-After', retryAfterSeconds);
      return res.status(429).json({
        success: false,
        message: 'Too many contact requests from this connection. Please wait before submitting again.',
        retryAfterSeconds,
      });
    }

    record.count += 1;
    next();
  };
};
