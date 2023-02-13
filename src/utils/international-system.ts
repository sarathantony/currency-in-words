import { singleDigit } from "../lang/en"
import { handleTens } from "./common"

function spliceLastThree(value: Array<string>): string {
  return value.splice(-3).join('')
}

function resolveValue(value: string, placeholder: string): string {
  return parseInt(value) ? `${handleHundreds(value)} ${placeholder} ` : ``
}

function handleHundreds(value: string): string {
  const parsedValue = `${parseInt(value)}`

  if (parseInt(value) === 0) return ``
  if (parsedValue.length === 1) return `${singleDigit[+value]}`
  if (parsedValue.length === 2) return `${handleTens(parsedValue)}`

  return `${singleDigit[+value[0]]} hundred ${handleTens(value.substring(1))}`.trim()
}

function convertIntl(integer: string, fraction: string, twoDecimalPlaces: string): string {
  if (parseInt(integer) === 0) return 'zero'

  const integerSplitted: Array<string> = integer.split('')
  const hundreds: string = spliceLastThree(integerSplitted)
  const thousands: string = spliceLastThree(integerSplitted)
  const millions: string = spliceLastThree(integerSplitted)
  const billions: string = spliceLastThree(integerSplitted)
  const trillions: string = spliceLastThree(integerSplitted)

  let result =
    `${resolveValue(trillions, 'trillion')}${resolveValue(billions, 'billion')}${resolveValue(millions, 'million')}${resolveValue(thousands, 'thousand')}${handleHundreds(hundreds)}`

  if (fraction && +fraction[0] !== 0)
  result = `${result.trim()}.${handleTens(twoDecimalPlaces)}`

  return result.trim()
}

export { convertIntl }
