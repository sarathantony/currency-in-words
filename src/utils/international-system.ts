import { singleDigit } from "../lang/en"
import { handleTens } from "./common"

/**
 * splice the last three characters of the given array
 * CAUTION: this function is meant to modify the passed in value; not a pure fn().
 *
 * @param value value to be sliced
 * @returns the same length of the input if the passed in array is of length less than three
 * @returns an empty string if the passed in array is empty
 * @returns a string of the length three
 */
function spliceLastThree(value: Array<string>): string {
  return value.splice(-3).join('')
}

/**
 * handles all values of international-system of length greater than 3
 *
 * @param value the value to be translated to words
 * @param placeholder placeholder values, eg: million, trillion etc
 * @returns <empty string> for invalid input
 * @returns `translated-value placeholder`, eg: one hundred trillion
 */
function resolveValue(value: string, placeholder: string): string {
  if (!parseInt(value)) return ''

  return `${handleHundreds(value)} ${placeholder} `
}

/**
 * @param value handles values of length upto 3
 * @returns translated value
 */
function handleHundreds(value: string): string {
  const parsedValue = `${parseInt(value)}`

  if (parseInt(value) === 0) return ``
  if (parsedValue.length === 1) return `${singleDigit[+value]}`
  if (parsedValue.length === 2) return `${handleTens(parsedValue)}`

  return `${singleDigit[+value[0]]} hundred ${handleTens(value.substring(1))}`.trim()
}

/**
 *
 * @param integer integer part of the value
 * @param fraction fractional part of the value
 * @param twoDecimalPlaces fractional part corrected to two decimal places
 * @returns translated value
 */
function convertIntl(integer: string, fraction: string, twoDecimalPlaces: string): string {
  if (parseInt(integer) === 0) return 'zero'

  const integerSplitted: Array<string> = integer.split('')
  /**
   * slice the string into subarrays of length 3
   * eg: '123456789' -> [[1,2,3], [4,5,6], [7,8,9]]
   *
   * here we are deliberately slices the last 3 element of the value array
   * refer the function <spliceLastThree> for more info
   */
  const hundreds: string = spliceLastThree(integerSplitted)
  const thousands: string = spliceLastThree(integerSplitted)
  const millions: string = spliceLastThree(integerSplitted)
  const billions: string = spliceLastThree(integerSplitted)
  const trillions: string = spliceLastThree(integerSplitted)

  /**
   * Function, resolveValue will append an empty sting for invalid values to the output. This is further sanitized with output.trim()
   */
  let result =
    `${resolveValue(trillions, 'trillion')}${resolveValue(billions, 'billion')}${resolveValue(millions, 'million')}${resolveValue(thousands, 'thousand')}${handleHundreds(hundreds)}`

  if (fraction && +fraction[0] !== 0)
  result = `${result.trim()}.${handleTens(twoDecimalPlaces)}`

  return result.trim()
}

export { spliceLastThree, resolveValue, handleHundreds, convertIntl }
