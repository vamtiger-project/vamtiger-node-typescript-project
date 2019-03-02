import { resolve as resolvePath } from 'path';
import createFolder from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';
import exportEmptyStringSnippet from './snippet/export-empty-string';

const { cwd } = process;
const folder = resolvePath(
    cwd(),
    'source',
    'html'
);
const htmlPath = resolvePath(
    folder,
    'inxex.html'
);
const modulePath = resolvePath(
    folder,
    'index.ts'
);

export default async function() {
    await createFolder(folder);
    await Promise.all([
        createFile(htmlPath, ''),
        createFile(modulePath, exportEmptyStringSnippet)
    ]);
}