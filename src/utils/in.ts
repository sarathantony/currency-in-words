
import { singleDigit, twoDigit } from '../lang/en'
import { isFirstCharZero, isSecondCharZero, handleTens } from './common'

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
