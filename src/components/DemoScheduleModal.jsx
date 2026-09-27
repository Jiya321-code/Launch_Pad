import React, { useState } from 'react';
import { X, Rocket, Calendar, Mail, CheckCircle2 } from 'lucide-react';

export default function DemoScheduleModal({ isOpen, onClose, context = 'Schedule Orbital Demo' }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    orbitType: 'LEO Constellation',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0B0D1B] border border-purple-500/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(168,85,247,0.3)]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1C2248] text-[#cfc2d6] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center gap-4 animate-in zoom-in">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#F8FAFC]">
              Request Telemetry Dispatched
            </h3>
            <p className="font-body text-sm text-[#cfc2d6] max-w-sm">
              Our orbital flight engineers have received your telemetry parameters. A mission specialist will reach out within 15 minutes.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#7bd0ff]">
              <Rocket className="w-5 h-5" />
              <span className="font-label text-xs uppercase tracking-wider font-bold">MISSION ONBOARDING</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-[#F8FAFC] mb-2">
              {context}
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#cfc2d6] mb-6">
              Connect your spacecraft engineering team with LaunchPad orbital architects.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono text-xs">
              <div>
                <label className="block text-[#94A3B8] mb-1">OPERATOR NAME</label>
                <input
                  required
                  type="text"
                  placeholder="Commander Sarah Connor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#12162E] border border-purple-500/30 rounded-xl px-4 py-2.5 text-[#F8FAFC] focus:outline-none focus:border-[#7bd0ff]"
                />
              </div>

              <div>
                <label className="block text-[#94A3B8] mb-1">ORGANIZATION / SATELLITE OPERATOR</label>
                <input
                  required
                  type="text"
                  placeholder="Apex Orbital Aerospace"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-[#12162E] border border-purple-500/30 rounded-xl px-4 py-2.5 text-[#F8FAFC] focus:outline-none focus:border-[#7bd0ff]"
                />
              </div>

              <div>
                <label className="block text-[#94A3B8] mb-1">MISSION EMAIL</label>
                <input
                  required
                  type="email"
                  placeholder="flight-lead@apex-orbit.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#12162E] border border-purple-500/30 rounded-xl px-4 py-2.5 text-[#F8FAFC] focus:outline-none focus:border-[#7bd0ff]"
                />
              </div>

              <div>
                <label className="block text-[#94A3B8] mb-1">ORBITAL PROFILE</label>
                <select
                  value={formData.orbitType}
                  onChange={(e) => setFormData({ ...formData, orbitType: e.target.value })}
                  className="w-full bg-[#12162E] border border-purple-500/30 rounded-xl px-4 py-2.5 text-[#F8FAFC] focus:outline-none focus:border-[#7bd0ff]"
                >
                  <option>LEO Constellation (400 - 650km)</option>
                  <option>MEO Navigation & Comms (2,000 - 20,000km)</option>
                  <option>GEO High-Throughput (35,786km)</option>
                  <option>Lunar & Deep Space Navigation</option>
                  <option>CubeSat / Academic Experiment</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#A855F7] via-[#B76DFF] to-[#38BDF8] text-white font-headline text-sm font-bold shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Mission Session</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
