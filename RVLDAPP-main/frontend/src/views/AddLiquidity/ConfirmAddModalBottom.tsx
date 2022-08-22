import { Currency, CurrencyAmount, Fraction, Percent } from '@pancakeswap/sdk'
import React from 'react'
import { Button, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { RowBetween, RowFixed } from '../../components/Layout/Row'
import { CurrencyLogo } from '../../components/Logo'
import { Field } from '../../state/mint/actions'

function ConfirmAddModalBottom({
  noLiquidity,
  price,
  currencies,
  parsedAmounts,
  poolTokenPercentage,
  onAdd,
}: {
  noLiquidity?: boolean
  price?: Fraction
  currencies: { [field in Field]?: Currency }
  parsedAmounts: { [field in Field]?: CurrencyAmount }
  poolTokenPercentage?: Percent
  onAdd: () => void
}) {
  const { t } = useTranslation()
  return (
    <>
      <RowBetween>
        <Text color="#ffffff">{t('%asset% Deposited', { asset: currencies[Field.CURRENCY_A]?.symbol })}</Text>
        <RowFixed>
          <CurrencyLogo currency={currencies[Field.CURRENCY_A]} style={{ marginRight: '8px' }} />
          <Text color="#ffffff">{parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}</Text>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <Text color="#ffffff">{t('%asset% Deposited', { asset: currencies[Field.CURRENCY_B]?.symbol })}</Text>
        <RowFixed>
          <CurrencyLogo currency={currencies[Field.CURRENCY_B]} style={{ marginRight: '8px' }} />
          <Text color="#ffffff">{parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}</Text>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <Text color="#ffffff">{t('Rates')}</Text>
        <Text color="#ffffff">
          {`1 ${currencies[Field.CURRENCY_A]?.symbol} = ${price?.toSignificant(4)} ${
            currencies[Field.CURRENCY_B]?.symbol
          }`}
        </Text>
      </RowBetween>
      <RowBetween style={{ justifyContent: 'flex-end' }}>
        <Text color="#ffffff">
          {`1 ${currencies[Field.CURRENCY_B]?.symbol} = ${price?.invert().toSignificant(4)} ${
            currencies[Field.CURRENCY_A]?.symbol
          }`}
        </Text>
      </RowBetween>
      <RowBetween>
        <Text color="#ffffff"> {t('Share of Pool')}:</Text>
        <Text color="#ffffff">{noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%</Text>
      </RowBetween>
      <Button onClick={onAdd} mt="20px"  >
        {noLiquidity ? t('Create Pool & Supply') : t('Confirm Supply')}
      </Button>
    </>
  )
}

export default ConfirmAddModalBottom
