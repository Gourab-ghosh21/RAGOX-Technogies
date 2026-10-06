import { Router } from 'express';
import { handleContactSubmission } from '../controllers/contact.controller.js';
import { validateContactInput } from '../middleware/validation.middleware.js';
import { contactRateLimiter } from '../middleware/rateLimiter.middleware.js';

const router = Router();

// POST /api/contact protected with in-memory rate limiting and input validation
router.post('/contact', contactRateLimiter(), validateContactInput, handleContactSubmission);

export default router;
