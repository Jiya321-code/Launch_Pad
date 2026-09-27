import React, { useState } from 'react';
import { X, Terminal, Radio, BatteryCharging, Flame, Compass, RefreshCw, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

export default function MissionControlModal({ isOpen, onClose, initialMode = 'console' }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('telemetry');
  const [thrusterFiring, setThrusterFiring] = useState(false);
  const [solarAngle, setSolarAngle] = useState(42);
  const [meshStatus, setMeshStatus] = useState('SYNCED');
  const [consoleLogs, setConsoleLogs] = useState([
    '[INIT] LaunchPad Synapse v4.2 Kernel Loaded',
    '[AUTH] Flight Director Token Verified: FD-ALPHA-01',
    '[NODE] Carrier Lock established with SVALBARD-01 [28.452 GHz]',
    '[SYS] Phased Array Beam steering active (Azimuth: 142.8°, Elev: 48.3°)',
    '[INFO] Constellation Mesh Ping: 4.8ms average latency',
  ]);

  const handleFireThruster = () => {
    setThrusterFiring(true);
    setConsoleLogs(prev => [
      `[MANEUVER] Thruster test burn executed: ΔV +0.012 m/s, Duration: 250ms`,
      ...prev
    ]);
    setTimeout(() => {
      setThrusterFiring(false);
    }, 1200);
  };

  const handlePingMesh = () => {
    setMeshStatus('PINGING...');
    setTimeout(() => {
      setMeshStatus('SYNCED (32 NODES)');
      setConsoleLogs(prev => [
        `[MESH] Laser interlink broadcast ACK received across 32 constellation nodes`,
        ...prev
      ]);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0B0D1B] border border-purple-500/40 shadow-[0_0_80px_rgba(168,85,247,0.35)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-500/20 bg-[#12162E]/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-[#C084FC]">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-headline text-base sm:text-lg font-bold text-[#F8FAFC]">
                  Mission Control Terminal
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  LIVE SESSION
                </span>
              </div>
              <span className="font-mono text-xs text-[#94A3B8]">
                NODE: LP-SYNAPSE-LEO-7 // OPERATOR: GUEST-DIRECTOR
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1C2248] hover:bg-[#252E60] text-[#cfc2d6] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-purple-500/15 bg-[#0e132c]/50">
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-all ${
              activeTab === 'telemetry'
                ? 'bg-[#181E3F] text-white border-t border-x border-purple-400/40 font-bold'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            SUBSYSTEMS & CONTROLS
          </button>
          <button
            onClick={() => setActiveTab('raw-logs')}
            className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-all ${
              activeTab === 'raw-logs'
                ? 'bg-[#181E3F] text-white border-t border-x border-purple-400/40 font-bold'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            RAW UPLINK TERMINAL
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-6 font-mono text-xs">
          
          {activeTab === 'telemetry' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Thruster Simulation Panel */}
              <div className="p-4 rounded-2xl bg-[#12162E]/70 border border-purple-500/20 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#ddb7ff] font-bold flex items-center gap-1.5 uppercase">
                      <Flame className="w-4 h-4 text-[#A855F7]" /> Ion Thruster Array
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                      thrusterFiring ? 'bg-amber-500/20 text-amber-300 animate-pulse' : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {thrusterFiring ? 'FIRING BURST' : 'STANDBY'}
                    </span>
                  </div>
                  <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                    Test micro-burn sequence to verify reaction wheel bias correction and propellant chamber pressure.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-purple-500/10">
                  <span className="text-[#F8FAFC]">Chamber Pressure: 42.1 kPa</span>
                  <button
                    onClick={handleFireThruster}
                    disabled={thrusterFiring}
                    className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#A855F7] to-[#7E22CE] text-white font-bold hover:brightness-110 shadow-[0_0_12px_rgba(168,85,247,0.4)] disabled:opacity-50 transition-all flex items-center gap-1.5"
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>Fire Test Burn</span>
                  </button>
                </div>
              </div>

              {/* Solar Array Orientation */}
              <div className="p-4 rounded-2xl bg-[#12162E]/70 border border-purple-500/20 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#7bd0ff] font-bold flex items-center gap-1.5 uppercase">
                      <BatteryCharging className="w-4 h-4 text-[#7bd0ff]" /> Solar Gimbals
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#00a6e0]/20 text-[#7bd0ff] font-bold">
                      OUTPUT: 4,820W
                    </span>
                  </div>
                  <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                    Optimize sun-pointing vectors to maximize orbital energy harvest during daylight arc.
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-purple-500/10">
                  <div className="flex justify-between text-[#d4e4fa]">
                    <span>Gimbal Angle:</span>
                    <span className="text-[#7bd0ff] font-bold">{solarAngle}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="90"
                    value={solarAngle}
                    onChange={(e) => setSolarAngle(Number(e.target.value))}
                    className="w-full accent-[#7bd0ff] cursor-pointer"
                  />
                </div>
              </div>

              {/* Laser Mesh Network */}
              <div className="p-4 rounded-2xl bg-[#12162E]/70 border border-purple-500/20 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#ddb7ff] font-bold flex items-center gap-1.5 uppercase">
                      <Radio className="w-4 h-4 text-[#C084FC]" /> Intersatellite Laser Mesh
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-[#C084FC] font-bold">
                      {meshStatus}
                    </span>
                  </div>
                  <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                    Continuous cross-link routing ensures zero ground blackout zones over oceanic passes.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-purple-500/10">
                  <span className="text-[#F8FAFC]">Throughput: 98.4 Gbps</span>
                  <button
                    onClick={handlePingMesh}
                    className="px-3.5 py-1.5 rounded-lg bg-[#1C2248] hover:bg-[#252E60] border border-purple-500/30 text-[#7bd0ff] transition-all flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Ping Constellation</span>
                  </button>
                </div>
              </div>

              {/* Cryptographic Key Rotation */}
              <div className="p-4 rounded-2xl bg-[#12162E]/70 border border-purple-500/20 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5 uppercase">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> Post-Quantum Cipher
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                      ACTIVE (KYBER-1024)
                    </span>
                  </div>
                  <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                    Zero-trust payload encryption keys rotated automatically every 180 seconds.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-purple-500/10">
                  <span className="text-[#94A3B8]">Key Expire: in 112s</span>
                  <button
                    onClick={() => setConsoleLogs(prev => ['[KEYGEN] Ephemeral Kyber-1024 pair rotated cleanly across space-segment', ...prev])}
                    className="px-3.5 py-1.5 rounded-lg bg-[#1C2248] hover:bg-[#252E60] border border-purple-500/30 text-emerald-400 transition-all"
                  >
                    Force Key Rotation
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* Terminal Logs View */}
          <div className="rounded-2xl bg-[#050711] border border-purple-500/30 p-4 flex flex-col gap-2 shadow-inner">
            <div className="flex items-center justify-between pb-2 border-b border-purple-500/20 text-[#7bd0ff]">
              <span className="font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4" /> RECENT FLIGHT LOG STREAM
              </span>
              <span className="text-[10px] text-[#94A3B8]">Auto-scroll enabled</span>
            </div>
            <div className="flex flex-col gap-1.5 font-mono text-[11px] max-h-48 overflow-y-auto">
              {consoleLogs.map((log, idx) => (
                <div key={idx} className="text-[#d4e4fa]/90 hover:text-white flex items-start gap-2">
                  <span className="text-[#A855F7]">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#12162E]/70 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Encrypted telemetry downlink connected to Cloud Gateway</span>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#7E22CE] text-white font-headline text-xs font-bold shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:brightness-110 transition-all"
          >
            Close Console
          </button>
        </div>

      </div>
    </div>
  );
}
