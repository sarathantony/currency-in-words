# currency-in-words

**Convert currency or any number formats to respective words**


___
### __For local installation and testing__


```javascript
cd package
npm link
cd ../
mkdir test-folder
cd test-folder
npm link currency-in-words
touch script.js
```

> script.js

```javascript
const convert = require('currency-in-words')

console.log('test 5', convert('5'))
```
