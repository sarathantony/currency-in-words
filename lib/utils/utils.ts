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

function isFirstCharZero(key: string): boolean {
  return +key[0] === 0
}
function isSecondCharZero(key: string): boolean {
  return +key[1] === 0
}

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
  if (isFirstCharZero(key))
    return `${singleDigit[+key[1]]}`
  if (isSecondCharZero(key))
    return `${twoDigit[+key[0]]}`

  return handleTeens(key)
}
export function handleHundreds(key: string): string {
  if (isFirstCharZero(key))
    return `${handleTens(key.substring(1))}`
  if (key.substring(1) === '00')
    return `${singleDigit[+key[0]]} hundred`

  return `${singleDigit[+key[0]]} hundred ${handleTens(key.substring(1))}`
}
export function handleThousands(key: string): string {
  if (isFirstCharZero(key))
    return `${handleHundreds(key.substring(1))}`
  if (isSecondCharZero(key))
    return `${singleDigit[+key[0]]} thousand ${handleHundreds(key.substring(1))}`

  return `${singleDigit[+key[0]]} thousand ${handleHundreds(key.substring(1))}`
}
export function handleTenThousands(key: string): string {
  if (isFirstCharZero(key))
    return `${handleThousands(key.substring(1))}`
  if (isSecondCharZero(key))
    return `${twoDigit[+key[0]]} thousand ${handleHundreds(key.substring(2))}`

  return `${handleTens(key.substring(0, 2))} thousand ${handleHundreds(key.slice(-3))}`
}
export function handleLakh(key: string): string {
  if (isFirstCharZero(key))
    return `${handleTenThousands(key.substring(1))}`

  return `${singleDigit[+key[0]]} lakh ${handleTenThousands(key.substring(1))}`
}
export function handleTenLakh(key: string): string {
  if (isFirstCharZero(key))
    return `${handleLakh(key.substring(1))}`
  if (isSecondCharZero(key))
    return `${twoDigit[+key[0]]} lakh ${handleTenThousands(key.substring(2))}`

  return `${handleTens(key.substring(0, 2))} lakh ${handleTenThousands(key.substring(2))}`
}
export function handleCrore(key: string): string {
  if (isFirstCharZero(key))
    return `${handleTenLakh(key.substring(1))}`

  return `${singleDigit[+key[0]]} crore ${handleTenLakh(key.substring(1))}`
}
export function handleTenCrore(key: string): string {
  if (isSecondCharZero(key))
    return `${twoDigit[+key[0]]} crore ${handleTenLakh(key.substring(2))}`

  return `${handleTens(key.substring(0, 2))} crore ${handleTenLakh(key.substring(2))}`
}

//  not handling more than Cr.10 for now, but promising there will be an updated version..
