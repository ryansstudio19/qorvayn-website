'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Please enter your full name.';
    if (!form.email || !form.email.includes('@') || !form.email.includes('.')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 5) {
      errs.message = 'Please provide a message with at least 5 characters.';
    }
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);

    // TODO: Connect production email dispatch (e.g. Resend, Nodemailer, SendGrid, Formspree)
    // Example:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) });

    await new Promise((r) => setTimeout(r, 600));
    router.push('/contact/thank-you');
  }

  const handleChange = (
    key: keyof FormState
  ) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/5 border text-[#F5F7FA] text-sm placeholder:text-[#6B7280] focus:outline-none focus:ring-1 focus:ring-[#4F8CFF] focus:border-[#4F8CFF] transition-all';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="p-3.5 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 text-xs text-[#7DB0FF] leading-relaxed">
        This contact form interface is ready for email-service integration.
      </div>

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-xs font-mono font-semibold text-[#94A3B8] uppercase tracking-wider">
          Name <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`${inputClass} ${errors.name ? 'border-red-500/70 bg-red-500/5' : 'border-white/10'}`}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-red-400 text-xs">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-xs font-mono font-semibold text-[#94A3B8] uppercase tracking-wider">
          Email <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`${inputClass} ${errors.email ? 'border-red-500/70 bg-red-500/5' : 'border-white/10'}`}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-red-400 text-xs">
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-subject" className="text-xs font-mono font-semibold text-[#94A3B8] uppercase tracking-wider">
          Subject <span className="text-[#6B7280] font-normal lowercase">(optional)</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          autoComplete="off"
          placeholder="What is this about?"
          value={form.subject}
          onChange={handleChange('subject')}
          className={`${inputClass} border-white/10`}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-xs font-mono font-semibold text-[#94A3B8] uppercase tracking-wider">
          Message <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="Write your message here…"
          value={form.message}
          onChange={handleChange('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${inputClass} resize-none ${errors.message ? 'border-red-500/70 bg-red-500/5' : 'border-white/10'}`}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-red-400 text-xs">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={submitting}
        className="w-full mt-2"
      >
        <span>{submitting ? 'Preparing message…' : 'Send message'}</span>
        <Send size={16} />
      </Button>
    </form>
  );
}
