"use strict" 

export const singleDigit: Array<string> = [
  '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', ''
]
export const twoDigit: Array<string> = [
  '', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', ''
]
export const caseOne: Array<string> = [
  '', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', ''
]

/**
 * Pass "key" as string for function argument, but cast to number (+key) when used as Array<string> index
 */
export function handleOnes(key: string): string {
  return singleDigit[+key]
}
export function handleTeens(key: string): string {
  if (+key[0] === 1)
    return caseOne[+key.slice(-1)]
  else
    return `${twoDigit[+key[0]]} ${singleDigit[+key.slice(-1)]}` 
}
export function handleTens(key: string): string {
  if (+key[1] === 0) return `${twoDigit[+key[0]]}`
  else return handleTeens(key)
}
export function handleHundreds(key: string): string {
  if (key.substring(1) === '00')
    return `${singleDigit[+key[0]]} hundred`
  if (+key[0] === 0 && +key[1] === 0)
    return `${handleOnes(key[2])}`
  if (+key[1] === 0)
    return `${handleOnes(key[0])} hundred ${handleOnes(key.slice(-1))}`
  if (+key[0] === 0)
    return `${handleTens(key.substring(1))}`
  return `${handleOnes(key[0])} hundred ${handleTens(key.substring(1))}`
}
export function handleThousands(key: string): string {
  if (key.substring(1) === '000')
    return `${singleDigit[+key[0]]} thousand`
  if (key.match(/^.[0][0]/))
    return `${singleDigit[+key[0]]} thousand ${singleDigit[+key.slice(-1)]}`
  if (+key[1] === 0)
    return `${singleDigit[+key[0]]} thousand ${handleTens(key.substring(2))}`
  return `${singleDigit[+key[0]]} thousand ${handleHundreds(key.substring(1))}`
}
export function handleTenThousands(key: string): string {
  if (+key[1] === 0)
    return `${twoDigit[+key[0]]} thousand ${handleHundreds(key.substring(2))}`
  return `${handleTens(key.substring(0, 2))} thousand ${handleHundreds(key.slice(-3))}`
}
export function handleLakh(key: string): string {
  return `${singleDigit[+key[0]]} lakh ${handleTenThousands(key.substring(1))}`
}
export function handleTenLakh(key: string): string {
  return `${handleTens(key.substring(0, 2))} lakh ${handleTenThousands(key.substring(2))}`
}
export function handleCrore(key: string): string {
  return `${singleDigit[+key[0]]} crore ${handleTenLakh(key.substring(1))}`
}
export function handleTenCrore(key: string): string {
  return `${handleTens(key.substring(0, 2))} ${handleCrore(key.substring(2))}`
}
