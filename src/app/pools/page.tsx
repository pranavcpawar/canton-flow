"use client";

import { useEffect, useMemo, useState } from "react";

function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1400,
  className = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(target * progress);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [duration, target]);

  const formatted = useMemo(() => {
    const factor = Math.pow(10, decimals);
    const rounded = Math.round(value * factor) / factor;
    return `${prefix}${rounded.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}${suffix}`;
  }, [decimals, prefix, suffix, value]);

  return <span className={className}>{formatted}</span>;
}

export default function Pools() {
  const [seniorProgress, setSeniorProgress] = useState(0);
  const [juniorProgress, setJuniorProgress] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setSeniorProgress(0);
      setJuniorProgress(100);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden animate-fade-in">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute top-20 right-8 h-64 w-64 rounded-full bg-secondary/15 blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 py-14">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center animate-fade-in space-y-4">
            <div className="space-y-2">
              <h1 className="text-[clamp(2.4rem,5vw,3.4rem)] font-bold text-foreground font-outfit">
                Receivable Pools
              </h1>
              <p className="text-foreground/70 font-manrope text-lg max-w-2xl mx-auto">
                Browse and invest in tokenized receivable pools with transparent, blockchain-secured
                returns and tranche-aware yield.
              </p>
            </div>
          </div>

          {/* Pool Statistics */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            {[
              { label: "Total Pools", value: 1, highlight: true },
              { label: "Total Value", value: 50, prefix: "$", suffix: "K", highlight: false },
              { label: "Senior Funding", value: 30, prefix: "$", suffix: "K", highlight: false },
              { label: "Junior Funding", value: 20, prefix: "$", suffix: "K", highlight: false },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl border border-foreground/15 bg-background/60 backdrop-blur-md hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] shadow-sm shadow-primary/10"
                style={{ animationDelay: `${0.05 + i * 0.05}s` }}
              >
                <p className="text-xs text-foreground/60 uppercase tracking-wide mb-2 font-space-grotesk">
                  {stat.label}
                </p>
                <AnimatedNumber
                  target={stat.value}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix ?? ""}
                  className={`text-3xl font-bold font-space-grotesk ${
                    stat.highlight ? "text-primary" : "text-foreground"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Active Pools */}
          <div className="mb-16">
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-bold font-space-grotesk">Available Pools</h2>
              <p className="text-sm text-foreground/60 font-manrope mt-1">
                Live receivable pools ready for investment
              </p>
            </div>

            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in"
              style={{ animationDelay: "0.15s" }}
            >
              {/* Pool Card */}
              <div className="p-8 rounded-3xl border border-primary/30 bg-background/50 backdrop-blur-xl hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground font-outfit mb-1">Pool #1</h2>
                    <p className="text-foreground/60 font-manrope text-xs">
                      Receivable financing for merchant
                    </p>
                    <p className="text-foreground/40 font-mono text-xs mt-1">0x8A19...2d60</p>
                  </div>
                  <span className="px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold font-outfit">
                    funding
                  </span>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl border border-foreground/15 bg-background/40 backdrop-blur-sm">
                    <AnimatedNumber
                      target={222}
                      className="text-3xl font-bold text-foreground font-space-grotesk mb-0.5"
                    />
                    <p className="text-foreground/60 uppercase text-xs font-space-grotesk tracking-wide">
                      Total Value
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl border border-foreground/15 bg-background/40 backdrop-blur-sm">
                    <AnimatedNumber
                      target={44.2}
                      suffix="%"
                      decimals={1}
                      className="text-3xl font-bold text-primary font-space-grotesk mb-0.5"
                    />
                    <p className="text-foreground/60 uppercase text-xs font-space-grotesk tracking-wide">
                      Funded
                    </p>
                  </div>
                </div>

                {/* Tranches */}
                <div className="space-y-3">
                  {/* Senior Tranche */}
                  <div className="p-4 rounded-2xl border border-foreground/15 bg-background/40 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-semibold text-foreground font-outfit text-sm">
                          Senior
                        </span>
                      </div>
                      <span className="text-primary font-bold text-xs font-outfit">1.01% ROI</span>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-primary h-1.5 rounded-full transition-all duration-1200"
                        style={{ width: `${seniorProgress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-foreground/50 font-space-grotesk">
                      <AnimatedNumber target={0} suffix=" HBAR" className="text-foreground/50" />
                      <AnimatedNumber
                        target={148.203}
                        decimals={3}
                        suffix=" HBAR"
                        className="text-foreground/50"
                      />
                    </div>
                  </div>

                  {/* Junior Tranche */}
                  <div className="p-4 rounded-2xl border border-foreground/15 bg-background/40 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-semibold text-foreground font-outfit text-sm">
                          Junior
                        </span>
                      </div>
                      <span className="text-primary font-bold text-xs font-outfit">13.64% ROI</span>
                    </div>
                    <div className="w-full bg-foreground/10 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-primary h-1.5 rounded-full transition-all duration-1200"
                        style={{ width: `${juniorProgress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-foreground/50 font-space-grotesk">
                      <AnimatedNumber target={85} suffix=" HBAR" className="text-foreground/50" />
                      <AnimatedNumber
                        target={43.912}
                        decimals={3}
                        suffix=" HBAR"
                        className="text-foreground/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-2 pt-3 border-t border-foreground/10 text-foreground/50 text-xs font-manrope">
                  <span>1 NFTs</span>
                  <span>•</span>
                  <span>Due 1/19/2026</span>
                </div>

                {/* CTA */}
                <button className="w-full py-3 rounded-xl bg-primary text-background font-bold font-outfit text-base transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:shadow-primary/30 active:scale-95">
                  Invest Now
                </button>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div
            className="mt-20 p-8 rounded-2xl border border-primary/20 bg-background/70 backdrop-blur-xl shadow-lg shadow-primary/10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-3 font-outfit text-foreground">
                How Investment Works
              </h3>
              <p className="text-foreground/70 font-manrope text-lg">
                Choose your risk level and investment strategy with transparent tranche-based
                returns
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-7 rounded-2xl border border-primary/20 bg-background/70 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-md shadow-primary/30"></div>
                  <h4 className="font-bold text-xl font-space-grotesk text-foreground">
                    Senior Tranche
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-foreground/70 font-manrope">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                    <span>Lower risk, stable returns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                    <span>Priority claim on receivables</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                    <span>Typically 7-10% ROI</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                    <span>First in waterfall</span>
                  </li>
                </ul>
              </div>
              <div className="p-7 rounded-2xl border border-secondary/30 bg-background/70 hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-secondary/10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-secondary shadow-md shadow-secondary/30"></div>
                  <h4 className="font-bold text-xl font-space-grotesk text-foreground">
                    Junior Tranche
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-foreground/70 font-manrope">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                    <span>Higher risk, higher returns</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                    <span>Secondary claim position</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                    <span>Typically 12-18% ROI</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                    <span>Second in waterfall</span>
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
