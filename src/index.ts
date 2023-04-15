import { convertIntl, handleTens, convertInd } from './utils'

/**
 * in: Indian system
 * intl: International system
 */
type standard = 'in' | 'intl'
type language = 'en'
interface IConvert {
  format?: standard,
  lang?: language
}

/**
 * converted and translated are used interchangabily
 */

/**
 *
 * @param value value to be converted, this can typically contain integer and fractional part, eg: 99.99
 * @param param1 <object> { format: string, lang: string }
 * @returns NaN for invalid input
 * @returns translated value
 *
 * @throws rangeException
 */
export function convert(
    value: string,
    { format, lang }: IConvert = { format: 'in', lang: 'en' }
  ): string {
  /**
   * Safe guard against invalid inputs
   * this rejects strings if contained invalid input
   *
   * reject invalid strings; returns 'NaN'
   */
  if (!value || !value.match(/^\d*(\.\d+)?$/)) return 'NaN'

  /**
   * Integer and fraction parts are processed seperately, though the same logic is reused
   *
   * zeroCorrected: this is to sanitize all the preceding zeores
   * eg: 001 to 1, 099 to 99
   *
   * twoDecimalPlaces: the factional part is corrected to two decimal places and anything lesser than .10 is rejected
   * eg:  .18 to .18
   *      .09 to ''
   */
  const [integer, fraction] = value.split('.')
  const zeroCorrected: string = `${parseInt(integer, 10)}`
  const twoDecimalPlaces: string = parseInt(fraction, 10) ? `${fraction.substring(0, 2)}` : ``

  /**
   * This handles place values upto 15 for both indian and international systems, and anything beyond that is thrown with a range error
   */
  if (zeroCorrected.length > 15) throw new RangeError('Number exceeds the range')

  /**
   * Handles when passed in just fractional parts
   * eg:  0.99, 0.77 etc
   *
   * If the sanitized input is still 0, returns 'zero'
   * eg: '00', '000'
   */
  if (parseInt(fraction, 10) && zeroCorrected === '0') return `zero.${handleTens(twoDecimalPlaces)}`
  if (zeroCorrected === '0') return 'zero'

   // International format
  if (format === 'intl') return convertIntl(zeroCorrected, fraction, twoDecimalPlaces)

  //  Indian format
  return convertInd(zeroCorrected, fraction, twoDecimalPlaces)
}
