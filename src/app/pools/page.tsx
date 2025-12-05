"use client";

import Link from "next/link";

export default function Pools() {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center animate-fade-in">
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold tracking-tight mb-4 font-outfit">
              Receivable Pools
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-manrope">
              Browse and invest in tokenized receivable pools with transparent, blockchain-secured
              returns
            </p>
          </div>

          {/* Pool Statistics */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="p-6 rounded-xl border border-foreground/20 bg-foreground/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.01]">
              <p className="text-xs text-foreground/60 uppercase tracking-wide mb-2 font-space-grotesk">
                Total Pools
              </p>
              <p className="text-3xl font-bold text-primary font-space-grotesk">0</p>
            </div>

            <div className="p-6 rounded-xl border border-foreground/20 bg-foreground/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.01]">
              <p className="text-xs text-foreground/60 uppercase tracking-wide mb-2 font-space-grotesk">
                Total Value
              </p>
              <p className="text-3xl font-bold text-foreground font-space-grotesk">
                0 <span className="text-xl text-foreground/60">USD</span>
              </p>
            </div>

            <div className="p-6 rounded-xl border border-foreground/20 bg-foreground/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.01]">
              <p className="text-xs text-foreground/60 uppercase tracking-wide mb-2 font-space-grotesk">
                Senior Funding
              </p>
              <p className="text-3xl font-bold text-foreground font-space-grotesk">0</p>
            </div>

            <div className="p-6 rounded-xl border border-foreground/20 bg-foreground/5 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.01]">
              <p className="text-xs text-foreground/60 uppercase tracking-wide mb-2 font-space-grotesk">
                Junior Funding
              </p>
              <p className="text-3xl font-bold text-foreground font-space-grotesk">0</p>
            </div>
          </div>

          {/* Active Pools */}
          <div className="mb-16">
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold font-space-grotesk">Available Pools</h2>
            </div>

            <div className="text-center py-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-6xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold mb-2 font-space-grotesk">No Pools Yet</h3>
              <p className="text-foreground/70 mb-6 font-manrope">
                Be the first to create a receivable pool!
              </p>
              <Link href="/merchant">
                <button className="px-6 py-3 bg-primary text-background rounded-lg font-semibold font-space-grotesk hover:brightness-110 transition-all duration-300 shadow-lg shadow-primary/20">
                  Create First Pool
                </button>
              </Link>
            </div>
          </div>

          {/* Information Section */}
          <div
            className="mt-24 p-6 rounded-2xl border border-primary/20 bg-background/5 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 font-space-grotesk text-primary">
                How Investment Works
              </h3>
              <p className="text-foreground/70 font-manrope">
                Choose your risk level and investment strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-foreground/20 bg-background hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <h4 className="font-bold text-lg font-space-grotesk">Senior Tranche</h4>
                </div>
                <ul className="space-y-2 text-sm text-foreground/70 font-manrope">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                    <span>Lower risk, stable returns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                    <span>Priority claim on receivables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                    <span>Typically 7-10% ROI</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border border-foreground/20 bg-background hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary/70"></div>
                  <h4 className="font-bold text-lg font-space-grotesk">Junior Tranche</h4>
                </div>
                <ul className="space-y-2 text-sm text-foreground/70 font-manrope">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                    <span>Higher risk, higher returns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                    <span>Secondary claim position</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary"></div>
                    <span>Typically 12-16% ROI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
