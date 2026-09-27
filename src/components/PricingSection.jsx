import React, { useState } from 'react';
import { Check, X, Sparkles, FlaskConical, Satellite, Rocket } from 'lucide-react';

export default function PricingSection({ onSelectTier }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      id: 'cubesat',
      name: 'CubeSat Tier',
      subtitle: 'Academic labs & single satellites',
      icon: 'science',
      priceMonthly: 1499,
      priceAnnual: 1199,
      rateNote: 'Billed annually, flat telemetry rate',
      popular: false,
      ctaText: 'Start CubeSat Plan',
      features: [
        { text: '2 Dedicated ground station downlinks', included: true },
        { text: '10GB high-speed telemetry / day', included: true },
        { text: 'Standard orbital collision alerts (12h SLA)', included: true },
        { text: 'Webhooks & REST Flight API', included: true },
        { text: 'Autonomous propulsion burns', included: false },
      ],
    },
    {
      id: 'constellation',
      name: 'Constellation Tier',
      subtitle: 'Commercial orbital fleets',
      icon: 'satellite',
      priceMonthly: 4999,
      priceAnnual: 3999,
      rateNote: 'Full autonomous constellation orchestration',
      popular: true,
      ctaText: 'Get Started with Constellation',
      features: [
        { text: 'Unlimited satellite uplink slots', included: true },
        { text: 'Autonomous collision avoidance AI & burns', included: true },
        { text: 'Sub-second telemetry streaming pipeline', included: true },
        { text: 'Inter-satellite laser mesh coordination', included: true },
        { text: '24/7 Dedicated flight director standby', included: true },
      ],
    },
    {
      id: 'enterprise',
      name: 'Deep Space & Defense',
      subtitle: 'Lunar, deep-space & gov missions',
      icon: 'rocket',
      priceMonthly: 14999,
      priceAnnual: 11999,
      rateNote: 'Bespoke SLA & custom ground integration',
      popular: false,
      ctaText: 'Contact Mission Command',
      features: [
        { text: 'Dedicated ground array antenna peering', included: true },
        { text: 'Post-quantum cryptography (Kyber/Dilithium)', included: true },
        { text: 'On-prem air-gapped flight controller option', included: true },
        { text: 'Custom propulsion hardware firmware drivers', included: true },
        { text: 'ITAR compliance officer assigned', included: true },
      ],
    },
  ];

  return (
    <section id="pricing" className="relative z-10 px-4 sm:px-8 lg:px-12 py-20 max-w-[1600px] mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="px-4 py-1 rounded-full bg-[#00a6e0]/15 border border-[#7bd0ff]/30 shadow-[0_0_15px_rgba(0,166,224,0.25)] mb-3">
          <span className="font-label text-xs uppercase tracking-widest text-[#7bd0ff] font-bold">
            TRANSPARENT PRICING
          </span>
        </div>
        <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#F8FAFC] mb-4">
          Predictable Pricing for Any Orbit
        </h2>
        <p className="font-body text-base sm:text-lg text-[#cfc2d6] max-w-2xl">
          From university CubeSat experiments to planetary mega-constellations. No surprise egress or ground network licensing surcharges.
        </p>

        {/* Billing Toggle */}
        <div className="mt-8 p-1.5 rounded-full bg-[#12162E]/80 border border-purple-500/20 backdrop-blur-xl flex items-center gap-1 shadow-[inset_0_0_12px_rgba(0,0,0,0.6)]">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full font-label text-sm transition-all duration-200 ${
              !isAnnual
                ? 'bg-gradient-to-r from-[#A855F7] to-[#B76DFF] text-white font-bold shadow-[0_0_16px_rgba(183,109,255,0.4)]'
                : 'text-[#cfc2d6] hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full font-label text-sm transition-all duration-200 flex items-center gap-1.5 ${
              isAnnual
                ? 'bg-gradient-to-r from-[#A855F7] to-[#B76DFF] text-white font-bold shadow-[0_0_16px_rgba(183,109,255,0.4)]'
                : 'text-[#cfc2d6] hover:text-white'
            }`}
          >
            <span>Annual</span>
            <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* 3 Glassmorphic Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
        {tiers.map((tier) => {
          const currentPrice = isAnnual ? tier.priceAnnual : tier.priceMonthly;
          return (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-7 sm:p-8 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'bg-gradient-to-b from-[#1E244C]/95 to-[#12162E]/95 border-2 border-purple-400 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(183,109,255,0.3)] lg:-translate-y-4'
                  : 'bg-[#12162E]/60 border border-purple-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:-translate-y-1'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#A855F7] via-[#B76DFF] to-[#38BDF8] text-white font-label text-xs uppercase tracking-widest font-bold shadow-[0_0_15px_#b76dff] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pt-2">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-[#F8FAFC]">
                      {tier.name}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-[#cfc2d6]">
                      {tier.subtitle}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    tier.popular ? 'bg-purple-500/20 text-[#ddb7ff]' : 'bg-[#1c2b3c] text-[#cfc2d6]'
                  }`}>
                    {tier.id === 'cubesat' && <span className="font-mono text-sm font-bold">1U</span>}
                    {tier.id === 'constellation' && <span className="font-mono text-sm font-bold">∞</span>}
                    {tier.id === 'enterprise' && <span className="font-mono text-sm font-bold">DS</span>}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-[#F8FAFC]">
                      ${currentPrice.toLocaleString()}
                    </span>
                    <span className="text-[#cfc2d6] font-body text-sm">/month</span>
                  </div>
                  <span className={`block text-[11px] font-mono mt-1 ${tier.popular ? 'text-[#ddb7ff]' : 'text-[#7bd0ff]'}`}>
                    {tier.rateNote}
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="flex flex-col gap-3 mb-8">
                  {tier.features.map((feat, i) => (
                    <div key={i} className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                      feat.included ? 'text-[#d4e4fa]' : 'text-[#94A3B8]/60 line-through'
                    }`}>
                      {feat.included ? (
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? 'text-[#C084FC]' : 'text-[#7bd0ff]'}`} />
                      ) : (
                        <X className="w-4 h-4 shrink-0 mt-0.5 text-[#94A3B8]/50" />
                      )}
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTier(tier)}
                className={`w-full py-4 rounded-xl text-center font-headline text-sm font-bold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#7E22CE] text-white shadow-[0_0_24px_rgba(168,85,247,0.6)] hover:shadow-[0_0_36px_rgba(168,85,247,0.9)] hover:brightness-110'
                    : 'bg-[#1C2248]/80 hover:bg-[#252E60] border border-purple-500/20 text-[#F8FAFC] shadow-md hover:text-[#7bd0ff]'
                }`}
              >
                {tier.ctaText}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
