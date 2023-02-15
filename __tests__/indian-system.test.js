const {
  handleHundreds,
  handleThousands,
  handleTenThousands,
  handleLakh,
  handleTenLakh,
  handleCrore,
} = require('../src/utils/inidan-system')

describe('Handle hundreds', () => {
  it('expects one hundred, when passed in 100', () => {
    const result = handleHundreds('100').trim()
    expect(result).toBe('one hundred')
  })
  it('expects one hundred ninety nine, when passed in 199', () => {
    const result = handleHundreds('199').trim()
    expect(result).toBe('one hundred ninety nine')
  })
  it('expects one hundred twenty, when passed in 120', () => {
    const result = handleHundreds('120').trim()
    expect(result).toBe('one hundred twenty')
  })
  it('expects one hundred eleven, when passed in 111', () => {
    const result = handleHundreds('111').trim()
    expect(result).toBe('one hundred eleven')
  })
  it('expects one hundred one, when passed in 101', () => {
    const result = handleHundreds('101').trim()
    expect(result).toBe('one hundred one')
  })
})

describe('Handle thousands', () => {
  it('expects one thousand, when passed in 1000', () => {
    const result = handleThousands('1000').trim()
    expect(result).toBe('one thousand')
  })
  it('expects one thousand one, when passed in 1001', () => {
    const result = handleThousands('1001').trim()
    expect(result).toBe('one thousand one')
  })
  it('expects one thousand ten, when passed in 1010', () => {
    const result = handleThousands('1010').trim()
    expect(result).toBe('one thousand ten')
  })
  it('expects one thousand eleven, when passed in 1011', () => {
    const result = handleThousands('1011').trim()
    expect(result).toBe('one thousand eleven')
  })
  it('expects one thousand eleven, when passed in 1111', () => {
    const result = handleThousands('1111').trim()
    expect(result).toBe('one thousand one hundred eleven')
  })
  it('expects one thousand ninety nine, when passed in 1099', () => {
    const result = handleThousands('1099').trim()
    expect(result).toBe('one thousand ninety nine')
  })
  it('expects one thousand nine hundred ninety nine, when passed in 1999', () => {
    const result = handleThousands('1999').trim()
    expect(result).toBe('one thousand nine hundred ninety nine')
  })
})

describe('Handle ten thousands', () => {
  it('expects ten thousand, when passed in 10000', () => {
    const result = handleTenThousands('10000').trim()
    expect(result).toBe('ten thousand')
  })
  it('expects ten thousand one, when passed in 10001', () => {
    const result = handleTenThousands('10001').trim()
    expect(result).toBe('ten thousand one')
  })
  it('expects ten thousand ten, when passed in 10010', () => {
    const result = handleTenThousands('10010').trim()
    expect(result).toBe('ten thousand ten')
  })
  it('expects ten thousand one hundred, when passed in 10100', () => {
    const result = handleTenThousands('10100').trim()
    expect(result).toBe('ten thousand one hundred')
  })
  it('expects ten thousand one hundred ten, when passed in 10110', () => {
    const result = handleTenThousands('10110').trim()
    expect(result).toBe('ten thousand one hundred ten')
  })
  it('expects ten thousand one hundred eleven, when passed in 10111', () => {
    const result = handleTenThousands('10111').trim()
    expect(result).toBe('ten thousand one hundred eleven')
  })
  it('expects eleven thousand, when passed in 11000', () => {
    const result = handleTenThousands('11000').trim()
    expect(result).toBe('eleven thousand')
  })
  it('expects eleven thousand one, when passed in 11001', () => {
    const result = handleTenThousands('11001').trim()
    expect(result).toBe('eleven thousand one')
  })
  it('expects eleven thousand ten, when passed in 11010', () => {
    const result = handleTenThousands('11010').trim()
    expect(result).toBe('eleven thousand ten')
  })
  it('expects eleven thousand eleven, when passed in 11011', () => {
    const result = handleTenThousands('11011').trim()
    expect(result).toBe('eleven thousand eleven')
  })
  it('expects eleven thousand one hundred, when passed in 11100', () => {
    const result = handleTenThousands('11100').trim()
    expect(result).toBe('eleven thousand one hundred')
  })
  it('expects eleven thousand one hundred ten, when passed in 11110', () => {
    const result = handleTenThousands('11110').trim()
    expect(result).toBe('eleven thousand one hundred ten')
  })
  it('expects eleven thousand eleven, when passed in 11111', () => {
    const result = handleTenThousands('11111').trim()
    expect(result).toBe('eleven thousand one hundred eleven')
  })
})

describe('Handle lakhs', () => {
  it('expects one lakh, when passed in 100000', () => {
    const result = handleLakh('100000').trim()
    expect(result).toBe('one lakh')
  })
  it('expects one lakh one, when passed in 100001', () => {
    const result = handleLakh('100001').trim()
    expect(result).toBe('one lakh one')
  })
  it('expects one lakh ten, when passed in 100010', () => {
    const result = handleLakh('100010').trim()
    expect(result).toBe('one lakh ten')
  })
  it('expects one lakh eleven, when passed in 100011', () => {
    const result = handleLakh('100011').trim()
    expect(result).toBe('one lakh eleven')
  })
  it('expects one lakh one hundred, when passed in 100100', () => {
    const result = handleLakh('100100').trim()
    expect(result).toBe('one lakh one hundred')
  })
  it('expects one lakh one hundred eleven, when passed in 100111', () => {
    const result = handleLakh('100111').trim()
    expect(result).toBe('one lakh one hundred eleven')
  })
  it('expects one lakh one thousand, when passed in 101000', () => {
    const result = handleLakh('101000').trim()
    expect(result).toBe('one lakh one thousand')
  })
  it('expects one lakh one thousand one, when passed in 101001', () => {
    const result = handleLakh('101001').trim()
    expect(result).toBe('one lakh one thousand one')
  })
  it('expects one lakh one thousand ten, when passed in 101010', () => {
    const result = handleLakh('101010').trim()
    expect(result).toBe('one lakh one thousand ten')
  })
  it('expects one lakh one thousand eleven, when passed in 101011', () => {
    const result = handleLakh('101011').trim()
    expect(result).toBe('one lakh one thousand eleven')
  })
  it('expects one lakh one thousand one hundred, when passed in 101100', () => {
    const result = handleLakh('101100').trim()
    expect(result).toBe('one lakh one thousand one hundred')
  })
  it('expects one lakh one thousand one hundred one, when passed in 101101', () => {
    const result = handleLakh('101101').trim()
    expect(result).toBe('one lakh one thousand one hundred one')
  })
  it('expects one lakh one thousand one hundred one, when passed in 101111', () => {
    const result = handleLakh('101111').trim()
    expect(result).toBe('one lakh one thousand one hundred eleven')
  })
  it('expects one lakh eleven thousand one hundred one, when passed in 111000', () => {
    const result = handleLakh('111000').trim()
    expect(result).toBe('one lakh eleven thousand')
  })
  it('expects one lakh eleven thousand one, when passed in 111001', () => {
    const result = handleLakh('111001').trim()
    expect(result).toBe('one lakh eleven thousand one')
  })
  it('expects one lakh eleven thousand ten, when passed in 111010', () => {
    const result = handleLakh('111010').trim()
    expect(result).toBe('one lakh eleven thousand ten')
  })
  it('expects one lakh eleven thousand eleven, when passed in 111011', () => {
    const result = handleLakh('111011').trim()
    expect(result).toBe('one lakh eleven thousand eleven')
  })
  it('expects one lakh eleven thousand one hundred, when passed in 111100', () => {
    const result = handleLakh('111100').trim()
    expect(result).toBe('one lakh eleven thousand one hundred')
  })
  it('expects one lakh eleven thousand one hundred one, when passed in 111101', () => {
    const result = handleLakh('111101').trim()
    expect(result).toBe('one lakh eleven thousand one hundred one')
  })
  it('expects one lakh eleven thousand one hundred, when passed in 111110', () => {
    const result = handleLakh('111110').trim()
    expect(result).toBe('one lakh eleven thousand one hundred ten')
  })
  it('expects one lakh eleven thousand one hundred, when passed in 111111', () => {
    const result = handleLakh('111111').trim()
    expect(result).toBe('one lakh eleven thousand one hundred eleven')
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
  it('expects ten lakh one, when passed in 1000001', () => {
    const result = handleTenLakh('1000001').trim()
    expect(result).toBe('ten lakh one')
  })
  it('expects ten lakh ten, when passed in 1000010', () => {
    const result = handleTenLakh('1000010').trim()
    expect(result).toBe('ten lakh ten')
  })
  it('expects ten lakh eleven, when passed in 1000011', () => {
    const result = handleTenLakh('1000011').trim()
    expect(result).toBe('ten lakh eleven')
  })
  it('expects ten lakh one hundred, when passed in 1000100', () => {
    const result = handleTenLakh('1000100').trim()
    expect(result).toBe('ten lakh one hundred')
  })
  it('expects ten lakh one hundred one, when passed in 1000101', () => {
    const result = handleTenLakh('1000101').trim()
    expect(result).toBe('ten lakh one hundred one')
  })
  it('expects ten lakh one hundred eleven, when passed in 1000111', () => {
    const result = handleTenLakh('1000111').trim()
    expect(result).toBe('ten lakh one hundred eleven')
  })
  it('expects ten lakh one thousand, when passed in 1001000', () => {
    const result = handleTenLakh('1001000').trim()
    expect(result).toBe('ten lakh one thousand')
  })
  it('expects ten lakh one thousand one, when passed in 1001001', () => {
    const result = handleTenLakh('1001001').trim()
    expect(result).toBe('ten lakh one thousand one')
  })
  it('expects ten lakh one thousand ten, when passed in 1001010', () => {
    const result = handleTenLakh('1001010').trim()
    expect(result).toBe('ten lakh one thousand ten')
  })
  it('expects ten lakh one thousand eleven, when passed in 1001011', () => {
    const result = handleTenLakh('1001011').trim()
    expect(result).toBe('ten lakh one thousand eleven')
  })
  it('expects ten lakh one thousand one hundred, when passed in 1001100', () => {
    const result = handleTenLakh('1001100').trim()
    expect(result).toBe('ten lakh one thousand one hundred')
  })
  it('expects ten lakh one thousand one hundred one, when passed in 1001101', () => {
    const result = handleTenLakh('1001101').trim()
    expect(result).toBe('ten lakh one thousand one hundred one')
  })
  it('expects ten lakh one thousand one hundred one, when passed in 1001111', () => {
    const result = handleTenLakh('1001111').trim()
    expect(result).toBe('ten lakh one thousand one hundred eleven')
  })
  it('expects ten lakh eleven thousand one hundred one, when passed in 1011000', () => {
    const result = handleTenLakh('1011000').trim()
    expect(result).toBe('ten lakh eleven thousand')
  })
  it('expects ten lakh eleven thousand one, when passed in 1011001', () => {
    const result = handleTenLakh('1011001').trim()
    expect(result).toBe('ten lakh eleven thousand one')
  })
  it('expects ten lakh eleven thousand ten, when passed in 1011010', () => {
    const result = handleTenLakh('1011010').trim()
    expect(result).toBe('ten lakh eleven thousand ten')
  })
  it('expects ten lakh eleven thousand eleven, when passed in 1011011', () => {
    const result = handleTenLakh('1011011').trim()
    expect(result).toBe('ten lakh eleven thousand eleven')
  })
  it('expects ten lakh eleven thousand one hundred, when passed in 1011100', () => {
    const result = handleTenLakh('1011100').trim()
    expect(result).toBe('ten lakh eleven thousand one hundred')
  })
  it('expects ten lakh eleven thousand one hundred one, when passed in 1011101', () => {
    const result = handleTenLakh('1011101').trim()
    expect(result).toBe('ten lakh eleven thousand one hundred one')
  })
  it('expects ten lakh eleven thousand one hundred, when passed in 1011110', () => {
    const result = handleTenLakh('1011110').trim()
    expect(result).toBe('ten lakh eleven thousand one hundred ten')
  })
  it('expects ten lakh eleven thousand one hundred, when passed in 1011111', () => {
    const result = handleTenLakh('1011111').trim()
    expect(result).toBe('ten lakh eleven thousand one hundred eleven')
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
  it('expects one crore one, when passed in 10000001', () => {
    const result = handleCrore('10000001').trim()
    expect(result).toBe('one crore one')
  })
  it('expects one crore ten, when passed in 10000010', () => {
    const result = handleCrore('10000010').trim()
    expect(result).toBe('one crore ten')
  })
  it('expects one crore eleven, when passed in 10000011', () => {
    const result = handleCrore('10000011').trim()
    expect(result).toBe('one crore eleven')
  })
  it('expects one crore one hundred, when passed in 100100', () => {
    const result = handleCrore('10000100').trim()
    expect(result).toBe('one crore one hundred')
  })
  it('expects one crore one hundred eleven, when passed in 10000111', () => {
    const result = handleCrore('10000111').trim()
    expect(result).toBe('one crore one hundred eleven')
  })
  it('expects one crore one thousand, when passed in 10001000', () => {
    const result = handleCrore('10001000').trim()
    expect(result).toBe('one crore one thousand')
  })
  it('expects one crore one thousand one, when passed in 10001001', () => {
    const result = handleCrore('10001001').trim()
    expect(result).toBe('one crore one thousand one')
  })
  it('expects one crore one thousand ten, when passed in 10001010', () => {
    const result = handleCrore('10001010').trim()
    expect(result).toBe('one crore one thousand ten')
  })
  it('expects one crore one thousand eleven, when passed in 10001011', () => {
    const result = handleCrore('10001011').trim()
    expect(result).toBe('one crore one thousand eleven')
  })
  it('expects one crore one thousand one hundred, when passed in 10001100', () => {
    const result = handleCrore('10001100').trim()
    expect(result).toBe('one crore one thousand one hundred')
  })
  it('expects one crore one thousand one hundred one, when passed in 10001101', () => {
    const result = handleCrore('10001101').trim()
    expect(result).toBe('one crore one thousand one hundred one')
  })
  it('expects one crore one thousand one hundred one, when passed in 10001111', () => {
    const result = handleCrore('10001111').trim()
    expect(result).toBe('one crore one thousand one hundred eleven')
  })
  it('expects one crore eleven thousand one hundred one, when passed in 10011000', () => {
    const result = handleCrore('10011000').trim()
    expect(result).toBe('one crore eleven thousand')
  })
  it('expects one crore eleven thousand one, when passed in 10011001', () => {
    const result = handleCrore('10011001').trim()
    expect(result).toBe('one crore eleven thousand one')
  })
  it('expects one crore eleven thousand ten, when passed in 10011010', () => {
    const result = handleCrore('10011010').trim()
    expect(result).toBe('one crore eleven thousand ten')
  })
  it('expects one crore eleven thousand eleven, when passed in 10011011', () => {
    const result = handleCrore('10011011').trim()
    expect(result).toBe('one crore eleven thousand eleven')
  })
  it('expects one crore eleven thousand one hundred, when passed in 10011100', () => {
    const result = handleCrore('10011100').trim()
    expect(result).toBe('one crore eleven thousand one hundred')
  })
  it('expects one crore eleven thousand one hundred one, when passed in 10011101', () => {
    const result = handleCrore('10011101').trim()
    expect(result).toBe('one crore eleven thousand one hundred one')
  })
  it('expects one crore eleven thousand one hundred, when passed in 10011110', () => {
    const result = handleCrore('10011110').trim()
    expect(result).toBe('one crore eleven thousand one hundred ten')
  })
  it('expects one crore eleven thousand one hundred, when passed in 10011111', () => {
    const result = handleCrore('10011111').trim()
    expect(result).toBe('one crore eleven thousand one hundred eleven')
  })
  it('expects nine crore ninety nine lakh ninety nine thousand nine hundred ninety nine, when passed in 9999999', () => {
    const result = handleCrore('9999999').trim()
    expect(result).toBe('nine crore ninety nine lakh ninety nine thousand nine hundred ninety nine')
  })
})
