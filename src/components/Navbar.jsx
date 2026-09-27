import React, { useState } from 'react';
import { Menu, X, Satellite, Terminal, ChevronRight, User } from 'lucide-react';

export default function Navbar({ onOpenConsole, onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#051424]/80 backdrop-blur-xl border-b border-purple-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="h-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#7E22CE] via-[#A855F7] to-[#38BDF8] p-0.5 shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            <div className="w-full h-full bg-[#0B0D1B] rounded-[10px] flex items-center justify-center">
              <svg className="w-6 h-6 transform -rotate-45 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C14.5 5.5 17 11 17 17C17 20 15.5 22 12 22C8.5 22 7 20 7 17C7 11 9.5 5.5 12 2Z" fill="url(#navRocketGrad)" />
                <circle cx="12" cy="12" r="2.5" fill="#38BDF8" />
                <defs>
                  <linearGradient id="navRocketGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7E22CE"/>
                    <stop offset="50%" stopColor="#A855F7"/>
                    <stop offset="100%" stopColor="#38BDF8"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="font-headline text-2xl font-bold tracking-tight text-[#F8FAFC]">
              Launch<span className="text-[#C084FC]">Pad</span>
            </span>
            <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono tracking-widest bg-purple-500/10 text-[#C084FC] border border-purple-500/30">
              v4.2
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-label text-sm text-[#cfc2d6]">
          <a href="#telemetry-console" className="hover:text-[#F8FAFC] transition-colors py-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] animate-pulse"></span>
            Live Telemetry
          </a>
          <a href="#platform" className="hover:text-[#F8FAFC] transition-colors py-1">Platform</a>
          <a href="#capabilities" className="hover:text-[#F8FAFC] transition-colors py-1">Capabilities</a>
          <a href="#pricing" className="hover:text-[#F8FAFC] transition-colors py-1">Pricing</a>
          <a href="#docs" className="hover:text-[#F8FAFC] transition-colors py-1">Docs</a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button 
            onClick={() => onOpenDemo('Sign In')}
            className="text-sm font-label text-[#cfc2d6] hover:text-[#F8FAFC] transition-colors px-3 py-2"
          >
            Sign In
          </button>
          
          <button
            onClick={onOpenConsole}
            className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#A855F7] via-[#B76DFF] to-[#7E22CE] text-white font-label text-sm font-semibold shadow-[0_0_20px_rgba(183,109,255,0.45)] hover:shadow-[0_0_30px_rgba(183,109,255,0.75)] hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Terminal className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
            <span>Launch Console</span>
          </button>

          <div className="w-9 h-9 rounded-full bg-[#12162E] border border-purple-500/30 flex items-center justify-center text-[#ddb7ff] shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            <User className="w-4 h-4" />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenConsole}
            className="p-2 rounded-lg bg-purple-600/20 text-[#ddb7ff] border border-purple-500/30"
            title="Launch Console"
          >
            <Terminal className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#12162E] text-[#cfc2d6] hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-purple-500/20 bg-[#0B0D1B]/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <a
            href="#telemetry-console"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-[#cfc2d6] hover:text-white py-2 text-base font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7bd0ff] animate-pulse"></span>
              Live Telemetry
            </span>
            <ChevronRight className="w-4 h-4 text-purple-400" />
          </a>
          <a
            href="#platform"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-[#cfc2d6] hover:text-white py-2 text-base font-medium"
          >
            Platform
            <ChevronRight className="w-4 h-4 text-purple-400" />
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-[#cfc2d6] hover:text-white py-2 text-base font-medium"
          >
            Capabilities
            <ChevronRight className="w-4 h-4 text-purple-400" />
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-[#cfc2d6] hover:text-white py-2 text-base font-medium"
          >
            Pricing
            <ChevronRight className="w-4 h-4 text-purple-400" />
          </a>
          <a
            href="#docs"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-[#cfc2d6] hover:text-white py-2 text-base font-medium"
          >
            Docs
            <ChevronRight className="w-4 h-4 text-purple-400" />
          </a>

          <div className="pt-4 border-t border-purple-500/20 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConsole(); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#7E22CE] text-white font-medium flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <Terminal className="w-4 h-4" />
              Launch Console
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo('Sign In'); }}
              className="w-full py-3 rounded-xl bg-[#12162E] text-[#cfc2d6] hover:text-white border border-purple-500/20 font-medium"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
