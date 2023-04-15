# currency-in-words

**Convert currency or similar number formats to respective words**
<br>

### Installation:
___
<br>

```javascript
npm i currency-in-words
```

### Usage:
___

```javascript
import { convert } from 'currency-in-words'

/*
* format: 'intl' | 'in'
* lang: 'en'
*
* convert: (string, { format: string, lang: string }) => string
*/

//  indian-system
const result = convert('777')

//  international-system
const result = convert('777', { format: 'intl' }) seven
```

```javascript
console.log('777')  // seven hundred seventy seven
console.log('1022') // one thousand twenty two
console.log('1,022') // NaN
console.log('66.123') // sixty six.twelve
console.log('99.11') // ninety nine.eleven
console.log('99.09') // ninety nine; decimals lesser than .10 is rejected

console.log('100000') // one lakh
console.log('100000', { format: 'int' }) // one hundred thousand
```
> *Note*
> 1. Expect ```NaN``` when ',' is present, eg: '100,000.99'
> 2. Expect ```NaN``` when any invalid characters are present, eg: 10E55
> 3. Fractional part is corrected to two places
> 4. Decimals from .00 to .09 is ignored.
> 5. However, visit [Hacks](#hack) to learn how to handle these limitations

<br>

### Compatibility
___

Supports upto 15 digits for both indian and international systems on their integer part. A RangeError will be thrown for length beyond 15.

eg: calling convert with 100,000,000,000,000 * 10 will throw a range error

```java
International system:

999,999,999,999,999 (1 quadrillion - 1)

Indian system:

99,99,99,99,99,99,999 (100 crore crore - 1)

```

### <a name="hack">Hacks</a>
___

<br>
Hard time passing it as a string? cast it from the source
<br>

```javascript
const amount = 0.99
const result = convert(`${amount}`) //  zero.ninety nine
```
<br>
Eliminate commas
<br>

```javascript
const amount = '1,000.99'
const sanitized = amount.replace(/,/, '') //  1000.99
```
<br>
Want decimal places not to be corrected? Control it from code.
<br>

```javascript
const amount = '123.123'
const [dollars, cents] = amount.split('.')
const result = `${convert(dollars)}.${convert(cents)}` // one hundred twenty threee.one hundred twenty three
```
<br>
