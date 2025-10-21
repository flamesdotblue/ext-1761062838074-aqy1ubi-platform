import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} HoloID, Inc. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Docs</a>
        </nav>
      </div>
    </footer>
  );
}
