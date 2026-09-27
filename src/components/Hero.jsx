import React from 'react';
import { ArrowRight, Play, Shield, Activity, Radio, Cpu } from 'lucide-react';

export default function Hero({ onOpenConsole, onOpenDemo }) {
  const kpis = [
    {
      label: 'Reliability',
      value: '99.999%',
      subtitle: 'Flight Uptime SLA',
      color: 'text-[#7bd0ff]',
      dotBg: 'bg-[#7bd0ff]',
      glow: 'shadow-[0_0_10px_#7bd0ff]',
    },
    {
      label: 'Downlink Latency',
      value: '14.2',
      unit: 'ms',
      subtitle: 'Global Ground Mesh',
      color: 'text-[#ddb7ff]',
      dotBg: 'bg-[#ddb7ff]',
      glow: 'shadow-[0_0_10px_#ddb7ff]',
    },
    {
      label: 'Tracked Fleet',
      value: '450+',
      subtitle: 'Active Satellites',
      color: 'text-[#7bd0ff]',
      dotBg: 'bg-[#7bd0ff]',
      glow: 'shadow-[0_0_10px_#7bd0ff]',
    },
    {
      label: 'Secured Capital',
      value: '$2.4B',
      subtitle: 'Payload Protected',
      color: 'text-[#ddb8ff]',
      dotBg: 'bg-[#ddb8ff]',
      glow: 'shadow-[0_0_10px_#ddb8ff]',
    },
  ];

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto w-full flex flex-col items-center text-center">
      {/* Cosmic Live Status Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#12162E]/80 border border-purple-500/30 backdrop-blur-xl shadow-[0_0_24px_rgba(183,109,255,0.2)] mb-8 transition-transform hover:scale-[1.02] cursor-default">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7bd0ff] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7bd0ff] shadow-[0_0_10px_#7bd0ff]"></span>
        </span>
        <span className="font-label text-xs sm:text-sm tracking-wider text-[#7bd0ff] uppercase font-semibold">
          Orbital Telemetry & Launch Automation v4.2 • Now Live
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-display text-4xl sm:text-6xl lg:text-[72px] lg:leading-[1.1] max-w-5xl tracking-tight text-[#F8FAFC] mb-6 font-bold">
        The Operating System for{' '}
        <span className="bg-gradient-to-r from-[#ddb7ff] via-[#c084fc] to-[#7bd0ff] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(221,183,255,0.4)]">
          Modern Space Missions
        </span>
      </h1>

      {/* Subhead */}
      <p className="font-body text-base sm:text-lg lg:text-xl text-[#cfc2d6] max-w-3xl mb-10 leading-relaxed font-normal">
        LaunchPad unifies satellite constellation orchestration, autonomous flight dynamics, and deep-space telemetry streaming into a single real-time cloud API. Built for orbital precision.
      </p>

      {/* CTA Group */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
        <button
          onClick={() => onOpenDemo('Get Started')}
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#7E22CE] text-white font-headline text-base font-semibold shadow-[0_0_32px_rgba(168,85,247,0.55)] hover:shadow-[0_0_48px_rgba(168,85,247,0.85)] hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
        </button>

        <button
          onClick={onOpenConsole}
          className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#12162E]/70 border border-purple-500/30 backdrop-blur-xl text-[#F8FAFC] font-headline text-base font-medium shadow-[inset_0_0_16px_rgba(183,109,255,0.15)] hover:bg-[#1C2248]/80 hover:border-[#7bd0ff]/40 hover:shadow-[0_0_24px_rgba(123,208,255,0.3)] hover:text-[#7bd0ff] transition-all duration-300"
        >
          <Play className="w-5 h-5 text-[#7bd0ff] fill-[#7bd0ff]" />
          <span>Launch Telemetry Console</span>
        </button>
      </div>

      {/* Live Telemetry KPI Metrics Row */}
      <div className="w-full max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {kpis.map((kpi, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#12162E]/60 border border-purple-500/20 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col items-center hover:border-purple-500/40 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`w-2 h-2 rounded-full ${kpi.dotBg} ${kpi.glow}`}></span>
              <span className="font-label text-xs uppercase tracking-widest text-[#94A3B8] font-semibold">
                {kpi.label}
              </span>
            </div>
            <div className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#F8FAFC] font-bold tracking-tight">
              {kpi.value}
              {kpi.unit && <span className="text-xl sm:text-2xl text-[#ddb7ff] ml-0.5">{kpi.unit}</span>}
            </div>
            <span className={`font-body text-xs sm:text-sm ${kpi.color} mt-0.5`}>
              {kpi.subtitle}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
