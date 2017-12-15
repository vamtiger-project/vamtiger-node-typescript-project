# VAMTIGER Bash
Get a list of all entries for a defined directory path.

## Installation
[VAMTIGER Get Directory Content](https://github.com/vamtiger-project/vamtiger-get-directory-content) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm install --save vamtiger-get-directory-content
```
or
```bash
yarn add vamtiger-get-directory-content
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Get Directory Content](https://github.com/vamtiger-project/vamtiger-get-directory-content):
```javascript
import getDirectoryContent from 'vamtiger-get-directory-content';
```
or
```javascript
const getDirectoryContent = require('vamtiger-get-directory-content').default;
```
Reference an array of file/directory entries for defined directory path:
```javascript
getDirectoryContent('some/directory/absolute/path')
    .then(handleResult)
    .catch(handleError);
```
Since [VAMTIGER Get Directory Content](https://github.com/vamtiger-project/vamtiger-get-directory-content) returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), the result can be more conveniently referenced within an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):
```javascript
async someAsyncFunction function() {
    const directoryContent = await getDirectoryContent('some/directory/absolute/path');
}
```