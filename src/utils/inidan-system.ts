import { singleDigit, twoDigit } from '../lang/en'
import { isFirstCharZero, isSecondCharZero, handleOnes, handleTens } from './common'

interface IIndianFormat {
  [value: number]: string | Function
}

const indianFormat: IIndianFormat = {
  0: '',
  1: handleOnes,
  2: handleTens,
  3: handleHundreds,
  4: handleThousands,
  5: handleTenThousands,
  6: handleLakh,
  7: handleTenLakh,
  8: handleCrore,
  9: handleTenCrore,
  10: handleArabs
}

/**
 * handles all three-digit values
 *
 * @param value the value to be translated to words
 * @returns translated value
 */
function handleHundreds(value: string): string {
  if (isFirstCharZero(value))
    return `${handleTens(value.substring(1))}`

  return `${singleDigit[+value[0]]} hundred ${handleTens(value.substring(1))}`
}

/**
 * handles all four-digit values
 *
 * @param value the value to be translated to words
 * @returns translated value
 */
function handleThousands(value: string): string {
  if (isFirstCharZero(value))
    return `${handleHundreds(value.substring(1))}`
  if (isSecondCharZero(value))
    return `${singleDigit[+value[0]]} thousand ${handleHundreds(value.substring(1))}`

  return `${singleDigit[+value[0]]} thousand ${handleHundreds(value.substring(1))}`
}

/**
 * handles all five-digit values
 *
 * @param value the value to be translated to words
 * @returns translated value
 */
function handleTenThousands(value: string): string {
  if (isFirstCharZero(value))
    return `${handleThousands(value.substring(1))}`
  if (isSecondCharZero(value))
    return `${twoDigit[+value[0]]} thousand ${handleHundreds(value.substring(2))}`

  return `${handleTens(value.substring(0, 2))} thousand ${handleHundreds(value.slice(-3))}`
}

/**
 * handles all six-digit values
 *
 * @param value the value to be translated to words
 * @returns translated value
 */
function handleLakh(value: string): string {
  if (isFirstCharZero(value))
    return `${handleTenThousands(value.substring(1))}`

  return `${singleDigit[+value[0]]} lakh ${handleTenThousands(value.substring(1))}`
}

/**
 * handles all seven-digit values
 *
 * @param value the value to be translated to words
 * @returns translated value
 */
function handleTenLakh(value: string): string {
  if (isFirstCharZero(value))
    return `${handleLakh(value.substring(1))}`
  if (isSecondCharZero(value))
    return `${twoDigit[+value[0]]} lakh ${handleTenThousands(value.substring(2))}`

  return `${handleTens(value.substring(0, 2))} lakh ${handleTenThousands(value.substring(2))}`
}

/**
 * handles all eight-digit values
 *
 * @param value the value to be translated to words
 * @returns translated value
 */
function handleCrore(value: string): string {
  if (isFirstCharZero(value))
    return `${handleTenLakh(value.substring(1))}`

  return `${singleDigit[+value[0]]} crore ${handleTenLakh(value.substring(1))}`
}

/**
 * handles all nine-digit values
 *
 * @param  value the value to be translated to words
 * @returns translated value
 */
function handleTenCrore(value: string): string {
  if (isSecondCharZero(value))
    return `${twoDigit[+value[0]]} crore ${handleTenLakh(value.substring(2))}`

  return `${handleTens(value.substring(0, 2))} crore ${handleTenLakh(value.substring(2))}`
}

/**
 * handles everything greater than 9 digits
 *
 * @param value the value to be translated to words
 * @returns translated value
 */
function handleArabs(value: string): string {
  return convertInd(value).trim()
}

/**
 * Converts numeric string to corresponding word string in Indian-format
 *
 * @param  integer integer part of the value
 * @param  fraction  fractional part of the value
 * @param  twoDecimalPlaces  fraction corrected to two decimal places
 * @returns  expect an empty or translated string
 */
function convertInd(integer: string, fraction?: string, twoDecimalPlaces?: string): string {
  let result = ``

  /**
   * In indian system, values of length b/w 10-15(value > 9) are usually a repetation.
   * eg:
   * Length of nine is, "ten crore"
   * Length of ten is, "one hundred crore"
   * Length of eleven is, "one thousand crore"
   * ...
   * Length of 15 is, "one crore crore"
   *
   * The best way to handle this is to short-circuit and reuse the same functions which handles the values of the length 0-9
   */
  if (integer.length > 9) {
    result =
      `${(indianFormat[10] as Function)(integer.substring(0, integer.length - 7))} crore ${(indianFormat[7] as Function)(integer.substring(integer.length - 7))}`

    return result.trim()
  }

  //  values of length 0-9
  result = (indianFormat[integer.length] as Function)(integer)

  /**
   * Fractional parts are corrected to two places
   * ignores fractional parts from .01 to .09
   * ie, fraction > .10 to .99 is handled, the ones before that is rejected, since it's negligible
   *
   * However, these constraints can be cleverly handled. Refer documentation for further clarification.
   */
  if (fraction && twoDecimalPlaces && +fraction[0] !== 0) // ignore .01 - .09
    result = `${result}.${(indianFormat[twoDecimalPlaces.length] as Function)(twoDecimalPlaces)}` //  limit to two decimal places.`

  return result.trim()
}

export {
  indianFormat,
  handleHundreds,
  handleThousands,
  handleTenThousands,
  handleLakh,
  handleTenLakh,
  handleCrore,
  handleTenCrore,
  convertInd
}
