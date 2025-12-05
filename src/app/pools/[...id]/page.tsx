"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function PoolDetail() {
  const params = useParams();
  const poolId = Array.isArray(params.id) ? params.id[0] : (params.id as string);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <Link href="/pools">
              <button className="flex items-center gap-2 px-4 py-2 bg-background/10 hover:bg-background/20 border border-primary/20 rounded-lg font-semibold font-space-grotesk transition-all duration-300">
                ← Back to Pools
              </button>
            </Link>
          </div>

          <div className="mb-12 text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-5xl font-bold text-foreground mb-4 font-outfit">Pool #{poolId}</h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed font-manrope">
              Investment pool details and statistics
            </p>
          </div>

          {/* Pool Overview */}
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="border border-primary/20 bg-background/5 rounded-xl p-6 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/60 font-bold uppercase tracking-wide mb-2 font-space-grotesk">
                    Total Value
                  </p>
                  <p className="text-3xl font-bold text-foreground font-space-grotesk">0</p>
                </div>
              </div>
            </div>

            <div className="border border-primary/20 bg-background/5 rounded-xl p-6 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/60 font-bold uppercase tracking-wide mb-2 font-space-grotesk">
                    Progress
                  </p>
                  <p className="text-3xl font-bold text-primary font-space-grotesk">0%</p>
                </div>
              </div>
            </div>

            <div className="border border-primary/20 bg-background/5 rounded-xl p-6 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/60 font-bold uppercase tracking-wide mb-2 font-space-grotesk">
                    Receivables
                  </p>
                  <p className="text-3xl font-bold text-foreground font-space-grotesk">0</p>
                </div>
              </div>
            </div>

            <div className="border border-primary/20 bg-background/5 rounded-xl p-6 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/60 font-bold uppercase tracking-wide mb-2 font-space-grotesk">
                    Investors
                  </p>
                  <p className="text-3xl font-bold text-foreground font-space-grotesk">0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Tranches */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground font-space-grotesk">
              Investment Tranches
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="border border-primary/20 bg-background/5 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground font-space-grotesk">
                  Senior Tranche
                </h3>
                <p className="text-foreground/70 mb-4 font-manrope">
                  Lower risk investment with priority claims
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60 font-space-grotesk">Target Raise</span>
                    <span className="font-bold text-foreground font-space-grotesk">0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60 font-space-grotesk">Current Funding</span>
                    <span className="font-bold text-primary font-space-grotesk">0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60 font-space-grotesk">APY</span>
                    <span className="font-bold text-primary font-space-grotesk">7-10%</span>
                  </div>
                </div>
              </div>

              <div className="border border-primary/20 bg-background/5 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground font-space-grotesk">
                  Junior Tranche
                </h3>
                <p className="text-foreground/70 mb-4 font-manrope">
                  Higher risk, higher returns investment
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60 font-space-grotesk">Target Raise</span>
                    <span className="font-bold text-foreground font-space-grotesk">0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60 font-space-grotesk">Current Funding</span>
                    <span className="font-bold text-primary font-space-grotesk">0</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground/60 font-space-grotesk">APY</span>
                    <span className="font-bold text-primary font-space-grotesk">12-16%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
