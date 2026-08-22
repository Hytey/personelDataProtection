import React, { useState } from 'react';
import { X, Gift, Coins, CheckCircle2, ArrowUpRight, Sparkles, CreditCard, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserWallet } from '../types';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  wallet: UserWallet;
  onCashoutSuccess: () => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  onClose,
  wallet,
  onCashoutSuccess
}) => {
  const [cashoutAmount, setCashoutAmount] = useState<string>('40.00');
  const [selectedMethod, setSelectedMethod] = useState<'bank' | 'stripe' | 'crypto'>('bank');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCashoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSuccessMessage(`Successfully transferred $${cashoutAmount} via ${selectedMethod.toUpperCase()}!`);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#EC4899', '#F59E0B']
      });
      onCashoutSuccess();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-50 to-amber-50 border border-pink-200 text-pink-700 text-xs font-bold">
            <Gift className="w-3.5 h-3.5 text-amber-500" />
            MicroRewards Payout Hub
          </div>
          <h3 className="text-2xl font-extrabold text-slate-950 font-display">
            Your Earnings & Perks Wallet
          </h3>
          <p className="text-xs text-slate-500">
            Real cash and subscription rewards earned from your consented AI models.
          </p>
        </div>

        {/* Balance Highlight */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white rounded-2xl p-5 space-y-1">
          <span className="text-xs text-slate-400">Available Balance:</span>
          <div className="text-3xl font-black text-white font-display">
            ${wallet.earningsBalance.toFixed(2)}
          </div>
          <p className="text-[11px] text-emerald-400">
            ✓ Instant transfer to any linked bank account, debit card, or crypto wallet.
          </p>
        </div>

        {successMessage ? (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
            <h4 className="font-bold text-emerald-900 text-sm">{successMessage}</h4>
            <p className="text-xs text-emerald-700">Confirmation Hash: 0x8F91...22B1</p>
            <button
              onClick={() => setSuccessMessage(null)}
              className="mt-2 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleCashoutSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                Withdrawal Amount ($ USD):
              </label>
              <input
                type="number"
                min="1.00"
                max={wallet.earningsBalance}
                step="1.00"
                value={cashoutAmount}
                onChange={e => setCashoutAmount(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                Payout Destination:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'bank', label: '🏦 Direct Bank' },
                  { id: 'stripe', label: '💳 Debit Card' },
                  { id: 'crypto', label: '⚡ USDC Crypto' }
                ].map(method => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setSelectedMethod(method.id as any)}
                    className={`p-2 rounded-xl text-xs font-bold border text-center transition-all ${
                      selectedMethod === method.id
                        ? 'bg-pink-50 border-pink-300 text-pink-700'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {method.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing || Number(cashoutAmount) > wallet.earningsBalance}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-pink-600 to-amber-500 hover:opacity-95 text-white text-xs font-bold shadow-lg shadow-pink-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isProcessing ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Coins className="w-4 h-4" />
              )}
              <span>{isProcessing ? 'Processing Transfer...' : `Confirm Withdraw of $${cashoutAmount}`}</span>
            </button>
          </form>
        )}

        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            256-Bit Encrypted Transfer
          </span>
          <span>Zero Processing Fees</span>
        </div>
      </div>
    </div>
  );
};
