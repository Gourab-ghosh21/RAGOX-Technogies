import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const PROJECT_TYPES = [
  'Web Development',
  'UI/UX Design',
  'Digital Product Design',
  'AI Solutions',
  'Branding',
  'Maintenance & Growth',
  'Full Digital Experience',
  'Other',
];

const BUDGET_OPTIONS = [
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000+',
  'Not sure yet',
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Web Development',
    budget: '₹25,000 – ₹50,000',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverSuccess, setServerSuccess] = useState(null);
  const [serverError, setServerError] = useState(null);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please provide your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide a project description (at least 10 characters).';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);
    setServerSuccess(null);

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors && Array.isArray(data.errors)) {
          const mapped = {};
          data.errors.forEach((err) => {
            mapped[err.field] = err.message;
          });
          setFieldErrors(mapped);
          throw new Error(data.message || 'Validation error.');
        } else {
          throw new Error(data.message || 'Failed to submit contact request.');
        }
      }

      setServerSuccess({
        message: data.message,
        inquiryId: data.inquiryId,
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'Web Development',
        budget: '₹25,000 – ₹50,000',
        message: '',
      });
      setFieldErrors({});
    } catch (err) {
      setServerError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#07080a] relative border-b border-[rgba(255,255,255,0.08)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Editorial Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0066ff] font-semibold">
                // 07 INITIATE DIALOGUE
              </span>
              <span className="w-8 h-[1px] bg-[rgba(0,102,255,0.4)]"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#f4f5f8] leading-[1.04]">
              HAVE AN IDEA <br />
              <span className="text-gradient">WORTH BUILDING?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9aa1b0] leading-relaxed">
              Let&apos;s turn your idea into a digital experience people remember.
            </p>

            <div className="p-6 rounded-[16px] bg-[#0c0e15] border border-[rgba(255,255,255,0.08)] space-y-4 font-mono text-xs text-[#8c94a5]">
              <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] pb-3">
                <span>INITIAL RESPONSE</span>
                <span className="text-[#f4f5f8] font-bold">&lt; 24 HOURS</span>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] pb-3">
                <span>COMMUNICATION</span>
                <span className="text-[#f4f5f8] font-bold">DIRECT WITH ENGINEERS</span>
              </div>
              <div className="flex items-center justify-between">
                <span>CONFIDENTIALITY</span>
                <span className="text-[#0066ff] font-bold">MUTUAL NDA READY</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Craft Contact Form */}
          <div className="lg:col-span-7 bg-[#0b0e14] border border-[rgba(255,255,255,0.1)] rounded-[22px] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            {/* Success Notification */}
            {serverSuccess && (
              <div className="p-8 rounded-[16px] bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.3)] space-y-4 text-center my-4">
                <CheckCircle2 size={44} className="text-[#10b981] mx-auto" />
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#f4f5f8]">
                  INQUIRY CONFIRMED
                </h3>
                <p className="text-sm text-[#cbd1dc] max-w-md mx-auto leading-relaxed">
                  {serverSuccess.message}
                </p>
                <div className="font-mono text-xs text-[#10b981] bg-[rgba(16,185,129,0.1)] px-3.5 py-1.5 rounded inline-block">
                  REFERENCE ID: {serverSuccess.inquiryId}
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setServerSuccess(null)}
                    className="text-xs font-mono uppercase text-[#8890a0] hover:text-[#f4f5f8] underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            )}

            {/* Error Notification */}
            {serverError && (
              <div className="mb-6 p-4 rounded-[10px] bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] flex items-center gap-3 text-xs sm:text-sm text-[#fca5a5]">
                <AlertCircle size={18} className="shrink-0 text-[#ef4444]" />
                <span>{serverError}</span>
              </div>
            )}

            {!serverSuccess && (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-[#9aa1b0]">
                      Your Name <span className="text-[#0066ff]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3.5 rounded-[8px] bg-[#080a0f] border text-sm text-[#f4f5f8] placeholder-[#555d6d] focus:outline-none transition-colors ${
                        fieldErrors.name
                          ? 'border-[#ef4444] focus:border-[#ef4444]'
                          : 'border-[rgba(255,255,255,0.08)] focus:border-[#0066ff]'
                      }`}
                    />
                    {fieldErrors.name && (
                      <span className="text-xs text-[#ef4444] block">{fieldErrors.name}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-[#9aa1b0]">
                      Email Address <span className="text-[#0066ff]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3.5 rounded-[8px] bg-[#080a0f] border text-sm text-[#f4f5f8] placeholder-[#555d6d] focus:outline-none transition-colors ${
                        fieldErrors.email
                          ? 'border-[#ef4444] focus:border-[#ef4444]'
                          : 'border-[rgba(255,255,255,0.08)] focus:border-[#0066ff]'
                      }`}
                    />
                    {fieldErrors.email && (
                      <span className="text-xs text-[#ef4444] block">{fieldErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block font-mono text-xs uppercase tracking-wider text-[#9aa1b0]">
                    Company / Organization (Optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Technologies"
                    className="w-full px-4 py-3.5 rounded-[8px] bg-[#080a0f] border border-[rgba(255,255,255,0.08)] focus:border-[#0066ff] text-sm text-[#f4f5f8] placeholder-[#555d6d] focus:outline-none transition-colors"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block font-mono text-xs uppercase tracking-wider text-[#9aa1b0]">
                    Project Type <span className="text-[#0066ff]">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-[8px] bg-[#080a0f] border border-[rgba(255,255,255,0.08)] focus:border-[#0066ff] text-sm text-[#f4f5f8] focus:outline-none transition-colors cursor-pointer"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#0b0e14] text-[#f4f5f8]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget (INR Options) */}
                <div className="space-y-2">
                  <label htmlFor="budget" className="block font-mono text-xs uppercase tracking-wider text-[#9aa1b0]">
                    Estimated Budget Tier (INR) <span className="text-[#0066ff]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {BUDGET_OPTIONS.map((opt) => {
                      const isSelected = formData.budget === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budget: opt }))}
                          className={`px-3 py-3 rounded-[8px] font-mono text-xs border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[rgba(0,102,255,0.18)] border-[#0066ff] text-[#f4f5f8] font-bold shadow-[0_0_14px_rgba(0,102,255,0.25)]'
                              : 'bg-[#080a0f] border-[rgba(255,255,255,0.08)] text-[#8c94a5] hover:border-[rgba(255,255,255,0.2)] hover:text-[#cbd0dc]'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-[#9aa1b0]">
                    Project Overview / Message <span className="text-[#0066ff]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the digital product or experience you want to build..."
                    className={`w-full px-4 py-3.5 rounded-[8px] bg-[#080a0f] border text-sm text-[#f4f5f8] placeholder-[#555d6d] focus:outline-none transition-colors resize-none ${
                      fieldErrors.message
                        ? 'border-[#ef4444] focus:border-[#ef4444]'
                        : 'border-[rgba(255,255,255,0.08)] focus:border-[#0066ff]'
                    }`}
                  />
                  {fieldErrors.message && (
                    <span className="text-xs text-[#ef4444] block">{fieldErrors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-[8px] bg-[#0066ff] hover:bg-[#1a75ff] disabled:opacity-60 text-white font-extrabold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_4px_24px_rgba(0,102,255,0.35)]"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>PROCESSING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>START A CONVERSATION</span>
                        <ArrowUpRight size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
