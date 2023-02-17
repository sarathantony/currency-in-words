const { convert } = require('../src/index')

describe('indian-system: input should be valid', () => {
  it('returns "NaN" for undefined', () => {
    const result = convert(undefined)
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for null', () => {
    const result = convert(null)
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for an invalid number, "a1.01"', () => {
    const result = convert('a1.01')
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for an invalid number, "1.1a"', () => {
    const result = convert('1.1a')
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for an invalid number, "random string"', () => {
    const result = convert('random string')
    expect(result).toEqual('NaN')
  })
})

describe('indian-system: decimal inputs', () => {
  it('returns "one.one" when given the input 1.1', () => {
    const result = convert('1.1')
    expect(result).toEqual('one.one')
  })
  it('returns "eleven.eleven" when given the input 11.11', () => {
    const result = convert('11.11')
    expect(result).toEqual('eleven.eleven')
  })
  it('returns "fifty seven.ninety nine" when given the input 57.99', () => {
    const result = convert('57.99')
    expect(result).toEqual('fifty seven.ninety nine')
  })
  it('returns "ten" when given the input 10.01; ignore x.01 to x.09', () => {
    const result = convert('10.01')
    expect(result).toEqual('ten')
  })
  it('returns "zero" when given the input 0.00', () => {
    const result = convert('0.00')
    expect(result).toEqual('zero')
  })
})

describe('indian-system: special cases', () => {
  it('returns "zero" when given the input 000', () => {
    const result = convert('000')
    expect(result).toEqual('zero')
  })
  it('returns "three hundred thirty" when given the input 00330; corrected leading zeros', () => {
    const result = convert('00330')
    expect(result).toEqual('three hundred thirty')
  })
  it('returns "eighty eight.twenty" when given the input 088.200; corrected leading zeros and two decimal places', () => {
    const result = convert('088.200')
    expect(result).toEqual('eighty eight.twenty')
  })
  it('returns "zero" when given the input 0.00', () => {
    const result = convert('0.00')
    expect(result).toEqual('zero')
  })
})

describe('indian-system: random numbers', () => {
  it('returns "five hundred fifty five" when given the input 555', () => {
    const result = convert('555')
    expect(result).toEqual('five hundred fifty five')
  })
  it('returns "seventy seven thousand two hundred eighty nine" when given the input 77,289', () => {
    const result = convert('77289')
    expect(result).toEqual('seventy seven thousand two hundred eighty nine')
  })
  it('returns "seventeen crore ninety nine lakh one hundred" when given the input 17,99,00,100', () => {
    const result = convert('179900100')
    expect(result).toEqual('seventeen crore ninety nine lakh one hundred')
  })
})

describe('international-system: valid inputs', () => {
  it('returns "NaN" for undefined', () => {
    const result = convert(undefined, { format: 'intl' })
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for null', () => {
    const result = convert(null, { format: 'intl' })
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for an invalid number(a1.01)', () => {
    const result = convert('a1.01', { format: 'intl' })
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for an invalid number(1.1a)', () => {
    const result = convert('1.1a', { format: 'intl' })
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for an invalid number(random string)', () => {
    const result = convert('random string', { format: 'intl' })
    expect(result).toEqual('NaN')
  })
})

describe('international-system: decimal inputs', () => {
  it('returns "one.one" when given the input 1.1', () => {
    const result = convert('1.1')
    expect(result).toEqual('one.one', { format: 'intl' })
  })
  it('returns "fifty seven.ninety nine" when given the input 57.99', () => {
    const result = convert('57.99', { format: 'intl' })
    expect(result).toEqual('fifty seven.ninety nine')
  })
  it('returns "ten" when given the input 10.01; ignore x.01 to x.09', () => {
    const result = convert('10.01', { format: 'intl' })
    expect(result).toEqual('ten')
  })
  it('returns "zero" when given the input 0.00', () => {
    const result = convert('0.00', { format: 'intl' })
    expect(result).toEqual('zero')
  })
})

describe('international-system: special cases', () => {
  it('returns "zero" when given the input 000', () => {
    const result = convert('000', { format: 'intl' })
    expect(result).toEqual('zero')
  })
  it('returns "three hundred thirty" when given the input 00330; corrected leading zeros', () => {
    const result = convert('00330', { format: 'intl' })
    expect(result).toEqual('three hundred thirty')
  })
  it('returns "eighty eight.twenty" when given the input 088.200; corrected leading zeros and two decimal places', () => {
    const result = convert('088.200', { format: 'intl' })
    expect(result).toEqual('eighty eight.twenty')
  })
  it('returns "99" when passed in the input 99', () => {
    const amount = 99
    const result = convert(`${amount}`, { format: 'intl' })
    expect(result).toEqual('ninety nine')
  })
})

describe('international-system', () => {
  it('returns "one" when given the input 1', () => {
    const result = convert('1', { format: 'intl' })
    expect(result).toEqual('one')
  })
  it('returns "nine" when given the input 9', () => {
    const result = convert('9', { format: 'intl' })
    expect(result).toEqual('nine')
  })
  it('returns "ten" when given the input 10', () => {
    const result = convert('10', { format: 'intl' })
    expect(result).toEqual('ten')
  })
  it('returns "eleven" when given the input 11', () => {
    const result = convert('11', { format: 'intl' })
    expect(result).toEqual('eleven')
  })
  it('returns "nineteen" when given the input 19', () => {
    const result = convert('19', { format: 'intl' })
    expect(result).toEqual('nineteen')
  })
  it('returns "ninety" when given the input 90', () => {
    const result = convert('90', { format: 'intl' })
    expect(result).toEqual('ninety')
  })
  it('returns "ninety nine" when given the input 99', () => {
    const result = convert('99', { format: 'intl' })
    expect(result).toEqual('ninety nine')
  })
  it('returns "one hundred" when given the input 100', () => {
    const result = convert('100', { format: 'intl' })
    expect(result).toEqual('one hundred')
  })
  it('returns "one hundred nine" when given the input 109', () => {
    const result = convert('109', { format: 'intl' })
    expect(result).toEqual('one hundred nine')
  })
  it('returns "one hundred ten" when given the input 110', () => {
    const result = convert('110', { format: 'intl' })
    expect(result).toEqual('one hundred ten')
  })
  it('returns "one hundred eleven" when given the input 111', () => {
    const result = convert('111', { format: 'intl' })
    expect(result).toEqual('one hundred eleven')
  })
  it('returns "one hundred nineteen" when given the input 119', () => {
    const result = convert('119', { format: 'intl' })
    expect(result).toEqual('one hundred nineteen')
  })
  it('returns "one hundred ninety" when given the input 190', () => {
    const result = convert('190', { format: 'intl' })
    expect(result).toEqual('one hundred ninety')
  })
  it('returns "one hundred ninety nine" when given the input 199', () => {
    const result = convert('199', { format: 'intl' })
    expect(result).toEqual('one hundred ninety nine')
  })
  it('returns "one thousand" when given the input 1,000', () => {
    const result = convert('1000', { format: 'intl' })
    expect(result).toEqual('one thousand')
  })
  it('returns "one thousand one" when given the input 1,001', () => {
    const result = convert('1001', { format: 'intl' })
    expect(result).toEqual('one thousand one')
  })
  it('returns "one thousand eleven" when given the input 1,011', () => {
    const result = convert('1011', { format: 'intl' })
    expect(result).toEqual('one thousand eleven')
  })
  it('returns "one thousand one hundred eleven" when given the input 1,111', () => {
    const result = convert('1111', { format: 'intl' })
    expect(result).toEqual('one thousand one hundred eleven')
  })
  it('returns "ten thousand" when given the input 10,000', () => {
    const result = convert('10000', { format: 'intl' })
    expect(result).toEqual('ten thousand')
  })
  it('returns "ten thousand one" when given the input 10,001', () => {
    const result = convert('10001', { format: 'intl' })
    expect(result).toEqual('ten thousand one')
  })
  it('returns "ten thousand eleven" when given the input 10,011', () => {
    const result = convert('10011', { format: 'intl' })
    expect(result).toEqual('ten thousand eleven')
  })
  it('returns "ten thousand one hundred eleven" when given the input 10,111', () => {
    const result = convert('10111', { format: 'intl' })
    expect(result).toEqual('ten thousand one hundred eleven')
  })
  it('returns "eleven thousand one hundred eleven" when given the input 11,111', () => {
    const result = convert('11111', { format: 'intl' })
    expect(result).toEqual('eleven thousand one hundred eleven')
  })
  it('returns "one hundred thousand" when given the input 100,000', () => {
    const result = convert('100000', { format: 'intl' })
    expect(result).toEqual('one hundred thousand')
  })
  it('returns "one million" when given the input 1,000,000', () => {
    const result = convert('1000000', { format: 'intl' })
    expect(result).toEqual('one million')
  })
  it('returns "one million one" when given the input 1,000,001', () => {
    const result = convert('1000001', { format: 'intl' })
    expect(result).toEqual('one million one')
  })
  it('returns "one million eleven" when given the input 1,000,011', () => {
    const result = convert('1000011', { format: 'intl' })
    expect(result).toEqual('one million eleven')
  })
  it('returns "one million one hundred" when given the input 1,000,100', () => {
    const result = convert('1000100', { format: 'intl' })
    expect(result).toEqual('one million one hundred')
  })
  it('returns "one million one hundred eleven" when given the input 1,000,111', () => {
    const result = convert('1000111', { format: 'intl' })
    expect(result).toEqual('one million one hundred eleven')
  })
  it('returns "one million one thousand" when given the input 1,001,000', () => {
    const result = convert('1001000', { format: 'intl' })
    expect(result).toEqual('one million one thousand')
  })
  it('returns "one million" when given the input 1,001,001', () => {
    const result = convert('1001001', { format: 'intl' })
    expect(result).toEqual('one million one thousand one')
  })
  it('returns "one million one thousand eleven" when given the input 1,001,001', () => {
    const result = convert('1001011', { format: 'intl' })
    expect(result).toEqual('one million one thousand eleven')
  })
  it('returns "one million ten thousand one hundred eleven" when given the input 10,010,111', () => {
    const result = convert('1010111', { format: 'intl' })
    expect(result).toEqual('one million ten thousand one hundred eleven')
  })
  it('returns "one million eleven thousand one hundred eleven" when given the input 1,011,111', () => {
    const result = convert('1011111', { format: 'intl' })
    expect(result).toEqual('one million eleven thousand one hundred eleven')
  })
  it('returns "one million one hundred thousand" when given the input 1,100,000', () => {
    const result = convert('1100000', { format: 'intl' })
    expect(result).toEqual('one million one hundred thousand')
  })
  it('returns "ten million" when given the input 10,011,111', () => {
    const result = convert('10000000', { format: 'intl' })
    expect(result).toEqual('ten million')
  })
  it('returns "nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine" when given the input 999,999,999', () => {
    const result = convert('999999999', { format: 'intl' })
    expect(result).toEqual('nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine')
  })
  it('returns "ten million" when given the input 10,000,000.99', () => {
    const result = convert('10000000.99', { format: 'intl' })
    expect(result).toEqual('ten million.ninety nine')
  })
  it('returns "ten million.fifty seven" when given the input 10,000,000.57', () => {
    const result = convert('10000000.57', { format: 'intl' })
    expect(result).toEqual('ten million.fifty seven')
  })
  it('returns "zero.ninety nine" when given the input 0.99', () => {
    const result = convert('0.99', { format: 'intl' })
    expect(result).toEqual('zero.ninety nine')
  })
})

describe('international-system: big numbers', () => {
  it('returns nine hundred ninety nine trillion nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine when passed in the input 99', () => {
    const amount = '999999999999'
    const result = convert('999999999999999', { format: 'intl' })
    expect(result).toEqual('nine hundred ninety nine trillion nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine')
  })
})
