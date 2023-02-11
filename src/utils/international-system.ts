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

function convertIntl(value: string): string {
  if (parseInt(value) === 0) return 'zero'

  const [integer, fraction] = value.split('.')
  const integerSplitted: Array<string> = integer.split('')
  const hundreds: string = spliceLastThree(integerSplitted)
  const thousands: string = spliceLastThree(integerSplitted)
  const millions: string = spliceLastThree(integerSplitted)
  const billions: string = spliceLastThree(integerSplitted)

  let result =
    `${resolveValue(billions, 'billion')}${resolveValue(millions, 'million')}${resolveValue(thousands, 'thousand')}${handleHundreds(hundreds)}`
  if (fraction) result = `${result}.${handleTens(fraction.substring(0, 2))}`

  return result
}

export { convertIntl }
