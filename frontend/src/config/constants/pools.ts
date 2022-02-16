import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 400,
    stakingToken: tokens.viv,
    earningToken: tokens.viv,
    contractAddress: {
      97: '',
      56: '0xa3593Aaf527dcF0Afb18F39125149d12be4446b9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1875',
    sortOrder: 999,
  },
  {
    sousId: 401,
    stakingToken: tokens.rvl,
    earningToken: tokens.rvl,
    contractAddress: {
      97: '',
      56: '0x5fe395675d254e47cacf561f7ea6b6c1c93badab',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '575000',
    sortOrder: 999,
  },
  {
    sousId: 402,
    stakingToken: tokens.rvl,
    earningToken: tokens.viv,
    contractAddress: {
      97: '',
      56: '0x0F6C6C2A6ca70f8445F73Ae5C5C368b264A5a403',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1875',
    sortOrder: 999,
  },
  {
    sousId: 403,
    stakingToken: tokens.viv,
    earningToken: tokens.rvl,
    contractAddress: {
      97: '',
      56: '0x0F61AA7FD28BBFEE79Ae6A34468e4da001B8f472',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '575000',
    sortOrder: 999,
  },
  {
    sousId: 404,
    stakingToken: tokens.rvl,
    earningToken: tokens.xusd,
    contractAddress: {
      97: '',
      56: '0x0c95ff0278a622387277779fb2de09e1db5d46ea',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1070',
    sortOrder: 999,
  },
  {
    sousId: 405,
    stakingToken: tokens.rvl,
    earningToken: tokens.rvl,
    contractAddress: {
      97: '',
      56: '0x24A2a61325B788Be88F13e336C010B7567fAEb44',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5787537',
    sortOrder: 999,
  },
  {
    sousId: 406,
    stakingToken: tokens.viv,
    earningToken: tokens.au,
    contractAddress: {
      97: '',
      56: '0xDfBdb32879095E0D565E985fc2b57365318798b3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.009645',
    sortOrder: 999,
  },
  {
    sousId: 407,
    stakingToken: tokens.rvl,
    earningToken: tokens.au,
    contractAddress: {
      97: '',
      56: '0x953Eb78D621a271161834d1Dc763C1C9c689e294',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.009645',
    sortOrder: 999,
  },
 {
    sousId: 408,
    stakingToken: tokens.viv,
    earningToken: tokens.viv,
    contractAddress: {
      97: '',
      56: '0xe9c6104154bb5539692b56bd373b05d265c0e8b9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.05',
    sortOrder: 999,
  },
]

export default pools
