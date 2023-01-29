const { convert } = require('../src/index')

describe('Convert', () => {
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
  it('returns "one hundred nine hundred" when given the input 1900', () => {
    const result = convert('1900')
    expect(result).toEqual('one thousand nine hundred')
  })
})