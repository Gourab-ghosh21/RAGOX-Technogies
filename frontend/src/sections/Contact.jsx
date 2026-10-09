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
    <section id="contact" className="py-32 bg-[#05070e] relative border-b border-white/[0.08]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Editorial Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400 font-semibold">
                // 06 INITIATE DIALOGUE
              </span>
              <span className="w-8 h-[1px] bg-sky-400/40"></span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.04]">
              HAVE AN IDEA <br />
              <span className="text-gradient">WORTH BUILDING?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300/85 leading-relaxed">
              Let&apos;s turn your idea into a digital experience people remember.
            </p>

            <div className="p-6 rounded-[20px] bg-white/[0.03] backdrop-blur-md border border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] space-y-4 font-mono text-xs text-slate-400">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span>INITIAL RESPONSE</span>
                <span className="text-slate-100 font-bold">&lt; 24 HOURS</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span>COMMUNICATION</span>
                <span className="text-slate-100 font-bold">DIRECT WITH ENGINEERS</span>
              </div>
              <div className="flex items-center justify-between">
                <span>CONFIDENTIALITY</span>
                <span className="text-sky-400 font-bold">MUTUAL NDA READY</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Craft Transparent Glass Form */}
          <div className="lg:col-span-7 glass-card-static rounded-[24px] p-6 sm:p-10 lg:p-12 shadow-[0_24px_70px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.12)] border border-white/[0.1]">
            {/* Success Notification */}
            {serverSuccess && (
              <div className="p-8 rounded-[18px] bg-emerald-500/10 border border-emerald-500/30 space-y-4 text-center my-4 backdrop-blur-md">
                <CheckCircle2 size={44} className="text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                  INQUIRY CONFIRMED
                </h3>
                <p className="text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
                  {serverSuccess.message}
                </p>
                <div className="font-mono text-xs text-emerald-300 bg-emerald-500/15 border border-emerald-500/25 px-3.5 py-1.5 rounded-full inline-block">
                  REFERENCE ID: {serverSuccess.inquiryId}
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setServerSuccess(null)}
                    className="text-xs font-mono uppercase text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            )}

            {/* Error Notification */}
            {serverError && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-xs sm:text-sm text-rose-200 backdrop-blur-sm">
                <AlertCircle size={18} className="shrink-0 text-rose-400" />
                <span>{serverError}</span>
              </div>
            )}

            {!serverSuccess && (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                      Your Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/60 backdrop-blur-sm border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        fieldErrors.name
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/[0.08] focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30'
                      }`}
                    />
                    {fieldErrors.name && (
                      <span className="text-xs text-rose-400 block">{fieldErrors.name}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                      Email Address <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/60 backdrop-blur-sm border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        fieldErrors.email
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/[0.08] focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30'
                      }`}
                    />
                    {fieldErrors.email && (
                      <span className="text-xs text-rose-400 block">{fieldErrors.email}</span>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                    Company / Organization (Optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Technologies"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 backdrop-blur-sm border border-white/[0.08] focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                    Project Type <span className="text-sky-400">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/[0.08] focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#0b101d] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget (INR Options) */}
                <div className="space-y-2">
                  <label htmlFor="budget" className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                    Estimated Budget Tier (INR) <span className="text-sky-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {BUDGET_OPTIONS.map((opt) => {
                      const isSelected = formData.budget === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budget: opt }))}
                          className={`px-3 py-3 rounded-xl font-mono text-xs border text-center transition-all cursor-pointer backdrop-blur-sm ${
                            isSelected
                              ? 'bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border-sky-400 text-white font-bold shadow-[0_0_16px_rgba(56,189,248,0.25),inset_0_1px_0_rgba(255,255,255,0.15)]'
                              : 'bg-white/[0.03] border-white/[0.07] text-slate-400 hover:border-white/[0.18] hover:text-slate-200'
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
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-slate-300">
                    Project Overview / Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the digital product or experience you want to build..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-950/60 backdrop-blur-sm border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      fieldErrors.message
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-white/[0.08] focus:border-sky-400 focus:ring-1 focus:ring-sky-400/30'
                    }`}
                  />
                  {fieldErrors.message && (
                    <span className="text-xs text-rose-400 block">{fieldErrors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-60 text-white font-extrabold uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_4px_25px_rgba(59,130,246,0.45),inset_0_1px_0_rgba(255,255,255,0.25)] border border-white/20 active:scale-98"
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
