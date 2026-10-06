import { saveInquiry } from '../services/contact.service.js';

export const handleContactSubmission = async (req, res, next) => {
  try {
    const inquiryData = req.sanitizedBody;
    const result = await saveInquiry(inquiryData);

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out. Your inquiry has been received by the REGOX engineering team.',
      inquiryId: result.inquiryId,
      timestamp: result.timestamp,
    });
  } catch (error) {
    next(error);
  }
};
