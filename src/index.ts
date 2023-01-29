const {
  singleDigit, caseOne, twoDigit,
  handleOnes, handleTens, handleHundreds, handleThousands,
  handleTenThousands, handleLakh, handleTenLakh, handleCrore, handleTenCrore
} = require('../lib/utils/utils')

interface objectMap {
  [key: number]: string | Function
}

export function convert(key: string): string {
  if (!key) return ''
  if (key === '0') return 'zero'

  const indian: objectMap = {
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

  return (indian[key.length] as Function)(key)
}
