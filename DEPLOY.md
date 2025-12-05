# Deploying CascadePool to Canton

This guide explains how to deploy the CascadePool Daml contract to Canton.

## Prerequisites

1. **Install Daml SDK**: Download and install from https://www.digitalasset.com/developers/downloads

## Deployment Options

### Option 1: Canton TestNet (Recommended for Testing) 🌐

The Canton TestNet is a public test network launched in July 2023. It's the easiest way to deploy and test your contracts.

**Get Started:**
1. Visit [Canton Developer Resources](https://www.canton.network/developer-resources)
2. Sign up for TestNet access
3. Get your participant node credentials
4. Use `participant-config-testnet.json` with your credentials

**Benefits:**
- No local setup required
- Public test network
- Connect with other developers
- Test interoperability

### Option 2: Local Development

For local development, you can run Canton using Docker or install it locally.

## Step 1: Compile the Daml Contract

```bash
# Navigate to project root
cd /Users/abhiraj/labs/canton-flow

# Build the DAR (Daml Archive) file
daml build
```

This creates a `.dar` file in `.daml/dist/` directory.

## Step 2: Start Canton (Local Development)

### Option A: Using Canton Community Edition

```bash
# Start Canton in demo mode
canton --config examples/01-simple-topology/simple-topology.conf
```

### Option B: Using Docker

```bash
docker run -d -p 5018:5018 -p 5019:5019 --name canton \
  digitalasset/canton-open-source:latest
```

## Step 3: Upload DAR to Canton

### Using Canton Console

1. Start Canton and connect to the console
2. Upload the DAR file:

```bash
# In Canton console
participant1.dars.upload("path/to/cascade-pool.dar")
```

### Using Daml Scripts

Create a deployment script (see `deploy.daml` below) and run:

```bash
daml script --participant-config participant-config.json --dar .daml/dist/cascade-pool-1.0.0.dar --script-name Deploy:deploy
```

## Step 4: Initialize Parties and Contracts

You'll need to:
1. Create parties (Merchant, Investors, Payer)
2. Create initial ReceiptNFT contracts
3. Create PoolFactory contract

## Quick Start Script

See `deploy.daml` for a complete deployment script.

## Testing the Deployment

Use the Daml REPL or create test scripts to verify the deployment:

```bash
daml repl
```

Then in the REPL:
```daml
:load .daml/dist/cascade-pool-1.0.0.dar
```

