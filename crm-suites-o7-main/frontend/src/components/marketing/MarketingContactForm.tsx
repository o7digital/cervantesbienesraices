'use client';

import { FormEvent, useState } from 'react';
import { API_BASE_URL } from '@/lib/apiBase';
import type { MarketingLocale } from '@/lib/marketingContent';

type Props = {
  locale: MarketingLocale;
  pagePath: string;
  form: {
    title: string;
    description: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    objectiveLabel: string;
    messageLabel: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    objectives: string[];
  };
};

export function MarketingContactForm({ locale, pagePath, form }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [objective, setObjective] = useState(form.objectives[0] || '');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch(`${API_BASE_URL}/public/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          objective,
          message,
          language: locale,
          pagePath,
          source: 'marketing-site',
        }),
      });

      if (!response.ok) throw new Error('Request failed');

      setName('');
      setEmail('');
      setPhone('');
      setObjective(form.objectives[0] || '');
      setMessage('');
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="marketing-card p-8">
      <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{form.title}</p>
      <p className="mt-4 text-base leading-7 text-stone-600">{form.description}</p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-medium text-stone-700">{form.nameLabel}</label>
          <input
            className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-sm outline-none ring-0"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={form.placeholders.name}
            required
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-stone-700">{form.emailLabel}</label>
            <input
              className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-sm outline-none ring-0"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={form.placeholders.email}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-stone-700">{form.phoneLabel}</label>
            <input
              className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-sm outline-none ring-0"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder={form.placeholders.phone}
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-stone-700">{form.objectiveLabel}</label>
          <select
            className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-sm outline-none ring-0"
            value={objective}
            onChange={(event) => setObjective(event.target.value)}
          >
            {form.objectives.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-stone-700">{form.messageLabel}</label>
          <textarea
            className="mt-2 min-h-40 w-full rounded-2xl border border-stone-200 bg-white/80 px-4 py-3 text-sm outline-none ring-0"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={form.placeholders.message}
            required
          />
        </div>

        {status === 'success' ? <p className="text-sm text-emerald-700">{form.success}</p> : null}
        {status === 'error' ? <p className="text-sm text-red-700">{form.error}</p> : null}

        <button type="submit" className="marketing-button-primary" disabled={loading}>
          {loading ? form.sending : form.submit}
        </button>
      </form>
    </div>
  );
}
