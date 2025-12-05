"use client";

import { useState } from "react";

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
    <div className="w-full min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 animate-fade-in flex items-center flex-col">
          <h1 className="text-5xl font-bold text-foreground font-outfit mb-2">
            Merchant Dashboard
          </h1>
          <p className="text-foreground/70 font-space-grotesk">
            Create and manage your sales orders with blockchain-powered security
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {/* Create Sales Order Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="p-6 rounded-xl border border-primary/20 bg-background/5">
              <h2 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">
                Create Sales Order
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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

                {/* Due Date */}
                <div>
                  <label
                    htmlFor="dueDate"
                    className="block text-sm font-semibold text-foreground mb-2 font-space-grotesk"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-space-grotesk"
                  />
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-foreground mb-2 font-space-grotesk"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Order details..."
                    className="w-full px-4 py-3 rounded-lg border border-foreground/20 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-space-grotesk"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-primary text-background font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 font-space-grotesk"
                >
                  Generate QR Code
                </button>
              </form>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="p-6 rounded-xl border border-primary/20 bg-background/5">
              <h2 className="text-2xl font-bold text-foreground mb-6 font-space-grotesk">
                Recent Orders
              </h2>
              <div className="text-center py-8">
                <div className="text-4xl mb-3">📦</div>
                <p className="text-foreground/60 font-space-grotesk">No orders yet</p>
                <p className="text-sm text-foreground/50 mt-2 font-manrope">
                  Create your first sales order to get started
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
