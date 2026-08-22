import React from 'react';
import { X, Users, Award, Shield, Sparkles, CheckCircle2, Heart } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/mockData';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 via-pink-50 to-amber-50 border border-pink-200 text-pink-700 text-xs font-bold">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            The Innovator's Court 2026
          </div>
          <h3 className="text-2xl font-extrabold text-slate-950 font-display">
            Team TheHonouredOne
          </h3>
          <p className="text-xs text-slate-500">
            Pioneering the privacy-first, zero-exposure AI training standard.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-pink-500 to-amber-400 p-[2px]">
                  <div className="w-full h-full bg-white rounded-[8px] flex items-center justify-center font-bold text-xs text-slate-800">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{member.name}</h4>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-pink-600">TheHonouredOne</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-1">
          <p className="font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            Project Mission:
          </p>
          <p className="text-blue-800 leading-relaxed">
            "We believe users should never have to surrender their privacy to benefit from artificial intelligence. By aligning consumer incentives with mathematical cryptography, we can unlock the world's most valuable datasets safely."
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all"
        >
          Close Showcase
        </button>
      </div>
    </div>
  );
};
