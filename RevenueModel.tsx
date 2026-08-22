import React, { useState } from 'react';
import { 
  DollarSign, TrendingUp, Layers, Cpu, ShieldCheck, Coins, 
  ArrowUpRight, Calculator, Check, Sparkles, Building2, UserCheck, BarChart3, PieChart
} from 'lucide-react';
import { REVENUE_STREAMS } from '../data/mockData';

export const RevenueModel: React.FC = () => {
  // Enterprise ROI Calculator state
  const [dataTokensMillion, setDataTokensMillion] = useState<number>(250);
  const [industryTier, setIndustryTier] = useState<'healthcare' | 'fintech' | 'llm'>('healthcare');
  const [calcView, setCalcView] = useState<'enterprise' | 'consumer'>('enterprise');

  // Consumer Earnings state
  const [sharedCategoriesCount, setSharedCategoriesCount] = useState<number>(3);
  const [contributeToMedical, setContributeToMedical] = useState<boolean>(true);

  // Financial calculations
  const bruteForceCloudCost = dataTokensMillion * 32; // $32 per million tokens in pure HE
  const hybridOptimizedCost = Math.round(bruteForceCloudCost * 0.3); // 70% savings
  const cloudCostSavings = bruteForceCloudCost - hybridOptimizedCost;
  const platformSubscriptionFee = Math.round(dataTokensMillion * 4.5);
  const regulatoryFineRiskMitigated = industryTier === 'healthcare' ? 12000000 : industryTier === 'fintech' ? 18000000 : 8000000;

  // Consumer calculations
  const monthlyCashEarned = (sharedCategoriesCount * 12.50) + (contributeToMedical ? 20 : 0);
  const annualCashEarned = monthlyCashEarned * 12;

  return (
    <div id="revenue-model-section" className="space-y-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Top Header */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-50 via-amber-50 to-blue-50 border border-pink-200 text-pink-700 text-xs font-bold">
            <Coins className="w-3.5 h-3.5 text-amber-500" />
            Sustainable & Scalable Business Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
            Future Revenue Model & Financial Engine
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            How our platform creates a win-win economic flywheel: AI enterprises get legally safe, pre-sanitized training streams, while consumers monetize their data and hospitals/banks cross-train models with zero data leaks.
          </p>
        </div>
      </div>

      {/* 4 Core Revenue Streams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVENUE_STREAMS.map(stream => {
          const isBlue = stream.color === 'blue';
          const isPink = stream.color === 'pink';
          const isAmber = stream.color === 'amber';

          return (
            <div
              key={stream.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative flex flex-col justify-between ${
                isBlue 
                  ? 'border-blue-200/80 hover:border-blue-400' 
                  : isPink 
                  ? 'border-pink-200/80 hover:border-pink-400' 
                  : 'border-amber-200/80 hover:border-amber-400'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    isBlue ? 'bg-blue-50 text-blue-600' : isPink ? 'bg-pink-50 text-pink-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                    {stream.id === 'b2b-data-gateway' && <Layers className="w-6 h-6" />}
                    {stream.id === 'rewards-take-rate' && <Coins className="w-6 h-6" />}
                    {stream.id === 'seal-compute-sdk' && <Cpu className="w-6 h-6" />}
                    {stream.id === 'compliance-certification' && <ShieldCheck className="w-6 h-6" />}
                  </div>

                  <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                    isBlue ? 'bg-blue-50 text-blue-700 border border-blue-200' : isPink ? 'bg-pink-50 text-pink-700 border border-pink-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {stream.badge}
                  </span>
                </div>

                {/* Stream Title */}
                <h3 className="text-xl font-bold text-slate-900 font-display mb-1">
                  {stream.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-3">
                  {stream.tagline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {stream.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 mb-6">
                  {stream.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isBlue ? 'bg-blue-100 text-blue-600' : isPink ? 'bg-pink-100 text-pink-600' : 'bg-amber-100 text-amber-600'
                      }`}>
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metrics Pill */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/80 -mx-6 -mb-6 p-4 rounded-b-3xl">
                <div>
                  <span className="text-slate-400 text-[10px] block uppercase font-bold">Target Market</span>
                  <span className="font-semibold text-slate-800 truncate max-w-[170px] inline-block">{stream.targetMarket}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400 text-[10px] block uppercase font-bold">Year 3 ARR Est.</span>
                  <span className="font-extrabold text-emerald-600 text-sm">{stream.estimatedYear3}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Financial & ROI Calculator */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-pink-600" />
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Interactive Revenue & Cost Savings Calculator
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Calculate exact savings for AI companies or estimated earnings for consumers.
            </p>
          </div>

          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 self-start sm:self-auto">
            <button
              onClick={() => setCalcView('enterprise')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                calcView === 'enterprise' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              Enterprise AI Lab
            </button>
            <button
              onClick={() => setCalcView('consumer')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                calcView === 'consumer' ? 'bg-white text-pink-600 shadow-sm' : 'text-slate-600'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              Individual User
            </button>
          </div>
        </div>

        {calcView === 'enterprise' ? (
          /* Enterprise Calculator */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders on Left 6 */}
            <div className="lg:col-span-6 space-y-6">
              {/* Token Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-slate-700">Consented Training Dataset Volume:</label>
                  <span className="text-blue-600 font-extrabold text-sm">{dataTokensMillion} Million Tokens</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={dataTokensMillion}
                  onChange={e => setDataTokensMillion(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                  <span>20M (Startup Lab)</span>
                  <span>500M (Mid-Scale)</span>
                  <span>1B+ (Foundation Lab)</span>
                </div>
              </div>

              {/* Industry Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">AI Domain / Sector:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'healthcare', label: '🏥 Healthcare AI' },
                    { id: 'fintech', label: '💳 Banking/Fintech' },
                    { id: 'llm', label: '✨ Consumer LLM' }
                  ].map(sec => (
                    <button
                      key={sec.id}
                      onClick={() => setIndustryTier(sec.id as any)}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all border text-center ${
                        industryTier === sec.id
                          ? 'bg-blue-50 border-blue-300 text-blue-700 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {sec.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Why is Cloud Cost 70% Cheaper?
                </p>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  Traditional encrypted training runs heavy Microsoft SEAL math over every byte. Our Smart Splitter routes 90% of non-sensitive data through the fast pipeline, encrypting only high-risk metrics.
                </p>
              </div>
            </div>

            {/* Live Financial Outputs on Right 6 */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-3xl p-6 sm:p-7 space-y-5 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Enterprise ROI Analysis
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full">
                  High Margin Delivery
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-semibold">Cloud Encryption Saved</span>
                  <span className="text-2xl font-black text-emerald-400 font-display">
                    ${(cloudCostSavings / 1000).toFixed(1)}k
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">70% cloud bill reduction</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-semibold">Regulatory Risk Shield</span>
                  <span className="text-2xl font-black text-amber-400 font-display">
                    ${(regulatoryFineRiskMitigated / 1000000).toFixed(0)}M
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">GDPR/DPDP fine protection</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-300 block">Platform Annual Access Fee</span>
                  <span className="text-[11px] text-slate-300">Sanitized stream + DPDP clean certificate</span>
                </div>
                <span className="text-xl font-extrabold text-white">
                  ${(platformSubscriptionFee).toLocaleString()}/yr
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Consumer Earnings Calculator */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-slate-700">Data Categories You Choose to Share:</label>
                  <span className="text-pink-600 font-extrabold text-sm">{sharedCategoriesCount} Categories</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={sharedCategoriesCount}
                  onChange={e => setSharedCategoriesCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                  <span>1 (Basic Device)</span>
                  <span>3 (General Lifestyle)</span>
                  <span>6 (Full Profile)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <label className="flex items-center justify-between cursor-pointer">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-900 block">
                      Share Encrypted Health / Cancer Marker Data
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Locked end-to-end with SEAL. Contributes to saving lives.
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={contributeToMedical}
                    onChange={e => setContributeToMedical(e.target.checked)}
                    className="w-5 h-5 rounded text-pink-600 focus:ring-pink-500 border-slate-300"
                  />
                </label>
              </div>
            </div>

            {/* Consumer Rewards Output */}
            <div className="lg:col-span-6 bg-gradient-to-br from-pink-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-7 space-y-4 border border-pink-500/30 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">
                  Your Estimated Passive Earnings
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-pink-500/20 text-pink-200 rounded-full border border-pink-500/30">
                  Zero Privacy Compromise
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-semibold">Monthly Cash & Perks</span>
                  <span className="text-2xl font-black text-pink-400 font-display">
                    ${monthlyCashEarned.toFixed(2)}/mo
                  </span>
                  <span className="text-[10px] text-slate-300 block mt-0.5">In gift cards or direct cashback</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-slate-400 block font-semibold">Annualized Value</span>
                  <span className="text-2xl font-black text-amber-400 font-display">
                    ${annualCashEarned.toFixed(0)}/yr
                  </span>
                  <span className="text-[10px] text-slate-300 block mt-0.5">+ Free Pro AI Subscriptions</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 5-Year ARR Growth Table & Financial Scalability */}
      <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              Financial Projection Model
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              5-Year Scalability & Revenue Projections
            </h3>
          </div>
          <div className="text-xs text-slate-400 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            Target Gross Margin: <strong className="text-emerald-400">82.5%</strong>
          </div>
        </div>

        {/* Projection Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { year: 'Year 1', arr: '$4.1M', activeUsers: '250K Users', enterpriseClients: '18 Labs', badge: 'MVP & Early Labs' },
            { year: 'Year 2', arr: '$14.8M', activeUsers: '1.2M Users', enterpriseClients: '65 Labs', badge: 'Hospital Networks' },
            { year: 'Year 3', arr: '$58.1M', activeUsers: '5.5M Users', enterpriseClients: '210 Labs', badge: 'Global Scale' },
            { year: 'Year 4', arr: '$142M', activeUsers: '16.0M Users', enterpriseClients: '550 Labs', badge: 'Fintech Standard' },
            { year: 'Year 5', arr: '$280M', activeUsers: '35.0M Users', enterpriseClients: '1,200 Labs', badge: 'Global Market' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-pink-500/40 transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400">{item.year}</span>
                <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-amber-300 mt-1 font-display">
                  {item.arr}
                </div>
                <span className="text-[10px] text-pink-300 font-bold block mt-0.5">{item.badge}</span>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div>{item.activeUsers}</div>
                <div className="text-slate-300 font-medium">{item.enterpriseClients}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
