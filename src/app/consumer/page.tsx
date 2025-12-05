"use client";

import { useState } from "react";

export default function Consumer() {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute top-20 right-8 h-64 w-64 rounded-full bg-secondary/15 blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="mb-10 animate-fade-in text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-[clamp(2.4rem,5vw,3.4rem)] font-bold text-foreground font-outfit">
              Consumer Portal
            </h1>
            <p className="text-foreground/70 font-manrope text-lg max-w-2xl mx-auto">
              Scan QR codes, verify orders, approve receivables, and track payment history with
              blockchain security.
            </p>
          </div>
        </div>

        <div
          className="mb-8 grid sm:grid-cols-3 gap-3 animate-fade-in"
          style={{ animationDelay: "0.05s" }}
        >
          {[
            { label: "Approval", value: "Instant verify" },
            { label: "Security", value: "On-chain audit" },
            { label: "Transparency", value: "Full cashflow" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-foreground/10 bg-background/60 backdrop-blur-md px-4 py-3 flex flex-col gap-1 shadow-sm shadow-primary/10"
            >
              <span className="text-[11px] uppercase tracking-wide text-foreground/60 font-space-grotesk">
                {item.label}
              </span>
              <span className="text-lg font-semibold text-foreground font-space-grotesk">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {!isScanning && (
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Ready to Scan Card */}
            <div className="p-8 rounded-2xl border border-primary/20 bg-background/70 backdrop-blur-xl shadow-lg shadow-primary/10">
              <div className="text-center space-y-6">
                <div className="text-8xl">📱</div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-foreground font-outfit">Ready to Scan</h2>
                  <p className="text-foreground/70 text-lg font-manrope max-w-lg mx-auto">
                    Tap the button below to start scanning a merchant&apos;s receivable QR code for
                    verification.
                  </p>
                </div>
                <button
                  onClick={() => setIsScanning(true)}
                  className="px-8 py-3 rounded-lg bg-primary text-background font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] hover:brightness-110 font-space-grotesk text-lg inline-flex items-center justify-center"
                >
                  Start QR Scanner
                </button>
              </div>
            </div>

            {/* Payment History */}
            <div
              className="p-6 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-md shadow-md shadow-primary/10 animate-fade-in"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground font-space-grotesk">
                    Payment History
                  </h2>
                  <p className="text-sm text-foreground/60 font-manrope">
                    Track your verified and approved orders
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full border border-primary/20 text-xs text-primary font-semibold">
                  Live sync
                </span>
              </div>
              <div className="text-center py-10 rounded-xl border border-dashed border-foreground/15 bg-foreground/5">
                <div className="text-4xl mb-3">💳</div>
                <p className="text-foreground/70 font-space-grotesk">No payments yet</p>
                <p className="text-sm text-foreground/60 mt-1 font-manrope">
                  Start scanning QR codes to approve and track payments.
                </p>
              </div>
            </div>

            {/* How it works */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-2 font-outfit">
                  How it works
                </h3>
                <p className="text-foreground/60 font-space-grotesk">
                  Four simple steps to verify and approve orders
                </p>
              </div>

              <div className="relative">
                <div className="absolute top-8 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent hidden md:block" />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      step: 1,
                      title: "Scan QR Code",
                      description: "Scan the merchant's QR code",
                      icon: "📱",
                    },
                    {
                      step: 2,
                      title: "Review Details",
                      description: "Review the order details",
                      icon: "📋",
                    },
                    {
                      step: 3,
                      title: "Approve Order",
                      description: "Approve or reject the order",
                      icon: "✓",
                    },
                    {
                      step: 4,
                      title: "Confirmation",
                      description: "Wait for blockchain confirmation",
                      icon: "✓",
                    },
                  ].map((workflow, i) => (
                    <div
                      key={i}
                      className="group relative animate-fade-in"
                      style={{ animationDelay: `${i * 0.1 + 0.25}s` }}
                    >
                      <div className="relative p-6 rounded-xl border border-foreground/15 bg-background/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background text-sm font-space-grotesk font-bold shadow-md shadow-primary/30">
                            {workflow.step}
                          </div>
                          <div className="text-2xl text-primary/60">{workflow.icon}</div>
                        </div>

                        <h3 className="text-lg font-bold mb-2 text-foreground font-space-grotesk">
                          {workflow.title}
                        </h3>
                        <p className="text-sm text-foreground/70 font-manrope">
                          {workflow.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {isScanning && (
          <div className="p-8 rounded-2xl border border-primary/20 bg-background/70 backdrop-blur-xl shadow-lg shadow-primary/10 text-center space-y-6 animate-fade-in">
            <div className="text-6xl">📷</div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground font-outfit">Scanning Mode</h2>
              <p className="text-foreground/70 font-manrope text-lg">
                Point your camera at the merchant&apos;s QR code to scan
              </p>
            </div>
            <div className="h-48 rounded-xl border border-dashed border-primary/30 bg-background/50 flex items-center justify-center">
              <p className="text-foreground/60 font-manrope">Camera feed would appear here</p>
            </div>
            <button
              onClick={() => setIsScanning(false)}
              className="px-6 py-2 rounded-lg border border-foreground/20 bg-background text-foreground font-semibold transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 font-space-grotesk inline-flex items-center justify-center"
            >
              Cancel Scan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
