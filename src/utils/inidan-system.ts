
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
  9: handleTenCrore
}

function handleHundreds(value: string): string {
  if (isFirstCharZero(value))
    return `${handleTens(value.substring(1))}`

  return `${singleDigit[+value[0]]} hundred ${handleTens(value.substring(1))}`
}

function handleThousands(value: string): string {
  if (isFirstCharZero(value))
    return `${handleHundreds(value.substring(1))}`
  if (isSecondCharZero(value))
    return `${singleDigit[+value[0]]} thousand ${handleHundreds(value.substring(1))}`

  return `${singleDigit[+value[0]]} thousand ${handleHundreds(value.substring(1))}`
}

function handleTenThousands(value: string): string {
  if (isFirstCharZero(value))
    return `${handleThousands(value.substring(1))}`
  if (isSecondCharZero(value))
    return `${twoDigit[+value[0]]} thousand ${handleHundreds(value.substring(2))}`

  return `${handleTens(value.substring(0, 2))} thousand ${handleHundreds(value.slice(-3))}`
}

function handleLakh(value: string): string {
  if (isFirstCharZero(value))
    return `${handleTenThousands(value.substring(1))}`

  return `${singleDigit[+value[0]]} lakh ${handleTenThousands(value.substring(1))}`
}
function handleTenLakh(value: string): string {
  if (isFirstCharZero(value))
    return `${handleLakh(value.substring(1))}`
  if (isSecondCharZero(value))
    return `${twoDigit[+value[0]]} lakh ${handleTenThousands(value.substring(2))}`

  return `${handleTens(value.substring(0, 2))} lakh ${handleTenThousands(value.substring(2))}`
}

function handleCrore(value: string): string {
  if (isFirstCharZero(value))
    return `${handleTenLakh(value.substring(1))}`

  return `${singleDigit[+value[0]]} crore ${handleTenLakh(value.substring(1))}`
}

function handleTenCrore(value: string): string {
  if (isSecondCharZero(value))
    return `${twoDigit[+value[0]]} crore ${handleTenLakh(value.substring(2))}`

  return `${handleTens(value.substring(0, 2))} crore ${handleTenLakh(value.substring(2))}`
}

export { indianFormat, handleTenLakh, handleCrore, handleTenCrore }
