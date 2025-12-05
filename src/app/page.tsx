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
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-foreground/90 font-space-grotesk font-medium animate-fade-in">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Live on Canton Network</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-[clamp(2.5rem,8vw,5rem)] font-bold tracking-tight leading-[1.1] text-foreground animate-fade-in"
              style={{ fontFamily: "var(--font-outfit)", animationDelay: "0.1s" }}
            >
              Receivables,
              <br />
              <span className="text-primary">reimagined.</span>
            </h1>

            {/* Description */}
            <p
              className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed animate-fade-in font-manrope"
              style={{ animationDelay: "0.2s" }}
            >
              Transform receivables into liquid assets. Instant liquidity for merchants, transparent
              returns for investors on Canton Network.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex items-center justify-center gap-4 pt-4 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
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
            <div className="absolute top-8 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent hidden md:block" />

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
                className="p-8 rounded-xl border border-foreground/20 bg-background/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
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
