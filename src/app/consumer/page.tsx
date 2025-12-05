"use client";

import { useState } from "react";

export default function Consumer() {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-4 font-outfit">Consumer Portal</h1>
          <p className="text-foreground/70 text-lg font-manrope">
            Scan QR codes to verify and approve sales orders with blockchain-powered security
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {!isScanning && (
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="p-12 rounded-xl border border-primary/20 bg-background/5 mb-8">
                <div className="text-8xl mb-6">📱</div>
                <h2 className="text-3xl font-bold mb-4 text-foreground font-outfit">
                  Ready to Scan
                </h2>
                <p className="text-foreground/70 mb-8 text-lg leading-relaxed max-w-md mx-auto font-manrope">
                  Tap the button below to start scanning a merchant&apos;s QR code
                </p>
                <button
                  onClick={() => setIsScanning(true)}
                  className="px-8 py-3 rounded-lg bg-primary text-background font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] hover:brightness-110 font-space-grotesk text-lg"
                >
                  Start QR Scanner
                </button>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-foreground mb-3 font-outfit">
                    How it works
                  </h3>
                  <p className="text-foreground/60 font-space-grotesk">
                    Four simple steps to approve orders
                  </p>
                </div>

                <div className="relative">
                  {/* Connection Line */}
                  <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />

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
                        description: "Wait for confirmation",
                        icon: "✓",
                      },
                    ].map((workflow, i) => (
                      <div
                        key={i}
                        className="group relative animate-fade-in"
                        style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
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
                          <h3 className="text-lg font-medium mb-2 text-foreground font-space-grotesk">
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
            <div className="text-center animate-fade-in">
              <div className="p-12 rounded-xl border border-primary/20 bg-background/5">
                <div className="text-6xl mb-6">📷</div>
                <h2 className="text-2xl font-bold mb-4 text-foreground font-outfit">
                  Scanning Mode
                </h2>
                <p className="text-foreground/70 mb-8 font-manrope">
                  Point your camera at the QR code
                </p>
                <button
                  onClick={() => setIsScanning(false)}
                  className="px-6 py-2 rounded-lg border border-foreground/20 bg-background text-foreground font-semibold transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 font-space-grotesk"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
