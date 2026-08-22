import React from 'react';
import { 
  Cpu, Clock, DollarSign, Users, ShieldAlert, CheckCircle2, 
  ArrowRight, HeartPulse, ShieldCheck, Globe, Scale, Sparkles, Building, Lock
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/mockData';

interface FeasibilityTechProps {
  onOpenSimulator: () => void;
}

export const FeasibilityTech: React.FC<FeasibilityTechProps> = ({ onOpenSimulator }) => {
  return (
    <div id="feasibility-tech-section" className="space-y-10 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
            <Cpu className="w-3.5 h-3.5 text-pink-500" />
            Engineering Feasibility & Long-Term Scalability (Slides 6-8)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
            Fast Rollout, Low Compute Costs & Huge Market Impact
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            By leveraging battle-tested open-source libraries like Microsoft SEAL and our proprietary Smart Data Splitter, our team can deliver a production-ready MVP in just 3 to 4 months with 70% lower cloud infrastructure costs.
          </p>
        </div>
      </div>

      {/* 4 Feasibility Pillars Grid (From Slide 6) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Resources */}
        <div className="bg-white rounded-3xl p-6 border border-blue-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-display">
            Resources: Highly Feasible
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Built using industry-standard open-source cryptographic libraries like <strong>Microsoft SEAL</strong> (Simple Encrypted Arithmetic Library), integrated with PyTorch and standard confidential cloud enclaves.
          </p>
          <div className="pt-2 border-t border-slate-100 text-xs text-blue-700 font-bold flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>Built by a lean, specialized core team</span>
          </div>
        </div>

        {/* Cost Optimization */}
        <div className="bg-white rounded-3xl p-6 border border-pink-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center">
            <DollarSign className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-display">
            Cost: 70% Cloud Savings
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Brute-force homomorphic encryption over entire datasets is notoriously slow and expensive. Our <strong>Smart Data Splitter</strong> isolates heavy encryption strictly to sensitive metrics.
          </p>
          <div className="pt-2 border-t border-slate-100 text-xs text-pink-700 font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>70% reduction in cloud compute bills</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-3xl p-6 border border-amber-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-display">
            Time: 3–4 Months to MVP
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Rapid milestone-driven roadmap. Functional prototype ready today; production SDK and hospital pilot ready within 90 to 120 days.
          </p>
          <div className="pt-2 border-t border-slate-100 text-xs text-amber-800 font-bold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Ready for hospital & fintech pilots</span>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions Bento (Slide 6) */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">
            Technical Problem-Solving
          </span>
          <h3 className="text-2xl font-bold text-white font-display">
            Key Industry Challenges Solved
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Challenge 1 */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
              <ShieldAlert className="w-4 h-4" />
              Challenge 1: "Will users actually share their data?"
            </div>
            <h4 className="text-base font-bold text-white">
              Solved via MicroRewards Incentive Flywheel
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Users aren't asked for charity. They receive real monetary compensation: free premium AI subscriptions, cashbacks, retail gift cards, and recognition badges for contributing to life-saving cancer detection.
            </p>
          </div>

          {/* Challenge 2 */}
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase">
              <Cpu className="w-4 h-4" />
              Challenge 2: "Is encrypted AI too slow for production?"
            </div>
            <h4 className="text-base font-bold text-white">
              Solved via Proprietary Hybrid Split Architecture
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our Smart Data Splitter routes low-risk data to the high-speed general pipeline (90% of tokens), applying heavy homomorphic computation only to sensitive features. This maintains lightning-fast model convergence.
            </p>
          </div>
        </div>
      </div>

      {/* Future Impact & Growth Beyond Scope (Slides 7 & 8) */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Long-Term Impact & Global Vision (Slides 7-8)
          </span>
          <h3 className="text-2xl font-bold text-slate-900 font-display">
            Unlocking Trillions in Siloed Data Across Industries
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Healthcare */}
          <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              Healthcare & Oncology Consortia
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Train cancer detection models across 500+ independent hospitals without ever transferring patient records across state or hospital firewalls.
            </p>
          </div>

          {/* Banking */}
          <div className="p-5 rounded-2xl bg-pink-50/50 border border-pink-200 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              Cross-Bank Fraud Prevention
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Banks detect organized multi-institution financial fraud rings collaboratively without exposing account numbers or customer balances.
            </p>
          </div>

          {/* Global Data Market */}
          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">
              Democratized Global Data Market
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Shifts power away from tech monopolies hoarding unconsented data, establishing an open ethical standard where consumers own and monetize their digital footprint.
            </p>
          </div>
        </div>

        {/* Team TheHonouredOne Showcase */}
        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-0.5">
              <h4 className="font-bold text-slate-900 text-sm font-display">
                Team TheHonouredOne
              </h4>
              <p className="text-xs text-slate-500">The innovators behind the architecture</p>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              The Innovator's Court 2026
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5">
                <div className="w-12 h-12 rounded-full mx-auto bg-gradient-to-tr from-blue-600 via-pink-500 to-amber-400 p-0.5">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-sm text-slate-800">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h5 className="font-bold text-xs text-slate-900">{member.name}</h5>
                <p className="text-[10px] text-slate-500 leading-tight">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
