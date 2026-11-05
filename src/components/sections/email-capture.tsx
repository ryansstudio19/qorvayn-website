'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle2 } from 'lucide-react';

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '0ae8c121-8064-4f5f-9198-7d52145dacea';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface EmailCaptureProps {
  buttonLabel?: string;
  note?: string;
}

export function EmailCapture({
  buttonLabel = 'Get early access updates',
  note = 'Product updates only. Legal wording to be finalized before launch.',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Silent honeypot trap for automated bots
    if (botcheck) {
      setSubmitted(true);
      return;
    }

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('email', trimmedEmail.slice(0, 160));
      formData.append('subject', 'New Ecosystem Updates Signup — QORVAYN');
      formData.append('message', `New dispatch/waitlist subscription request from: ${trimmedEmail.slice(0, 160)}`);
      formData.append('from_name', 'QORVAYN Ecosystem Updates');
      formData.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Unable to subscribe right now. Please try again shortly.');
      }
    } catch {
      setError('Network connection issue. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 text-[#4F8CFF] bg-[#4F8CFF]/10 border border-[#4F8CFF]/20 px-5 py-3.5 rounded-2xl">
        <CheckCircle2 size={20} className="text-[#4F8CFF] flex-shrink-0" />
        <p className="text-sm font-medium text-[#F5F7FA]">
          You&apos;re on the list. We&apos;ll keep you updated.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md mx-auto" noValidate>
      {/* Hidden Honeypot Anti-Bot Field */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        style={{ display: 'none' }}
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
      />

      <div className="flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B7280]">
            <Mail size={16} />
          </div>
          <input
            type="email"
            maxLength={160}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError('');
            }}
            placeholder="Enter your email address"
            required
            aria-label="Email address"
            aria-invalid={!!error}
            aria-describedby={error ? 'email-error' : undefined}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#F5F7FA] text-sm placeholder:text-[#6B7280] focus:outline-none focus:border-[#4F8CFF] focus:ring-1 focus:ring-[#4F8CFF] transition-all"
          />
        </div>
        <Button type="submit" variant="primary" size="md" disabled={submitting}>
          {submitting ? 'Subscribing…' : buttonLabel}
        </Button>
      </div>
      {error && (
        <p id="email-error" role="alert" className="text-red-400 text-xs text-left">
          {error}
        </p>
      )}
      {note && <p className="text-[#6B7280] text-xs text-left">{note}</p>}
    </form>
  );
}
