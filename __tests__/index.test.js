const { convert } = require('../src/index')

describe('Convert Indian system', () => {
  it('returns "NaN" for undefined', () => {
    const result = convert(undefined)
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for null', () => {
    const result = convert(null)
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for an invalid number(a1.01)', () => {
    const result = convert('a1.01')
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for an invalid number(1.1a)', () => {
    const result = convert('1.1a')
    expect(result).toEqual('NaN')
  })
  it('returns "NaN" for an invalid number(random string)', () => {
    const result = convert('random string')
    expect(result).toEqual('NaN')
  })
  it('returns "one" when given the input 1', () => {
    const result = convert('1')
    expect(result).toEqual('one')
  })
  it('returns "nine" when given the input 9', () => {
    const result = convert('9')
    expect(result).toEqual('nine')
  })
  it('returns "ten" when given the input 10', () => {
    const result = convert('10')
    expect(result).toEqual('ten')
  })
  it('returns "eleven" when given the input 11', () => {
    const result = convert('11')
    expect(result).toEqual('eleven')
  })
  it('returns "nineteen" when given the input 19', () => {
    const result = convert('19')
    expect(result).toEqual('nineteen')
  })
  it('returns "ninety" when given the input 90', () => {
    const result = convert('90')
    expect(result).toEqual('ninety')
  })
  it('returns "ninety nine" when given the input 99', () => {
    const result = convert('99')
    expect(result).toEqual('ninety nine')
  })
  it('returns "one hundred" when given the input 100', () => {
    const result = convert('100')
    expect(result).toEqual('one hundred')
  })
  it('returns "one hundred nine" when given the input 109', () => {
    const result = convert('109')
    expect(result).toEqual('one hundred nine')
  })
  it('returns "one hundred ten" when given the input 110', () => {
    const result = convert('110')
    expect(result).toEqual('one hundred ten')
  })
  it('returns "one hundred eleven" when given the input 111', () => {
    const result = convert('111')
    expect(result).toEqual('one hundred eleven')
  })
  it('returns "one hundred nineteen" when given the input 119', () => {
    const result = convert('119')
    expect(result).toEqual('one hundred nineteen')
  })
  it('returns "one hundred ninety" when given the input 190', () => {
    const result = convert('190')
    expect(result).toEqual('one hundred ninety')
  })
  it('returns "one hundred ninety nine" when given the input 199', () => {
    const result = convert('199')
    expect(result).toEqual('one hundred ninety nine')
  })
  it('returns "one thousand" when given the input 1000', () => {
    const result = convert('1000')
    expect(result).toEqual('one thousand')
  })
  it('returns "one thousand one" when given the input 1001', () => {
    const result = convert('1001')
    expect(result).toEqual('one thousand one')
  })
  it('returns "one thousand ten" when given the input 1010', () => {
    const result = convert('1010')
    expect(result).toEqual('one thousand ten')
  })
  it('returns "one thousand one hundred ten" when given the input 1110', () => {
    const result = convert('1110')
    expect(result).toEqual('one thousand one hundred ten')
  })
  it('returns "one thousand one hundred eleven" when given the input 1111', () => {
    const result = convert('1111')
    expect(result).toEqual('one thousand one hundred eleven')
  })
  it('returns "one thousand one hundred ninety nine" when given the input 1199', () => {
    const result = convert('1199')
    expect(result).toEqual('one thousand one hundred ninety nine')
  })
  it('returns "one thousand nine hundred" when given the input 1900', () => {
    const result = convert('1900')
    expect(result).toEqual('one thousand nine hundred')
  })
  it('returns "one thousand nine hundred ninety nine" when given the input 1999', () => {
    const result = convert('1999')
    expect(result).toEqual('one thousand nine hundred ninety nine')
  })
  it('returns "ten thousand" when given the input 10000', () => {
    const result = convert('10000')
    expect(result).toEqual('ten thousand')
  })
  it('returns "eleven thousand one hundred nine" when given the input 11109', () => {
    const result = convert('11109')
    expect(result).toEqual('eleven thousand one hundred nine')
  })
  it('returns "eleven thousand one hundred ten" when given the input 11110', () => {
    const result = convert('11110')
    expect(result).toEqual('eleven thousand one hundred ten')
  })
  it('returns "eleven thousand one hundred eleven" when given the input 11111', () => {
    const result = convert('11111')
    expect(result).toEqual('eleven thousand one hundred eleven')
  })
  it('returns "eleven thousand one hundred nineteen" when given the input 11119', () => {
    const result = convert('11119')
    expect(result).toEqual('eleven thousand one hundred nineteen')
  })
  it('returns "eleven thousand one hundred ninety" when given the input 11190', () => {
    const result = convert('11190')
    expect(result).toEqual('eleven thousand one hundred ninety')
  })
  it('returns "eleven thousand one hundred ninety nine" when given the input 11199', () => {
    const result = convert('11199')
    expect(result).toEqual('eleven thousand one hundred ninety nine')
  })
  it('returns "one lakh" when given the input 1,00,000', () => {
    const result = convert('100000')
    expect(result).toEqual('one lakh')
  })
  it('returns "one lakh eleven thousand one hundred nine" when given the input 1,11,109', () => {
    const result = convert('111109')
    expect(result).toEqual('one lakh eleven thousand one hundred nine')
  })
  it('returns "one lakh eleven thousand one hundred ten" when given the input 1,11,110', () => {
    const result = convert('111110')
    expect(result).toEqual('one lakh eleven thousand one hundred ten')
  })
  it('returns "one lakh eleven thousand one hundred eleven" when given the input 1,11,111', () => {
    const result = convert('111111')
    expect(result).toEqual('one lakh eleven thousand one hundred eleven')
  })
  it('returns "one lakh eleven thousand one hundred nineteen" when given the input 1,11,119', () => {
    const result = convert('111119')
    expect(result).toEqual('one lakh eleven thousand one hundred nineteen')
  })
  it('returns "one lakh leven thousand one hundred ninety" when given the input 1,11,190', () => {
    const result = convert('111190')
    expect(result).toEqual('one lakh eleven thousand one hundred ninety')
  })
  it('returns "one lakh eleven thousand one hundred ninety nine" when given the input 1,11,199', () => {
    const result = convert('111199')
    expect(result).toEqual('one lakh eleven thousand one hundred ninety nine')
  })
  it('returns "ten lakh" when given the input 10,00,000', () => {
    const result = convert('1000000')
    expect(result).toEqual('ten lakh')
  })
  it('returns "ten lakh eleven thousand one hundred nine" when given the input 10,11,109', () => {
    const result = convert('1011109')
    expect(result).toEqual('ten lakh eleven thousand one hundred nine')
  })
  it('returns "ten lakh eleven thousand one hundred ten" when given the input 10,11,110', () => {
    const result = convert('1011110')
    expect(result).toEqual('ten lakh eleven thousand one hundred ten')
  })
  it('returns "ten lakh eleven thousand one hundred eleven" when given the input 10,11,111', () => {
    const result = convert('1011111')
    expect(result).toEqual('ten lakh eleven thousand one hundred eleven')
  })
  it('returns "ten lakh eleven thousand one hundred nineteen" when given the input 10,11,119', () => {
    const result = convert('1011119')
    expect(result).toEqual('ten lakh eleven thousand one hundred nineteen')
  })
  it('returns "ten lakh leven thousand one hundred ninety" when given the input 10,11,190', () => {
    const result = convert('1011190')
    expect(result).toEqual('ten lakh eleven thousand one hundred ninety')
  })
  it('returns "ten lakh eleven thousand one hundred ninety nine" when given the input 10,11,199', () => {
    const result = convert('1011199')
    expect(result).toEqual('ten lakh eleven thousand one hundred ninety nine')
  })
  it('returns "one crore" when given the input 1,00,00,000', () => {
    const result = convert('10000000')
    expect(result).toEqual('one crore')
  })
  it('returns "one crore one lakh eleven thousand one hundred nine" when given the input 1,01,11,109', () => {
    const result = convert('10111109')
    expect(result).toEqual('one crore one lakh eleven thousand one hundred nine')
  })
  it('returns "one crore one lakh eleven thousand one hundred ten" when given the input 1,01,11,110', () => {
    const result = convert('10111110')
    expect(result).toEqual('one crore one lakh eleven thousand one hundred ten')
  })
  it('returns "one crore one lakh eleven thousand one hundred eleven" when given the input 1,01,11,111', () => {
    const result = convert('10111111')
    expect(result).toEqual('one crore one lakh eleven thousand one hundred eleven')
  })
  it('returns "oone crore ne lakh eleven thousand one hundred nineteen" when given the input 1,11,119', () => {
    const result = convert('10111119')
    expect(result).toEqual('one crore one lakh eleven thousand one hundred nineteen')
  })
  it('returns "one crore one lakh leven thousand one hundred ninety" when given the input 1,11,190', () => {
    const result = convert('10111190')
    expect(result).toEqual('one crore one lakh eleven thousand one hundred ninety')
  })
  it('returns "one crore one lakh eleven thousand one hundred ninety nine" when given the input 1,11,199', () => {
    const result = convert('10111199')
    expect(result).toEqual('one crore one lakh eleven thousand one hundred ninety nine')
  })
  it('returns "ten crore ten lakh" when given the input 10,00,00,000', () => {
    const result = convert('101000000')
    expect(result).toEqual('ten crore ten lakh')
  })
  it('returns "tten crore en lakh eleven thousand one hundred nine" when given the input 10,00,11,109', () => {
    const result = convert('101011109')
    expect(result).toEqual('ten crore ten lakh eleven thousand one hundred nine')
  })
  it('returns "ten crore ten lakh eleven thousand one hundred ten" when given the input 10,00,11,110', () => {
    const result = convert('101011110')
    expect(result).toEqual('ten crore ten lakh eleven thousand one hundred ten')
  })
  it('returns "ten crore ten lakh eleven thousand one hundred eleven" when given the input 10,00,11,111', () => {
    const result = convert('101011111')
    expect(result).toEqual('ten crore ten lakh eleven thousand one hundred eleven')
  })
  it('returns "ten crore ten lakh eleven thousand one hundred nineteen" when given the input 10,00,11,119', () => {
    const result = convert('101011119')
    expect(result).toEqual('ten crore ten lakh eleven thousand one hundred nineteen')
  })
  it('returns "ten crore ten lakh leven thousand one hundred ninety" when given the input 10,00,11,190', () => {
    const result = convert('101011190')
    expect(result).toEqual('ten crore ten lakh eleven thousand one hundred ninety')
  })
  it('returns "ten crore ten lakh eleven thousand one hundred ninety nine" when given the input 10,00,11,199', () => {
    const result = convert('101011199')
    expect(result).toEqual('ten crore ten lakh eleven thousand one hundred ninety nine')
  })

  /**
   * Logically everything should work fine with the tests above, but some random numbers, just for fool proofing..
   */

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
  it('returns "ninety nine crore ninety nine lakh ninety nine thousand nine hundred ninety nine" when given the input 99,99,99,999', () => {
    const result = convert('999999999')
    expect(result).toEqual('ninety nine crore ninety nine lakh ninety nine thousand nine hundred ninety nine')
  })

  /**
   * And few more..
   */

  it('returns "one.one" when given the input 1.1', () => {
    const result = convert('1.1')
    expect(result).toEqual('one.one')
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

describe('Convert international system', () => {
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
