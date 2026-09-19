'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Send, AlertCircle } from 'lucide-react';

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
  const [apiError, setApiError] = useState<string | null>(null);

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
    setApiError(null);

    try {
      const formData = new FormData();
      formData.append('access_key', '0ae8c121-8064-4f5f-9198-7d52145dacea');
      formData.append('name', form.name.trim());
      formData.append('email', form.email.trim());
      formData.append('subject', form.subject.trim() || `Inquiry from ${form.name.trim()} — QORVAYN`);
      formData.append('message', form.message.trim());
      formData.append('from_name', 'QORVAYN Website');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        router.push('/contact/thank-you');
      } else {
        setApiError('Unable to transmit message. Please try again or reach out to theqorvayn@gmail.com.');
      }
    } catch {
      setApiError('Network connection issue. Please try again or email theqorvayn@gmail.com directly.');
    } finally {
      setSubmitting(false);
    }
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
      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#94A3B8] leading-relaxed flex items-center gap-2.5">
        <span className="w-2 h-2 rounded-full bg-[#4F8CFF] animate-pulse flex-shrink-0" />
        <span>Direct inquiry channel — all messages are delivered directly to the QORVAYN core team.</span>
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

      {apiError && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-start gap-2.5">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          <span>{apiError}</span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={submitting}
        className="w-full mt-2"
      >
        <span>{submitting ? 'Transmitting message…' : 'Send message'}</span>
        <Send size={16} />
      </Button>
    </form>
  );
}
