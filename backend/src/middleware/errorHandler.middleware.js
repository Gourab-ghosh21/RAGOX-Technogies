// Production-Hardened Global Error Handler Middleware
// Ensures zero internal paths, stack traces, or environment details are leaked.

export const errorHandler = (err, req, res, next) => {
  // Server-side logging only (strip newlines from any err message to prevent log injection)
  const safeLogMsg = String(err?.message || 'Unknown error').replace(/[\r\n]/g, ' ');
  console.error(`[REGOX API ERROR] ${req.method} ${req.url}: ${safeLogMsg}`);

  // Payload too large error (Express entity.too.large)
  if (err.type === 'entity.too.large') {
    return res.status(413).json({
      success: false,
      message: 'Payload too large. Maximum submission size exceeded.',
    });
  }

  // Malformed JSON parsing error
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      success: false,
      message: 'Malformed JSON payload provided.',
    });
  }

  // CORS rejection
  if (err.message && err.message.includes('CORS origin')) {
    return res.status(403).json({
      success: false,
      message: 'Cross-origin request forbidden by CORS policy.',
    });
  }

  const statusCode = typeof err.statusCode === 'number' && err.statusCode >= 400 && err.statusCode < 600
    ? err.statusCode
    : 500;

  // Never leak internal stack traces or internal paths to client
  const clientSafeMessage =
    statusCode < 500
      ? err.message || 'Request could not be processed.'
      : 'An unexpected internal error occurred. Please try again later.';

  res.status(statusCode).json({
    success: false,
    message: clientSafeMessage,
  });
};
