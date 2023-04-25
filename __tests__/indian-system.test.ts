import {
  handleHundreds,
  handleThousands,
  handleTenThousands,
  handleLakh,
  handleTenLakh,
  handleCrore,
  handleTenCrore
} from '../src/utils/inidan-system'

describe('Handle hundreds', () => {
  it('expects one hundred, when passed in 100', () => {
    const result = handleHundreds('100').trim()
    expect(result).toBe('one hundred')
  })
  it('expects one hundred one, when passed in 101', () => {
    const result = handleHundreds('101').trim()
    expect(result).toBe('one hundred one')
  })
  it('expects one hundred ten, when passed in 110', () => {
    const result = handleHundreds('110').trim()
    expect(result).toBe('one hundred ten')
  })
  it('expects one hundred eleven, when passed in 111', () => {
    const result = handleHundreds('111').trim()
    expect(result).toBe('one hundred eleven')
  })
  it('expects one hundred ninety nine, when passed in 199', () => {
    const result = handleHundreds('199').trim()
    expect(result).toBe('one hundred ninety nine')
  })
})

describe('Handle thousands', () => {
  it('expects one thousand, when passed in 1000', () => {
    const result = handleThousands('1000').trim()
    expect(result).toBe('one thousand')
  })
  it('expects nine thousand, when passed in 9000', () => {
    const result = handleThousands('9000').trim()
    expect(result).toBe('nine thousand')
  })
})

describe('Handle ten thousands', () => {
  it('expects ten thousand, when passed in 10,000', () => {
    const result = handleTenThousands('10000').trim()
    expect(result).toBe('ten thousand')
  })
  it('expects eleven thousand, when passed in 11.000', () => {
    const result = handleTenThousands('11000').trim()
    expect(result).toBe('eleven thousand')
  })
  it('expects nineteen thousand, when passed in 19.000', () => {
    const result = handleTenThousands('19000').trim()
    expect(result).toBe('nineteen thousand')
  })
})

describe('Handle lakhs', () => {
  it('expects one lakh, when passed in 1,00,000', () => {
    const result = handleLakh('100000').trim()
    expect(result).toBe('one lakh')
  })
  it('expects nine lakh, when passed in 9,00,000', () => {
    const result = handleLakh('900000').trim()
    expect(result).toBe('nine lakh')
  })
  it('expects nine lakh ninety nine thousand nine hundred ninety nine, when passed in 999999', () => {
    const result = handleLakh('999999').trim()
    expect(result).toBe('nine lakh ninety nine thousand nine hundred ninety nine')
  })
})


describe('Handle ten lakhs', () => {
  it('expects ten lakh, when passed in 1000000', () => {
    const result = handleTenLakh('1000000').trim()
    expect(result).toBe('ten lakh')
  })
  it('expects eleven lakh, when passed in the string 11,00,000', () => {
    const result = handleTenLakh('1100000').trim()
    expect(result).toBe('eleven lakh')
  })
  it('expects ninety nine lakh ninety nine thousand nine hundred ninety nine, when passed in 9999999', () => {
    const result = handleTenLakh('9999999').trim()
    expect(result).toBe('ninety nine lakh ninety nine thousand nine hundred ninety nine')
  })
})

describe('Handle crores', () => {
  it('expects one crore, when passed in 1,00,00,000', () => {
    const result = handleCrore('10000000').trim()
    expect(result).toBe('one crore')
  })
  it('expects nine core, when passed in 9,00,00,000', () => {
    const result = handleCrore('90000000').trim()
    expect(result).toBe('nine crore')
  })
  it('expects nine crore ninety nine lakh ninety nine thousand nine hundred ninety nine, when passed in 9999999', () => {
    const result = handleCrore('9999999').trim()
    expect(result).toBe('nine crore ninety nine lakh ninety nine thousand nine hundred ninety nine')
  })
})

describe('Handle ten crores', () => {
  it('expects ten crore when passed in 10,00,00,000', () => {
    const result = handleTenCrore('100000000').trim()
    expect(result).toBe('ten crore')
  })
  it('expects eleven crore when passed in 11,00,00,000', () => {
    const result = handleTenCrore('110000000').trim()
    expect(result).toBe('eleven crore')
  })
  it('expects ninety nine crore ninety nine lakhs ninety nine thousand nine hundred ninety nine, when passed in 99,99,99,999',
    () => {
      const result = handleTenCrore('999999999').trim()
      expect(result).toBe('ninety nine crore ninety nine lakh ninety nine thousand nine hundred ninety nine')
  })
})
