'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Send, AlertCircle } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '0ae8c121-8064-4f5f-9198-7d52145dacea';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck: string;
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
    botcheck: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [lastSubmitAt, setLastSubmitAt] = useState<number>(0);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      errs.name = 'Please enter your full name.';
    }
    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!trimmedMessage || trimmedMessage.length < 5) {
      errs.message = 'Please provide a message with at least 5 characters.';
    }
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Silent honeypot trap for automated bots
    if (form.botcheck) {
      router.push('/contact/thank-you');
      return;
    }

    // Rate-limit guard (15s cooldown between submissions)
    const now = Date.now();
    if (now - lastSubmitAt < 15000) {
      setApiError('Please wait a few seconds before sending another message.');
      return;
    }

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setApiError(null);
    setLastSubmitAt(now);

    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('name', form.name.trim().slice(0, 120));
      formData.append('email', form.email.trim().slice(0, 160));
      formData.append(
        'subject',
        (form.subject.trim() || `Inquiry from ${form.name.trim()} — QORVAYN`).slice(0, 200)
      );
      formData.append('message', form.message.trim().slice(0, 4000));
      formData.append('from_name', 'QORVAYN Website');
      formData.append('botcheck', '');

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
      {/* Hidden Honeypot Anti-Bot Field */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        style={{ display: 'none' }}
        checked={Boolean(form.botcheck)}
        onChange={(e) => setForm((prev) => ({ ...prev, botcheck: e.target.checked ? '1' : '' }))}
      />

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
          maxLength={120}
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
          maxLength={160}
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
          maxLength={200}
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
          maxLength={4000}
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
