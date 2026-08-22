export type SensitivityLevel = 'direct-pii' | 'indirect-quasi' | 'general' | 'sensitive-metric';

export interface DataField {
  id: string;
  name: string;
  category: 'identity' | 'demographic' | 'location' | 'financial' | 'health' | 'behavior';
  rawValue: string;
  sensitivity: SensitivityLevel;
  tokenizedValue: string;
  quasiGeneralizedValue: string;
  encryptedSampleValue: string;
  isIncluded: boolean;
  explanation: string;
}

export interface DataPreset {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
  fields: DataField[];
}

export interface AICause {
  id: string;
  title: string;
  organization: string;
  category: 'Healthcare' | 'Fintech' | 'Smart AI' | 'Academic';
  description: string;
  icon: string;
  rewardType: 'AI Pro Access' | 'Discount Coupon' | 'Cash / Crypto' | 'Karma & Research';
  rewardValue: string;
  participantsCount: number;
  privacyTier: 'Ultra-Secure (Encrypted)' | 'Sanitized Only';
  isConsented: boolean;
}

export type PipelineStepId = 'consent' | 'sanitization' | 'splitting' | 'encryption' | 'master_model';

export interface RevenueStream {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  badge: string;
  targetMarket: string;
  pricingModel: string;
  estimatedYear1: string;
  estimatedYear3: string;
  description: string;
  keyFeatures: string[];
  color: 'blue' | 'pink' | 'amber';
}

export interface UserWallet {
  earningsBalance: number;
  pendingTokens: number;
  karmaPoints: number;
  activeConsentsCount: number;
  dataPointsShared: number;
  couponsUnlocked: {
    id: string;
    brand: string;
    offer: string;
    code: string;
    expiry: string;
  }[];
}
