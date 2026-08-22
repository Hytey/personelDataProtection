import { DataPreset, AICause, RevenueStream, UserWallet } from '../types';

export const DATA_PRESETS: DataPreset[] = [
  {
    id: 'healthcare-cancer',
    title: 'Hospital Patient Health Record',
    description: 'Real-world clinical data used to train multi-hospital Cancer Early Detection AI models.',
    icon: 'Activity',
    badge: 'High Impact • Medical AI',
    fields: [
      {
        id: 'patient-name',
        name: 'Patient Full Name',
        category: 'identity',
        rawValue: 'Dr. Sarah Jessica Miller',
        sensitivity: 'direct-pii',
        tokenizedValue: 'TOKEN_SHA256_#8F492E',
        quasiGeneralizedValue: 'TOKEN_SHA256_#8F492E',
        encryptedSampleValue: '0x94B2C84A9090FE...',
        isIncluded: true,
        explanation: 'Direct PII: Removed instantly and replaced with a zero-knowledge cryptographic token.'
      },
      {
        id: 'patient-email',
        name: 'Contact Email',
        category: 'identity',
        rawValue: 'sarah.miller@stanford.edu',
        sensitivity: 'direct-pii',
        tokenizedValue: 'TOKEN_SHA256_#E91A04',
        quasiGeneralizedValue: 'TOKEN_SHA256_#E91A04',
        encryptedSampleValue: '0x71DC0989FA720B...',
        isIncluded: true,
        explanation: 'Direct PII: Dropped completely before passing to any neural network.'
      },
      {
        id: 'patient-age',
        name: 'Exact Patient Age',
        category: 'demographic',
        rawValue: '25 years old (DOB: 14/06/1999)',
        sensitivity: 'indirect-quasi',
        tokenizedValue: 'N/A',
        quasiGeneralizedValue: 'Age Bracket: 22–26 (MM/YYYY: 06/1999)',
        encryptedSampleValue: 'SEAL_CIPHER_x9008...',
        isIncluded: true,
        explanation: 'Quasi-Identifier: Grouped into an anonymous 5-year bracket so individual lookup is impossible.'
      },
      {
        id: 'patient-zip',
        name: 'Residential Zip Code & Street',
        category: 'location',
        rawValue: '94305, Palo Alto, 450 Serra Mall',
        sensitivity: 'indirect-quasi',
        tokenizedValue: 'N/A',
        quasiGeneralizedValue: 'Bay Area Metro Region (Northern California)',
        encryptedSampleValue: 'SEAL_CIPHER_77A01...',
        isIncluded: true,
        explanation: 'Quasi-Identifier: Generalized to metropolitan region to preserve regional epidemiology without revealing street address.'
      },
      {
        id: 'patient-biomarker',
        name: 'Blood Biomarker Index (CA-125 & BRCA1)',
        category: 'health',
        rawValue: 'CA-125: 38.4 U/mL, BRCA1: Variant 185delAG',
        sensitivity: 'sensitive-metric',
        tokenizedValue: 'N/A',
        quasiGeneralizedValue: 'N/A',
        encryptedSampleValue: 'SEAL_HE_TENSOR<38.4, 0.92>[0x884FCB19...]',
        isIncluded: true,
        explanation: 'Sensitive Metric: Sent via Encrypted Channel. AI trains over homomorphic ciphertext without ever decrypting raw medical values.'
      },
      {
        id: 'patient-scan',
        name: 'Cellular Density & Imaging Tensor',
        category: 'health',
        rawValue: 'Density Score: 0.74, Morphology Matrix [128x128]',
        sensitivity: 'sensitive-metric',
        tokenizedValue: 'N/A',
        quasiGeneralizedValue: 'N/A',
        encryptedSampleValue: 'SEAL_HE_MATRIX_ENC[0xFA481912...]',
        isIncluded: true,
        explanation: 'Trained via Microsoft SEAL encrypted mathematical weights in an isolated zero-trust sandbox.'
      },
      {
        id: 'patient-lifestyle',
        name: 'General Lifestyle & Diet Type',
        category: 'behavior',
        rawValue: 'Mediterranean diet, Moderate weekly exercise',
        sensitivity: 'general',
        tokenizedValue: 'N/A',
        quasiGeneralizedValue: 'Diet Group: Standard Mediterranean, Active: Level 3',
        encryptedSampleValue: 'N/A (Safe Low Sensitivity)',
        isIncluded: true,
        explanation: 'General Safe Data: Low sensitivity, routed to standard general AI pipeline for broad behavioral patterns.'
      }
    ]
  },
  {
    id: 'fintech-fraud',
    title: 'Inter-Bank Fraud Detection Record',
    description: 'Transaction and device telemetry to prevent fraud across banks without revealing customer bank accounts.',
    icon: 'ShieldCheck',
    badge: 'Fintech • Cross-Bank Defense',
    fields: [
      {
        id: 'bank-acc-holder',
        name: 'Account Holder Name & Phone',
        category: 'identity',
        rawValue: 'Alex Rivera (+1-555-019-2831)',
        sensitivity: 'direct-pii',
        tokenizedValue: 'TOKEN_SHA256_#9901BA',
        quasiGeneralizedValue: 'TOKEN_SHA256_#9901BA',
        encryptedSampleValue: '0x62BBA7102...',
        isIncluded: true,
        explanation: 'Direct PII: Replaced with anonymous one-way cryptographic hash.'
      },
      {
        id: 'bank-card-number',
        name: 'Credit Card & Bank Account No.',
        category: 'financial',
        rawValue: '4532 •••• •••• 8821 (Routing: 121000358)',
        sensitivity: 'direct-pii',
        tokenizedValue: 'TOKEN_SHA256_#44CC12',
        quasiGeneralizedValue: 'TOKEN_SHA256_#44CC12',
        encryptedSampleValue: '0x992B1F76...',
        isIncluded: true,
        explanation: 'Direct Financial PII: Stripped at gate. Only token hash used for transaction graph connection.'
      },
      {
        id: 'bank-location',
        name: 'Transaction City & Merchant Pin',
        category: 'location',
        rawValue: 'Austin, TX - Merchant ID #TX-9028',
        sensitivity: 'indirect-quasi',
        tokenizedValue: 'N/A',
        quasiGeneralizedValue: 'Region: US-South Central (Austin Metro Area)',
        encryptedSampleValue: 'SEAL_CIPHER_REGION_8...',
        isIncluded: true,
        explanation: 'Quasi-Identifier: Coarsened to geographic zone.'
      },
      {
        id: 'bank-velocity',
        name: 'Micro-Transaction Velocity & Amounts',
        category: 'financial',
        rawValue: 'Velocity: 14 tx/min, Amount: $4,850.00 USD',
        sensitivity: 'sensitive-metric',
        tokenizedValue: 'N/A',
        quasiGeneralizedValue: 'N/A',
        encryptedSampleValue: 'SEAL_HE_TENSOR<14, 4850>[0x098CF129...]',
        isIncluded: true,
        explanation: 'Sensitive Financial Feature: Computed homomorphically to detect anomalous spikes across banks.'
      },
      {
        id: 'bank-device',
        name: 'Device Type & Browser Engine',
        category: 'behavior',
        rawValue: 'Safari Mobile / iOS 17.4 (Bento)',
        sensitivity: 'general',
        tokenizedValue: 'N/A',
        quasiGeneralizedValue: 'Device Class: Modern Mobile Browser',
        encryptedSampleValue: 'N/A (Safe General Data)',
        isIncluded: true,
        explanation: 'General Safe Data: Low-risk category sent directly to broad threat classifier.'
      }
    ]
  },
  {
    id: 'smart-assistant',
    title: 'Personal Assistant & Voice Notes',
    description: 'Everyday lifestyle and productivity data for personalized LLMs with zero private voice/chat exposure.',
    icon: 'Sparkles',
    badge: 'Consumer AI • Next-Gen Assistant',
    fields: [
      {
        id: 'user-real-name',
        name: 'User Identity & Social Handle',
        category: 'identity',
        rawValue: 'Elena Rostova (@elena_designs)',
        sensitivity: 'direct-pii',
        tokenizedValue: 'TOKEN_SHA256_#3381AA',
        quasiGeneralizedValue: 'TOKEN_SHA256_#3381AA',
        encryptedSampleValue: '0x12FA9018...',
        isIncluded: true,
        explanation: 'Stripped and tokenized immediately.'
      },
      {
        id: 'user-occupation',
        name: 'Exact Job Title & Employer',
        category: 'demographic',
        rawValue: 'Lead UI/UX Architect at Figma Corp',
        sensitivity: 'indirect-quasi',
        tokenizedValue: 'N/A',
        quasiGeneralizedValue: 'Sector: Digital Product Design & Software',
        encryptedSampleValue: 'SEAL_CIPHER_JOB_09...',
        isIncluded: true,
        explanation: 'Generalized into macro industry classification.'
      },
      {
        id: 'user-calendar',
        name: 'Private Meeting Schedule & Audio Notes',
        category: 'behavior',
        rawValue: 'Confidential Product Launch Keynote prep at 3 PM',
        sensitivity: 'sensitive-metric',
        tokenizedValue: 'N/A',
        quasiGeneralizedValue: 'N/A',
        encryptedSampleValue: 'SEAL_HE_EMBEDDING_VEC[0xCC8491...]',
        isIncluded: true,
        explanation: 'Vectorized into encrypted high-dimensional embeddings trained in secure enclave.'
      },
      {
        id: 'user-topics',
        name: 'General Topic Interests',
        category: 'behavior',
        rawValue: 'Typography, Modern Architecture, Coffee Brewing',
        sensitivity: 'general',
        tokenizedValue: 'N/A',
        quasiGeneralizedValue: 'Interests: [Design, Architecture, Beverages]',
        encryptedSampleValue: 'N/A (Safe Low Sensitivity)',
        isIncluded: true,
        explanation: 'General safe taxonomy shared with main LLM context.'
      }
    ]
  }
];

export const AI_CAUSES: AICause[] = [
  {
    id: 'cancer-research',
    title: 'Cancer Early Detection AI',
    organization: 'Global Oncology Research Consortium',
    category: 'Healthcare',
    description: 'Training deep neural networks to detect subtle cell anomalies 3 years earlier without sharing hospital patient records.',
    icon: 'HeartPulse',
    rewardType: 'AI Pro Access',
    rewardValue: '6 Months Free Pro AI ($120 Value)',
    participantsCount: 42890,
    privacyTier: 'Ultra-Secure (Encrypted)',
    isConsented: true
  },
  {
    id: 'fraud-shield',
    title: 'Decentralized Anti-Fraud Shield',
    organization: 'Fintech Alliance for Safe Payments',
    category: 'Fintech',
    description: 'Detecting synthetic identity fraud and automated cyber theft across 50+ banking networks without seeing card numbers.',
    icon: 'ShieldCheck',
    rewardType: 'Cash / Crypto',
    rewardValue: '$18.50 Monthly Direct Cashback',
    participantsCount: 89340,
    privacyTier: 'Ultra-Secure (Encrypted)',
    isConsented: true
  },
  {
    id: 'nextgen-llm',
    title: 'Ethical General Language Model',
    organization: 'Open Foundation Models Lab',
    category: 'Smart AI',
    description: 'Developing helpful conversational assistants trained exclusively on voluntarily contributed, sanitized knowledge.',
    icon: 'Bot',
    rewardType: 'Discount Coupon',
    rewardValue: '25% Off Partner Subscriptions',
    participantsCount: 124500,
    privacyTier: 'Sanitized Only',
    isConsented: false
  },
  {
    id: 'rare-disease',
    title: 'Rare Pediatric Genomics Study',
    organization: 'Pediatric Health & Genetics Initiative',
    category: 'Academic',
    description: 'Cross-analyzing rare genetic markers securely using homomorphic encryption to discover life-saving therapies.',
    icon: 'Dna',
    rewardType: 'Karma & Research',
    rewardValue: '+500 Community Karma & Badge',
    participantsCount: 19800,
    privacyTier: 'Ultra-Secure (Encrypted)',
    isConsented: false
  }
];

export const REVENUE_STREAMS: RevenueStream[] = [
  {
    id: 'b2b-data-gateway',
    title: '1. B2B Ethical AI Data Gateway',
    tagline: 'Enterprise API for Legal, Consented AI Training Data',
    icon: 'Layers',
    badge: 'Core Revenue • 55% of ARR',
    targetMarket: 'AI Labs (OpenAI, Anthropic, Google), Autonomous Driving, Healthcare AI Labs',
    pricingModel: 'Tiered API Usage: $0.15 to $0.45 per 1,000 sanitized, legally certified token streams',
    estimatedYear1: '$1.8M ARR',
    estimatedYear3: '$24.5M ARR',
    description: 'AI companies are facing billions in copyright & privacy lawsuits. Our platform provides legally bulletproof, consented, and sanitized training datasets with automated DPDP/GDPR certificates.',
    keyFeatures: [
      'Zero-Risk Regulatory Compliance: 100% consent-backed tokens with immutable cryptographic proofs.',
      'Continuous Live Stream: Fresh, diverse user datasets updated in real-time.',
      'Automated PII Indemnity: Complete legal shield against data protection lawsuits.'
    ],
    color: 'blue'
  },
  {
    id: 'rewards-take-rate',
    title: '2. MicroRewards Marketplace Take-Rate',
    tagline: 'Platform Commission on Consumer Reward Pools',
    icon: 'Coins',
    badge: 'High Velocity • 20% of ARR',
    targetMarket: 'E-commerce Brands, SaaS Companies, Fintech Gift Card Providers',
    pricingModel: '12% platform take-rate on all sponsored reward distributions and merchant discounts',
    estimatedYear1: '$750K ARR',
    estimatedYear3: '$11.2M ARR',
    description: 'Brands sponsor discounts, free subscriptions, and cash rewards to incentivize user data sharing. The platform captures a 12% fee on every reward transaction processed.',
    keyFeatures: [
      'Brand Sponsorship Portal: Companies bid on specific demographic data pools.',
      'Frictionless Payouts: Native support for Gift Cards, Crypto tokens, and Bank Cashbacks.',
      'Self-Sustaining Flywheel: Higher rewards attract more users, creating richer data pools.'
    ],
    color: 'pink'
  },
  {
    id: 'seal-compute-sdk',
    title: '3. Encrypted Compute & SEAL Training SDK',
    tagline: 'Homomorphic Training-as-a-Service for Enterprise',
    icon: 'Cpu',
    badge: 'Enterprise SaaS • 18% of ARR',
    targetMarket: 'Hospitals, Top-Tier Banks, Defense & Government AI Contractors',
    pricingModel: 'Annual Enterprise License ($120k–$480k/yr) + Cloud Compute Margin on encrypted training hours',
    estimatedYear1: '$1.1M ARR',
    estimatedYear3: '$16.8M ARR',
    description: 'Turnkey encrypted training SDK based on Microsoft SEAL and Smart Data Splitting. Enables institutions to train joint AI models across isolated firewalls with zero data pooling.',
    keyFeatures: [
      '70% Cloud Cost Reduction: Heavy encryption applied only to sensitive metrics via Smart Splitter.',
      'On-Premise or Private Cloud: Runs inside AWS, GCP, Azure confidential computing enclaves.',
      'Full Homomorphic Matrix Math: Native support for PyTorch, TensorFlow, and ONNX models.'
    ],
    color: 'amber'
  },
  {
    id: 'compliance-certification',
    title: '4. DPDP & GDPR Compliance Certification',
    tagline: 'Automated Privacy Audit & Legal Verification Badge',
    icon: 'BadgeCheck',
    badge: 'High Margin • 7% of ARR',
    targetMarket: 'AI Startups, Enterprise Model Deployers, Venture-Backed AI Teams',
    pricingModel: '$5,000 to $25,000 per audited AI model or $2,500/month recurring compliance monitor',
    estimatedYear1: '$450K ARR',
    estimatedYear3: '$5.6M ARR',
    description: 'Independent, automated cryptographic audit tool verifying that an AI model weights never memorized raw user data or violated DPDP/GDPR/HIPAA guidelines.',
    keyFeatures: [
      'Cryptographic Clean-Room Seal: Shareable public trust badge for enterprise AI products.',
      'One-Click Regulator Audit Export: Instant legal compliance dossier for EU/US/India regulators.',
      'Weight Differential Privacy Verifier: Mathematical proof that no single user record is memorized.'
    ],
    color: 'blue'
  }
];

export const INITIAL_USER_WALLET: UserWallet = {
  earningsBalance: 48.50,
  pendingTokens: 120,
  karmaPoints: 1450,
  activeConsentsCount: 2,
  dataPointsShared: 14,
  couponsUnlocked: [
    {
      id: 'c1',
      brand: 'OpenAI / Claude Pro',
      offer: '1 Month Free Pro Subscription',
      code: 'HONOUR-PRO-2026',
      expiry: 'Valid for 30 days'
    },
    {
      id: 'c2',
      brand: 'Amazon Cloud / Retail',
      offer: '$15 Instant Gift Balance',
      code: 'AMZN-PRIVACY-15',
      expiry: 'Valid for 60 days'
    },
    {
      id: 'c3',
      brand: 'Starbucks Coffee',
      offer: 'Free Handcrafted Beverage',
      code: 'SBX-DATA-HERO',
      expiry: 'Valid for 14 days'
    }
  ]
};

export const TEAM_MEMBERS = [
  {
    name: 'Dhruv Bisht',
    role: 'Lead Architect & Systems Engineering',
    team: 'TheHonouredOne',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Mudit Kaushik',
    role: 'Cryptographic Security & Homomorphic Compute',
    team: 'TheHonouredOne',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Hiren Yadav',
    role: 'Smart Data Splitter & AI Infrastructure',
    team: 'TheHonouredOne',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Daksh Yadav',
    role: 'Incentive Systems & Product Design',
    team: 'TheHonouredOne',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80'
  }
];
