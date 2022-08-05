import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: 'https://rvl.finance',
  },

  {
    label: t('Stake/Claim RVLx'),
   icon: 'SunIcon',
    href: 'https://stake.rvl.finance',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
  //    {
   //     label: t('OmniBridge'),
   //     href: 'https://omni.xdaichain.com/bridge'
  //    }
    ],
  },
  // {
   // label: t('Dashboard'),
   // icon: 'InfoIcon',
  //  href: 'https://dashboard.rvl.finance',
  // },

 // {
 //   label: t('Pools'),
//    icon: 'PoolIcon',
//    href: '/pools',
 // },
  // {
  //   label: t('Referral'),
  //   icon: 'GroupsIcon',
  //   href: '/referral',
  // },
  // {
  //   label: 'Games',
  //   icon: 'PredictionsIcon',
  //   href: '/games',
  // },
  // {
  //   label: t('Vault'),
  //   icon: 'NftIcon',
  //   href: '/staking',
  // },

  {
    label: t('Charts'),
    icon: 'InfoIcon',
     items: [
      {
        label: ' RVLX Bogged Finance',
        href: 'https://charts.bogged.finance/?c=bsc&t=0x96FD7b0a92b5F2A746f07b5e78ceda8eDc8dA3FE',
      },
      {
        label: 'RVLX Poocoin',
        href: 'https://poocoin.app/tokens/0x96fd7b0a92b5f2a746f07b5e78ceda8edc8da3fe',
      },
    ],
  },
  {
    label: t('Community'),
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://www.t.me/revivaldefi',
      },
      {
        label: 'Discord',
        href: 'https://www.discord.gg/revivaldefi',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/revivaldefi',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/RevivalX',
      },
     // {
     //   label: 'Reddit',
     //   href: 'https://www.reddit.com/r/RevivalDefi',
    //  },
      {
        label: 'Medium',
        href: 'https://revivaldefi.medium.com/',
      },
    ],
  },
 // {
 //   label: t('Audits'),
 //   icon: 'NftIcon',
 //   items: [
 //     {
 //       label: 'RVL Certik',
 //       href: 'https://www.certik.com/projects/revival',
  //    },
   //   {
  //      label: 'RVL DessertFinance',
  //      href: 'https://dessertswap.finance/audits/Revival%20BSC%20Audit%2011371955.pdf',
  //    },

 //   ],
  // },
 // {
 //   label: t('More'),
 //   icon: 'MoreIcon',
 //   items: [
 //     {
 //       label: 'Revival GitBook',
 //       href: 'https://docs.revivaldefi.com',
 //     },
 //     {
 //       label: 'CoinMarketCap RVL',
  //      href: 'https://coinmarketcap.com/currencies/revival/',
  //    },
   //   {
   //     label: 'CoinGecko RVL',
   //     href: 'https://www.coingecko.com/en/coins/revival',
   //   },
  //  ],
 // }




  
]

export default config
