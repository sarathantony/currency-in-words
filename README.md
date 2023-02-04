# currency-in-words

**Convert currency or any number formats to respective words**
___
> **Note**
___
> 1. Current version supports only indian system. But, subsequent versions will support international version.|
> 2. Commas in the test cases are just for readability, but doesn't support in the input.                     |
___

### Installation:

```javascript
npm i currency-in-words
```

### Usage:

```javascript
import { convert } from 'currency-in-words'

const result = convert('777')
```

```javascript
console.log('777')  //   seven hundred seventy seven
console.log('1022') //  one thousand twenty two
console.log('1,022')    // NaN
console.log('66.123') //  sixty six.twelve
```
> *Note*
> 1. Expect ```NaN``` when passed in ','
> 2. Decimals are corrected to two places

Adding test-case results just to make your life easier..

```javascript
Convert
    ✓ returns "NaN" for undefined (1 ms)
    ✓ returns "NaN" for null
    ✓ returns "NaN" for an invalid number(a1.01)
    ✓ returns "NaN" for an invalid number(1.1a)
    ✓ returns "NaN" for an invalid number(random string) (1 ms)
    ✓ returns "one" when given the input 1
    ✓ returns "nine" when given the input 9
    ✓ returns "ten" when given the input 10
    ✓ returns "eleven" when given the input 11
    ✓ returns "nineteen" when given the input 19
    ✓ returns "ninety" when given the input 90
    ✓ returns "ninety nine" when given the input 99
    ✓ returns "one hundred" when given the input 100
    ✓ returns "one hundred nine" when given the input 109
    ✓ returns "one hundred ten" when given the input 110
    ✓ returns "one hundred eleven" when given the input 111 (1 ms)
    ✓ returns "one hundred nineteen" when given the input 119
    ✓ returns "one hundred ninety" when given the input 190
    ✓ returns "one hundred ninety nine" when given the input 199
    ✓ returns "one thousand" when given the input 1000
    ✓ returns "one thousand one" when given the input 1001
    ✓ returns "one thousand ten" when given the input 1010
    ✓ returns "one thousand one hundred ten" when given the input 1110
    ✓ returns "one thousand one hundred eleven" when given the input 1111
    ✓ returns "one thousand one hundred ninety nine" when given the input 1199 (1 ms)
    ✓ returns "one thousand nine hundred" when given the input 1900
    ✓ returns "one thousand nine hundred ninety nine" when given the input 1999
    ✓ returns "ten thousand" when given the input 10000
    ✓ returns "eleven thousand one hundred nine" when given the input 11109
    ✓ returns "eleven thousand one hundred ten" when given the input 11110
    ✓ returns "eleven thousand one hundred eleven" when given the input 11111
    ✓ returns "eleven thousand one hundred nineteen" when given the input 11119
    ✓ returns "eleven thousand one hundred ninety" when given the input 11190
    ✓ returns "eleven thousand one hundred ninety nine" when given the input 11199
    ✓ returns "one lakh" when given the input 1,00,000
    ✓ returns "one lakh eleven thousand one hundred nine" when given the input 1,11,109
    ✓ returns "one lakh eleven thousand one hundred ten" when given the input 1,11,110
    ✓ returns "one lakh eleven thousand one hundred eleven" when given the input 1,11,111
    ✓ returns "one lakh eleven thousand one hundred nineteen" when given the input 1,11,119
    ✓ returns "one lakh leven thousand one hundred ninety" when given the input 1,11,190
    ✓ returns "one lakh eleven thousand one hundred ninety nine" when given the input 1,11,199
    ✓ returns "ten lakh" when given the input 10,00,000
    ✓ returns "ten lakh eleven thousand one hundred nine" when given the input 10,11,109
    ✓ returns "ten lakh eleven thousand one hundred ten" when given the input 10,11,110
    ✓ returns "ten lakh eleven thousand one hundred eleven" when given the input 10,11,111
    ✓ returns "ten lakh eleven thousand one hundred nineteen" when given the input 10,11,119
    ✓ returns "ten lakh leven thousand one hundred ninety" when given the input 10,11,190
    ✓ returns "ten lakh eleven thousand one hundred ninety nine" when given the input 10,11,199
    ✓ returns "one crore" when given the input 1,00,00,000 (1 ms)
    ✓ returns "one crore one lakh eleven thousand one hundred nine" when given the input 1,01,11,109
    ✓ returns "one crore one lakh eleven thousand one hundred ten" when given the input 1,01,11,110
    ✓ returns "one crore one lakh eleven thousand one hundred eleven" when given the input 1,01,11,111
    ✓ returns "oone crore ne lakh eleven thousand one hundred nineteen" when given the input 1,11,119
    ✓ returns "one crore one lakh leven thousand one hundred ninety" when given the input 1,11,190
    ✓ returns "one crore one lakh eleven thousand one hundred ninety nine" when given the input 1,11,199
    ✓ returns "ten crore ten lakh" when given the input 10,00,00,000
    ✓ returns "tten crore en lakh eleven thousand one hundred nine" when given the input 10,00,11,109
    ✓ returns "ten crore ten lakh eleven thousand one hundred ten" when given the input 10,00,11,110
    ✓ returns "ten crore ten lakh eleven thousand one hundred eleven" when given the input 10,00,11,111
    ✓ returns "ten crore ten lakh eleven thousand one hundred nineteen" when given the input 10,00,11,119 (1 ms)
    ✓ returns "ten crore ten lakh leven thousand one hundred ninety" when given the input 10,00,11,190
    ✓ returns "ten crore ten lakh eleven thousand one hundred ninety nine" when given the input 10,00,11,199
    ✓ returns "five hundred fifty five" when given the input 555
    ✓ returns "seventy seven thousand two hundred eighty nine" when given the input 77,289
    ✓ returns "seventeen crore ninety nine lakh one hundred" when given the input 17,99,00,100
    ✓ returns "ninety nine crore ninety nine lakh ninety nine thousand nine hundred ninety nine" when given the input 99,99,99,999
    ✓ returns "one.one" when given the input 1.1
    ✓ returns "fifty seven.ninety nine" when given the input 57.99
    ✓ returns "ten" when given the input 10.01; ignore x.01 to x.09 (1 ms)
    ✓ returns "zero" when given the input 0.00
    ✓ returns "zero" when given the input 000
    ✓ returns "three hundred thirty" when given the input 00330; corrected leading zeros
    ✓ returns "eighty eight.twenty" when given the input 088.200; corrected leading zeros and two decimal places
```

#### Hacks :rocket:

For some reason, if you want the decimal places not to be corrected, you can control from your code level,

```javascript
const [dollars, cents] = amount
const billAmout = `${convert(dollars)}.${convert(cents)}`
```
