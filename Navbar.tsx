import React from 'react';
import { Shield, Sparkles, Gift, Layers, Cpu, Users, ChevronRight, CheckCircle2 } from 'lucide-react';
import { UserWallet } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  wallet: UserWallet;
  onOpenWallet: () => void;
  onOpenTeam: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  wallet,
  onOpenWallet,
  onOpenTeam
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand & Logo with Vibrant Palette gradient and crisp typography */}
        <div 
          onClick={() => setActiveTab('simulator')}
          className="cursor-pointer flex items-center gap-3 group"
          id="nav-brand-logo"
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 via-pink-500 to-yellow-400 rounded-xl p-[2px] shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-slate-900 leading-tight">
              INNOVATOR<span className="text-blue-600">COURT</span>
            </span>
            <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
              By Team TheHonouredOne
            </span>
          </div>
        </div>

        {/* Navigation Tabs with Vibrant Palette active border indicator */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button
            id="nav-tab-simulator"
            onClick={() => setActiveTab('simulator')}
            className={`pb-1 transition-all flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'text-blue-600 font-bold border-b-2 border-blue-600'
                : 'hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-pink-500" />
            Simulator
          </button>

          <button
            id="nav-tab-consent"
            onClick={() => setActiveTab('consent')}
            className={`pb-1 transition-all flex items-center gap-1.5 ${
              activeTab === 'consent'
                ? 'text-blue-600 font-bold border-b-2 border-blue-600'
                : 'hover:text-slate-900'
            }`}
          >
            <Shield className="w-4 h-4 text-blue-500" />
            Consent & Rewards
          </button>

          <button
            id="nav-tab-revenue"
            onClick={() => setActiveTab('revenue')}
            className={`pb-1 transition-all flex items-center gap-1.5 ${
              activeTab === 'revenue'
                ? 'text-pink-600 font-bold border-b-2 border-pink-500'
                : 'hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4 text-yellow-500" />
            Future Revenue
          </button>

          <button
            id="nav-tab-tech"
            onClick={() => setActiveTab('tech')}
            className={`pb-1 transition-all flex items-center gap-1.5 ${
              activeTab === 'tech'
                ? 'text-blue-600 font-bold border-b-2 border-blue-600'
                : 'hover:text-slate-900'
            }`}
          >
            <Cpu className="w-4 h-4 text-blue-600" />
            SEAL Feasibility
          </button>

          <button
            id="nav-tab-developer"
            onClick={() => setActiveTab('developer')}
            className={`pb-1 transition-all flex items-center gap-1.5 ${
              activeTab === 'developer'
                ? 'text-slate-900 font-bold border-b-2 border-slate-900'
                : 'hover:text-slate-900'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Enterprise API
          </button>
        </div>

        {/* User Rewards Pill & Action Button */}
        <div className="flex items-center gap-3">
          <button
            id="btn-rewards-wallet"
            onClick={onOpenWallet}
            className="flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full px-4 py-2 transition-all text-xs font-semibold text-slate-800 shadow-sm group"
          >
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
            <Gift className="w-3.5 h-3.5 text-pink-500 group-hover:rotate-12 transition-transform" />
            <span className="font-bold">${wallet.earningsBalance.toFixed(2)}</span>
            <span className="hidden sm:inline-block px-2 py-0.5 bg-pink-500 text-white text-[10px] rounded-full font-bold">
              {wallet.couponsUnlocked.length} Perks
            </span>
          </button>

          <button
            id="btn-team-showcase"
            onClick={onOpenTeam}
            className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Users className="w-3.5 h-3.5 text-yellow-400" />
            <span>Team TheHonouredOne</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation */}
      <div className="flex lg:hidden overflow-x-auto gap-2 px-4 py-2 bg-slate-50 border-t border-slate-100 no-scrollbar">
        <button
          onClick={() => setActiveTab('simulator')}
          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'simulator' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          Simulator
        </button>
        <button
          onClick={() => setActiveTab('consent')}
          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'consent' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          Consent & Rewards
        </button>
        <button
          onClick={() => setActiveTab('revenue')}
          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'revenue' ? 'bg-pink-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          Revenue Model
        </button>
        <button
          onClick={() => setActiveTab('tech')}
          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'tech' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          SEAL Tech
        </button>
        <button
          onClick={() => setActiveTab('developer')}
          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'developer' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200'
          }`}
        >
          API Console
        </button>
      </div>
    </header>
  );
};
