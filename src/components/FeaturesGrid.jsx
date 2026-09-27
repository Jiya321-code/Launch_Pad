import React from 'react';
import { Radar, Lock, Network, CheckCircle } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      id: 'flight',
      badge: 'TRAJECTORY ENGINE',
      title: 'Autonomous Flight Trajectory',
      description: 'Real-time orbital path projection, continuous AI collision avoidance algorithms, and thruster-level micro-burn calculations.',
      icon: Radar,
      gradient: 'from-[#ddb7ff] to-[#b76dff]',
      accentColor: 'text-[#ddb7ff]',
      statusText: 'AI COLLISION CHECK: ZERO THREAT',
      renderViz: () => (
        <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
          <circle cx="100" cy="50" r="40" stroke="#7bd0ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
          <circle cx="100" cy="50" r="25" stroke="#7bd0ff" strokeWidth="1" opacity="0.4" />
          <line x1="100" y1="50" x2="135" y2="25" stroke="#ddb7ff" strokeWidth="2" />
          <polygon points="100,50 135,20 145,35" fill="url(#radarSweepFeat)" opacity="0.3" />
          <circle cx="130" cy="28" r="3" fill="#7bd0ff" className="animate-ping" />
          <circle cx="130" cy="28" r="2.5" fill="#ffffff" />
          <circle cx="75" cy="65" r="2" fill="#ddb7ff" />
          <defs>
            <linearGradient id="radarSweepFeat" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ddb7ff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      ),
      points: [
        'Sub-millimeter orbital conjunction modeling',
        'Auto-burn sequence generation in 4ms',
        'Full ITAR & NASA orbital safety compliance',
      ],
    },
    {
      id: 'quantum',
      badge: 'SECURITY',
      title: 'Quantum-Encrypted Telemetry',
      description: 'Multi-band downlink data pipeline, zero-trust end-to-end payload cryptography from Low Earth Orbit to mission control servers.',
      icon: Lock,
      gradient: 'from-[#7bd0ff] to-[#00a6e0]',
      accentColor: 'text-[#7bd0ff]',
      statusText: 'POST-QUANTUM CRYSTALS-KYBER',
      renderViz: () => (
        <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
          <path d="M 10 50 Q 30 20, 50 50 T 90 50 T 130 50 T 170 50 T 190 50" stroke="#7bd0ff" strokeWidth="2" />
          <path d="M 10 50 Q 25 70, 45 50 T 80 50 T 115 50 T 150 50 T 190 50" stroke="#ddb7ff" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.7" />
          <circle cx="100" cy="50" r="18" fill="#12162E" stroke="#b76dff" strokeWidth="2" />
          <path d="M 96 48 L 96 44 A 4 4 0 0 1 104 44 L 104 48 M 94 48 L 106 48 L 106 56 L 94 56 Z" stroke="#ddb7ff" strokeWidth="1.5" />
        </svg>
      ),
      points: [
        'Post-quantum Kyber-1024 uplink cipher',
        'Zero egress penalties across ground networks',
        'Real-time multi-spectral signal analysis',
      ],
    },
    {
      id: 'constellation',
      badge: 'FLEET NETWORKING',
      title: 'Constellation Orchestration',
      description: 'Coordinate multi-satellite fleets as a unified supercomputer. Autonomous cross-link mesh routing and programmatic payload tasking.',
      icon: Network,
      gradient: 'from-[#b175ec] to-[#b76dff]',
      accentColor: 'text-[#ddb7ff]',
      statusText: 'ISL LASER MESH: 100 Gbps SYNCHRONIZED',
      renderViz: () => (
        <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
          <line x1="40" y1="30" x2="100" y2="20" stroke="#b76dff" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="100" y1="20" x2="160" y2="40" stroke="#b76dff" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="40" y1="30" x2="70" y2="75" stroke="#7bd0ff" strokeWidth="1.5" />
          <line x1="100" y1="20" x2="70" y2="75" stroke="#7bd0ff" strokeWidth="1.5" />
          <line x1="100" y1="20" x2="130" y2="80" stroke="#7bd0ff" strokeWidth="1.5" />
          <line x1="160" y1="40" x2="130" y2="80" stroke="#7bd0ff" strokeWidth="1.5" />
          <line x1="70" y1="75" x2="130" y2="80" stroke="#ddb7ff" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="40" cy="30" r="5" fill="#ddb7ff" />
          <circle cx="100" cy="20" r="6" fill="#7bd0ff" />
          <circle cx="160" cy="40" r="5" fill="#ddb7ff" />
          <circle cx="70" cy="75" r="5" fill="#7bd0ff" />
          <circle cx="130" cy="80" r="5" fill="#ddb7ff" />
        </svg>
      ),
      points: [
        'Autonomous inter-satellite laser mesh',
        'Dynamic geo-fenced payload task scheduler',
        'Automated orbital health diagnostics',
      ],
    },
  ];

  return (
    <section id="capabilities" className="relative z-10 px-4 sm:px-8 lg:px-12 py-20 max-w-[1600px] mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 shadow-[0_0_15px_rgba(183,109,255,0.25)] mb-3">
          <span className="font-label text-xs uppercase tracking-widest text-[#ddb7ff] font-bold">
            CAPABILITIES
          </span>
        </div>
        <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#F8FAFC] mb-4">
          Engineered for Orbital Scale
        </h2>
        <p className="font-body text-base sm:text-lg text-[#cfc2d6] max-w-2xl">
          Deploy and automate mission telemetry with sub-millisecond precision. Everything required to command next-gen constellations.
        </p>
      </div>

      {/* 3-Column Bento Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feat) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.id}
              className="group relative rounded-3xl p-7 sm:p-8 bg-[#12162E]/65 border border-purple-500/20 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(183,109,255,0.25)] hover:border-purple-500/50 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Top hairline gradient glow */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl"></div>

              <div>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.gradient} flex items-center justify-center text-[#0B0D1B] shadow-[0_0_24px_rgba(183,109,255,0.4)] mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-[#0B0D1B]" />
                </div>

                {/* SVG Visualizer Container */}
                <div className="w-full h-32 rounded-xl bg-[#090C1B]/90 border border-purple-500/20 p-3 mb-6 flex items-center justify-center relative overflow-hidden">
                  {feat.renderViz()}
                  <span className="absolute bottom-2 left-3 font-mono text-[10px] text-[#7bd0ff]">
                    {feat.statusText}
                  </span>
                </div>

                <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-2.5">
                  {feat.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-[#cfc2d6] mb-6 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-2.5 pt-4 border-t border-purple-500/15">
                {feat.points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#d4e4fa]">
                    <CheckCircle className="w-4 h-4 text-[#7bd0ff] shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
