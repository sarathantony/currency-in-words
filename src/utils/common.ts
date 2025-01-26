import langMap from "../lang"
import { getGlobalConfig } from "../lib/globalConfig"

function isFirstCharZero(value: string): boolean {
  return +value[0] === 0
}

function isSecondCharZero(value: string): boolean {
  return +value[1] === 0
}

/**
 * handles 0-9
 *
 * @param value the value to be translated to words
 * @returns translated value
 */
function handleOnes(value: string): string {
  const { lang } = getGlobalConfig()
  const { singleDigit } = langMap[lang]

  return singleDigit[+value]
}

/**
 * handles 11-19
 *
 * @param value the value to be translated to words
 * @returns translated value
 */
function handleTeens(value: string): string {
  const { lang } = getGlobalConfig()
  const { singleDigit, caseOne, twoDigit } = langMap[lang]

  if (+value[0] === 1)
    return caseOne[+value.slice(-1)]
  else
    return `${twoDigit[+value[0]]} ${singleDigit[+value.slice(-1)]}`
}

/**
 * handles all two-digit values except 11-19
 *
 * @param value the value to be translated to words
 * @returns translated value
 */
function handleTens(value: string): string {
const { lang } = getGlobalConfig()
const { singleDigit, twoDigit } = langMap[lang]

  if (isFirstCharZero(value))
    return `${singleDigit[+value[1]]}`
  if (isSecondCharZero(value))
    return `${twoDigit[+value[0]]}`

  return handleTeens(value)
}

export { isFirstCharZero, isSecondCharZero, handleOnes, handleTeens, handleTens }
