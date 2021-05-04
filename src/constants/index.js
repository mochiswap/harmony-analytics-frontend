export const FACTORY_ADDRESS = '0xCBac17919f7aad11E623Af4FeA98B10B84802eAc'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://raw.githubusercontent.com/0x1Remix/x/main/list.json',
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = []

// pair blacklist
export const PAIR_BLACKLIST = []

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xcc1da2eaa0150b958fd30c3b849d9efe1d365aed']
