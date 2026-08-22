import React, { useState } from 'react';
import { 
  Terminal, Play, Copy, Check, Sparkles, ShieldCheck, 
  Layers, Code2, Cpu, CheckCircle2 
} from 'lucide-react';

export const DeveloperConsole: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<'stream' | 'query' | 'train'>('stream');
  const [copied, setCopied] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [executionOutput, setExecutionOutput] = useState<any>(null);

  const samplePayloads = {
    stream: {
      endpoint: 'POST /api/v1/sanitize/stream',
      description: 'Stream raw training batches through the zero-PII sanitization & quasi-generalizer gateway.',
      request: {
        dataset_type: "healthcare_oncology",
        batch_size: 1,
        input_data: {
          patient_name: "Dr. Sarah Jessica Miller",
          contact_email: "sarah.miller@stanford.edu",
          patient_age: 25,
          zip_code: "94305",
          biomarker_ca125: 38.4,
          brca1_variant: "185delAG",
          lifestyle_diet: "Mediterranean"
        }
      },
      response: {
        status: "success",
        timestamp: "2026-08-22T07:15:32.190Z",
        sanitization_metrics: {
          direct_pii_purged: 2,
          quasi_generalized: 2,
          sensitive_tensors_encrypted: 2
        },
        sanitized_stream: {
          patient_token: "TOKEN_SHA256_#8F492E",
          age_bracket: "22-26",
          metro_region: "US-CA-SFBay",
          general_features: {
            diet_group: "Mediterranean",
            activity_index: 3
          },
          homomorphic_cipher_tensor: "SEAL_HE_TENSOR<CA125_ENC, BRCA1_ENC>[0x884FCB1992A...]"
        },
        legal_certificate: {
          dpdp_compliant: true,
          gdpr_article_6_verified: true,
          zero_retention_proof: "0x9F4A88C2E7B3170FA..."
        },
        execution_latency_ms: 12.4
      }
    },
    query: {
      endpoint: 'GET /api/v1/consent/pool',
      description: 'Query aggregate volume of opted-in, verified user data pools available for AI model training.',
      request: {
        category: "healthcare",
        min_participants: 10000,
        required_tier: "homomorphic_seal"
      },
      response: {
        status: "success",
        pool_id: "pool_oncology_early_detect_v4",
        available_consented_records: 42890,
        estimated_token_volume: "85.8M tokens",
        reward_budget_rate: "$0.18 / 1k tokens",
        active_bounties: [
          { cause: "Cancer Early Detection AI", payout_pool: "$120,000 USD" }
        ],
        compliance_rating: "AAA+ Clean Room Certified"
      }
    },
    train: {
      endpoint: 'POST /api/v1/seal/train-batch',
      description: 'Submit model forward/backward pass matrix multiplication over encrypted SEAL ciphertexts.',
      request: {
        model_id: "neural_net_classifier_v3",
        weight_matrix_dim: [1024, 512],
        poly_modulus_degree: 8192,
        security_level: "HE_128_BIT_STANDARD"
      },
      response: {
        status: "gradient_computed",
        encrypted_gradient_vector: "ENC_GRADIENT_SEAL_0xAA8190F21...",
        noise_budget_remaining_bits: 44.2,
        model_weights_updated: true,
        raw_data_exposure: "0.00% (Mathematically Impossible)",
        cloud_cost_saved_percent: "71.4%"
      }
    }
  };

  const currentConfig = samplePayloads[selectedEndpoint];

  const handleRunRequest = () => {
    setIsLoading(true);
    setExecutionOutput(null);
    setTimeout(() => {
      setExecutionOutput(currentConfig.response);
      setIsLoading(false);
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(JSON.stringify(currentConfig.request, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="developer-api-section" className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold">
            <Code2 className="w-3.5 h-3.5 text-pink-400" />
            Enterprise Data Gateway & Developer Sandbox
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
            Interactive API Console for AI Labs & Enterprises
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            AI research teams can plug into our high-speed, legally certified training pipeline in less than 5 minutes. Query consented data pools, stream sanitized batches, and train directly on Microsoft SEAL ciphertexts.
          </p>
        </div>
      </div>

      {/* API Playground Card */}
      <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Endpoint Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto">
            {[
              { id: 'stream', label: 'POST /sanitize/stream', badge: 'Sanitizer' },
              { id: 'query', label: 'GET /consent/pool', badge: 'Consent Pool' },
              { id: 'train', label: 'POST /seal/train-batch', badge: 'SEAL Homomorphic' }
            ].map(ep => (
              <button
                key={ep.id}
                onClick={() => {
                  setSelectedEndpoint(ep.id as any);
                  setExecutionOutput(null);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedEndpoint === ep.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                {ep.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleRunRequest}
            disabled={isLoading}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-pink-600 to-amber-500 hover:opacity-95 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-pink-500/20 transition-all"
          >
            {isLoading ? (
              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            <span>Execute Request</span>
          </button>
        </div>

        <p className="text-xs text-slate-400 font-medium">
          {currentConfig.description}
        </p>

        {/* 2-Column Code View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start font-mono text-xs">
          {/* Request Payload */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-[11px]">
              <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                <Terminal className="w-3.5 h-3.5" />
                Request Payload (JSON)
              </span>
              <button
                onClick={handleCopyCode}
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-300 overflow-x-auto max-h-[360px] leading-relaxed">
              {JSON.stringify(currentConfig.request, null, 2)}
            </pre>
          </div>

          {/* Response Payload */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-[11px]">
              <span className="flex items-center gap-1.5 text-pink-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Response & Cryptographic Audit Proof
              </span>
              {executionOutput && (
                <span className="text-emerald-400 text-[10px] font-bold">
                  ● HTTP 200 OK ({executionOutput.execution_latency_ms || 14}ms)
                </span>
              )}
            </div>
            <pre className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-emerald-300 overflow-x-auto max-h-[360px] leading-relaxed">
              {executionOutput
                ? JSON.stringify(executionOutput, null, 2)
                : '// Click "Execute Request" above to simulate real-time sanitization and SEAL encrypted training...'}
            </pre>
          </div>
        </div>

        {/* DPDP Compliance Signature Box */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-slate-300">
              <strong>Enterprise SLA:</strong> 99.99% uptime, End-to-end homomorphic privacy, Zero PII retention indemnification.
            </span>
          </div>
          <span className="text-pink-400 font-mono text-[11px] font-bold">
            SDK Version: v1.4.0 (PyTorch / ONNX)
          </span>
        </div>
      </div>
    </div>
  );
};
