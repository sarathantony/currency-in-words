const {
  isFirstCharZero,
  isSecondCharZero,
  handleOnes,
  handleTeens,
  handleTens
} = require('../src/utils/common')

describe('Expects true when first char of the passed in string is number zero', () => {
  it ('Should return true when passed in 00', () => {
    const result = isFirstCharZero('000')
    expect(result).toBeTruthy()
  })
  it ('Should return false when passed in 10', () => {
    const result = isFirstCharZero('100')
    expect(result).toBeFalsy()
  })
  it ('Should return false when passed in .0', () => {
    const result = isFirstCharZero('.0')
    expect(result).toBeFalsy()
  })
})

describe('Expects true when second char of the passed in string is number zero', () => {
  it ('Should return true when passed in 10', () => {
    const result = isSecondCharZero('000')
    expect(result).toBeTruthy()
  })
  it ('Should return false when passed in 01', () => {
    const result = isSecondCharZero('01')
    expect(result).toBeFalsy()
  })
  it ('Should return false when passed in .10', () => {
    const result = isSecondCharZero('.10')
    expect(result).toBeFalsy()
  })
})

describe('Handle single digits', () => {
  it ('Should return an empty string when passed in 0', () => {
    const result = handleOnes('0')
    expect(result).toBe('')
  })
  it ('Should return one when passed in 1', () => {
    const result = handleOnes('1')
    expect(result).toBe('one')
  })
  it ('Should return nine when passed in 9', () => {
    const result = handleOnes('9')
    expect(result).toBe('nine')
  })
  //  rejects..
  it ('Should return ten when passed in 10', () => {
    const result = handleOnes('10')
    expect(result).toBe('')
  })
})

describe('Handle 11 to 19', () => {
  it ('Should return ten when passed in 10', () => {
    const result = handleTeens('10')
    expect(result).toBe('')
  })
  it ('Should return eleven when passed in 11', () => {
    const result = handleTeens('11')
    expect(result).toBe('eleven')
  })
  it ('Should return nineteen when passed in 19', () => {
    const result = handleTeens('19')
    expect(result).toBe('nineteen')
  })
  //  rejects..
  it ('Should return ten when passed in 100', () => {
    const result = handleTeens('100')
    expect(result).toBe('')
  })
})

describe('Handle 20 to 99', () => {
  it ('Should return twenty when passed in 20', () => {
    const result = handleTens('20')
    expect(result).toBe('twenty')
  })
  it ('Should return seventy seven when passed in 77', () => {
    const result = handleTens('77')
    expect(result).toBe('seventy seven')
  })
  it ('Should return ninety nine when passed in 99', () => {
    const result = handleTens('99')
    expect(result).toBe('ninety nine')
  })
  //  rejects..
  it ('Should return ten when passed in 100', () => {
    const result = handleTens('100')
    expect(result).toBe('ten')
  })
})
