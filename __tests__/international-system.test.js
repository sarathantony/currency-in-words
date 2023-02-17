const { spliceLastThree, resolveValue, handleHundreds } = require('../src/utils/international-system')

describe('', () => {
	it('should splice the last three elements of an array', () => {
		const arr = ['1', '2', '3', '4', '5', '6', '7']
		const chunk = spliceLastThree(arr)

		expect(arr).toStrictEqual(['1', '2', '3', '4'])
		expect(chunk).toStrictEqual('567')
	})
	it('should return one hundred million, when passed in value "100" with placeholder million', () => {
		const result = resolveValue('100', 'million').trim()
		expect(result).toBe('one hundred million')
	})
	it('should return an empty string when passed in 000', () => {
		const result = handleHundreds('000')
		expect(result).toEqual('')
	})
	it('retuns one, when passed in 1', () => {
		const result = handleHundreds('1')
		expect(result).toBe('one')
	})
	it('retuns ten, when passed in 10', () => {
		const result = handleHundreds('10')
		expect(result).toBe('ten')
	})
	it('retuns eleven, when passed in 11', () => {
		const result = handleHundreds('11')
		expect(result).toBe('eleven')
	})
	it('retuns one hundred, when passed in 100', () => {
		const result = handleHundreds('100')
		expect(result).toBe('one hundred')
	})
	it('retuns one hundred one, when passed in 101', () => {
		const result = handleHundreds('101')
		expect(result).toBe('one hundred one')
	})
})
