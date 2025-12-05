"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function PoolDetail() {
  const params = useParams();
  const poolId = Array.isArray(params.id) ? params.id[0] : (params.id as string);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Atmospheric Backdrop */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute top-20 right-8 h-64 w-64 rounded-full bg-secondary/15 blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 py-14">
        <div className="max-w-6xl mx-auto mt-4">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in">
            <Link href="/pools">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/20 bg-background/40 backdrop-blur-md hover:border-primary/40 hover:bg-primary/5 font-semibold font-space-grotesk transition-all duration-300">
                ← Back to Pools
              </button>
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12 animate-fade-in space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-space-grotesk">
                Funding
              </span>
              <span className="text-xs text-foreground/60 font-manrope">
                Transparent receivable pool
              </span>
            </div>
            <div className="space-y-3">
              <h1 className="text-[clamp(2.4rem,5vw,3.4rem)] font-bold text-foreground font-outfit">
                Pool #{poolId}
              </h1>
              <p className="text-foreground/70 font-manrope text-lg max-w-2xl">
                Tranche-level visibility, clear funding progress, and receivable details in one
                elegant view.
              </p>
            </div>
          </div>

          {/* Pool Statistics Grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            {[
              { label: "Total Value", value: "$222K" },
              { label: "Total Funded", value: "$85K" },
              { label: "Progress", value: "38.3%" },
              { label: "Receivables", value: "1", subtitle: "Due: 1/19/2026" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl border border-foreground/15 bg-background/70 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] hover:border-primary/40 hover:-translate-y-1 hover:shadow-primary/15 transition-all duration-300"
              >
                <p className="text-[11px] text-foreground/60 uppercase tracking-[0.12em] mb-2 font-space-grotesk">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold font-space-grotesk text-primary">{stat.value}</p>
                {stat.subtitle && (
                  <p className="text-xs text-foreground/50 mt-1 font-manrope">{stat.subtitle}</p>
                )}
              </div>
            ))}
          </div>

          {/* Main Content - Investment Tranches */}
          <div className="mb-16">
            <h2 className="text-center text-3xl font-bold font-outfit mb-8">Investment Tranches</h2>

            <div
              className="grid lg:grid-cols-2 gap-8 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              {/* Senior Tranche */}
              <div className="p-8 rounded-2xl border border-foreground/15 bg-background/80 backdrop-blur-2xl shadow-[0_10px_50px_-24px_rgba(0,0,0,0.8)]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-outfit text-foreground mb-1">
                      Senior Tranche
                    </h3>
                    <p className="text-foreground/60 font-manrope text-sm">
                      Priority tranche with first-loss protection and lower volatility.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-outfit border border-primary/30">
                    Low Risk
                  </span>
                </div>

                {/* ROI and Min Investment */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl border border-foreground/15 bg-background/60">
                    <p className="text-primary text-3xl font-bold font-outfit mb-1">1.0%</p>
                    <p className="text-foreground/60 uppercase text-xs font-space-grotesk tracking-wide">
                      ROI
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-foreground/15 bg-background/60">
                    <p className="text-foreground text-3xl font-bold font-outfit mb-1">$166.5K</p>
                    <p className="text-foreground/60 uppercase text-xs font-space-grotesk tracking-wide">
                      MIN INVESTMENT
                    </p>
                  </div>
                </div>

                {/* Funding Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-foreground font-outfit font-semibold">Funding Progress</p>
                    <p className="text-primary font-bold font-outfit">0.0%</p>
                  </div>
                  <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-linear-to-r from-primary to-primary/70 h-2"
                      style={{ width: "0%" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-foreground/60 font-space-grotesk mt-2">
                    <span>$0</span>
                    <span>$148.203K</span>
                  </div>
                </div>

                {/* Investment Amount */}
                <div className="mb-6">
                  <label className="text-foreground font-outfit font-semibold mb-2 block">
                    Investment Amount
                  </label>
                  <input
                    type="text"
                    placeholder="Min $166.5K"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/20 bg-background/40 placeholder-foreground/40 text-foreground font-outfit focus:outline-none focus:border-primary/40 transition-all"
                  />
                </div>

                {/* Connect Wallet Button */}
                <button className="w-full py-3 rounded-lg bg-primary text-background font-bold font-outfit text-lg transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-primary/30">
                  Connect Wallet
                </button>
              </div>

              {/* Junior Tranche */}
              <div className="p-8 rounded-2xl border border-foreground/15 bg-background/80 backdrop-blur-2xl shadow-[0_10px_50px_-24px_rgba(0,0,0,0.8)]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-outfit text-foreground mb-1">
                      Junior Tranche
                    </h3>
                    <p className="text-foreground/60 font-manrope text-sm">
                      Higher-yield tranche that backstops senior liquidity and captures upside.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-outfit border border-primary/30">
                    High Risk
                  </span>
                </div>

                {/* ROI and Min Investment */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl border border-foreground/15 bg-background/60">
                    <p className="text-primary text-3xl font-bold font-outfit mb-1">13.6%</p>
                    <p className="text-foreground/60 uppercase text-xs font-space-grotesk tracking-wide">
                      ROI
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-foreground/15 bg-background/60">
                    <p className="text-foreground text-3xl font-bold font-outfit mb-1">$55.5K</p>
                    <p className="text-foreground/60 uppercase text-xs font-space-grotesk tracking-wide">
                      MIN INVESTMENT
                    </p>
                  </div>
                </div>

                {/* Funding Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-foreground font-outfit font-semibold">Funding Progress</p>
                    <p className="text-primary font-bold font-outfit">193.6%</p>
                  </div>
                  <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-linear-to-r from-primary to-primary/70 h-2"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-foreground/60 font-space-grotesk mt-2">
                    <span>$85K</span>
                    <span>$43.912K</span>
                  </div>
                </div>

                {/* Investment Amount */}
                <div className="mb-6">
                  <label className="text-foreground font-outfit font-semibold mb-2 block">
                    Investment Amount
                  </label>
                  <input
                    type="text"
                    placeholder="Min $55.5K"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/20 bg-background/40 placeholder-foreground/40 text-foreground font-outfit focus:outline-none focus:border-primary/40 transition-all"
                  />
                </div>

                {/* Connect Wallet Button */}
                <button className="w-full py-3 rounded-lg bg-primary text-background font-bold font-outfit text-lg transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-primary/30">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>

          {/* Receivable NFTs Section */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="p-8 rounded-2xl border border-foreground/15 bg-background/80 backdrop-blur-2xl shadow-[0_10px_50px_-24px_rgba(0,0,0,0.8)]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold font-outfit mb-1">Receivable NFTs (1)</h2>
                  <p className="text-foreground/60 font-manrope">Due: 1/19/2026</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-space-grotesk border border-primary/30">
                  Active
                </span>
              </div>

              {/* NFT Card */}
              <div className="p-6 rounded-2xl border border-foreground/20 bg-background/70 backdrop-blur-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-outfit border border-primary/30">
                        #1
                      </span>
                      <h3 className="text-xl font-bold font-outfit text-foreground">Pool-1-NFT</h3>
                    </div>
                    <p className="text-foreground/60 font-manrope text-sm mb-4">
                      Order: ORDER-FOR-POOL-1
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold font-space-grotesk text-primary mb-2">$222K</p>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-outfit border border-primary/30">
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* NFT Details Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-foreground/60 font-space-grotesk mb-2">
                      Merchant
                    </p>
                    <p className="text-foreground font-semibold font-outfit">0x8A19...2d60</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-foreground/60 font-space-grotesk mb-2">
                      Minted
                    </p>
                    <p className="text-foreground font-semibold font-outfit">12/4/2025</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-foreground/60 font-space-grotesk mb-2">
                      Due Date
                    </p>
                    <p className="text-foreground font-semibold font-outfit mb-1">1/19/2026</p>
                    <p className="text-primary text-xs font-semibold">46 days left</p>
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
