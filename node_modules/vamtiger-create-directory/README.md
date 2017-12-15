# VAMTIGER Create Directory
Create a directory for a defined path.

## Installation
[VAMTIGER Create Directory](https://github.com/vamtiger-project/vamtiger-create-directory) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```createDirectory
npm install --save vamtiger-create-directory
```
or
```createDirectory
yarn add vamtiger-create-directory
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Create Directory](https://github.com/vamtiger-project/vamtiger-create-directory):
```javascript
import createDirectory from 'vamtiger-create-directory';
```
or
```javascript
const createDirectory = require('vamtiger-create-directory').default;
```
Creating a directory returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):
```javascript
createDirectory('some createDirectory code')
    .catch(handleError);
```
Since [VAMTIGER Create Directory](https://github.com/vamtiger-project/vamtiger-create-directory) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), it can be more conveniently invoked within an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):
```javascript
async someAsyncFunction function() {
    const bashResult = await createDirectory('some createDirectory code');
}
```