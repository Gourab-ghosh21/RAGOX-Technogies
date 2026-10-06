import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
import { config } from '../config/env.config.js';

/**
 * Storage Provider: Local JSON file fallback (Development / Sandbox)
 */
const saveToJsonFallback = async (record) => {
  try {
    await fs.mkdir(path.dirname(config.dataPath), { recursive: true });

    let existing = [];
    try {
      const fileData = await fs.readFile(config.dataPath, 'utf-8');
      existing = JSON.parse(fileData);
      if (!Array.isArray(existing)) existing = [];
    } catch (readErr) {
      if (readErr.code !== 'ENOENT') {
        console.warn('[ContactService] Resetting unreadable storage fallback:', readErr.message);
      }
      existing = [];
    }

    existing.unshift(record);
    await fs.writeFile(config.dataPath, JSON.stringify(existing, null, 2), 'utf-8');
  } catch (err) {
    console.error('[ContactService] Error in local JSON storage fallback:', err.message);
    throw new Error('Storage system error.');
  }
};

/**
 * Storage Provider: Database Integration Hook (Production)
 * Ready for PostgreSQL / MongoDB / Supabase without altering the frontend.
 */
const saveToProductionDatabase = async (record) => {
  // If a production database connection is configured (e.g., process.env.DATABASE_URL):
  // Example: await db.inquiries.create({ data: record });
  // For now, falls back gracefully if DB is not attached.
  if (process.env.DATABASE_URL) {
    // Pluggable ORM / Query client insertion goes here
    return;
  }
  await saveToJsonFallback(record);
};

/**
 * Notification Provider: Dispatch email notifications (Production)
 * Ready for Resend / SendGrid / AWS SES without altering the frontend.
 */
const dispatchEmailNotification = async (record) => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    // Pluggable SMTP / Email API transporter logic goes here
    // Example: await transporter.sendMail({ ... });
    return;
  }
};

/**
 * Main Contact Service Dispatcher
 */
export const saveInquiry = async (inquiryData) => {
  // Generate cryptographically secure random inquiry identifier
  const randomSuffix = crypto.randomBytes(4).toString('hex');
  const inquiryId = `inq_${Date.now()}_${randomSuffix}`;
  const timestamp = new Date().toISOString();

  // Create isolated record with whitelisted properties only
  const record = {
    id: inquiryId,
    timestamp,
    name: inquiryData.name,
    email: inquiryData.email,
    company: inquiryData.company || '',
    projectType: inquiryData.projectType,
    budget: inquiryData.budget,
    message: inquiryData.message,
    status: 'received',
  };

  // 1. Persist to storage provider
  if (config.nodeEnv === 'production' && process.env.DATABASE_URL) {
    await saveToProductionDatabase(record);
  } else {
    await saveToJsonFallback(record);
  }

  // 2. Dispatch notifications if configured
  await dispatchEmailNotification(record);

  // Safe server log (sanitized)
  console.log(`[ContactService] Inquiry registered: ${inquiryId} [${record.projectType}]`);

  return {
    success: true,
    inquiryId,
    timestamp,
  };
};
