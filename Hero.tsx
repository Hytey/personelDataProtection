import React from 'react';
import { Shield, Sparkles, Lock, ArrowRight, CheckCircle2, Zap, HeartPulse, ShieldAlert, Award, DollarSign, Cpu } from 'lucide-react';

interface HeroProps {
  onStartSimulation: () => void;
  onExploreRevenue: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartSimulation, onExploreRevenue }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-10 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Radiant ambient glow spheres from Vibrant Palette theme */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-yellow-400 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute top-40 left-10 w-80 h-80 bg-pink-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-10 right-1/3 w-80 h-80 bg-blue-500 opacity-15 blur-3xl rounded-full pointer-events-none"></div>

      {/* Main 2-Column Hero Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
            <span>The Innovator's Court Solution</span>
            <span className="text-slate-300">•</span>
            <span className="text-blue-600 font-bold">Team TheHonouredOne</span>
          </div>

          {/* Main Display Headline matching Vibrant Palette */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            Train Super-Smart AI.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
              Never Expose User Data.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-500 max-w-xl leading-relaxed">
            The first zero-exposure AI training protocol. Users stay the king of their data, earn micro-rewards and perks, while AI trains homomorphically on encrypted tensors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="btn-hero-launch-sim"
              onClick={onStartSimulation}
              className="bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg flex items-center gap-2 transition-all group"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Launch Live Simulator</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="btn-hero-revenue-model"
              onClick={onExploreRevenue}
              className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-6 py-3.5 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2 transition-all"
            >
              <DollarSign className="w-4 h-4 text-pink-500" />
              <span>Explore Revenue Model</span>
            </button>
          </div>

          {/* Proof Badge */}
          <div className="pt-2 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <p className="text-xs text-slate-400 font-medium">
              DPDP & GDPR Compliant • Powered by Microsoft SEAL Encryption • 70% Lower Compute Costs
            </p>
          </div>
        </div>

        {/* Right Column: Vibrant Interactive Preview Window */}
        <div className="lg:col-span-5 relative">
          {/* Accent blurs */}
          <div className="absolute -top-4 -right-4 w-52 h-52 bg-yellow-400 opacity-25 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-52 h-52 bg-pink-500 opacity-25 blur-3xl rounded-full"></div>

          {/* Mac-style Card */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 relative z-10 shadow-xl space-y-5">
            {/* Mac window dots */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-[11px] font-mono font-semibold text-slate-400">
                zero_exposure_v1.0.seal
              </span>
            </div>

            {/* Simulated Data Sanitization & Splitter Pill Grid */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-blue-600" />
                  Homomorphic Tensor Matrix
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">
                  100% Zero Raw Data
                </span>
              </div>
              
              <div className="h-2 w-3/4 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 w-4/5 animate-pulse"></div>
              </div>

              {/* 3 Vibrant Blocks from Design HTML */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-200 flex flex-col justify-between aspect-square">
                  <Shield className="w-4 h-4 text-white" />
                  <div>
                    <div className="text-[10px] uppercase font-bold opacity-80">Phase 1</div>
                    <div className="text-xs font-black">Sanitize</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-pink-500 text-white shadow-lg shadow-pink-200 flex flex-col justify-between aspect-square">
                  <Zap className="w-4 h-4 text-white" />
                  <div>
                    <div className="text-[10px] uppercase font-bold opacity-80">Phase 2</div>
                    <div className="text-xs font-black">Split 90/10</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-yellow-400 text-slate-900 shadow-lg shadow-yellow-100 flex flex-col justify-between aspect-square">
                  <Cpu className="w-4 h-4 text-slate-900" />
                  <div>
                    <div className="text-[10px] uppercase font-bold opacity-80">Phase 3</div>
                    <div className="text-xs font-black">SEAL Train</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex items-center justify-between text-xs px-1 text-slate-600">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span>70% Cloud Savings</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                <span>Instant Cash Rewards</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Pillar Feature Cards matching Vibrant Palette structure */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Solution Pillar */}
        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-left">
          <h3 className="text-pink-500 font-bold uppercase text-xs tracking-widest mb-3">
            The Solution
          </h3>
          <p className="text-lg font-bold text-slate-900 mb-2">User in Total Control</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Granular toggle controls for every data field. Users receive free AI Pro subscriptions, cash payouts, and gift vouchers for training consent.
          </p>
        </div>

        {/* Tech Pillar */}
        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-left">
          <h3 className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-3">
            The Tech
          </h3>
          <p className="text-lg font-bold text-slate-900 mb-2">Smart Splitter & SEAL</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Direct PII is wiped, low-risk data travels through fast 90% pipelines, while sensitive vectors train homomorphically using Microsoft SEAL.
          </p>
        </div>

        {/* Revenue Pillar with Yellow Ring Highlight */}
        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm ring-2 ring-yellow-400 hover:shadow-md transition-shadow text-left">
          <h3 className="text-yellow-600 font-bold uppercase text-xs tracking-widest mb-3">
            Future Revenue
          </h3>
          <p className="text-lg font-bold text-slate-900 mb-2">How We Monetize & Grow</p>
          <ul className="text-sm text-slate-500 space-y-2 mt-2">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full shrink-0"></div>
              <span>B2B Ethical AI Training API Subscriptions (55%)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0"></div>
              <span>MicroRewards Marketplace Take-Rate (20%)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0"></div>
              <span>SEAL Encrypted Enclave SDK Licensing (18%)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
