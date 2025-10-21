import React from 'react';
import { CreditCard, BadgeCheck, Lock, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Iridescent design',
    desc: 'Beautiful, holographic cards that adapt to light and motion for a premium feel.'
  },
  {
    icon: BadgeCheck,
    title: 'Verified identity',
    desc: 'Blue-check verification you control. Share trust wherever your profile appears.'
  },
  {
    icon: Lock,
    title: 'Privacy first',
    desc: 'Zero-knowledge proofs and granular consent keep sensitive data secure.'
  },
  {
    icon: CreditCard,
    title: 'Fintech-ready',
    desc: 'Payments, KYC, and OAuth integrations for seamless onboarding workflows.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Designed for the future of identity</h2>
          <p className="mt-3 text-slate-300">A modern stack that blends aesthetics with cryptographic security and real-world interoperability.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent blur-2xl" />
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400/40 transition">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-blue-600/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition" />
      <div className="relative">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/20">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-slate-300">{desc}</p>
      </div>
    </div>
  );
}
