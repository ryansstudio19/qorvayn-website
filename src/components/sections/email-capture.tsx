'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle2 } from 'lucide-react';

interface EmailCaptureProps {
  buttonLabel?: string;
  note?: string;
}

export function EmailCapture({
  buttonLabel = 'Get early access updates',
  note = 'Product updates only. Legal wording to be finalized before launch.',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    // TODO: Connect real newsletter or waitlist service provider (e.g. Resend, Mailchimp, ConvertKit)
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
      <div className="flex flex-col sm:flex-row gap-2.5">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#6B7280]">
            <Mail size={16} />
          </div>
          <input
            type="email"
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
        <Button type="submit" variant="primary" size="md">
          {buttonLabel}
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
