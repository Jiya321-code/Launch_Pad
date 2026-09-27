import React, { useState, useEffect } from 'react';
import { Satellite, Terminal, Activity, Wifi, Zap, ShieldAlert, RefreshCw, Play, Pause, Compass, CheckCircle2 } from 'lucide-react';

const SATELLITE_DATA = [
  {
    id: 'leo-7',
    name: 'LP-ORBIT-SYNAPSE // LEO-7',
    noradId: '58921',
    perigee: '542 KM',
    apogee: '554 KM',
    inclination: '53.2°',
    frequency: '28.452 GHz',
    band: 'Ka-Band',
    ber: '1.02e-9',
    velocity: '27,518 km/h',
    conjunctionRisk: '0.00001% (Clear)',
    meshNodes: '18 Nodes Locked',
    snr: 54.8,
    deltaV: 248,
    xenon: '14.8 KG',
    life: '8.4 YRS',
    streamRate: '1.24 GB/s',
  },
  {
    id: 'geo-2',
    name: 'AETHER-QUANTUM // GEO-2',
    noradId: '49104',
    perigee: '35,780 KM',
    apogee: '35,792 KM',
    inclination: '0.05°',
    frequency: '31.120 GHz',
    band: 'Q-Band',
    ber: '2.14e-10',
    velocity: '11,052 km/h',
    conjunctionRisk: '0.00000% (Nominal)',
    meshNodes: '32 Nodes Locked',
    snr: 58.2,
    deltaV: 512,
    xenon: '32.1 KG',
    life: '14.2 YRS',
    streamRate: '4.80 GB/s',
  },
  {
    id: 'nrho-1',
    name: 'LUNAR-RELAY // NRHO-1',
    noradId: '60142',
    perigee: '3,200 KM',
    apogee: '71,400 KM',
    inclination: '89.4°',
    frequency: '26.890 GHz',
    band: 'Deep Space X',
    ber: '8.76e-9',
    velocity: '5,140 km/h',
    conjunctionRisk: '0.00000% (Clear)',
    meshNodes: '8 Nodes Locked',
    snr: 49.3,
    deltaV: 180,
    xenon: '9.2 KG',
    life: '6.1 YRS',
    streamRate: '680 MB/s',
  }
];

export default function TelemetryConsole() {
  const [selectedSat, setSelectedSat] = useState(SATELLITE_DATA[0]);
  const [isStreaming, setIsStreaming] = useState(true);
  const [streamLogs, setStreamLogs] = useState([
    { id: 1, tag: 'ATTITUDE_QUATERNION', val: '[0.7071, 0.0000, 0.7071, 0.0000]', color: 'text-[#ddb7ff]' },
    { id: 2, tag: 'SOLAR_ARRAY_OUTPUT', val: '4,820 W [NOMINAL]', color: 'text-[#7bd0ff]' },
    { id: 3, tag: 'AUTONOMOUS_CORR_EVENT', val: 'PASSED [0.004s]', color: 'text-emerald-400' },
    { id: 4, tag: 'PHASED_ARRAY_BEAM', val: 'VECTOR AZ 142.8° EL 48.3°', color: 'text-[#ddb7ff]' },
    { id: 5, tag: 'THERMAL_SHIELD_RAD', val: '+21.4°C / -14.8°C [STABLE]', color: 'text-[#7bd0ff]' },
  ]);
  const [correctionNotice, setCorrectionNotice] = useState(null);

  // Live log generator simulation
  useEffect(() => {
    if (!isStreaming) return;

    const interval = setInterval(() => {
      const sampleTags = [
        { tag: 'DOWNLINK_PACKET_CRC', val: `OK [LATENCY: ${(12 + Math.random() * 4).toFixed(1)}ms]`, color: 'text-emerald-400' },
        { tag: 'GYRO_DRIFT_BIAS', val: `< 0.00002°/hr [CALIBRATED]`, color: 'text-[#7bd0ff]' },
        { tag: 'LASER_INTERLINK_TX', val: `NODE #${Math.floor(Math.random() * 12 + 1)} SYNCED`, color: 'text-[#ddb7ff]' },
        { tag: 'STAR_TRACKER_VEC', val: `FOVs LOCKED (α: ${(Math.random() * 360).toFixed(2)}°)`, color: 'text-[#C084FC]' },
        { tag: 'BATTERY_SOC_LEVEL', val: `${(94 + Math.random() * 5).toFixed(1)}% CHARGED`, color: 'text-emerald-400' },
      ];

      const chosen = sampleTags[Math.floor(Math.random() * sampleTags.length)];
      setStreamLogs(prev => [
        { id: Date.now(), tag: chosen.tag, val: chosen.val, color: chosen.color },
        ...prev.slice(0, 5)
      ]);
    }, 2800);

    return () => clearInterval(interval);
  }, [isStreaming]);

  const handleSimulateBurn = () => {
    setCorrectionNotice(`Micro-burn trajectory computed for ${selectedSat.name}: ΔV +0.024 m/s executed.`);
    setTimeout(() => setCorrectionNotice(null), 4000);
  };

  return (
    <section id="telemetry-console" className="relative px-4 sm:px-8 lg:px-12 py-16 max-w-[1600px] mx-auto w-full">
      {/* Console Outer Container with Gradient Border */}
      <div className="w-full rounded-3xl p-1 bg-gradient-to-b from-[#A855F7]/35 via-[#181E3F]/50 to-[#38BDF8]/25 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(183,109,255,0.15)] relative">
        <div className="rounded-[22px] bg-[#0E1226]/95 backdrop-blur-2xl p-6 sm:p-8 text-left overflow-hidden flex flex-col gap-6">
          
          {/* Top HUD Header with Satellite Switcher */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-purple-500/15">
            <div className="flex flex-wrap items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[#ddb7ff] shadow-[0_0_15px_rgba(183,109,255,0.4)]">
                <Satellite className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-headline text-lg sm:text-xl font-bold text-[#F8FAFC]">
                    {selectedSat.name}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#00a6e0]/20 border border-[#7bd0ff]/30 text-[#7bd0ff] text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] animate-ping"></span>
                    STREAM ACTIVE
                  </span>
                </div>
                <p className="font-mono text-xs text-[#cfc2d6] mt-1">
                  NORAD ID: {selectedSat.noradId} • PERIGEE: {selectedSat.perigee} • APOGEE: {selectedSat.apogee} • INC: {selectedSat.inclination}
                </p>
              </div>
            </div>

            {/* Sat Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {SATELLITE_DATA.map((sat) => (
                <button
                  key={sat.id}
                  onClick={() => setSelectedSat(sat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedSat.id === sat.id
                      ? 'bg-purple-600/30 border border-purple-400 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)] font-bold'
                      : 'bg-[#12162E] text-[#94A3B8] border border-purple-500/20 hover:text-white'
                  }`}
                >
                  {sat.id.toUpperCase()}
                </button>
              ))}

              <div className="hidden sm:flex items-center gap-3 pl-2 border-l border-purple-500/20">
                <div className="flex flex-col text-right">
                  <span className="font-label text-[10px] text-[#94A3B8] uppercase">Carrier</span>
                  <span className="font-mono text-xs text-[#7bd0ff] font-bold">
                    {selectedSat.frequency} <span className="text-[10px] text-[#94A3B8]">{selectedSat.band}</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#090C1B] border border-purple-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
                  <span className="font-mono text-[11px] text-[#F8FAFC]">BER: {selectedSat.ber}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Notice */}
          {correctionNotice && (
            <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-400 text-purple-200 text-xs font-mono flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{correctionNotice}</span>
            </div>
          )}

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left 7 Cols: Interactive Orbital Vector Visualizer */}
            <div className="lg:col-span-7 rounded-2xl bg-[#090C1B]/80 border border-purple-500/20 p-5 flex flex-col justify-between relative overflow-hidden shadow-[inset_0_0_25px_rgba(0,0,0,0.7)]">
              <div className="flex items-center justify-between mb-4 z-10">
                <span className="font-label text-xs sm:text-sm text-[#ddb7ff] font-mono flex items-center gap-2 uppercase tracking-wider font-semibold">
                  <Activity className="w-4 h-4 text-[#7bd0ff]" /> Real-Time Flight Path & Node Vectors
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSimulateBurn}
                    className="px-2.5 py-1 rounded bg-[#1C2248] hover:bg-[#27326B] border border-purple-500/30 text-[11px] font-mono text-[#ddb7ff] transition-colors"
                  >
                    Compute Burn
                  </button>
                  <span className="font-mono text-xs text-[#94A3B8]">T+ 04:18:22:09</span>
                </div>
              </div>

              {/* Dynamic SVG Orbital Canvas */}
              <div className="w-full h-64 sm:h-72 relative flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 600 240" fill="none">
                  {/* Orbital Earth Slice */}
                  <circle cx="300" cy="380" r="260" fill="url(#earthGradientConsole)" opacity="0.45" />
                  <path d="M 40 380 A 260 260 0 0 1 560 380" stroke="#7bd0ff" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />

                  {/* Trajectory Ellipses */}
                  <path d="M 60 190 C 180 80, 420 70, 540 180" stroke="url(#orbitGradientConsole)" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 80 140 C 200 40, 400 50, 520 150" stroke="#ddb7ff" strokeWidth="1" strokeDasharray="6 6" opacity="0.4" />

                  {/* Velocity Vector Line */}
                  <line x1="330" y1="92" x2="410" y2="76" stroke="#7bd0ff" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="410" cy="76" r="3" fill="#7bd0ff" />
                  <text x="418" y="79" fill="#7bd0ff" fontFamily="Space Grotesk" fontSize="10">v = 7.64 km/s</text>

                  {/* Ground Stations Links */}
                  <path d="M 210 200 L 330 92 L 430 215" stroke="#7bd0ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
                  <circle cx="210" cy="200" r="4" fill="#7bd0ff" />
                  <text x="175" y="220" fill="#cfc2d6" fontFamily="Space Grotesk" fontSize="9">SVALBARD GS-01</text>
                  <circle cx="430" cy="215" r="4" fill="#7bd0ff" />
                  <text x="405" y="235" fill="#cfc2d6" fontFamily="Space Grotesk" fontSize="9">CANBERRA GS-04</text>

                  {/* Active Satellite Marker */}
                  <g className="cursor-pointer">
                    <circle cx="330" cy="92" r="16" fill="#A855F7" fillOpacity="0.25" className="animate-ping" />
                    <circle cx="330" cy="92" r="6" fill="#C084FC" stroke="#ffffff" strokeWidth="2" />
                    <rect x="315" y="89" width="6" height="6" fill="#38BDF8" rx="1" />
                    <rect x="339" y="89" width="6" height="6" fill="#38BDF8" rx="1" />
                  </g>

                  <defs>
                    <radialGradient id="earthGradientConsole" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00a6e0" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#010f1f" stopOpacity="0.95" />
                    </radialGradient>
                    <linearGradient id="orbitGradientConsole" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7bd0ff" />
                      <stop offset="50%" stopColor="#ddb7ff" />
                      <stop offset="100%" stopColor="#b76dff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Footer Trajectory Data Overlay */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-purple-500/15 bg-gradient-to-t from-black/40 to-transparent">
                <div className="bg-[#12162E]/70 p-2.5 rounded-lg border border-purple-500/10">
                  <span className="block text-[10px] text-[#94A3B8] font-mono uppercase">Velocity Rel.</span>
                  <span className="font-headline text-sm sm:text-base font-bold text-[#F8FAFC] font-mono">{selectedSat.velocity}</span>
                </div>
                <div className="bg-[#12162E]/70 p-2.5 rounded-lg border border-purple-500/10">
                  <span className="block text-[10px] text-[#94A3B8] font-mono uppercase">Conjunction Risk</span>
                  <span className="font-headline text-sm sm:text-base font-bold text-emerald-400 font-mono">{selectedSat.conjunctionRisk}</span>
                </div>
                <div className="bg-[#12162E]/70 p-2.5 rounded-lg border border-purple-500/10">
                  <span className="block text-[10px] text-[#94A3B8] font-mono uppercase">Mesh Link</span>
                  <span className="font-headline text-sm sm:text-base font-bold text-[#7bd0ff] font-mono">{selectedSat.meshNodes}</span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Gauges & Ingest Stream */}
            <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
              
              {/* SNR Meter */}
              <div className="rounded-2xl bg-[#090C1B]/80 border border-purple-500/20 p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-mono text-xs text-[#7bd0ff] uppercase flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5" /> Signal SNR (C/N0)
                  </span>
                  <span className="font-mono text-sm text-[#F8FAFC] font-bold">{selectedSat.snr} dB-Hz</span>
                </div>
                <div className="w-full bg-[#12162E] h-2.5 rounded-full overflow-hidden p-0.5 border border-purple-500/20">
                  <div
                    className="bg-gradient-to-r from-[#7bd0ff] via-[#ddb7ff] to-[#b76dff] h-full rounded-full transition-all duration-500 shadow-[0_0_10px_#b76dff]"
                    style={{ width: `${(selectedSat.snr / 65) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] text-[#94A3B8] font-mono mt-1.5">
                  <span>CARRIER LOCK: NOMINAL</span>
                  <span className="text-[#7bd0ff]">RATE: {selectedSat.streamRate}</span>
                </div>
              </div>

              {/* Delta-V / Propulsion */}
              <div className="rounded-2xl bg-[#090C1B]/80 border border-purple-500/20 p-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-mono text-xs text-[#ddb7ff] uppercase flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> Ion Propulsion ΔV Reserve
                  </span>
                  <span className="font-mono text-sm text-[#F8FAFC] font-bold">{selectedSat.deltaV} m/s</span>
                </div>
                <div className="w-full bg-[#12162E] h-2.5 rounded-full overflow-hidden p-0.5 border border-purple-500/20">
                  <div
                    className="bg-gradient-to-r from-[#ddb7ff] to-[#7bd0ff] h-full rounded-full transition-all duration-500 shadow-[0_0_10px_#ddb7ff]"
                    style={{ width: `${(selectedSat.deltaV / 600) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] text-[#94A3B8] font-mono mt-1.5">
                  <span>XENON: {selectedSat.xenon}</span>
                  <span className="text-[#ddb7ff]">EST. LIFE: {selectedSat.life}</span>
                </div>
              </div>

              {/* Terminal Feed */}
              <div className="rounded-2xl bg-[#050711] border border-purple-500/20 p-4 font-mono text-[11px] leading-tight flex flex-col gap-2 shadow-inner">
                <div className="flex items-center justify-between text-[#7bd0ff] pb-2 border-b border-purple-500/15">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Terminal className="w-4 h-4" />
                    <span>TELEMETRY INGEST STREAM [STREAM-08]</span>
                  </div>
                  <button
                    onClick={() => setIsStreaming(!isStreaming)}
                    className="p-1 rounded bg-[#12162E] hover:bg-[#1E244C] text-[#cfc2d6] transition-colors"
                    title={isStreaming ? 'Pause Stream' : 'Resume Stream'}
                  >
                    {isStreaming ? <Pause className="w-3 h-3 text-[#7bd0ff]" /> : <Play className="w-3 h-3 text-emerald-400" />}
                  </button>
                </div>

                <div className="flex flex-col gap-1.5 min-h-[90px]">
                  {streamLogs.map(log => (
                    <div key={log.id} className="text-[#d4e4fa]/80 flex justify-between items-center text-[10.5px]">
                      <span className={log.color}>&gt; {log.tag}:</span>
                      <span className="font-medium">{log.val}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
