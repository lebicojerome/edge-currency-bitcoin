// @flow
import type { AbcCurrencyInfo } from 'airbitz-core-types'

export const bitcoincashTestnetInfo: AbcCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'BCH',
  currencyName: 'BitcoinCash',
  pluginName: 'bitcoincashtestnet',
  denominations: [
    { name: 'BCH', multiplier: '100000000', symbol: '₿' },
    { name: 'mBCH', multiplier: '100000', symbol: 'm₿' },
    { name: 'bits', multiplier: '100', symbol: 'ƀ' }
  ],
  walletTypes: [
    'wallet:bitcoincash-bip44-testnet',
    'wallet:bitcoincash-testnet'
  ],

  // Configuration options:
  defaultSettings: {
    network: {
      type: 'bitcoincashtestnet',
      magic: 0x0709110b,
      keyPrefix: {
        privkey: 0xef,
        xpubkey: 0x043587cf,
        xprivkey: 0x04358394,
        xpubkey58: 'tpub',
        xprivkey58: 'tprv',
        coinType: 1
      },
      addressPrefix: {
        pubkeyhash: 0x6f,
        scripthash: 0xc4,
        witnesspubkeyhash: 0x03,
        witnessscripthash: 0x28,
        bech32: 'tb'
      },
      newAddressFormat: {
        pubkeyhash: 0x00,
        scripthash: 0x08,
        witnesspubkeyhash: 0x06,
        witnessscripthash: 0x0a,
        prefix: 'bchtest'
      }
    },
    gapLimit: 10,
    maxFee: 1000000,
    defaultFee: 10000,
    feeUpdateInterval: 60000,
    feeInfoServer: '',
    simpleFeeSettings: {
      highFee: '10',
      lowFee: '1',
      standardFeeLow: '5',
      standardFeeHigh: '9',
      standardFeeLowAmount: '',
      standardFeeHighAmount: ''
    },
    electrumServers: [['h.1209k.com', '50001']]
  },
  metaTokens: [],

  // Explorers:
  blockExplorer: 'https://blockchair.com/bitcoin-cash/block/%s',
  addressExplorer: 'https://blockchair.com/bitcoin-cash/address/%s',
  transactionExplorer: 'https://blockchair.com/bitcoin-cash/transaction/%s',

  // Images:
  symbolImage:
    'data:image/png;base64,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',
  symbolImageDarkMono:
    'data:image/png;base64,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'
}
