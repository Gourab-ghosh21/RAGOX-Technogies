import React from 'react';
import { ShieldCheck, Cpu, Database, CheckCircle2, Terminal, ArrowUpRight, Layers } from 'lucide-react';

export const ProjectPreviewVisual = ({ projectId }) => {
  if (projectId === 'infotally') {
    return (
      <div className="w-full h-full bg-[#090b10] p-4 sm:p-6 rounded-[12px] border border-[rgba(255,255,255,0.08)] flex flex-col justify-between font-mono text-xs select-none">
        {/* Mockup Topbar */}
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
            <span className="ml-2 text-[#7e8696] text-[11px]">infotally.engine // live-telemetry</span>
          </div>
          <span className="text-[10px] text-[#0066ff] bg-[rgba(0,102,255,0.1)] px-2 py-0.5 rounded border border-[rgba(0,102,255,0.3)]">
            SYSTEM ACTIVE
          </span>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="bg-[#0e1118] p-3 rounded border border-[rgba(255,255,255,0.05)]">
            <div className="text-[#6d7585] text-[10px] mb-1">AUDIT PIPELINE</div>
            <div className="text-sm font-bold text-[#f4f5f8]">12 / 12 RULES</div>
            <div className="w-full bg-[#181d28] h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#0066ff] h-full w-full"></div>
            </div>
          </div>
          <div className="bg-[#0e1118] p-3 rounded border border-[rgba(255,255,255,0.05)]">
            <div className="text-[#6d7585] text-[10px] mb-1">FRAMEWORKS</div>
            <div className="text-sm font-bold text-[#f4f5f8]">SOC2 • ISO • GDPR</div>
            <div className="text-[10px] text-[#10b981] mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span> Synced
            </div>
          </div>
          <div className="bg-[#0e1118] p-3 rounded border border-[rgba(255,255,255,0.05)]">
            <div className="text-[#6d7585] text-[10px] mb-1">VERIFICATION LATENCY</div>
            <div className="text-sm font-bold text-[#f4f5f8]">24ms</div>
            <div className="text-[10px] text-[#7e8696] mt-1">Real-time Node Event</div>
          </div>
        </div>

        {/* Live Event Stream */}
        <div className="bg-[#0a0d13] p-3 rounded border border-[rgba(255,255,255,0.04)] text-[11px] space-y-1.5 text-[#9aa1b0]">
          <div className="flex justify-between text-[#5e6575] text-[10px] border-b border-[rgba(255,255,255,0.04)] pb-1">
            <span>TIMESTAMP</span>
            <span>EVENT</span>
            <span>RESULT</span>
          </div>
          <div className="flex justify-between items-center text-[#c5c9d3]">
            <span>10:42:01.12</span>
            <span>Policy #842-AuthEnforce</span>
            <span className="text-[#10b981]">PASSED</span>
          </div>
          <div className="flex justify-between items-center text-[#c5c9d3]">
            <span>10:42:02.84</span>
            <span>Telemetry Ingestion: Node-04</span>
            <span className="text-[#10b981]">VERIFIED</span>
          </div>
          <div className="flex justify-between items-center text-[#c5c9d3]">
            <span>10:42:04.19</span>
            <span>Cryptographic Log Sealed</span>
            <span className="text-[#0066ff]">CONFIRMED</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'astra') {
    return (
      <div className="w-full h-full bg-[#080b12] p-4 sm:p-6 rounded-[12px] border border-[rgba(255,255,255,0.08)] flex flex-col justify-between font-mono text-xs select-none">
        {/* Mockup Topbar */}
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
            <span className="ml-2 text-[#7e8696] text-[11px]">astra.canvas // neural-graph</span>
          </div>
          <span className="text-[10px] text-[#38bdf8] bg-[rgba(56,189,248,0.1)] px-2 py-0.5 rounded border border-[rgba(56,189,248,0.3)]">
            STREAMING
          </span>
        </div>

        {/* Node Graph Mockup */}
        <div className="grid grid-cols-3 gap-2 my-auto items-center py-2">
          <div className="bg-[#0f1422] p-2.5 rounded border border-[rgba(255,255,255,0.08)] text-center">
            <div className="text-[9px] text-[#6d7585] mb-1">NODE 01</div>
            <div className="text-[#f4f5f8] font-bold text-[11px]">System Prompt</div>
            <div className="text-[9px] text-[#38bdf8] mt-1">Temperature: 0.2</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0.1)] via-[#0066ff] to-[rgba(255,255,255,0.1)] relative">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0066ff] shadow-[0_0_8px_#0066ff]"></span>
            </div>
          </div>
          <div className="bg-[#0f1422] p-2.5 rounded border border-[rgba(0,102,255,0.35)] text-center bg-[rgba(0,102,255,0.05)]">
            <div className="text-[9px] text-[#6d7585] mb-1">NODE 02</div>
            <div className="text-[#f4f5f8] font-bold text-[11px]">LLM Inference</div>
            <div className="text-[9px] text-[#10b981] mt-1">Token Stream: Live</div>
          </div>
        </div>

        {/* Stream Inspector */}
        <div className="bg-[#0c101a] p-3 rounded border border-[rgba(255,255,255,0.05)] mt-3">
          <div className="flex justify-between items-center mb-1 text-[10px] text-[#7e8696]">
            <span>OUTPUT PARSER</span>
            <span>68 TOKENS/SEC</span>
          </div>
          <p className="text-[#c0c5d2] text-[11px] leading-relaxed truncate">
            &gt; &quot;Synthesizing multi-modal embedding vectors across latent space clusters...&quot;
          </p>
        </div>
      </div>
    );
  }

  if (projectId === 'rexpo') {
    return (
      <div className="w-full h-full bg-[#0a0c11] p-4 sm:p-6 rounded-[12px] border border-[rgba(255,255,255,0.08)] flex flex-col justify-between font-mono text-xs select-none">
        <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
            <span className="ml-2 text-[#7e8696] text-[11px]">rexpo.trade // order-matrix</span>
          </div>
          <span className="text-[10px] text-[#93c5fd] bg-[rgba(59,130,246,0.1)] px-2 py-0.5 rounded border border-[rgba(59,130,246,0.3)]">
            B2B PLATFORM
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-[#10141f] p-3 rounded border border-[rgba(255,255,255,0.05)]">
            <div className="text-[#6d7585] text-[10px] mb-1">SUPPLIER CATALOG</div>
            <div className="text-sm font-bold text-[#f4f5f8]">4,820 SKUs</div>
            <div className="text-[10px] text-[#7e8696] mt-1">Multi-tier pricing matrix</div>
          </div>
          <div className="bg-[#10141f] p-3 rounded border border-[rgba(255,255,255,0.05)]">
            <div className="text-[#6d7585] text-[10px] mb-1">SETTLEMENT ENGINE</div>
            <div className="text-sm font-bold text-[#10b981]">AUTOMATED</div>
            <div className="text-[10px] text-[#7e8696] mt-1">Contract terms verified</div>
          </div>
        </div>

        <div className="bg-[#0d1017] p-2.5 rounded border border-[rgba(255,255,255,0.04)] space-y-1.5 text-[10px]">
          <div className="flex justify-between text-[#818999]">
            <span>ORDER ID</span>
            <span>BUYER REGION</span>
            <span>STATUS</span>
          </div>
          <div className="flex justify-between text-[#d1d5db]">
            <span>#RX-9204</span>
            <span>EMEA / Tier-1</span>
            <span className="text-[#10b981]">FULFILLED</span>
          </div>
          <div className="flex justify-between text-[#d1d5db]">
            <span>#RX-9205</span>
            <span>APAC / Enterprise</span>
            <span className="text-[#0066ff]">PROCESSING</span>
          </div>
        </div>
      </div>
    );
  }

  // PackCheck
  return (
    <div className="w-full h-full bg-[#080a0f] p-4 sm:p-6 rounded-[12px] border border-[rgba(255,255,255,0.08)] flex flex-col justify-between font-mono text-xs select-none">
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
          <span className="ml-2 text-[#7e8696] text-[11px]">packcheck.preflight // spec-inspector</span>
        </div>
        <span className="text-[10px] text-[#60a5fa] bg-[rgba(96,165,250,0.1)] px-2 py-0.5 rounded border border-[rgba(96,165,250,0.3)]">
          INSPECTION SUITE
        </span>
      </div>

      <div className="bg-[#0e121b] p-4 rounded border border-[rgba(255,255,255,0.06)] relative overflow-hidden my-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] text-[#f4f5f8] font-bold">SPEC: UPC-A BARCODE</span>
          <span className="text-[10px] text-[#10b981] flex items-center gap-1">
            <CheckCircle2 size={12} /> VERIFIED
          </span>
        </div>
        <div className="h-8 flex items-end gap-1 opacity-80 my-2">
          {[24, 18, 30, 12, 28, 20, 32, 16, 26, 22, 30, 14, 28, 18, 32, 10, 24].map((h, i) => (
            <div key={i} className="flex-1 bg-[#f4f5f8]" style={{ height: `${h}px` }} />
          ))}
        </div>
        <div className="text-[10px] text-[#7e8696] flex justify-between mt-2">
          <span>Resolution: 600 DPI</span>
          <span>Quiet Zone: 9.0 mm (Valid)</span>
        </div>
      </div>

      <div className="text-[11px] text-[#9ba2b2] flex items-center justify-between pt-1">
        <span>Artwork Check: 100% Passed</span>
        <span className="text-[#0066ff]">PRE-FLIGHT READY</span>
      </div>
    </div>
  );
};
