/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PipelineSimulator } from './components/PipelineSimulator';
import { ConsentManager } from './components/ConsentManager';
import { RevenueModel } from './components/RevenueModel';
import { FeasibilityTech } from './components/FeasibilityTech';
import { DeveloperConsole } from './components/DeveloperConsole';
import { TeamModal } from './components/TeamModal';
import { WalletModal } from './components/WalletModal';
import { Footer } from './components/Footer';
import { INITIAL_USER_WALLET } from './data/mockData';
import { UserWallet } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('simulator');
  const [wallet, setWallet] = useState<UserWallet>(INITIAL_USER_WALLET);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState<boolean>(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState<boolean>(false);

  const handleEarnReward = (amount: number, perk: string) => {
    setWallet(prev => ({
      ...prev,
      earningsBalance: prev.earningsBalance + amount,
      karmaPoints: prev.karmaPoints + 50
    }));
  };

  const handleRedeemCoupon = (couponId: string) => {
    // Handled in ConsentManager
  };

  const handleCashoutSuccess = () => {
    setWallet(prev => ({
      ...prev,
      earningsBalance: 0
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-pink-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        wallet={wallet}
        onOpenWallet={() => setIsWalletModalOpen(true)}
        onOpenTeam={() => setIsTeamModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 space-y-12">
        {/* Hero Section */}
        <Hero
          onStartSimulation={() => {
            setActiveTab('simulator');
            const el = document.getElementById('pipeline-simulator-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreRevenue={() => {
            setActiveTab('revenue');
            const el = document.getElementById('revenue-model-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Tab-based View Switcher */}
        <div className="py-2">
          {activeTab === 'simulator' && (
            <PipelineSimulator onEarnReward={handleEarnReward} />
          )}

          {activeTab === 'consent' && (
            <ConsentManager
              wallet={wallet}
              onRedeemCoupon={handleRedeemCoupon}
              onCashout={() => setIsWalletModalOpen(true)}
            />
          )}

          {activeTab === 'revenue' && (
            <RevenueModel />
          )}

          {activeTab === 'tech' && (
            <FeasibilityTech
              onOpenSimulator={() => setActiveTab('simulator')}
            />
          )}

          {activeTab === 'developer' && (
            <DeveloperConsole />
          )}
        </div>
      </main>

      {/* Modals */}
      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
      />

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        wallet={wallet}
        onCashoutSuccess={handleCashoutSuccess}
      />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenTeam={() => setIsTeamModalOpen(true)}
      />
    </div>
  );
}
