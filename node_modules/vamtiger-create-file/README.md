# VAMTIGER Create File
Create a file for a defined path.

## Installation
[VAMTIGER Create File](https://github.com/vamtiger-project/https://github.com/vamtiger-project/vamtiger-create-file) can be installed using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/):
```bash
npm install --save vamtiger-create-file
```
or
```bash
yarn add vamtiger-create-file
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Create File](https://github.com/vamtiger-project/https://github.com/vamtiger-project/vamtiger-create-file):
```javascript
import createFile from 'vamtiger-create-file';
```
or
```javascript
const createFile = require('vamtiger-create-file').default;
```

[VAMTIGER Create File](https://github.com/vamtiger-project/https://github.com/vamtiger-project/vamtiger-create-file) can create an empty file:
```javascript
createFile('some/file/absolute/path')
    .then(handleResult)
    .catch(handleError);
```

File data can also be written the the new file:
```javascript
createFile('some/file/absolute/path', 'Some file data')
    .catch(handleError);
```

[VAMTIGER Create File](https://github.com/vamtiger-project/https://github.com/vamtiger-project/vamtiger-create-file) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), it can be more conveniently executed within an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):
```javascript
async someAsyncFunction function() {
    const fileData = 'Some file data';
    
    await createFile('some/file/absolute/path', fileData);
}
``` 