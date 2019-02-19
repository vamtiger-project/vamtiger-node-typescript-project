import { resolve as resolvePath } from 'path';
import createFolder from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';
import { ICreateWebComponentHtml } from './types';
import getHtml from './get-web-component-test-html';

const { cwd } = process;
const folder = resolvePath(
    cwd(),
    'source',
    'test',
    'html'
);
const htmlPath = resolvePath(
    folder,
    'test.html'
);

export default async function ({ packagePath }: ICreateWebComponentHtml) {
    const { name } = require(packagePath);
    const html = getHtml({ name });

    await createFolder(folder);
    await createFile(htmlPath, html);
}