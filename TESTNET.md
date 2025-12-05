# Deploying to Canton TestNet

The **Canton TestNet** is a public test network where you can deploy and test your Daml contracts without running your own node.

## Why Use TestNet?

✅ **No local setup** - No need to run Docker or install Canton locally  
✅ **Public network** - Connect with other developers and test interoperability  
✅ **Free to use** - Perfect for development and testing  
✅ **Production-like** - Test in an environment similar to MainNet  

## Getting Started

### 1. Sign Up for TestNet Access

Visit the [Canton Developer Resources](https://www.canton.network/developer-resources) page and sign up for TestNet access.

You'll receive:
- Participant node endpoint
- TLS certificates (cert.pem and key.pem)
- Connection credentials

### 2. Build Your Contract

```bash
cd /Users/abhiraj/labs/canton-flow
daml build
```

This creates `.daml/dist/cascade-pool-1.0.0.dar`

### 3. Configure TestNet Connection

Update `participant-config-testnet.json` with your TestNet credentials:

```json
{
  "participants": [
    {
      "participant": "participant1",
      "host": "your-testnet-endpoint.canton.network",
      "port": 5018,
      "tls": {
        "enabled": true,
        "certChainFile": "/path/to/your-cert.pem",
        "privateKeyFile": "/path/to/your-key.pem"
      }
    }
  ],
  "ledger": {
    "host": "your-testnet-endpoint.canton.network",
    "port": 6865
  }
}
```

### 4. Deploy to TestNet

```bash
daml script \
  --participant-config participant-config-testnet.json \
  --dar .daml/dist/cascade-pool-1.0.0.dar \
  --script-name Deploy:deploy
```

### 5. Use Navigator with TestNet

```bash
daml navigator server \
  --participant-config participant-config-testnet.json \
  --dar .daml/dist/cascade-pool-1.0.0.dar
```

Then open http://localhost:4000 in your browser to interact with your contracts.

## Resources

- **TestNet Announcement**: https://www.canton.network/blog/testnet-is-now-live
- **Developer Resources**: https://www.canton.network/developer-resources
- **Canton Documentation**: https://docs.daml.com/canton/
- **Community Forum**: https://discuss.daml.com

## Next Steps

Once deployed to TestNet:
1. Create parties (Merchant, Investors, Payer)
2. Create ReceiptNFT contracts
3. Create pools and test the investment flow
4. Test repayment and claim functionality
5. Test interoperability with other applications on TestNet


