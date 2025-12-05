"use client";

import { useState } from "react";

import { DatePicker } from "@/components/ui/date-picker";

export default function Merchant() {
  const [formData, setFormData] = useState({
    orderId: "",
    amount: "",
    dueDate: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating order:", formData);
    // Handle order creation
  };

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute top-30 right-8 h-64 w-64 rounded-full bg-secondary/15 blur-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="mb-10 animate-fade-in text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-[clamp(2.4rem,5vw,3.4rem)] font-bold text-foreground font-outfit">
              Merchant Dashboard
            </h1>
            <p className="text-foreground/70 font-manrope text-lg max-w-2xl mx-auto">
              Create receivable-backed orders, set due dates, and mint QR flows on Canton rails.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 gap-6 items-start">
          {/* Create Sales Order Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="p-6 rounded-2xl border border-primary/20 bg-background/70 backdrop-blur-xl shadow-lg shadow-primary/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground font-space-grotesk">
                    Create Sales Order
                  </h2>
                  <p className="text-sm text-foreground/60 font-manrope">
                    Generate a receivable with a due date and mint a QR for consumers.
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                  On-chain ready
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Order ID */}
                  <div>
                    <label
                      htmlFor="orderId"
                      className="block text-sm font-semibold text-foreground mb-2 font-space-grotesk"
                    >
                      Order ID
                    </label>
                    <input
                      type="text"
                      id="orderId"
                      name="orderId"
                      value={formData.orderId}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., SO-001"
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-space-grotesk"
                    />
                  </div>

                  {/* Amount */}
                  <div>
                    <label
                      htmlFor="amount"
                      className="block text-sm font-semibold text-foreground mb-2 font-space-grotesk"
                    >
                      Amount
                    </label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      required
                      step="0.01"
                      min="0"
                      placeholder="e.g., 100.00"
                      className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-space-grotesk"
                    />
                  </div>
                </div>

                {/* Due Date */}
                <DatePicker
                  id="dueDate"
                  label="Due Date"
                  value={formData.dueDate ? new Date(formData.dueDate) : undefined}
                  onChange={(date) =>
                    setFormData((prev) => ({
                      ...prev,
                      dueDate: date ? date.toLocaleDateString("en-CA") : "",
                    }))
                  }
                  required
                />
                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="flex-1 min-w-[180px] py-3 rounded-lg bg-primary text-background font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 font-space-grotesk"
                  >
                    Create Order
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* MINTED R-NFT */}
          <div className="animate-fade-in" style={{ animationDelay: "0.12s" }}>
            <div className="p-6 rounded-2xl border border-primary/20 bg-background/70 backdrop-blur-xl shadow-lg shadow-primary/10">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground font-space-grotesk">
                  Minted R-NFT Preview
                </h2>
                <p className="text-sm text-foreground/60 font-manrope">
                  Preview of the receivable NFT that will be minted upon order creation.
                </p>
              </div>
              <div className="border border-foreground/10 rounded-xl p-4 bg-background/50">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">📄</div>
                  <h3 className="text-xl font-semibold text-foreground font-space-grotesk">
                    Receivable NFT
                  </h3>
                </div>
                <div className="space-y-3 text-foreground/70 font-manrope text-sm">
                  <p>
                    <span className="font-semibold text-foreground">Order ID:</span>{" "}
                    {formData.orderId || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Amount:</span>{" "}
                    {formData.amount ? `$${formData.amount}` : "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Due Date:</span>{" "}
                    {formData.dueDate || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Description:</span>{" "}
                    {formData.description || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="animate-fade-in" style={{ animationDelay: "0.16s" }}>
            <div className="p-6 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-md shadow-md shadow-primary/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-foreground font-space-grotesk">
                    Recent Orders
                  </h2>
                  <p className="text-sm text-foreground/60 font-manrope">
                    Latest receivables you created
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full border border-primary/20 text-xs text-primary font-semibold">
                  Live sync
                </span>
              </div>
              <div className="text-center py-10 rounded-xl border border-dashed border-foreground/15 bg-foreground/5">
                <div className="text-4xl mb-3">📦</div>
                <p className="text-foreground/70 font-space-grotesk">No orders yet</p>
                <p className="text-sm text-foreground/60 mt-1 font-manrope">
                  Create your first sales order to see it appear here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
