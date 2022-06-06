# Query & Transact Advanced Query sample API calls (preview)

## getBalances

### <a name="getBalancesERC20">USDC & DAI (ERC-20)</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getBalances", "params": {"addressAndContractList": [{ "address": "0x00000000DF0635793e91d4f8e7426dbd9ed08471186f428D", "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" }, { "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d", "contract": "0x6b175474e89094c44da98b954eedeac495271d0f" } ], "blockchain": "Ethereum", "network": "Mainnet" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [
    {
      "blockHeight": 14893778,
      "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d",
      "nativeAmount": "93166839672705001",
      "nativeUnit": "Wei",
      "tokenBalances": [
        {
          "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "amount": "60914134",
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
```

### <a name="getBalancesERC721">NFT (ERC-721)</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getBalances", "params": { "addressAndContractList": [ { "address": "0xa3e90da6c1d5ea0b1b4e881d1eaaaaaaf3c25cc2", "contract": "0x5180db8F5c931aaE63c74266b211F580155ecac8" } ] } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [
    {
      "blockHeight": 14893778,
      "address": "0xa3e90da6c1d5ea0b1b4e881d1eaaaaaaf3c25cc2",
      "nativeAmount": "61889627444351055967",
      "nativeUnit": "Wei",
      "tokenBalances": [
        {
          "contract": "0x5180db8f5c931aae63c74266b211f580155ecac8",
          "amount": "3",
          "decimals": 1
        }
      ]
    }
  ]
}
```

## getSingleBalance

### <a name="getSingleBalanceERC20">USDC (ERC-20)</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getSingleBalance", "params": { "address": "0x00000000DF0635793e91d4f8e7426dbd9ed08471186f428D", "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "blockchain": "Ethereum", "network": "Mainnet" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "blockHeight": 14893778,
    "address": "0xdf0635793e91d4f8e7426dbd9ed08471186f428d",
    "nativeAmount": "93166839672705001",
    "nativeUnit": "Wei",
    "tokenBalance": {
      "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "amount": "60914134",
      "decimals": 6
    }
  }
}
```

### <a name="getSingleBalanceERC721">NFT (ERC-721)</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getSingleBalance", "params": { "address": "0xa3e90da6c1d5ea0b1b4e881d1eaaaaaaf3c25cc2", "contract": "0x5180db8F5c931aaE63c74266b211F580155ecac8", "blockchain": "Ethereum", "network": "Mainnet" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "blockHeight": 14893779,
    "address": "0xa3e90da6c1d5ea0b1b4e881d1eaaaaaaf3c25cc2",
    "nativeAmount": "61889627444351055967",
    "nativeUnit": "Wei",
    "tokenBalance": {
      "contract": "0x5180db8f5c931aae63c74266b211f580155ecac8",
      "amount": "3",
      "decimals": 1
    }
  }
}
```

## getTokenAllowances

### <a name="getTokenAllowancesERC20">USDT (ERC-20)</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getTokenAllowances", "params": { "allowances": [ { "owner": "0xa646147bda82a866eba03568f363fc9c90185c6e", "spender": "0xadd0e097b961572b2a1f5de572c622eef97e3d82", "contracts": [ "0xdac17f958d2ee523a2206206994597c13d831ec7" ] } ] } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": [
    {
      "blockHeight": 14893780,
      "owner": "0xa646147bda82a866eba03568f363fc9c90185c6e",
      "spender": "0xadd0e097b961572b2a1f5de572c622eef97e3d82",
      "tokenAllowances": [
        {
          "contract": "0xdac17f958d2ee523a2206206994597c13d831ec7",
          "amount": "411256436224324320870982430867023952481793415358246197461731293",
          "decimals": 6
        }
      ]
    }
  ]
}
```

## getTransactionsByAddress

### <a name="getTransactionsByAddressERC20">ERC-20</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getTransactionsByAddress", "params": { "address": "0x3cd751e6b0078be393132286c442345e5dc49699", "blockStart": 14431488, "blockEnd": 14431489, "addressFilter": "SENDER_OR_RECEIVER", "blockchain": "Ethereum", "network": "Mainnet" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "blockStart": 14431488,
    "blockEnd": 14431489,
    "blocks": [
      {
        "blockHash": "0x2c52d4bb68c6e56272974d21bd5afc7a01ec33093249d9d5ec0b74048a8389d5",
        "blockNumber": 14431489,
        "blockTimestamp": 1647889630,
        "transactions": [
          {
            "transactionHash": "0x07160e2164087a3812abbe5e74109be176b0650bbe4be44f4e280fe3ee221a6d",
            "transactionIndex": 61,
            "from": "0x3cd751e6b0078be393132286c442345e5dc49699",
            "to": "0x912a523a10e052900b571889b07ff4f2fd86e029",
            "value": "157704540000000000",
            "gasLimit": 21000,
            "gasPrice": 35105275699,
            "gasUsed": 21000,
            "status": "1",
            "input": "0x",
            "nonce": 6843177,
            "blockHash": "0x2c52d4bb68c6e56272974d21bd5afc7a01ec33093249d9d5ec0b74048a8389d5",
            "blockNumber": 14431489,
            "blockTimestamp": 1647889630,
            "internalTransactions": [
              {
                "traceType": "CALL",
                "from": "0x3cd751e6b0078be393132286c442345e5dc49699",
                "to": "0x912a523a10e052900b571889b07ff4f2fd86e029",
                "value": "157704540000000000"
              }
            ]
          },
          {
            "transactionHash": "0x8409c799d35dbb1500f7083f99a7373aee8308bf39e543a95a9de16e70315d31",
            "transactionIndex": 74,
            "from": "0x3cd751e6b0078be393132286c442345e5dc49699",
            "to": "0x3f54e2d84e42b113af00ab489c01adb0c5cf62d2",
            "value": "24776000000000000",
            "gasLimit": 21000,
            "gasPrice": 35105275699,
            "gasUsed": 21000,
            "status": "1",
            "input": "0x",
            "nonce": 6843178,
            "blockHash": "0x2c52d4bb68c6e56272974d21bd5afc7a01ec33093249d9d5ec0b74048a8389d5",
            "blockNumber": 14431489,
            "blockTimestamp": 1647889630,
            "internalTransactions": [
              {
                "traceType": "CALL",
                "from": "0x3cd751e6b0078be393132286c442345e5dc49699",
                "to": "0x3f54e2d84e42b113af00ab489c01adb0c5cf62d2",
                "value": "24776000000000000"
              }
            ]
          },
          {
            "transactionHash": "0x07160e2164087a3812abbe5e74109be176b0650bbe4be44f4e280fe3ee221a6d",
            "transactionIndex": 61,
            "from": "0x3cd751e6b0078be393132286c442345e5dc49699",
            "to": "0x912a523a10e052900b571889b07ff4f2fd86e029",
            "value": "157704540000000000",
            "gasLimit": 21000,
            "gasPrice": 35105275699,
            "gasUsed": 21000,
            "status": "Success",
            "input": "0x",
            "nonce": 6843177,
            "blockHash": "0x2c52d4bb68c6e56272974d21bd5afc7a01ec33093249d9d5ec0b74048a8389d5",
            "blockNumber": 14431489,
            "blockTimestamp": 1647889630
          },
          {
            "...": "output omitted"
          }
        ]
      },
      {
        "blockHash": "0x1939a88b2da89f1512e134e6d17a08e71c7fcd352cff2ddee942c4d79140055f",
        "blockNumber": 14431488,
        "blockTimestamp": 1647889625,
        "transactions": [
          {
            "transactionHash": "0x8e7012bccb57ed34fb576868a5376f4983f243e41664bf20220efc1d19006d52",
            "transactionIndex": 55,
            "from": "0x3cd751e6b0078be393132286c442345e5dc49699",
            "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "value": "0",
            "gasLimit": 250000,
            "gasPrice": 37505027916,
            "gasUsed": 63209,
            "status": "1",
            "input": "0xa9059cbb000000000000000000000000aaadde03849e05ef4425b750a680168bfc0fa08a00000000000000000000000000000000000000000000000000000000281ba3a0",
            "nonce": 6843176,
            "blockHash": "0x1939a88b2da89f1512e134e6d17a08e71c7fcd352cff2ddee942c4d79140055f",
            "blockNumber": 14431488,
            "blockTimestamp": 1647889625,
            "internalTransactions": [
              {
                "traceType": "CALL",
                "from": "0x3cd751e6b0078be393132286c442345e5dc49699",
                "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "value": "0",
                "gasLimit": 228392
              }
            ],
            "tokenTransfers": [
              {
                "tokenAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "tokenType": "erc20",
                "from": "0x3cd751e6b0078be393132286c442345e5dc49699",
                "to": "0xaaadde03849e05ef4425b750a680168bfc0fa08a",
                "value": "672900000"
              }
            ]
          },
          {
            "transactionHash": "0x8e7012bccb57ed34fb576868a5376f4983f243e41664bf20220efc1d19006d52",
            "transactionIndex": 55,
            "from": "0x3cd751e6b0078be393132286c442345e5dc49699",
            "to": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "value": "0",
            "gasLimit": 250000,
            "gasPrice": 37505027916,
            "gasUsed": 63209,
            "status": "Success",
            "input": "0xa9059cbb000000000000000000000000aaadde03849e05ef4425b750a680168bfc0fa08a00000000000000000000000000000000000000000000000000000000281ba3a0",
            "nonce": 6843176,
            "blockHash": "0x1939a88b2da89f1512e134e6d17a08e71c7fcd352cff2ddee942c4d79140055f",
            "blockNumber": 14431488,
            "blockTimestamp": 1647889625,
            "tokenTransfers": [
              {
                "tokenAddress": "0xdac17f958d2ee523a2206206994597c13d831ec7",
                "tokenType": "erc20",
                "from": "0x3cd751e6b0078be393132286c442345e5dc49699",
                "to": "0xaaadde03849e05ef4425b750a680168bfc0fa08a",
                "value": "672900000"
              }
            ]
          },
          {
            "...": "output omitted"
          }
        ]
      }
    ]
  }
}
```

## getTokenTransfersByAddress

### <a name="getTokenTransfersByAddressERC20andERC721">ERC-20 and ERC-721 token transfers</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getTransfersByAddress", "params": { "address": "0x0000000000000000000000000000000000000000", "blockStart": 1, "blockEnd": 14355891, "addressFilter": "RECEIVER_ONLY", "blockchain": "Ethereum", "network": "Mainnet" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "blockStart": 14355514,
    "blockEnd": 14355891,
    "blocks": [
      {
        "blockHash": "0x84210a366e05d2cb7ac1674901e259620c5485ccfa079618c2b07d5c5466dc3d",
        "blockNumber": 14355891,
        "blockTimestamp": 1646872195,
        "tokenTransfers": [
          {
            "tokenAddress": "0xb5de0c3753b6e1b4dba616db82767f17513e6d4e",
            "tokenType": "erc20",
            "from": "0xb5de0c3753b6e1b4dba616db82767f17513e6d4e",
            "to": "0x0000000000000000000000000000000000000000",
            "value": "20171572165639639738",
            "transactionHash": "0xdb7590bf6069127301ceeebf1b0f33bf483e08a37fc321e48eadbfaf4fb595fb",
            "transactionIndex": 72
          },
          {
            "tokenAddress": "0xb8f5eba1a53d27a06c9c993d832d945ce20a31ec",
            "tokenType": "erc20",
            "from": "0x0000000000000000000000000000000000000000",
            "to": "0x0000000000000000000000000000000000000000",
            "value": "30266372230497121",
            "transactionHash": "0xa9a74e3442be5815ef7adc4568f8dc3e0b32787aec6d2c891866888d51f223d8",
            "transactionIndex": 102
          }
        ]
      },
      {
        "blockHash": "0x4e47bb9444336af0587a7e8138556eff722b8df2d3410385e37360cc831a3f1c",
        "blockNumber": 14355889,
        "blockTimestamp": 1646872172,
        "tokenTransfers": [
          {
            "tokenAddress": "0x030ba81f1c18d280636f32af80b9aad02cf0854e",
            "tokenType": "erc20",
            "from": "0xcc9a0b7c43dc2a5f023bb9b738e45b0ef6b06e04",
            "to": "0x0000000000000000000000000000000000000000",
            "value": "336269772487705777",
            "transactionHash": "0x13b84e1a6f87459ee7dd58b6c0bd5758902c146a5fb343ee68ec8322a1a7ad1a",
            "transactionIndex": 181
          },
          {
            "tokenAddress": "0xc71a726d390bf02b4af8920c0820970310d0f367",
            "tokenType": "erc721",
            "from": "0xe6cd4727a1058e6973e973986d0493f1e7975ef8",
            "to": "0x0000000000000000000000000000000000000000",
            "tokenID": "43043",
            "transactionHash": "0xce24394b751343a7cccd6dce38761a36653d29c054f5bb2937dc4c11b895d6ee",
            "transactionIndex": 180
          },
          {
            "tokenAddress": "0xc71a726d390bf02b4af8920c0820970310d0f367",
            "tokenType": "erc721",
            "from": "0xe6cd4727a1058e6973e973986d0493f1e7975ef8",
            "to": "0x0000000000000000000000000000000000000000",
            "tokenID": "12385",
            "transactionHash": "0xce24394b751343a7cccd6dce38761a36653d29c054f5bb2937dc4c11b895d6ee",
            "transactionIndex": 180
          },
          {
            "tokenAddress": "0xc71a726d390bf02b4af8920c0820970310d0f367",
            "tokenType": "erc721",
            "from": "0xe6cd4727a1058e6973e973986d0493f1e7975ef8",
            "to": "0x0000000000000000000000000000000000000000",
            "tokenID": "67627",
            "transactionHash": "0xce24394b751343a7cccd6dce38761a36653d29c054f5bb2937dc4c11b895d6ee",
            "transactionIndex": 180
          },
          {
            "tokenAddress": "0xc71a726d390bf02b4af8920c0820970310d0f367",
            "tokenType": "erc721",
            "from": "0xe6cd4727a1058e6973e973986d0493f1e7975ef8",
            "to": "0x0000000000000000000000000000000000000000",
            "tokenID": "38323",
            "transactionHash": "0xce24394b751343a7cccd6dce38761a36653d29c054f5bb2937dc4c11b895d6ee",
            "transactionIndex": 180
          },
          {
            "tokenAddress": "0xc71a726d390bf02b4af8920c0820970310d0f367",
            "tokenType": "erc721",
            "from": "0xe6cd4727a1058e6973e973986d0493f1e7975ef8",
            "to": "0x0000000000000000000000000000000000000000",
            "tokenID": "65064",
            "transactionHash": "0xce24394b751343a7cccd6dce38761a36653d29c054f5bb2937dc4c11b895d6ee",
            "transactionIndex": 180
          },
          {
            "tokenAddress": "0x8793cd84c22b94b1fdd3800f02c4b1dcca40d50b",
            "tokenType": "erc20",
            "from": "0x3641ef18240a46337818f98005cbb190c4930202",
            "to": "0x0000000000000000000000000000000000000000",
            "value": "38078396",
            "transactionHash": "0xd801007d3194c56061fafe8ae195a82fa7f3a79438719550a60a51eeb41cf383",
            "transactionIndex": 227
          },
          {
            "...": "output truncated. Returns up to 1000 token transfers."
          }
        ]
      }
    ]
  }
}
```

### <a name="getTokenTransfersByAddressERC721">ERC-721 token transfers</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getTransfersByAddress", "params": { "address": "0x3d31c409c48fee50c2e5b9a85820291b1e859a9e", "blockStart": 1, "blockEnd": 14355891, "addressFilter": "SENDER_OR_RECEIVER", "blockchain": "Ethereum", "network": "Mainnet" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "blockStart": 1,
    "blockEnd": 14355891,
    "blocks": [
      {
        "blockHash": "0x84210a366e05d2cb7ac1674901e259620c5485ccfa079618c2b07d5c5466dc3d",
        "blockNumber": 14355891,
        "blockTimestamp": 1646872195,
        "tokenTransfers": [
          {
            "tokenAddress": "0x4bb08998a697d0db666783ba5b56e85b33ba262f",
            "tokenType": "erc721",
            "from": "0x0000000000000000000000000000000000000000",
            "to": "0x3d31c409c48fee50c2e5b9a85820291b1e859a9e",
            "tokenID": "4404",
            "transactionHash": "0xedb1cd88557ca9f4c5057ad2b237b1427208bc6820005e73535466c1b2bc1884",
            "transactionIndex": 90
          },
          {
            "tokenAddress": "0x4bb08998a697d0db666783ba5b56e85b33ba262f",
            "tokenType": "erc721",
            "from": "0x0000000000000000000000000000000000000000",
            "to": "0x3d31c409c48fee50c2e5b9a85820291b1e859a9e",
            "tokenID": "4405",
            "transactionHash": "0xedb1cd88557ca9f4c5057ad2b237b1427208bc6820005e73535466c1b2bc1884",
            "transactionIndex": 90
          },
          {
            "tokenAddress": "0x4bb08998a697d0db666783ba5b56e85b33ba262f",
            "tokenType": "erc721",
            "from": "0x0000000000000000000000000000000000000000",
            "to": "0x3d31c409c48fee50c2e5b9a85820291b1e859a9e",
            "tokenID": "4406",
            "transactionHash": "0xedb1cd88557ca9f4c5057ad2b237b1427208bc6820005e73535466c1b2bc1884",
            "transactionIndex": 90
          }
        ]
      }
    ]
  }
}
```

## getTransactionByHash

### <a name="getTransactionByHashETHtransfer">ETH Transfer</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getTransactionByHash", "params": { "transactionHash": "0xb407e98dcbf5c2a3b22809940784440cb1d909d9177d0f7dd859a21672ca65a3" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "transaction": {
      "transactionHash": "0xb407e98dcbf5c2a3b22809940784440cb1d909d9177d0f7dd859a21672ca65a3",
      "transactionIndex": 84,
      "from": "0x848176950e1ddf51085f264617203e6696d9a36c",
      "to": "0xf66ced605fb69b3fa490cb83b713fcb2f554b512",
      "value": "124101199128327938",
      "gasLimit": 21000,
      "gasPrice": 33063676112,
      "gasUsed": 21000,
      "status": "1",
      "input": "0x",
      "nonce": 27,
      "blockHash": "0x34f7c346ce0cc29dd1c3f645b6816e04c9856dc66dab2e6f27c4748e192a102c",
      "blockNumber": 14360907,
      "blockTimestamp": 1646939319,
      "internalTransactions": [
        {
          "traceType": "CALL",
          "from": "0x848176950e1ddf51085f264617203e6696d9a36c",
          "to": "0xf66ced605fb69b3fa490cb83b713fcb2f554b512",
          "value": "124101199128327938"
        }
      ]
    }
  }
}
```

### <a name="getTransactionByHashERC721transfer">ERC-721 transfer</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getTransactionByHash", "params": { "transactionHash": "0xdd0971856280e6e4db0ce31072b9780c4c3f96d70351d5b7ef3edf924583d2c6", "blockchain": "Ethereum", "network": "Mainnet" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "transactionHash": "0xdd0971856280e6e4db0ce31072b9780c4c3f96d70351d5b7ef3edf924583d2c6",
    "transactionIndex": 96,
    "from": "0xf88ad3b265a92acfc9f7157f927950dc5317cae5",
    "to": "0x00000000a50bb64b4bbeceb18715748dface08af",
    "value": "10000000000000000",
    "gasLimit": 239976,
    "gasPrice": 23192015945,
    "gasUsed": 215360,
    "status": "1",
    "input": "0x0da642e3ed481b119cc212b6f1c9bef04e3211ab03b6622941eeaf5760607ead7e0a152f8b9987e95174fc32af701beb95fc2c3158ae81f246fb6f7cabbcbb0ced7b2f4272d9d02bd1da8a91f77658516e7bc301c009ff4bd73f5a65c0fe4ac0ede825c96467d54573f3df0e8b974f000000000000000000000000000000000000000000000000000000000000043962326ebd31040358f1366dbadb386e898cfea9c9d2e741697be05272dc33b5b543f3fb46000000002386f26fc10000",
    "nonce": 130,
    "blockHash": "0x84210a366e05d2cb7ac1674901e259620c5485ccfa079618c2b07d5c5466dc3d",
    "blockNumber": 14355891,
    "blockTimestamp": 1646872195,
    "internalTransactions": [
      {
        "traceType": "CALL",
        "from": "0xf88ad3b265a92acfc9f7157f927950dc5317cae5",
        "to": "0x00000000a50bb64b4bbeceb18715748dface08af",
        "value": "10000000000000000",
        "gasLimit": 216368
      },
      {
        "traceType": "CALL",
        "from": "0x00000000a50bb64b4bbeceb18715748dface08af",
        "to": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "value": "10000000000000000",
        "gasLimit": 203117
      },
      {
        "traceType": "CALL",
        "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "to": "0x0000000000000000000000000000000000000001",
        "value": "0",
        "gasLimit": 165004
      },
      {
        "traceType": "CALL",
        "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "to": "0xa5409ec958c83c3f309868babaca7c86dcb077c1",
        "value": "0",
        "gasLimit": 148219
      },
      {
        "traceType": "CALL",
        "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "to": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
        "value": "950000000000000",
        "gasLimit": 2300
      },
      {
        "traceType": "CALL",
        "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "to": "0xaf5760607ead7e0a152f8b9987e95174fc32af70",
        "value": "9050000000000000",
        "gasLimit": 2300
      },
      {
        "traceType": "CALL",
        "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "to": "0xa5409ec958c83c3f309868babaca7c86dcb077c1",
        "value": "0",
        "gasLimit": 103863
      },
      {
        "traceType": "CALL",
        "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "to": "0xf729cb7083f5367056e2f2d376a3451260a00cfe",
        "value": "0",
        "gasLimit": 98366
      },
      {
        "traceType": "CALL",
        "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
        "to": "0xf729cb7083f5367056e2f2d376a3451260a00cfe",
        "value": "0",
        "gasLimit": 94230
      },
      {
        "traceType": "CALL",
        "from": "0xf729cb7083f5367056e2f2d376a3451260a00cfe",
        "to": "0xf9e266af4bca5890e2781812cc6a6e89495a79f2",
        "value": "0",
        "gasLimit": 89570
      },
      {
        "traceType": "CALL",
        "from": "0xf729cb7083f5367056e2f2d376a3451260a00cfe",
        "to": "0xa5409ec958c83c3f309868babaca7c86dcb077c1",
        "value": "0",
        "gasLimit": 82851
      },
      {
        "traceType": "CALL",
        "from": "0xf729cb7083f5367056e2f2d376a3451260a00cfe",
        "to": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
        "value": "0",
        "gasLimit": 79157
      },
      {
        "traceType": "CALL",
        "from": "0xf729cb7083f5367056e2f2d376a3451260a00cfe",
        "to": "0x0da642e3ed481b119cc212b6f1c9bef04e3211ab",
        "value": "0",
        "gasLimit": 74247
      }
    ],
    "tokenTransfers": [
      {
        "tokenAddress": "0x0da642e3ed481b119cc212b6f1c9bef04e3211ab",
        "tokenType": "erc721",
        "from": "0xaf5760607ead7e0a152f8b9987e95174fc32af70",
        "to": "0xf88ad3b265a92acfc9f7157f927950dc5317cae5",
        "tokenID": "1081"
      }
    ]
  }
}
```

### <a name="getTransactionByHashERC20swap">ERC-20 swap</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getTransactionByHash", "params": { "transactionHash": "0xb7ff063e414059e41ab3acc69e4a08b18438df49c847977ca5bdcd012121c1b9" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "transaction": {
      "transactionHash": "0xb7ff063e414059e41ab3acc69e4a08b18438df49c847977ca5bdcd012121c1b9",
      "transactionIndex": 14,
      "from": "0x8e8f818d3371f797a2db7edb32803607c8b3c6a9",
      "to": "0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e",
      "value": "0",
      "gasLimit": 300000,
      "gasPrice": 59184147559,
      "gasUsed": 99851,
      "status": "1",
      "input": "0xce2e62ff000000000000000000000000000000000000000000000355a627675139e0000000000000000000000000000000000000000000000000000021f31cc480121600000000000000000000000000611cde65dea90918c0078ac0400a72b0d25b9bb1000000000000000000000000408e41876cccdc0f92210600ef50372656052a3800000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000062294499",
      "nonce": 11131,
      "blockHash": "0x78956753e993db281b4e8217229b74a64e095135f06cf4ef23606de934651605",
      "blockNumber": 14355849,
      "blockTimestamp": 1646871637,
      "internalTransactions": [
        {
          "traceType": "CALL",
          "from": "0x8e8f818d3371f797a2db7edb32803607c8b3c6a9",
          "to": "0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e",
          "value": "0",
          "gasLimit": 277460
        },
        {
          "traceType": "CALL",
          "from": "0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e",
          "to": "0x611cde65dea90918c0078ac0400a72b0d25b9bb1",
          "value": "0",
          "gasLimit": 265326
        },
        {
          "traceType": "CALL",
          "from": "0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e",
          "to": "0x408e41876cccdc0f92210600ef50372656052a38",
          "value": "0",
          "gasLimit": 258369
        },
        {
          "traceType": "CALL",
          "from": "0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e",
          "to": "0x611cde65dea90918c0078ac0400a72b0d25b9bb1",
          "value": "0",
          "gasLimit": 241818
        },
        {
          "traceType": "CALL",
          "from": "0x611cde65dea90918c0078ac0400a72b0d25b9bb1",
          "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          "value": "0",
          "gasLimit": 224736
        },
        {
          "traceType": "CALL",
          "from": "0x611cde65dea90918c0078ac0400a72b0d25b9bb1",
          "to": "0x408e41876cccdc0f92210600ef50372656052a38",
          "value": "0",
          "gasLimit": 211456
        },
        {
          "traceType": "CALL",
          "from": "0x611cde65dea90918c0078ac0400a72b0d25b9bb1",
          "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          "value": "0",
          "gasLimit": 210394
        }
      ],
      "tokenTransfers": [
        {
          "tokenAddress": "0x408e41876cccdc0f92210600ef50372656052a38",
          "tokenType": "erc20",
          "from": "0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e",
          "to": "0x611cde65dea90918c0078ac0400a72b0d25b9bb1",
          "value": "15747045346607196274688"
        },
        {
          "tokenAddress": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
          "tokenType": "erc20",
          "from": "0x611cde65dea90918c0078ac0400a72b0d25b9bb1",
          "to": "0x98c3d3183c4b8a650614ad179a1a98be0a8d6b8e",
          "value": "2448181478250605140"
        }
      ]
    }
  }
}
```

### <a name="getTransactionByHashERC721sale">ERC-721 sale</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getTransactionByHash", "params": { "transactionHash": "0xb67be27ff44ba97f39fa68953350adade5fdbd983571a3b2b81080565d7744a3", "blockchain": "Ethereum", "network": "Mainnet" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "transaction": {
      "transactionHash": "0xb67be27ff44ba97f39fa68953350adade5fdbd983571a3b2b81080565d7744a3",
      "transactionIndex": 225,
      "from": "0xeb016b0b8976a8a9b56d0d48c98d2cffb0459226",
      "to": "0x7f268357a8c2552623316e2562d90e642bb538e5",
      "value": "389000000000000000",
      "gasLimit": 258613,
      "gasPrice": 22528875897,
      "gasUsed": 193992,
      "status": "1",
      "input": "0xab834bab0000000000000000000000007f268357a8c2552623316e2562d90e642bb538e5000000000000000000000000eb016b0b8976a8a9b56d0d48c98d2cffb0459226000000000000000000000000605dd719317f9236277fd4dcc7e8cadff38d1dcb0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000baf2127b49fc93cbca6269fade0f7f31df4c88a7000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007f268357a8c2552623316e2562d90e642bb538e5000000000000000000000000605dd719317f9236277fd4dcc7e8cadff38d1dcb00000000000000000000000000000000000000000000000000000000000000000000000000000000000000005b3256965e7c3cf26e11fcaf296dfc8807c01073000000000000000000000000baf2127b49fc93cbca6269fade0f7f31df4c88a70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000566017061a08000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000622943ca00000000000000000000000000000000000000000000000000000000000000002a3740ff6f969f359068cc9d9f12340bb634b3b24c9d79067af4f9b2b3f1ca0800000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000566017061a080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006229346b0000000000000000000000000000000000000000000000000000000062325850bc19a3b1b00ae00728e35de79af17c5b0abb96195b8f320136beaa4abfd7da4f0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000006a000000000000000000000000000000000000000000000000000000000000007c000000000000000000000000000000000000000000000000000000000000008e00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000b200000000000000000000000000000000000000000000000000000000000000b20000000000000000000000000000000000000000000000000000000000000001b000000000000000000000000000000000000000000000000000000000000001bbef4356df39df54574e8a1c4aebd0add6c2534880b29972fd0de014b7f71f11a5ebd6da0ea7ac2cc11bda801fe5fd6c923e9afe6a89dbc8794288e5359e38763bef4356df39df54574e8a1c4aebd0add6c2534880b29972fd0de014b7f71f11a5ebd6da0ea7ac2cc11bda801fe5fd6c923e9afe6a89dbc8794288e5359e38763000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e4fb16a5950000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eb016b0b8976a8a9b56d0d48c98d2cffb04592260000000000000000000000008d609bd201beaea7dccbfbd9c22851e23da686910000000000000000000000000000000000000000000000000000000000000901000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e4fb16a595000000000000000000000000605dd719317f9236277fd4dcc7e8cadff38d1dcb00000000000000000000000000000000000000000000000000000000000000000000000000000000000000008d609bd201beaea7dccbfbd9c22851e23da686910000000000000000000000000000000000000000000000000000000000000901000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e400000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e4000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "nonce": 36,
      "blockHash": "0x78956753e993db281b4e8217229b74a64e095135f06cf4ef23606de934651605",
      "blockNumber": 14355849,
      "blockTimestamp": 1646871637,
      "internalTransactions": [
        {
          "traceType": "CALL",
          "from": "0xeb016b0b8976a8a9b56d0d48c98d2cffb0459226",
          "to": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "value": "389000000000000000",
          "gasLimit": 219285
        },
        {
          "traceType": "CALL",
          "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "to": "0x0000000000000000000000000000000000000001",
          "value": "0",
          "gasLimit": 180920
        },
        {
          "traceType": "CALL",
          "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "to": "0xa5409ec958c83c3f309868babaca7c86dcb077c1",
          "value": "0",
          "gasLimit": 163958
        },
        {
          "traceType": "CALL",
          "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "to": "0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
          "value": "38900000000000000",
          "gasLimit": 2300
        },
        {
          "traceType": "CALL",
          "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "to": "0x605dd719317f9236277fd4dcc7e8cadff38d1dcb",
          "value": "350100000000000000",
          "gasLimit": 2300
        },
        {
          "traceType": "CALL",
          "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "to": "0xa5409ec958c83c3f309868babaca7c86dcb077c1",
          "value": "0",
          "gasLimit": 119602
        },
        {
          "traceType": "CALL",
          "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "to": "0x7ec65765408e188666097f9b7267f8d0a9dd0c87",
          "value": "0",
          "gasLimit": 114105
        },
        {
          "traceType": "CALL",
          "from": "0x7f268357a8c2552623316e2562d90e642bb538e5",
          "to": "0x7ec65765408e188666097f9b7267f8d0a9dd0c87",
          "value": "0",
          "gasLimit": 109969
        },
        {
          "traceType": "CALL",
          "from": "0x7ec65765408e188666097f9b7267f8d0a9dd0c87",
          "to": "0xf9e266af4bca5890e2781812cc6a6e89495a79f2",
          "value": "0",
          "gasLimit": 105063
        },
        {
          "traceType": "CALL",
          "from": "0x7ec65765408e188666097f9b7267f8d0a9dd0c87",
          "to": "0xa5409ec958c83c3f309868babaca7c86dcb077c1",
          "value": "0",
          "gasLimit": 98102
        },
        {
          "traceType": "CALL",
          "from": "0x7ec65765408e188666097f9b7267f8d0a9dd0c87",
          "to": "0xbaf2127b49fc93cbca6269fade0f7f31df4c88a7",
          "value": "0",
          "gasLimit": 94408
        },
        {
          "traceType": "CALL",
          "from": "0x7ec65765408e188666097f9b7267f8d0a9dd0c87",
          "to": "0x8d609bd201beaea7dccbfbd9c22851e23da68691",
          "value": "0",
          "gasLimit": 89260
        }
      ],
      "tokenTransfers": [
        {
          "tokenAddress": "0x8d609bd201beaea7dccbfbd9c22851e23da68691",
          "tokenType": "erc721",
          "from": "0x605dd719317f9236277fd4dcc7e8cadff38d1dcb",
          "to": "0xeb016b0b8976a8a9b56d0d48c98d2cffb0459226",
          "tokenID": "2305"
        }
      ]
    }
  }
}
```

## getTokenStandardEvents

### <a name="getTokenStandardEventsERC721">ERC-721</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getTokenStandardEvents", "params": { "contract": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", "blockStart": 1, "blockEnd": 14699965, "eventSignatureHashes": ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"], "blockchain": "Ethereum", "network": "Mainnet" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "blockStart": 14699876,
    "blockEnd": 14699965,
    "events": [
      {
        "blockHash": "0x801b8afac89d96d9c6f054275bc9fc0274c831372603dc34aae7401931f58849",
        "blockNumber": 14699965,
        "blockTimestamp": 1651517188,
        "events": [
          {
            "transactionHash": "0xe11f4b1dd9fbd62b5a4afe11a6f6289e4d90ba5aaf04ce75ff2031b9ebe39fa5",
            "data": {
              "data": "514711238152814592",
              "from": "0x00000000003b3cc22af3ae1eac0440bcee416b40",
              "name": "Transfer",
              "to": "0x8aa34c7866da901b3b55d162821ef3dae87851f3"
            },
            "eventType": "Transfer",
            "signature": "Transfer(address, address, uint256)",
            "signatureHash": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
          },
          {
            "transactionHash": "0x1db9620f152626ed8f964971e8f86f8a861ba0a0712f9c105404c7f41bb1cd94",
            "transactionIndex": 1,
            "data": {
              "data": "1195169635397992762",
              "from": "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
              "name": "Transfer",
              "to": "0x8aa34c7866da901b3b55d162821ef3dae87851f3"
            },
            "eventType": "Transfer",
            "signature": "Transfer(address, address, uint256)",
            "signatureHash": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
          },
          {
            "transactionHash": "0xc272abff0db861a07499accc6f27f2b31fc3a5d823ed74b8921e70808491d9e1",
            "transactionIndex": 2,
            "data": {
              "data": "666767006594236416",
              "from": "0x8aa34c7866da901b3b55d162821ef3dae87851f3",
              "name": "Transfer",
              "to": "0x00000000003b3cc22af3ae1eac0440bcee416b40"
            },
            "eventType": "Transfer",
            "signature": "Transfer(address, address, uint256)",
            "signatureHash": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
          },
          {
            "...": "output truncated."
          }
        ]
      },
      {
        "blockHash": "0xc977a5cc4b0580dcbf2acc5a89404d516cf11d20b4e16a3217c029fc87cbb229",
        "blockNumber": 14699963,
        "blockTimestamp": 1651517178,
        "events": [
          {
            "transactionHash": "0x7446a45a7c5f67201c40d5d75e8efc15b9c4e7f8da113a94c70eddf4c0b56250",
            "transactionIndex": 14,
            "data": {
              "data": "2100000000000000000",
              "from": "0x16e75b7b8bea3787da601ba8291fc601f31c800c",
              "name": "Transfer",
              "to": "0xbe71372995e8e920e4e72a29a51463677a302e8d"
            },
            "eventType": "Transfer",
            "signature": "Transfer(address, address, uint256)",
            "signatureHash": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
          },
          {
            "transactionHash": "0x818de41b4a83ea0d902f69a51f9eedc541041cb49b5624e024de057401a3baf0",
            "data": {
              "data": "186174816314904516734",
              "from": "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
              "name": "Transfer",
              "to": "0x56178a0d5f301baf6cf3e1cd53d9863437345bf9"
            },
            "eventType": "Transfer",
            "signature": "Transfer(address, address, uint256)",
            "signatureHash": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
          },
          {
            "transactionHash": "0x937d08c73a28618410aec6e06f7abe5c76b116adcc2b86adcfddd5aabada69b1",
            "transactionIndex": 13,
            "data": {
              "data": "1224000000000000000",
              "from": "0x759ec1b3326de6fd4ba316f65a6f689c4e4c3092",
              "name": "Transfer",
              "to": "0x6bee0f0dea573ec04a77ff3547691f2edccf2a7c"
            },
            "eventType": "Transfer",
            "signature": "Transfer(address, address, uint256)",
            "signatureHash": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
          },
          {
            "...": "output truncated."
          }
        ]
      },
      {
        "...": "output truncated."
      }
    ]
  }
}
```

## getTokenMetadata

### <a name="getTokenMetadataERC20">USDC (ERC-20)</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getTokenMetadata", "params": { "contract": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "blockchain": "Ethereum", "network": "Mainnet" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "blockHeight": 14832446,
    "tokenMetadata": {
      "name": "USD Coin",
      "symbol": "USDC",
      "totalSupply": "45182454435259550",
      "decimals": 6
    }
  }
}
```

### <a name="getTokenMetadataERC721">NFT (ERC-721)</a>

**Request:**

```shell
curl https://mainnet.ethereum.coinbasecloud.io/rpc \
  -u username:password \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{ "id": 1, "jsonrpc": "2.0", "method": "coinbaseCloud_getTokenMetadata", "params": { "contract": "0x1A92f7381B9F03921564a437210bB9396471050C" } }'
```

**Response:**

```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "result": {
    "blockHeight": 14893782,
    "tokenMetadata": {
      "name": "Cool Cats",
      "symbol": "COOL",
      "totalSupply": "9941"
    }
  }
}
```
