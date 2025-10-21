import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
            <CheckCircle2 className="h-4 w-4" />
            Verified digital identity
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Your identity, reimagined as a hologram
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl">
            HoloID turns your profile into an iridescent, verifiable card for the modern web. Secure, portable, and beautiful—designed for fintech, creators, and teams.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:brightness-110 transition"
            >
              Create your HoloID
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 hover:bg-white/10 transition"
            >
              Explore features
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400"></span> SOC2-ready</span>
            <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-cyan-400"></span> Self-sovereign</span>
            <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500"></span> OAuth & Web3</span>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div className="relative h-[460px] sm:h-[520px] lg:h-[560px] w-full">
            <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-slate-900/60 to-slate-950/60">
              <Spline
                scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-48 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent blur-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-[0]">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
    </section>
  );
}
