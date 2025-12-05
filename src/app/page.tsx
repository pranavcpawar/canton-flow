import Link from "next/link";

export default function Home() {
  const workflows = [
    {
      step: 1,
      title: "Create Order",
      description: "Merchant generates sales order with QR",
      icon: "→",
    },
    {
      step: 2,
      title: "Customer Scan",
      description: "Verification begins instantly",
      icon: "→",
    },
    {
      step: 3,
      title: "Approve",
      description: "Customer confirms the order",
      icon: "→",
    },
    {
      step: 4,
      title: "Mint R-NFT",
      description: "Receivable tokenized on-chain",
      icon: "→",
    },
    {
      step: 5,
      title: "Pool Deposit",
      description: "Added to receivable pool",
      icon: "→",
    },
    {
      step: 6,
      title: "Liquidity",
      description: "80% advance to merchant",
      icon: "✓",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Decorative backdrops */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-secondary/15 blur-2xl" />
        <div className="absolute bottom-10 left-6 h-64 w-64 rounded-full bg-primary/8 blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-28 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-foreground/90 font-space-grotesk font-medium animate-fade-in">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>Live on Canton Network</span>
              </div>

              <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h1
                  className="text-[clamp(2.7rem,6vw,5.2rem)] font-bold leading-[1.05] text-foreground"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Liquidity for
                  <span className="text-primary"> real-world receivables.</span>
                </h1>
                <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed font-manrope">
                  Tokenize, advance, and invest across Canton with composable rails, tranche-aware
                  yield, and instant merchant liquidity.
                </p>
              </div>

              <div
                className="flex flex-wrap items-center gap-4 pt-2 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <Link
                  href="/merchant"
                  className="group relative px-8 py-3 rounded-lg bg-primary text-background font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] hover:brightness-110 font-space-grotesk"
                >
                  <span className="relative z-10">Start as Merchant</span>
                </Link>
                <Link
                  href="/pools"
                  className="px-8 py-3 rounded-lg border border-primary hover:border-primary hover:bg-primary/10 font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98] text-primary font-space-grotesk"
                >
                  Browse Pools
                </Link>
                <div className="flex items-center gap-3 text-sm text-foreground/60 font-manrope">
                  <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center text-primary font-bold">
                    80%
                  </div>
                  <span>Advance on approved receivables</span>
                </div>
              </div>

              <div
                className="grid sm:grid-cols-3 gap-4 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                {[
                  { label: "Advance", value: "80% LTV" },
                  { label: "Investors", value: "Senior & Junior" },
                  { label: "Settlement", value: "Programmable" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-foreground/15 bg-background/60 px-4 py-3 backdrop-blur-sm"
                    style={{ animationDelay: `${0.3 + i * 0.05}s` }}
                  >
                    <p className="text-xs uppercase tracking-wide text-foreground/50 font-space-grotesk">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-foreground font-space-grotesk">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative">
              <div className="absolute -top-6 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute top-10 -left-8 h-16 w-32 rounded-full bg-secondary/15 blur-xl" />
              <div className="relative rounded-2xl border border-primary/20 bg-background/70 backdrop-blur-xl shadow-xl shadow-primary/10 overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary font-bold">
                        CF
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 font-manrope">Receivable Pool</p>
                        <p className="text-lg font-bold text-foreground font-space-grotesk">
                          Canton Yield Series
                        </p>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                      Live
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm font-space-grotesk">
                    <div className="rounded-lg border border-foreground/10 bg-foreground/5 p-3">
                      <p className="text-foreground/60 text-xs">Senior APY</p>
                      <p className="text-xl font-bold text-foreground">7-10%</p>
                    </div>
                    <div className="rounded-lg border border-foreground/10 bg-foreground/5 p-3">
                      <p className="text-foreground/60 text-xs">Junior APY</p>
                      <p className="text-xl font-bold text-primary">12-16%</p>
                    </div>
                    <div className="rounded-lg border border-foreground/10 bg-foreground/5 p-3 col-span-2">
                      <p className="text-foreground/60 text-xs">Advance to Merchant</p>
                      <p className="text-lg font-bold text-foreground">80% on approval</p>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-foreground/10 overflow-hidden">
                        <div className="h-full w-[80%] bg-primary rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-primary/15 bg-primary/5 p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-primary/80 font-space-grotesk">
                        Waterfall
                      </p>
                      <p className="text-sm text-foreground/80 font-manrope">
                        Senior → Junior → Merchant residual
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-foreground/70">
                      <span className="px-2 py-1 rounded-lg bg-background/80 border border-primary/20">
                        Programmable
                      </span>
                      <span className="px-2 py-1 rounded-lg bg-background/80 border border-primary/20">
                        Auditable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2
              className="text-4xl font-bold mb-4 text-foreground"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              How it works
            </h2>
            <p className="text-foreground/60 font-space-grotesk">Six steps to liquid receivables</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />

            <div className="grid md:grid-cols-3 gap-8">
              {workflows.map((workflow, i) => (
                <div
                  key={i}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="relative p-6 rounded-xl border border-foreground/20 bg-background/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
                    {/* Step Number */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background text-sm font-space-grotesk font-bold">
                        {workflow.step}
                      </div>
                      <div className="text-2xl text-primary/60">{workflow.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold mb-2 text-foreground font-space-grotesk">
                      {workflow.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed font-manrope">
                      {workflow.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "For Merchants",
                description: "80% advance on receivables. Instant liquidity without debt.",
                features: ["Immediate cash flow", "No credit checks", "On-chain transparency"],
              },
              {
                title: "For Investors",
                description: "Earn 8-16% APY on tokenized receivables with risk profiles.",
                features: ["Senior & Junior tranches", "Automated waterfall", "Blockchain secured"],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-foreground/15 bg-foreground/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3
                  className="text-2xl font-bold mb-3 text-foreground"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {section.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed font-manrope">
                  {section.description}
                </p>
                <ul className="space-y-3">
                  {section.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm text-foreground font-space-grotesk"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center animate-fade-in bg-primary/5">
          <div className="p-12 rounded-2xl border border-primary/50 bg-background/10">
            <h2
              className="text-3xl font-bold mb-4 text-primary"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Ready to get started?
            </h2>
            <p className="text-foreground/70 mb-8 font-manrope">
              Join the future of receivables financing on Canton Network.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/merchant"
                className="px-8 py-3 rounded-lg bg-primary text-background font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] hover:brightness-110 font-space-grotesk"
              >
                Launch App
              </Link>
              <a
                href="https://www.canton.network"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg border border-primary hover:border-primary hover:bg-primary/10 font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98] text-primary font-space-grotesk"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
