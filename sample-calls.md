# Query & Transact Advanced Query sample API calls (preview)

## `coinbaseCloud_getBalances`

### USDC (ERC-20)

#### request

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getBalances", "params": {"addressAndContractList": [{ "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d",
 "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" }, { "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d", "contract": "0x6b175474e89094c44da98b954eedeac495271d0f" } ], "blockchain": "Ethereum", "network": "Mainnet" } }'
```

#### response

```shell
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "balances": [
            {
                "blockHeight": 14850011,
                "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d",
                "nativeAmount": "286140202651320955",
                "tokenBalances": [
                    {
                        "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                        "amount": "62884134",
                        "decimals": 6
                    },
                    {
                        "contract": "0x6b175474e89094c44da98b954eedeac495271d0f",
                        "amount": "1871941363914734149",
                        "decimals": 18
                    }
                ]
            }
        ]
    }
}
```

### NFT (ERC-721)

#### request

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getBalances", "params": {"addressAndContractList": [{ "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d",
 "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" }, { "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d", "contract": "0x6b175474e89094c44da98b954eedeac495271d0f" } ], "blockchain": "Ethereum", "network": "Mainnet" } }'
```

#### response

```shell
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "balances": [
            {
                "blockHeight": 14850011,
                "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d",
                "nativeAmount": "286140202651320955",
                "tokenBalances": [
                    {
                        "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                        "amount": "62884134",
                        "decimals": 6
                    },
                    {
                        "contract": "0x6b175474e89094c44da98b954eedeac495271d0f",
                        "amount": "1871941363914734149",
                        "decimals": 18
                    }
                ]
            }
        ]
    }
}
```

## `coinbaseCloud_getSingleBalance`

### USDC (ERC-20)

#### request

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getBalances", "params": {"addressAndContractList": [{ "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d",
 "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" }, { "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d", "contract": "0x6b175474e89094c44da98b954eedeac495271d0f" } ], "blockchain": "Ethereum", "network": "Mainnet" } }'
```

#### response

```shell
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": {
        "balances": [
            {
                "blockHeight": 14850011,
                "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d",
                "nativeAmount": "286140202651320955",
                "tokenBalances": [
                    {
                        "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                        "amount": "62884134",
                        "decimals": 6
                    },
                    {
                        "contract": "0x6b175474e89094c44da98b954eedeac495271d0f",
                        "amount": "1871941363914734149",
                        "decimals": 18
                    }
                ]
            }
        ]
    }
}
```
