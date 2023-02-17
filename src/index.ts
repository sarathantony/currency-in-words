import { convertIntl, handleTens, convertInd } from './utils'

type standard = 'in' | 'intl'
type language = 'en'
interface IConvert {
  format?: standard,
  lang?: language
}

export function convert(
    value: string,
    { format, lang }: IConvert = { format: 'in', lang: 'en' }
  ): string {
  if (!value || !value.match(/^\d*(\.\d+)?$/)) return 'NaN'

  const [integer, fraction] = value.split('.')
  const zeroCorrected: string = `${parseInt(integer, 10)}`
  const twoDecimalPlaces: string = parseInt(fraction, 10) ? `${fraction.substring(0, 2)}` : ``

  if (zeroCorrected.length > 15) throw new RangeError('Number exceeds the range')

  if (parseInt(fraction, 10) && zeroCorrected === '0') return `zero.${handleTens(twoDecimalPlaces)}`
  if (zeroCorrected === '0') return 'zero'

  return format === 'intl' ?
    convertIntl(zeroCorrected, fraction, twoDecimalPlaces) : convertInd(zeroCorrected, fraction, twoDecimalPlaces)
}
