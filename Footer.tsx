import React from 'react';
import { Shield, Sparkles, Heart, Award, Github, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenTeam: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenTeam }) => {
  return (
    <footer className="mt-16 border-t border-slate-100 bg-white pt-10 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 via-pink-500 to-yellow-400 p-[2px] flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <span className="font-black text-slate-900 text-lg tracking-tight">
                INNOVATOR<span className="text-blue-600">COURT</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Zero-Exposure Privacy-Preserving AI Training Protocol. Engineered for The Innovator's Court.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-600">
            <button onClick={() => setActiveTab('simulator')} className="hover:text-blue-600 transition-colors">
              Simulator
            </button>
            <button onClick={() => setActiveTab('consent')} className="hover:text-blue-600 transition-colors">
              Consent & Rewards
            </button>
            <button onClick={() => setActiveTab('revenue')} className="hover:text-pink-600 transition-colors">
              Future Revenue
            </button>
            <button onClick={() => setActiveTab('tech')} className="hover:text-blue-600 transition-colors">
              SEAL Tech
            </button>
            <button onClick={() => setActiveTab('developer')} className="hover:text-slate-900 transition-colors">
              Enterprise API
            </button>
            <button onClick={onOpenTeam} className="text-pink-600 font-bold hover:underline">
              Team TheHonouredOne
            </button>
          </div>
        </div>

        {/* Bottom Bar & Team attribution with Vibrant Palette uppercase tracking style */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-yellow-500" />
            <span>
              © 2024 Team TheHonouredOne • Dhruv Bisht • Mudit Kaushik • Hiren Yadav • Daksh Yadav
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>DPDP & GDPR COMPLIANT</span>
            <span>•</span>
            <span>MICROSOFT SEAL</span>
            <span>•</span>
            <span>ZERO DATA RETENTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
