import { convertIntl } from './utils/intl'
import { indian } from './utils/in'
import { handleTens } from './utils/common'

type standard = 'in' | 'intl'
type language = 'en'
interface params {
  format?: standard,
  lang?: language
}

export function convert(
    value: string,
    { format, lang }: params = { format: 'in', lang: 'en' }
  ): string {
  let result = ''
  const regex = /^\d*(\.\d+)?$/
  if (!value || !value.match(regex)) return 'NaN'

  const [integer, fraction] = value.split('.')
  const zeroCorrected = `${parseInt(integer, 10)}`

  if (parseInt(fraction) && zeroCorrected === '0') return `zero.${handleTens(fraction.substring(0, 2))}`
  if (zeroCorrected === '0') return 'zero'

  if (format === 'intl') {
    result = convertIntl(zeroCorrected)

    if (fraction && +fraction[0] !== 0)
      result = `${result.trim()}.${handleTens(fraction.substring(0, 2))}`
  } else {
    const integerResult = (indian[zeroCorrected.length] as Function)(zeroCorrected)
    result = integerResult

    if (fraction && +fraction[0] !== 0) // ignore .01 - .09
      result = `${result}.${(indian[fraction.substring(0, 2).length] as Function)(fraction.substring(0, 2))}` //  limit to two decimal places.`
    }

  return result.trim()
}
