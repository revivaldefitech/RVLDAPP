import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 0,
  //   stakingToken: tokens.viv,
  //   earningToken: tokens.viv,
  //   contractAddress: {
  //     97: '',
  //     56: '0x249535B7a46c25A413bC27f18df0E5a789fD21B5',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   tokenPerBlock: '15',
  //   sortOrder: 1,
  // },
  {
    sousId: 1,
    stakingToken: tokens.viv,
    earningToken: tokens.viv,
    contractAddress: {
      97: '',
      56: '0xa3593Aaf527dcF0Afb18F39125149d12be4446b9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0003',
    sortOrder: 999,
  },
  {
    sousId: 2,
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
    sousId: 3,
    stakingToken: tokens.rvl,
    earningToken: tokens.viv,
    contractAddress: {
      97: '',
      56: '0x0F6C6C2A6ca70f8445F73Ae5C5C368b264A5a403',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '.1875
    sortOrder: 999,
  },
  {
    sousId: 4,
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
]

export default pools
