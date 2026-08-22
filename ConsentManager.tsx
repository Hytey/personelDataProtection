import React, { useState } from 'react';
import { 
  Shield, CheckCircle2, XCircle, Gift, Award, Coins, Heart, 
  RotateCcw, Download, ExternalLink, Sparkles, AlertCircle, Copy, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { AI_CAUSES } from '../data/mockData';
import { AICause, UserWallet } from '../types';

interface ConsentManagerProps {
  wallet: UserWallet;
  onRedeemCoupon: (couponId: string) => void;
  onCashout: () => void;
}

export const ConsentManager: React.FC<ConsentManagerProps> = ({
  wallet,
  onRedeemCoupon,
  onCashout
}) => {
  const [causes, setCauses] = useState<AICause[]>(AI_CAUSES);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const toggleCauseConsent = (causeId: string) => {
    setCauses(prev =>
      prev.map(c => {
        if (c.id === causeId) {
          const nextState = !c.isConsented;
          if (nextState) {
            confetti({
              particleCount: 50,
              spread: 60,
              colors: ['#3B82F6', '#EC4899', '#F59E0B']
            });
          }
          return { ...c, isConsented: nextState };
        }
        return c;
      })
    );
  };

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const activeConsentedCount = causes.filter(c => c.isConsented).length;

  return (
    <div id="consent-manager-section" className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Shield className="w-3.5 h-3.5 text-pink-500" />
              User Control Center
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              You Are the King of Your Own Data
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              Grant or revoke permission at any moment. Your raw data is never exposed. When AI models learn from your consented, encrypted features, you receive instant micro-rewards and free AI perks.
            </p>
          </div>

          {/* Real-time Status Card */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 via-pink-50 to-amber-50 p-4 rounded-2xl border border-pink-200/80">
            <div className="text-center px-2">
              <span className="text-2xl font-black text-slate-900 font-display">
                {activeConsentedCount}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block">
                Active Consents
              </span>
            </div>
            <div className="w-[1px] h-10 bg-slate-200"></div>
            <div className="text-center px-2">
              <span className="text-2xl font-black text-emerald-600 font-display">
                ${wallet.earningsBalance.toFixed(2)}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 block">
                Wallet Balance
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Causes, Right Wallet */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 Cols: AI Projects Consent Toggles */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Active AI Training Causes & Bounties
            </h3>
            <span className="text-xs text-slate-500">
              Click toggle to instantly grant or revoke
            </span>
          </div>

          <div className="space-y-4">
            {causes.map(cause => (
              <div
                key={cause.id}
                className={`bg-white rounded-3xl p-5 sm:p-6 border transition-all duration-300 shadow-sm ${
                  cause.isConsented
                    ? 'border-blue-300 ring-2 ring-blue-500/10'
                    : 'border-slate-200/80 opacity-80'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {cause.category}
                      </span>
                      <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                        {cause.privacyTier}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 font-display">
                      {cause.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      Organization: {cause.organization}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cause.description}
                    </p>

                    {/* Reward Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-pink-50 to-amber-50 border border-pink-200 text-xs font-bold text-pink-700">
                      <Gift className="w-3.5 h-3.5 text-amber-500" />
                      <span>Reward for your consent: <strong>{cause.rewardValue}</strong></span>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 pt-2 sm:pt-0">
                    <button
                      onClick={() => toggleCauseConsent(cause.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                        cause.isConsented
                          ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {cause.isConsented ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Consented (Active)</span>
                        </>
                      ) : (
                        <>
                          <RotateCcw className="w-4 h-4" />
                          <span>Grant Consent</span>
                        </>
                      )}
                    </button>

                    {cause.isConsented && (
                      <button
                        onClick={() => toggleCauseConsent(cause.id)}
                        className="text-[11px] text-red-500 hover:text-red-700 font-semibold underline"
                      >
                        Revoke Access
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 4 Cols: Rewards Wallet & Perks Hub */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 shadow-xl border border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-pink-400" />
                <h3 className="font-bold text-sm text-white font-display">
                  MicroRewards Wallet
                </h3>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">
                Instant Payouts
              </span>
            </div>

            {/* Wallet Balance Display */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400">Available Earnings</span>
              <div className="text-3xl font-black text-white font-display">
                ${wallet.earningsBalance.toFixed(2)}
              </div>
              <p className="text-[11px] text-emerald-400 font-medium">
                +$4.50 earned this week from Cancer & Fraud models
              </p>
            </div>

            <button
              onClick={onCashout}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-pink-500 to-amber-500 hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-pink-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Coins className="w-4 h-4" />
              <span>Cash Out to Bank / Stripe / Crypto</span>
            </button>

            {/* Unlocked Brand Perks List */}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <span className="text-xs font-bold text-slate-300 block">
                Unlocked Partner Perks & Coupons:
              </span>

              {wallet.couponsUnlocked.map(coupon => (
                <div key={coupon.id} className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold text-white">{coupon.brand}</p>
                      <p className="text-[11px] text-pink-300">{coupon.offer}</p>
                    </div>
                    <span className="text-[9px] text-slate-400">{coupon.expiry}</span>
                  </div>

                  <div className="flex items-center justify-between bg-black/40 px-2.5 py-1.5 rounded-lg text-[11px] font-mono">
                    <span className="text-amber-300 font-bold">{coupon.code}</span>
                    <button
                      onClick={() => handleCopyCode(coupon.id, coupon.code)}
                      className="text-slate-400 hover:text-white flex items-center gap-1 text-[10px]"
                    >
                      {copiedCodeId === coupon.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Audit Trail Export */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-3">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Download className="w-4 h-4 text-blue-600" />
              Your Privacy Fingerprint Dossier
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Download your cryptographically verifiable proof of consent and sanitization history.
            </p>
            <button
              onClick={() => {
                confetti({ particleCount: 30, spread: 50 });
                alert('Exporting verified DPDP/GDPR Data Consent Dossier (Signed SHA-256 JSON)');
              }}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>Export Consent History (JSON)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
