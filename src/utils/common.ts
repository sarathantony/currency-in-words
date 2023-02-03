import { singleDigit, caseOne, twoDigit } from "../lang/en"

export function isFirstCharZero(key: string): boolean {
  return +key[0] === 0
}
export function isSecondCharZero(key: string): boolean {
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
