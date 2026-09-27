import React from 'react';
import { Rocket, PhoneCall, Sparkles } from 'lucide-react';

export default function CtaBanner({ onOpenDemo }) {
  return (
    <section className="relative z-10 px-4 sm:px-8 lg:px-12 py-16 max-w-[1400px] mx-auto w-full">
      <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-br from-[#161B3B] via-[#0E132D] to-[#0A0D22] border border-purple-500/30 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(183,109,255,0.15)] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#38BDF8]/15 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Text Content */}
        <div className="flex flex-col gap-2 text-center md:text-left z-10 max-w-xl">
          <span className="font-label text-xs uppercase tracking-widest text-[#7bd0ff] font-bold flex items-center justify-center md:justify-start gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> READY TO ORBIT?
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#F8FAFC] leading-tight">
            Ready to launch your constellation into orbit?
          </h2>
          <p className="font-body text-sm sm:text-base text-[#cfc2d6]">
            Connect your telemetry stream in under 15 minutes with our unified flight SDK and test ground array sandbox.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto">
          <button
            onClick={() => onOpenDemo('Get Started')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C084FC] to-[#7E22CE] text-white font-headline text-sm font-bold shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all"
          >
            <span>Get Started</span>
            <Rocket className="w-4 h-4 text-white" />
          </button>
          
          <button
            onClick={() => onOpenDemo('Flight Specialist')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#1C2248]/80 hover:bg-[#252E60] border border-purple-500/30 text-[#F8FAFC] font-headline text-sm font-medium hover:text-[#7bd0ff] transition-all"
          >
            <PhoneCall className="w-4 h-4 text-[#7bd0ff]" />
            <span>Talk to Flight Specialists</span>
          </button>
        </div>
      </div>
    </section>
  );
}
