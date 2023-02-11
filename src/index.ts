import { convertIntl, indianFormat, handleTens } from './utils'

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

  if (parseInt(fraction, 10) && zeroCorrected === '0') return `zero.${handleTens(twoDecimalPlaces)}`
  if (zeroCorrected === '0') return 'zero'

  let result = ''

  if (format === 'intl') {
    result = convertIntl(zeroCorrected)

    if (fraction && +fraction[0] !== 0)
      result = `${result.trim()}.${handleTens(twoDecimalPlaces)}`
  } else {
    const integerResult = (indianFormat[zeroCorrected.length] as Function)(zeroCorrected)
    result = integerResult

    if (fraction && +fraction[0] !== 0) // ignore .01 - .09
      result = `${result}.${(indianFormat[twoDecimalPlaces.length] as Function)(twoDecimalPlaces)}` //  limit to two decimal places.`
    }

  return result.trim()
}
