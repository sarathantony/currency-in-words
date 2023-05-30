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
* IOptions {
*   format?: 'intl' | 'in'
*   lang?: 'en'
* }
*
* convert(value: string, {format: 'intl', lang: 'en'}?: IOptions) => string
*/

//  indian-system
const inWords1 = convert('555.77')

//  international-system
const inWords2 = convert('777.55', { format: 'intl' })
```

```javascript
console.log(convert('555'))  // five hundred fifty five
console.log(convert('1022')) // one thousand twenty two
console.log(convert('1,022')) // NaN
console.log(convert('66.123')) // sixty six.twelve
console.log(convert('99.11')) // ninety nine.eleven
console.log(convert('99.09')) // ninety nine; decimals lesser than .10 is rejected

console.log(convert(100000)) // one lakh
console.log(convert(100000, { format: 'int' })) // one hundred thousand
```
> *Note*
> 1. Expect ```NaN``` when any invalid characters are present, eg: 10E55
> 2. Fractional part is corrected to two decimal places
> 3. Decimals from .00 to .09 is ignored.

<br>

### Compatibility
___

Supports upto 15 digits for both indian and international systems on their integer part. A RangeError will be thrown for length beyond 15.

eg: calling convert with <bold>999,999,999,999,999 + 1</bold> will throw a range error

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
