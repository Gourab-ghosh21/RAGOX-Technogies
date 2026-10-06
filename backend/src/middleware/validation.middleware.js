// Production-Hardened Contact Form Validation & Sanitization Middleware

const ALLOWED_PROJECT_TYPES = [
  'Web Development',
  'UI/UX Design',
  'Digital Product Design',
  'AI Solutions',
  'Branding',
  'Maintenance & Growth',
  'Full Digital Experience',
  'Other',
];

const ALLOWED_BUDGETS = [
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000+',
  'Not sure yet',
];

// RFC 5322 strict email format validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Strips dangerous control characters and newlines from single-line inputs
 * to prevent CWE-117 log injection and header tampering.
 */
const sanitizeSingleLine = (input = '') => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[\r\n\x00-\x1F\x7F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Sanitizes multi-line text (message body) while normalizing line endings
 * and stripping null bytes and HTML script tags.
 */
const sanitizeMultiLine = (input = '') => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/\x00/g, '') // Remove null bytes
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags to prevent stored HTML/XSS
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim();
};

export const validateContactInput = (req, res, next) => {
  const body = req.body || {};
  const errors = [];

  const rawName = body.name;
  const rawEmail = body.email;
  const rawCompany = body.company;
  const rawProjectType = body.projectType;
  const rawBudget = body.budget;
  const rawMessage = body.message;

  // 1. Validate Name
  if (!rawName || typeof rawName !== 'string' || sanitizeSingleLine(rawName).length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters long.' });
  } else if (rawName.length > 80) {
    errors.push({ field: 'name', message: 'Name cannot exceed 80 characters.' });
  }

  // 2. Validate Email
  const cleanEmail = typeof rawEmail === 'string' ? sanitizeSingleLine(rawEmail).toLowerCase() : '';
  if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
    errors.push({ field: 'email', message: 'Please provide a valid email address.' });
  } else if (cleanEmail.length > 120) {
    errors.push({ field: 'email', message: 'Email address cannot exceed 120 characters.' });
  }

  // 3. Validate Company (optional)
  if (rawCompany && typeof rawCompany === 'string' && rawCompany.length > 100) {
    errors.push({ field: 'company', message: 'Company name cannot exceed 100 characters.' });
  }

  // 4. Validate Project Type
  const cleanProjectType = typeof rawProjectType === 'string' ? sanitizeSingleLine(rawProjectType) : '';
  if (!cleanProjectType || !ALLOWED_PROJECT_TYPES.includes(cleanProjectType)) {
    errors.push({
      field: 'projectType',
      message: `Project type must be one of: ${ALLOWED_PROJECT_TYPES.join(', ')}.`,
    });
  }

  // 5. Validate Budget (INR Options)
  const cleanBudget = typeof rawBudget === 'string' ? sanitizeSingleLine(rawBudget) : '';
  if (!cleanBudget || !ALLOWED_BUDGETS.includes(cleanBudget)) {
    errors.push({
      field: 'budget',
      message: `Budget must be one of: ${ALLOWED_BUDGETS.join(', ')}.`,
    });
  }

  // 6. Validate Message
  const cleanMessage = typeof rawMessage === 'string' ? sanitizeMultiLine(rawMessage) : '';
  if (!cleanMessage || cleanMessage.length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters long.' });
  } else if (cleanMessage.length > 2500) {
    errors.push({ field: 'message', message: 'Message cannot exceed 2500 characters.' });
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed. Please correct the highlighted errors.',
      errors,
    });
  }

  // Bind clean, sanitized data to req.sanitizedBody
  // Whitelist only approved fields to prevent arbitrary property injection
  req.sanitizedBody = {
    name: sanitizeSingleLine(rawName),
    email: cleanEmail,
    company: rawCompany && typeof rawCompany === 'string' ? sanitizeSingleLine(rawCompany) : '',
    projectType: cleanProjectType,
    budget: cleanBudget,
    message: cleanMessage,
  };

  next();
};
