import React from 'react';
import { ShieldCheck, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/20">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">HoloID</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#security" className="hover:text-white transition">Security</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-200 hover:bg-white/5 transition">Sign in</button>
            <button className="inline-flex rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:brightness-110 transition">Get Started</button>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 hover:bg-white/5">
              <Menu className="h-5 w-5 text-slate-200" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
