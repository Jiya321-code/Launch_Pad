import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-[#010f1f] text-[#d4e4fa] py-16 border-t border-purple-500/15">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7E22CE] to-[#38BDF8] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0B0D1B] rounded-[6px] flex items-center justify-center">
                  <svg className="w-4 h-4 transform -rotate-45" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C14.5 5.5 17 11 17 17C17 20 15.5 22 12 22C8.5 22 7 20 7 17C7 11 9.5 5.5 12 2Z" fill="#C084FC" />
                  </svg>
                </div>
              </div>
              <span className="font-headline text-xl font-bold tracking-tight text-[#F8FAFC]">
                Launch<span className="text-[#C084FC]">Pad</span>
              </span>
            </div>

            <p className="font-body text-sm text-[#cfc2d6] max-w-sm leading-relaxed">
              Next-generation orbital telemetry, mission control architectures, and deep-space computational infrastructure.
            </p>

            <div className="flex items-center gap-2.5 py-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7bd0ff] shadow-[0_0_10px_#7bd0ff] animate-pulse"></span>
              <span className="font-label text-xs uppercase text-[#7bd0ff] tracking-widest font-semibold">
                All Orbital Systems Operational
              </span>
            </div>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col gap-3">
            <span className="font-label text-xs font-bold text-[#F8FAFC] uppercase tracking-wider">
              Platform
            </span>
            <a href="#telemetry-console" className="font-body text-sm text-[#cfc2d6] hover:text-[#7bd0ff] transition-colors">
              Mission Control
            </a>
            <a href="#capabilities" className="font-body text-sm text-[#cfc2d6] hover:text-[#7bd0ff] transition-colors">
              Orbital Mesh
            </a>
            <a href="#telemetry-console" className="font-body text-sm text-[#cfc2d6] hover:text-[#7bd0ff] transition-colors">
              Telemetry Stream
            </a>
            <a href="#docs" className="font-body text-sm text-[#cfc2d6] hover:text-[#7bd0ff] transition-colors">
              Flight API
            </a>
          </div>

          {/* Ecosystem Links */}
          <div className="flex flex-col gap-3">
            <span className="font-label text-xs font-bold text-[#F8FAFC] uppercase tracking-wider">
              Ecosystem
            </span>
            <a href="#docs" className="font-body text-sm text-[#cfc2d6] hover:text-[#7bd0ff] transition-colors">
              Documentation
            </a>
            <a href="#pricing" className="font-body text-sm text-[#cfc2d6] hover:text-[#7bd0ff] transition-colors">
              Tiered Access
            </a>
            <a href="#" className="font-body text-sm text-[#cfc2d6] hover:text-[#7bd0ff] transition-colors">
              Ground Stations
            </a>
            <a href="#" className="font-body text-sm text-[#cfc2d6] hover:text-[#7bd0ff] transition-colors">
              Constellation Sync
            </a>
          </div>

          {/* Orbital Dispatch Newsletter */}
          <div className="flex flex-col gap-3">
            <span className="font-label text-xs font-bold text-[#F8FAFC] uppercase tracking-wider">
              Orbital Dispatch
            </span>
            <p className="font-body text-xs sm:text-sm text-[#cfc2d6]">
              Receive mission-critical system briefs and telemetry changelogs.
            </p>

            {subscribed ? (
              <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed to Orbital Dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="flight-op@launchpad.io"
                    className="bg-[#0d1c2d] border border-purple-500/20 text-[#F8FAFC] placeholder:text-[#94A3B8] px-3 py-2 rounded-lg text-xs font-mono focus:outline-none focus:border-[#ddb7ff] w-full"
                  />
                  <button
                    type="submit"
                    className="bg-[#A855F7] hover:bg-[#B76DFF] text-white px-3.5 py-2 rounded-lg font-label text-xs font-bold uppercase transition-colors shrink-0 flex items-center gap-1 shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Legal / Copyright */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-purple-500/10 text-xs text-[#94A3B8]">
          <span className="font-body text-center md:text-left">
            © 2026 LaunchPad Technologies Inc. All telemetry vectors reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Flight</a>
            <a href="#" className="hover:text-white transition-colors">ITAR Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
