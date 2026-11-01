import React from "react";
import Button from "./ui/Button";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#07080A] text-white flex flex-col justify-start md:justify-center px-4 py-5 sm:p-6">
      <main className="w-full max-w-lg mx-auto">
        {/* Section 1: Top Navigation Header */}
        <header
          id="storefront-header"
          data-visor-id="visor-el-01"
          className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]"
        >
          <div className="flex items-center space-x-2.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
            <span className="font-mono font-bold tracking-widest text-sm text-white">
              AETHER // LABS
            </span>
          </div>
          <span className="px-2.5 py-1 text-[11px] font-mono tracking-wider font-medium text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded">
            CHECKOUT STEP 02/02
          </span>
        </header>

        {/* Section 2: Promo Banner Component */}
        <div
          id="promo-banner"
          data-visor-id="visor-el-04"
          className="fixed bottom-3 inset-x-3 z-50 h-16 md:static md:z-10 md:mb-4 md:h-auto rounded-lg border border-cyan-500/30 bg-cyan-950/30 p-3 text-cyan-200"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse shrink-0" />
              <span className="font-semibold tracking-tight sm:tracking-wide">
                FLASH LAUNCH OFFER • 20% OFF APPLIED
              </span>
            </div>
            <div className="flex items-center justify-between sm:justify-end space-x-2 pl-3.5 sm:pl-0">
              <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-[#00E5FF] font-bold border border-cyan-500/30 text-[10px]">
                AETHER20
              </span>
              <span className="text-[#10B981] font-bold">-$47.25</span>
            </div>
          </div>
        </div>

        {/* Section 3: Order Summary & Hardware Item Card */}
        <div
          id="order-summary-card"
          data-visor-id="visor-el-02"
          className="rounded-xl bg-[#0E1015] border border-white/[0.08] p-4 sm:p-5 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-400">Order Summary</h2>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
              2 ITEMS
            </span>
          </div>

          {/* Hardware Items Breakdown */}
          <div className="space-y-3 pb-3 border-b border-white/[0.08]">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-sm text-white">Aether Optic Module v3</div>
                <div className="text-[11px] font-mono text-zinc-500">SPEC: 4K 120FPS // QTY: 1</div>
              </div>
              <div className="font-mono text-sm text-zinc-200 font-medium">$179.00</div>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-sm text-white">Carbon Desk Mount</div>
                <div className="text-[11px] font-mono text-zinc-500">SPEC: AEROSPACE CNC // QTY: 1</div>
              </div>
              <div className="font-mono text-sm text-zinc-200 font-medium">$57.25</div>
            </div>
          </div>

          {/* Pricing Specs */}
          <div className="pt-3 space-y-1.5 text-xs font-mono">
            <div className="flex justify-between text-zinc-400">
              <span>Subtotal</span>
              <span className="text-zinc-300">$236.25</span>
            </div>
            <div className="flex justify-between text-[#00E5FF]">
              <span>Discount (AETHER20)</span>
              <span>-$47.25</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Shipping</span>
              <span className="text-[#10B981] font-semibold">FREE</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-white/[0.08] text-sm font-semibold text-white">
              <span>Total</span>
              <span className="text-[#10B981] text-base font-bold">$189.00</span>
            </div>
          </div>
        </div>

        {/* Section 4: Primary Checkout CTA Footer Bar */}
        <div className="fixed bottom-4 inset-x-4 z-10 md:static md:mt-6">
          <Button
            id="checkout-submit-btn"
            data-visor-id="visor-el-09"
            className="w-full bg-[#10B981] hover:bg-[#0da371] text-[#07080A] shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-[0.99] font-bold text-sm uppercase tracking-wider cursor-pointer"
          >
            CONFIRM & PAY $189.00
          </Button>
        </div>
      </main>
    </div>
  );
}

