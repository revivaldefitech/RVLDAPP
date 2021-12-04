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
    tokenPerBlock: '15',
    sortOrder: 999,
  },
  {
    sousId: 2,
    stakingToken: tokens.rvl,
    earningToken: tokens.rvl,
    contractAddress: {
      97: '',
      56: '0xA19c80352ce67063a7ab697A71255778267d4e17',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '15',
    sortOrder: 999,
  },
  {
    sousId: 3,
    stakingToken: tokens.rvl,
    earningToken: tokens.viv,
    contractAddress: {
      97: '',
      56: '0xec80438C2bC1D672ac87860C767998E15f9182F0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '15',
    sortOrder: 999,
  },
  {
    sousId: 4,
    stakingToken: tokens.viv,
    earningToken: tokens.rvl,
    contractAddress: {
      97: '',
      56: '0xDAE6C179594cbb7680a591fe3831670AE7131BFc',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '15',
    sortOrder: 999,
  },
]

export default pools
