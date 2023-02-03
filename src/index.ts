import { handleOnes, handleTens } from './utils/common'
import {
  handleHundreds, handleThousands, handleTenThousands, handleLakh, handleTenLakh, handleCrore, handleTenCrore
} from './utils/in'

interface valueMap {
  [key: number]: string | Function
}

type standard = 'in' | 'int'
interface params {
  format?: standard
}

export function convert(
  value: string, { format }: params = { format: 'int' }
  ): string {
  const regex = /^\d*(\.\d+)?$/
  if (!value || !value.match(regex)) return 'NaN'

  const [integer, fraction] = value.split('.')
  const zeroCorrected = '' + parseInt(integer, 10)

  if (zeroCorrected === '0') return 'zero'

  const indian: valueMap = {
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

  const integerResult = (indian[zeroCorrected.length] as Function)(zeroCorrected)
  let result = integerResult

  if (fraction && +fraction[0] !== 0) // ignore .01 - .09
    result = `${result}.${(indian[fraction.substring(0, 2).length] as Function)(fraction.substring(0, 2))}` //  limit to two decimal places.`

  return result.trim()
}
