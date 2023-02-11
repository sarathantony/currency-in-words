import { singleDigit, caseOne, twoDigit } from "../lang/en"

function isFirstCharZero(value: string): boolean {
  return +value[0] === 0
}

function isSecondCharZero(value: string): boolean {
  return +value[1] === 0
}

function handleOnes(value: string): string {
  return singleDigit[+value]
}

function handleTeens(value: string): string {
  if (+value[0] === 1)
    return caseOne[+value.slice(-1)]
  else
    return `${twoDigit[+value[0]]} ${singleDigit[+value.slice(-1)]}`
}

function handleTens(value: string): string {
  if (isFirstCharZero(value))
    return `${singleDigit[+value[1]]}`
  if (isSecondCharZero(value))
    return `${twoDigit[+value[0]]}`

  return handleTeens(value)
}

export { isFirstCharZero, isSecondCharZero, handleOnes, handleTeens, handleTens }
