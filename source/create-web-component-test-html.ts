import { resolve as resolvePath, dirname } from 'path';
import createFolder from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';
import { ICreateWebComponentHtml } from './types';
import getHtml from './get-web-component-test-html';
import browserTestSnippet from './snippet/webcomponent-test-browser';
import loadScriptTestSnippet from './snippet/webcomponent-test-load-script';
import nodeScriptTestSnippet from './snippet/webcomponent-test-node';
import generateTestSnippet from './snippet/webcomponent-test-generate';

const { cwd } = process;
const folder = resolvePath(
    cwd(),
    'source',
    'test',
    'html'
);
const testFolder = dirname(folder);
const htmlPath = resolvePath(
    folder,
    'test.html'
);
const cssPath = resolvePath(
    folder,
    'test.css'
);
const browserTest = resolvePath(
    testFolder,
    'browser.ts'
);
const loadScriptTest = resolvePath(
    testFolder,
    'load-script.ts'
);
const nodeScriptTest = resolvePath(
    testFolder,
    'node.ts'
);
const generateScriptTest = resolvePath(
    testFolder,
    'generate.ts'
);

export default async function ({ packagePath }: ICreateWebComponentHtml) {
    const { name } = require(packagePath);
    const html = getHtml({ name });

    await createFolder(folder);

    await Promise.all([
        createFile(htmlPath, html),
        createFile(cssPath, html),
        createFile(browserTest, browserTestSnippet),
        createFile(loadScriptTest, loadScriptTestSnippet({ name })),
        createFile(nodeScriptTest, nodeScriptTestSnippet),
        createFile(generateScriptTest, generateTestSnippet)
    ]);
}