import { resolve as resolvePath } from 'path';
import createFolder from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';
import { ICreateWebComponentHtml } from './types';
import getHtml from './get-web-component-test-html';

const { cwd } = process;
const folder = resolvePath(
    cwd(),
    'source'
);
const filePath = resolvePath(
    folder,
    'element.ts'
);

export default async function () {
    await createFolder(folder);
    await createFile(filePath, '');
}