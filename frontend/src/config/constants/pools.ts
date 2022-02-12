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
    earningToken: tokens.au,
    contractAddress: {
      97: '',
      56: '0x11Db86E3C68e18fffbF9141c85B03988C182E2d1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00094',
    sortOrder: 999,
  },
   {
    sousId: 406,
    stakingToken: tokens.viv,
    earningToken: tokens.au,
    contractAddress: {
      97: '',
      56: '0x267f6efBa063a662a689c32a6D499396Bd0afFB8',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00094',
    sortOrder: 999,
  },
]

export default pools
