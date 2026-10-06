export const getHealth = (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'REGOX API Server',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
  });
};
