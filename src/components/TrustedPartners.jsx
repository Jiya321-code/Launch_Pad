import React from 'react';
import { Rocket, Globe2, Network, Moon, Sparkles } from 'lucide-react';

export default function TrustedPartners() {
  const partners = [
    { name: 'AeroSpaceX', icon: Rocket, color: 'text-[#7bd0ff]', glow: 'hover:drop-shadow-[0_0_12px_#7bd0ff]' },
    { name: 'CosmoDynamics', icon: Globe2, color: 'text-[#ddb7ff]', glow: 'hover:drop-shadow-[0_0_12px_#ddb7ff]' },
    { name: 'Aether Orbitals', icon: Network, color: 'text-[#7bd0ff]', glow: 'hover:drop-shadow-[0_0_12px_#7bd0ff]' },
    { name: 'LunarCore', icon: Moon, color: 'text-[#ddb7ff]', glow: 'hover:drop-shadow-[0_0_12px_#ddb7ff]' },
    { name: 'Zenith Satellites', icon: Sparkles, color: 'text-[#7bd0ff]', glow: 'hover:drop-shadow-[0_0_12px_#7bd0ff]' },
  ];

  return (
    <section className="relative z-10 w-full py-8 px-4 sm:px-8 lg:px-12 bg-[#0B0E22]/60 backdrop-blur-xl border-y border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-label text-xs uppercase tracking-widest text-[#94A3B8]/90 font-bold whitespace-nowrap">
          TRUSTED BY FLIGHT DIRECTORS & SPACE AGENCIES GLOBALLY:
        </span>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <span
                key={idx}
                className={`font-headline text-sm sm:text-base font-bold tracking-wider text-[#d4e4fa]/70 ${partner.glow} hover:text-white transition-all cursor-default flex items-center gap-2`}
              >
                <Icon className={`w-4 h-4 ${partner.color}`} />
                {partner.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
