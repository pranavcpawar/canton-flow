# Quick Start: Deploy CascadePool to Canton

## Prerequisites

1. **Install Daml SDK** (if not already installed):
   ```bash
   # macOS
   brew install daml-sdk
   
   # Or download from: https://www.digitalasset.com/developers/downloads
   ```

## Deployment Options

### Option 1: Deploy to Canton TestNet (Recommended) 🌐

The Canton TestNet is a public test network where you can deploy and test your contracts without running your own node.

#### 1. Build the Daml Contract

```bash
cd /Users/abhiraj/labs/canton-flow
daml build
```

This creates `.daml/dist/cascade-pool-1.0.0.dar`

#### 2. Get TestNet Access

1. Visit [Canton Developer Resources](https://www.canton.network/developer-resources)
2. Sign up for TestNet access
3. Get your participant node credentials and endpoint

#### 3. Configure for TestNet

Update `participant-config-testnet.json` (create this file) with your TestNet credentials:

```json
{
  "participants": [
    {
      "participant": "participant1",
      "host": "testnet.canton.network",
      "port": 5018,
      "tls": {
        "enabled": true,
        "certChainFile": "path/to/cert.pem",
        "privateKeyFile": "path/to/key.pem"
      }
    }
  ]
}
```

#### 4. Upload DAR to TestNet

```bash
daml script \
  --participant-config participant-config-testnet.json \
  --dar .daml/dist/cascade-pool-1.0.0.dar \
  --script-name Deploy:deploy
```

#### 5. Use Navigator with TestNet

```bash
daml navigator server \
  --participant-config participant-config-testnet.json \
  --dar .daml/dist/cascade-pool-1.0.0.dar
```

### Option 2: Local Development (Docker)

#### 1. Build the Daml Contract

```bash
cd /Users/abhiraj/labs/canton-flow
daml build
```

This creates `.daml/dist/cascade-pool-1.0.0.dar`

#### 2. Start Canton Locally

```bash
docker run -d -p 5018:5018 -p 5019:5019 --name canton \
  digitalasset/canton-open-source:latest
```

#### 3. Upload DAR to Local Canton

#### Using Canton Console:
```bash
# Connect to Canton console
docker exec -it canton bash
# Or if running locally, use the Canton console

# In Canton console:
participant1.dars.upload("/path/to/.daml/dist/cascade-pool-1.0.0.dar")
```

#### Using Daml Script (Alternative):
```bash
daml script \
  --participant-config participant-config.json \
  --dar .daml/dist/cascade-pool-1.0.0.dar \
  --script-name Deploy:deploy
```

#### 4. Verify Deployment

Check that the contracts are available:
```bash
# In Canton console
participant1.dars.list()
```

## Resources

- **Canton TestNet**: https://www.canton.network/blog/testnet-is-now-live
- **Developer Resources**: https://www.canton.network/developer-resources
- **Canton Documentation**: https://docs.daml.com/canton/
- **Daml Community Forum**: https://discuss.daml.com

## Testing the Contract

### Using Daml REPL:
```bash
daml repl
```

Then:
```daml
:load .daml/dist/cascade-pool-1.0.0.dar
```

### Using Navigator (Web UI):
```bash
daml navigator server \
  --participant-config participant-config.json \
  --dar .daml/dist/cascade-pool-1.0.0.dar
```

Then open http://localhost:4000 in your browser.

## Common Issues

1. **Port already in use**: Change ports in `participant-config.json`
2. **DAR not found**: Make sure you ran `daml build` first
3. **Connection refused**: Ensure Canton is running

## Next Steps

- Create parties (Merchant, Investors, Payer)
- Create ReceiptNFT contracts
- Create pools and test the investment flow
- Test repayment and claim functionality

