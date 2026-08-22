import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Shield, Lock, 
  Sparkles, CheckCircle2, Split, Cpu, Database, EyeOff, FileText, 
  Activity, Award, ArrowDown, Info, ShieldCheck, HeartPulse
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DATA_PRESETS, AI_CAUSES } from '../data/mockData';
import { DataField, DataPreset } from '../types';

interface PipelineSimulatorProps {
  onEarnReward: (amount: number, perk: string) => void;
}

export const PipelineSimulator: React.FC<PipelineSimulatorProps> = ({ onEarnReward }) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('healthcare-cancer');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(3500);
  const [selectedCauseId, setSelectedCauseId] = useState<string>('cancer-research');
  const [customFields, setCustomFields] = useState<DataField[]>([]);
  const [activeTabSubView, setActiveTabSubView] = useState<'visual-flow' | 'data-inspector' | 'code-preview'>('visual-flow');
  const [simulationRewardClaimed, setSimulationRewardClaimed] = useState<boolean>(false);

  // Initialize fields from preset
  useEffect(() => {
    const preset = DATA_PRESETS.find(p => p.id === selectedPresetId) || DATA_PRESETS[0];
    setCustomFields(JSON.parse(JSON.stringify(preset.fields)));
    setCurrentStep(1);
    setIsPlaying(false);
    setSimulationRewardClaimed(false);
  }, [selectedPresetId]);

  // Autoplay ticker
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= 5) {
            setIsPlaying(false);
            return 5;
          }
          return prev + 1;
        });
      }, playbackSpeed);
    }
    return () => clearInterval(timer);
  }, [isPlaying, playbackSpeed]);

  // Trigger celebratory confetti on Step 5 completion
  useEffect(() => {
    if (currentStep === 5 && !simulationRewardClaimed) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#EC4899', '#F59E0B']
      });
      onEarnReward(4.50, '1 Month Free Pro AI');
      setSimulationRewardClaimed(true);
    }
  }, [currentStep, simulationRewardClaimed, onEarnReward]);

  const toggleFieldIncluded = (fieldId: string) => {
    setCustomFields(prev =>
      prev.map(f => f.id === fieldId ? { ...f, isIncluded: !f.isIncluded } : f)
    );
  };

  const currentPreset = DATA_PRESETS.find(p => p.id === selectedPresetId) || DATA_PRESETS[0];
  const activeCause = AI_CAUSES.find(c => c.id === selectedCauseId) || AI_CAUSES[0];

  const includedFields = customFields.filter(f => f.isIncluded);
  const directPIIFields = includedFields.filter(f => f.sensitivity === 'direct-pii');
  const quasiFields = includedFields.filter(f => f.sensitivity === 'indirect-quasi');
  const generalFields = includedFields.filter(f => f.sensitivity === 'general');
  const sensitiveMetricFields = includedFields.filter(f => f.sensitivity === 'sensitive-metric');

  return (
    <div id="pipeline-simulator-section" className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              Live Interactive Architecture Prototype
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              The 5-Step Zero-Exposure Training Flow
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              Watch step-by-step how raw personal data is consented, sanitized, split into dual channels, trained with Microsoft SEAL homomorphic encryption, and returned as pure mathematical model weights.
            </p>
          </div>

          {/* Quick Preset Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold text-slate-500 px-2 uppercase tracking-wider">
              Select Dataset:
            </span>
            <div className="grid grid-cols-3 gap-1.5 w-full sm:w-auto">
              {DATA_PRESETS.map(preset => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedPresetId(preset.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-center ${
                    selectedPresetId === preset.id
                      ? 'bg-white text-blue-600 shadow-sm border border-blue-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {preset.id === 'healthcare-cancer' && '🏥 Cancer Health'}
                  {preset.id === 'fintech-fraud' && '💳 Bank Fraud'}
                  {preset.id === 'smart-assistant' && '✨ AI Assistant'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Playback Control Bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          {/* Step Badges / Scrubber */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
            {[
              { num: 1, label: '1. Consent Engine', icon: Shield },
              { num: 2, label: '2. Sanitizer & Quasi', icon: EyeOff },
              { num: 3, label: '3. Smart Splitter', icon: Split },
              { num: 4, label: '4. Encrypted SEAL AI', icon: Lock },
              { num: 5, label: '5. Safe AI Master Model', icon: Sparkles }
            ].map(step => {
              const Icon = step.icon;
              const isCurrent = currentStep === step.num;
              const isPassed = currentStep > step.num;
              return (
                <button
                  key={step.num}
                  onClick={() => {
                    setCurrentStep(step.num);
                    setIsPlaying(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isCurrent
                      ? 'bg-gradient-to-r from-blue-600 to-pink-600 text-white shadow-md shadow-pink-500/20 scale-105'
                      : isPassed
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{step.label}</span>
                  {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setCurrentStep(1);
                setIsPlaying(true);
                setSimulationRewardClaimed(false);
              }}
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-all"
              title="Reset Simulation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>

            <button
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 transition-all"
              title="Previous Step"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-pink-600 to-amber-500 hover:opacity-95 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-pink-500/20 transition-all"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{currentStep === 5 ? 'Replay' : 'Auto Play'}</span>
                </>
              )}
            </button>

            <button
              onClick={() => setCurrentStep(prev => Math.min(5, prev + 1))}
              disabled={currentStep === 5}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 transition-all"
              title="Next Step"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 4 Cols: Live Field Config & Granular Controls */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">
                1. Data Source & Fields
              </h3>
              <p className="text-xs text-slate-500">
                Toggle which fields you want to share
              </p>
            </div>
            <span className="text-[11px] font-bold px-2 py-0.5 bg-pink-50 text-pink-700 rounded-full border border-pink-200">
              {includedFields.length}/{customFields.length} Enabled
            </span>
          </div>

          {/* AI Cause Selector */}
          <div className="bg-gradient-to-br from-blue-50/50 via-pink-50/30 to-amber-50/50 p-3.5 rounded-2xl border border-pink-100 space-y-2">
            <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>Contributing For Cause:</span>
              <span className="text-[10px] text-emerald-600 font-extrabold uppercase">
                {activeCause.privacyTier}
              </span>
            </label>
            <select
              value={selectedCauseId}
              onChange={e => setSelectedCauseId(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20"
            >
              {AI_CAUSES.map(c => (
                <option key={c.id} value={c.id}>
                  {c.category === 'Healthcare' ? '🏥 ' : c.category === 'Fintech' ? '💳 ' : '✨ '}
                  {c.title} ({c.rewardType})
                </option>
              ))}
            </select>
            <div className="flex items-center gap-1.5 text-[11px] text-pink-700 font-medium pt-1">
              <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Reward: <strong>{activeCause.rewardValue}</strong></span>
            </div>
          </div>

          {/* Interactive Field Toggles */}
          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {customFields.map(field => {
              const isDirect = field.sensitivity === 'direct-pii';
              const isQuasi = field.sensitivity === 'indirect-quasi';
              const isMetric = field.sensitivity === 'sensitive-metric';
              return (
                <div
                  key={field.id}
                  onClick={() => toggleFieldIncluded(field.id)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                    field.isIncluded
                      ? 'bg-slate-50/90 border-slate-200 hover:border-pink-300'
                      : 'bg-slate-100/40 border-slate-200/50 opacity-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900">
                          {field.name}
                        </span>
                        {isDirect && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 bg-red-100 text-red-700 rounded-md">
                            Direct PII
                          </span>
                        )}
                        {isQuasi && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 bg-amber-100 text-amber-700 rounded-md">
                            Quasi
                          </span>
                        )}
                        {isMetric && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 bg-purple-100 text-purple-700 rounded-md">
                            Encrypted
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono truncate max-w-[200px]">
                        {field.rawValue}
                      </div>
                    </div>

                    <input
                      type="checkbox"
                      checked={field.isIncluded}
                      onChange={() => {}}
                      className="mt-1 w-4 h-4 rounded text-pink-600 focus:ring-pink-500 border-slate-300"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* MicroRewards estimated tally */}
          <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold">
                $
              </div>
              <div>
                <p className="font-bold text-emerald-900">Estimated Earnings</p>
                <p className="text-[11px] text-emerald-700">Calculated per training cycle</p>
              </div>
            </div>
            <span className="text-sm font-extrabold text-emerald-700">
              +${(includedFields.length * 0.75).toFixed(2)}
            </span>
          </div>
        </div>

        {/* Right 8 Cols: Dynamic Step Visualizer */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Visual Board */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm min-h-[460px] flex flex-col justify-between relative overflow-hidden">
            
            {/* Step 1: Consent Engine */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                        Step 1 of 5
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        Consent Engine: User is King of Their Data
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    Opt-In Active
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Unlike traditional platforms that force all-or-nothing terms, our Consent Engine allows users to choose <strong>which specific cause</strong> to support (e.g. {activeCause.title}) and select granular fields. In return, the user receives verified rewards.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-700 uppercase mb-2">
                      Selected Purpose & Cause
                    </h4>
                    <p className="text-sm font-bold text-slate-900">{activeCause.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{activeCause.organization}</p>
                    <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                      <span className="text-slate-500">Security Tier:</span>
                      <span className="font-bold text-blue-600">{activeCause.privacyTier}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-amber-50 border border-pink-200">
                    <h4 className="text-xs font-bold text-pink-800 uppercase mb-2">
                      Your MicroReward Allocation
                    </h4>
                    <p className="text-sm font-bold text-slate-900">{activeCause.rewardValue}</p>
                    <p className="text-xs text-slate-600 mt-1">Automatic delivery upon gradient validation.</p>
                    <div className="mt-3 pt-3 border-t border-pink-200/60 flex items-center justify-between text-xs">
                      <span className="text-slate-600">Total Participants:</span>
                      <span className="font-bold text-slate-800">{activeCause.participantsCount.toLocaleString()} users</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 flex items-center gap-3">
                  <Info className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>
                    <strong>User Guarantee:</strong> Consent can be revoked anytime with 1 click. No raw unconsented records are ever queried by AI models.
                  </span>
                </div>
              </div>
            )}

            {/* Step 2: Sanitization Layer */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                      <EyeOff className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">
                        Step 2 of 5
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        Sanitization Layer: Tokenize PII & Generalize Quasi-Identifiers
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs font-bold rounded-full">
                    Zero Direct PII
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Raw data enters the sanitization gateway. <strong>Direct Identifiers</strong> (Name, Email, Phone) are immediately purged and replaced with non-reversible cryptographic hashes. <strong>Indirect Identifiers</strong> (Age, Zip code) are generalized into safe statistical brackets.
                </p>

                <div className="space-y-3">
                  {/* Direct PII Transformation Table */}
                  <div className="border border-red-200 bg-red-50/40 rounded-2xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-red-900">
                      <span>a.) Direct PII → Cryptographic Hash Token (Removed Forever)</span>
                      <span className="text-[10px] bg-red-100 px-2 py-0.5 rounded text-red-700">
                        {directPIIFields.length} Fields Tokenized
                      </span>
                    </div>
                    {directPIIFields.map(f => (
                      <div key={f.id} className="bg-white p-2.5 rounded-xl border border-red-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500 line-through">{f.rawValue}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <span className="font-mono font-bold text-pink-600 bg-pink-50 px-2 py-0.5 rounded">
                          {f.tokenizedValue}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quasi Identifiers Transformation Table */}
                  <div className="border border-amber-200 bg-amber-50/40 rounded-2xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                      <span>b.) Indirect / Blueprint Data → Quasi-Identifier Generalization</span>
                      <span className="text-[10px] bg-amber-100 px-2 py-0.5 rounded text-amber-800">
                        {quasiFields.length} Fields Coarsened
                      </span>
                    </div>
                    {quasiFields.map(f => (
                      <div key={f.id} className="bg-white p-2.5 rounded-xl border border-amber-100 flex items-center justify-between text-xs">
                        <span className="text-slate-600">{f.rawValue}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <span className="font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                          {f.quasiGeneralizedValue}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Smart Data Splitter */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                      <Split className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                        Step 3 of 5
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        Smart Data Splitter: 70% Cloud Cost Optimization
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                    Dual Pipeline Routing
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Homomorphic encryption is powerful but computationally expensive. Our proprietary <strong>Smart Data Splitter</strong> routes non-sensitive general features into the fast path, and selectively encrypts only high-risk metrics—<strong>slashing cloud training bills by 70%</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Path A: General Data */}
                  <div className="p-4 rounded-2xl bg-blue-50/80 border-2 border-blue-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-blue-900 uppercase">
                        Path A: General Data Flow
                      </span>
                      <span className="text-[10px] bg-blue-200 text-blue-800 font-bold px-2 py-0.5 rounded-full">
                        Fast Pipeline (90% Speed)
                      </span>
                    </div>
                    <p className="text-xs text-blue-800">
                      Broad behavioral patterns, coarse quasi-brackets, diet taxonomy, and general categories.
                    </p>
                    <div className="bg-white p-3 rounded-xl border border-blue-100 space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-700">Routed to Main AI:</div>
                      {generalFields.map(f => (
                        <div key={f.id} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          <span>{f.name}: {f.quasiGeneralizedValue || f.rawValue}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Path B: Sensitive Metric Data */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-pink-900 uppercase">
                        Path B: Sensitive Data Flow
                      </span>
                      <span className="text-[10px] bg-pink-200 text-pink-800 font-bold px-2 py-0.5 rounded-full">
                        Homomorphic Channel
                      </span>
                    </div>
                    <p className="text-xs text-pink-800">
                      Cell density scans, high-frequency transaction tensors, confidential medical biomarkers.
                    </p>
                    <div className="bg-white p-3 rounded-xl border border-pink-100 space-y-1.5">
                      <div className="text-[11px] font-bold text-slate-700">Sent to SEAL Encryption:</div>
                      {sensitiveMetricFields.map(f => (
                        <div key={f.id} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                          <span>{f.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Encrypted Data Training (Microsoft SEAL) */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                        Step 4 of 5
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        Encrypted Training: Microsoft SEAL Homomorphic Engine
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full animate-pulse">
                    Computing on Ciphertext
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Sensitive data is converted into high-dimensional polynomial ciphertexts using <strong>Microsoft SEAL</strong>. The AI model executes matrix multiplications (<code className="font-mono text-purple-700 bg-purple-50 px-1 py-0.5 rounded font-bold">Enc(X) ⊗ Enc(W)</code>) directly on encrypted data inside an isolated confidential enclave.
                </p>

                {/* Animated Ciphertext Tensor Visualizer */}
                <div className="bg-slate-950 text-slate-200 rounded-2xl p-4 font-mono text-xs space-y-2.5 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800">
                    <span>SEAL Homomorphic Enclave Sandbox</span>
                    <span className="text-emerald-400 font-bold">● Active Zero-Trust Memory</span>
                  </div>
                  <div className="text-purple-400">
                    [HOMOMORPHIC_TENSOR_INPUT]: {sensitiveMetricFields[0]?.encryptedSampleValue || 'SEAL_CIPHER_ENC_0x8929BA...'}
                  </div>
                  <div className="text-blue-400">
                    [FORWARD_PASS]: Computing loss gradient ∇L over ciphertext polynomial without decryption...
                  </div>
                  <div className="text-pink-400">
                    [GRADIENT_CALC]: ΔW_layer3 = Enc_Mul(Cipher_X, Weights_t) + Noise_Budget(0.001)
                  </div>
                  <div className="text-amber-400">
                    [OUTPUT]: Generated Model Weight Updates [ΔW: 1024x512 matrix] (Raw user records NEVER decrypted!)
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-900 flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Mathematical Privacy Proof:</strong> The cloud server only holds ciphertext. Even a rogue sysadmin with root server access cannot read raw medical or banking numbers.
                  </span>
                </div>
              </div>
            )}

            {/* Step 5: Trustworthy, Legally Compliant AI */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                        Step 5 of 5
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        Trustworthy AI Model & User MicroReward Distributed!
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                    Completed & Certified
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Both pathways seamlessly combine! The safe general patterns and the encrypted model gradient updates are integrated into the master AI model. <strong>No company ever saw or stored personal user records.</strong>
                </p>

                {/* Final Outcome Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center">
                    <div className="text-2xl font-black text-blue-600 font-display">100%</div>
                    <div className="text-xs font-bold text-blue-900 mt-1">DPDP & GDPR Compliant</div>
                    <p className="text-[10px] text-blue-700 mt-1">Zero raw data storage risk</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-pink-50 border border-pink-200 text-center">
                    <div className="text-2xl font-black text-pink-600 font-display">-70%</div>
                    <div className="text-xs font-bold text-pink-900 mt-1">Cloud Compute Cost</div>
                    <p className="text-[10px] text-pink-700 mt-1">Via Smart Data Splitter</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center">
                    <div className="text-2xl font-black text-amber-600 font-display">Paid!</div>
                    <div className="text-xs font-bold text-amber-900 mt-1">MicroReward Sent</div>
                    <p className="text-[10px] text-amber-700 mt-1">{activeCause.rewardValue}</p>
                  </div>
                </div>

                {/* Privacy Certificate Proof Badge */}
                <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 text-white rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold tracking-wide">Cryptographic Clean-Room Certificate</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-mono">
                      Tx Hash: 0x9f4a...88c2 • Certified by TheHonouredOne Protocol
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      confetti({ particleCount: 50, spread: 60 });
                      alert('Cryptographic Privacy Certificate downloaded! Verification Hash: 0x9F4A88C2E7B31');
                    }}
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white whitespace-nowrap"
                  >
                    Download Audit Proof
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Step Indicator Bar */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Pipeline Status: <strong className="text-slate-800">{currentStep === 5 ? 'Finished (Model Updated)' : `Executing Step ${currentStep}`}</strong></span>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-400">Step {currentStep} of 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
