import React from "react";
import Button from "./ui/Button";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#07080A] text-white flex flex-col justify-start md:justify-center py-3 px-4 sm:p-6">
      <main className="w-full max-w-lg mx-auto">
        {/* Section 1: Top Navigation Header */}
        <header
          id="storefront-header"
          data-visor-id="visor-el-01"
          className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08]"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-sm bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
            <span className="font-mono font-bold tracking-widest text-xs text-white">
              AETHER // LABS
            </span>
          </div>
          <span className="px-2 py-0.5 text-[10px] font-mono tracking-wider font-medium text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded">
            CHECKOUT STEP 02/02
          </span>
        </header>

        {/* Section 2: Promo Banner Component */}
        <div
          id="promo-banner"
          data-visor-id="visor-el-04"
          className="fixed bottom-4 inset-x-4 z-50 h-16 md:static md:z-10 md:mb-3 md:h-auto rounded-lg border-2 border-cyan-400 bg-[#0E1015] p-2.5 text-cyan-200 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono h-full justify-center">
            <div className="flex items-center space-x-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse shrink-0" />
              <span className="font-semibold tracking-tight sm:tracking-wide">
                FLASH LAUNCH OFFER • 20% OFF APPLIED
              </span>
            </div>
            <div className="flex items-center justify-between sm:justify-end space-x-2 pl-3 sm:pl-0">
              <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-[#00E5FF] font-bold border border-cyan-500/30 text-[10px]">
                AETHER20
              </span>
              <span className="text-[#10B981] font-bold">-$47.25</span>
              <button
                type="button"
                id="get-offer-btn"
                className="ml-1 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#00E5FF] hover:bg-[#00c8e0] text-[#07080A] rounded transition-all cursor-pointer shadow-[0_0_10px_rgba(0,229,255,0.25)] active:scale-95 shrink-0"
              >
                GET OFFER NOW
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: Order Summary & Hardware Item Card */}
        <div
          id="order-summary-card"
          data-visor-id="visor-el-02"
          className="rounded-xl bg-[#0E1015] border border-white/[0.08] p-3.5 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/[0.08]">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">Order Summary</h2>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
              2 ITEMS
            </span>
          </div>

          {/* Hardware Items Breakdown */}
          <div className="space-y-1.5 pb-2 border-b border-white/[0.08]">
            <div className="flex items-start justify-between text-xs">
              <div>
                <div className="font-semibold text-white leading-tight">Aether Optic Module v3</div>
                <div className="text-[10px] font-mono text-zinc-500">SPEC: 4K 120FPS // QTY: 1</div>
              </div>
              <div className="font-mono text-zinc-200 font-medium">$179.00</div>
            </div>

            <div className="flex items-start justify-between text-xs">
              <div>
                <div className="font-semibold text-white leading-tight">Carbon Desk Mount</div>
                <div className="text-[10px] font-mono text-zinc-500">SPEC: AEROSPACE CNC // QTY: 1</div>
              </div>
              <div className="font-mono text-zinc-200 font-medium">$57.25</div>
            </div>
          </div>

          {/* Pricing Specs */}
          <div className="pt-2 space-y-1 text-xs font-mono">
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
            <div className="flex justify-between pt-1.5 border-t border-white/[0.08] text-xs font-semibold text-white">
              <span>Total</span>
              <span className="text-[#10B981] text-sm font-bold">$189.00</span>
            </div>
          </div>
        </div>

        {/* Section 4: Primary Checkout CTA Button */}
        <Button
          id="checkout-submit-btn"
          data-visor-id="visor-el-09"
          className="fixed bottom-4 inset-x-4 z-10 h-14 md:static md:mt-4 w-auto md:w-full bg-[#10B981] hover:bg-[#0da371] text-[#07080A] shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-[0.99] font-bold text-sm uppercase tracking-wider cursor-pointer flex items-center justify-center rounded-lg transition-all"
        >
          CONFIRM & PAY $189.00
        </Button>
      </main>
    </div>
  );
}
