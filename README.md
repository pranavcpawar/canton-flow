# Canton Flow

> Decentralized receivables financing platform on Canton Network

Canton Flow tokenizes real-world receivables into tradeable NFTs and deploys them into tranche-based liquidity pools on Canton Network. Merchants receive instant liquidity while investors earn yield through risk-stratified tranches with automated waterfall distribution, all with Canton's privacy-preserving architecture.

## 🎯 Problem Statement

Small businesses face delayed cash flow from unpaid receivables, limiting growth opportunities. Traditional factoring is expensive, opaque, and inaccessible. Investors lack transparent, blockchain-secured yield opportunities backed by real-world receivables with clear risk stratification.

## 💡 Solution

Canton Flow bridges merchants and investors through:

- **Tokenized Receivables:** R-NFTs represent real-world receivables on Canton Network
- **Instant Liquidity:** Merchants receive 80% advance on approval
- **Tranche-Based Pools:** Senior (7-10% APY) and Junior (12-18% APY) tranches
- **Programmable Waterfall:** Automated settlement with priority claim ordering
- **Full Transparency:** On-chain tracking of funding progress and receivable status

## ✨ Key Features

### For Merchants

- 🚀 Immediate 80% advance on approved receivables
- 💰 No credit checks or traditional factoring fees
- 🔗 On-chain transparency and auditability
- 📱 Simple QR-code based order creation

### For Investors

- 📊 Risk-stratified investment tranches (Senior/Junior)
- 🔄 Automated waterfall distribution
- 🔐 Blockchain-secured settlement
- 📈 Real-time funding progress and metrics
- 🎯 8-16% APY yield opportunities

### For Consumers

- ✅ QR code scanning for order verification
- 👁️ Full cashflow transparency
- 🔒 Blockchain-backed security
- 📋 Payment history tracking

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS 4, custom animations
- **UI/UX:** Glassmorphism design, animated count-ups, loading states
- **Fonts:** Outfit, Manrope, Space Grotesk (Google Fonts)
- **Components:** Radix UI, React Day Picker, Framer Motion

### Smart Contracts

- **Canton Network:** DAML smart contracts (`CascadePool.daml`)
- **SDK:** DAML SDK 2.8.0
- **Privacy:** Canton's sub-transaction privacy for sensitive receivables data
- **Interoperability:** Multi-party workflows across participants

### Core Contract Features

- **Receipt NFT:** DAML template representing tokenized invoices/receivables
- **Tranche Holdings:** Map-based tracking of Senior/Junior pool shares
- **Waterfall Logic:** Automated priority-based settlement distribution
- **Pool Management:** Create, fund, repay, and claim operations with choice controllers
- **Privacy-Preserving:** Selective disclosure of financial data to relevant parties

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/pranavcpawar/canton-flow.git
cd canton-flow

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
canton-flow/
├── contract/                   # Smart contracts
│   ├── CascadePool.daml       # Canton Network DAML implementation
│   └── cascadepool.sol        # EVM-compatible reference (unused)
├── src/
│   ├── app/                   # Next.js app router pages
│   │   ├── consumer/          # Consumer portal (QR scanning)
│   │   ├── merchant/          # Merchant dashboard (order creation)
│   │   ├── pools/             # Investment pools listing & detail
│   │   ├── globals.css        # Global styles & animations
│   │   ├── layout.tsx         # Root layout with navbar
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   └── ui/                # Reusable UI components
│   └── lib/
│       ├── fonts.ts           # Google Fonts configuration
│       └── utils.ts           # Utility functions
├── public/
│   └── favicon.svg            # Custom Canton Flow logo
├── daml.yaml                  # DAML project configuration
├── participant-config.json    # Canton node configuration
└── README.md
```

## 🎨 Design Highlights

- **Animated Numbers:** Count-up animations for metrics and progress
- **Staggered Entrance:** Sequential fade-in animations for UI elements
- **Loading States:** Branded shimmer effects and progress indicators
- **Glassmorphism:** Modern backdrop-blur effects throughout
- **Responsive Design:** Mobile-first, optimized for all screen sizes
- **Dark Theme:** Custom color palette with yellow/blue gradients

## 📜 Smart Contract Architecture

### CascadePool.daml (Canton Network)

The Canton implementation leverages DAML's privacy-preserving smart contracts with sub-transaction privacy, ensuring sensitive financial data is only visible to relevant parties.

```daml
-- Receipt NFT: Represents tokenized invoices
template ReceiptNFT
  with
    issuer : Party
    owner : Party
    tokenId : Text
  where
    signatory issuer
    observer owner

    choice Mint : ContractId ReceiptNFT
    choice Transfer : ContractId ReceiptNFT

-- Pool: Main liquidity pool logic
template Pool
  with
    merchant : Party
    receiptNft : ContractId ReceiptNFT
    receivableValue : Decimal      -- Total invoice value
    advanceAmount : Decimal        -- 80% LTV advance
    seniorHoldings : Map Party Decimal
    juniorHoldings : Map Party Decimal
    totalRepaid : Decimal
    isFunded : Bool
  where
    signatory merchant

    choice InvestSenior : ContractId Pool
    choice InvestJunior : ContractId Pool
    choice ClaimAdvance : (ContractId Pool, Decimal)
    choice Repay : ContractId Pool
    choice Claim : (ContractId Pool, Decimal)
```

**Key Features:**

- **Sub-Transaction Privacy:** Only relevant parties see specific pool details
- **Proportional Token Minting:** `(Contribution × FaceValue) / TargetRaise`
- **Map-Based Holdings:** Efficient tracking of investor positions
- **Multi-Party Workflows:** Merchant, investors, and payers have distinct roles
- **Atomic Operations:** State transitions are guaranteed consistent

### Choice Controllers & Logic

1. **InvestSenior/InvestJunior**

   - Controller: Investor
   - Calculates proportional tranche tokens based on contribution
   - Updates Map holdings and pool state
   - Checks funding completion (both tranches full)

2. **ClaimAdvance**

   - Controller: Merchant
   - Requires: `isFunded = True`
   - Returns 80% advance to merchant
   - Marks advance as claimed to prevent double-spending

3. **Repay**

   - Controller: Payer (consumer)
   - Increments `totalRepaid` counter
   - No distribution logic (happens in Claim)

4. **Claim**
   - Controller: Investor
   - Implements waterfall distribution algorithm
   - Burns tokens proportionally to claim amount
   - Validates sufficient holdings before payout

### Waterfall Distribution Logic

```
1. Senior Tranche (Priority):
   seniorFilled = min(totalRepaid, seniorFaceValue)
   Payout = (seniorTokens × seniorFilled) / seniorFaceValue

2. Junior Tranche (Subordinated):
   If totalRepaid > seniorFaceValue:
     remaining = totalRepaid - seniorFaceValue
     juniorFilled = min(remaining, juniorFaceValue)
     Payout = (juniorTokens × juniorFilled) / juniorFaceValue
   Else:
     Payout = 0

3. Token Burn:
   Holdings updated by removing claimed tokens from Map
```

**Canton Network Advantages:**

- **Privacy by Design:** Receivable details only visible to pool participants
- **Regulatory Compliance:** Controlled data sharing for audits
- **Synchronization:** Canton's consensus ensures consistent state
- **Composability:** DAML contracts can interact across legal entities

## 🔮 Future Enhancements

- **Canton Integration:** Frontend connection to Canton participant nodes via JSON API
- **Canton Network Deployment:** Production deployment on Canton Global Synchronization Domain
- **Advanced Analytics:** Real-time portfolio analytics and risk dashboards for investors
- **Credit Scoring:** AI-powered risk assessment for receivables
- **Secondary Market:** P2P trading of tranche tokens and R-NFTs
- **Automated Collections:** Smart notification system for payment reminders
- **Oracle Integration:** Off-chain receivable verification via Chainlink/Canton bridges
- **Multi-Participant Workflows:** Cross-organization pool syndication
- **Privacy Policies:** Granular disclosure controls for sensitive financial data

## 📄 License

This project is part of the Canton Network Ideathon.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Built with ❤️ on Canton Network
