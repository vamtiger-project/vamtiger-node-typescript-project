import { resolve as resolvePath } from 'path';
import createFolder from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';
import exportEmptyStringSnippet from './snippet/export-empty-string';

const { cwd } = process;
const folder = resolvePath(
    cwd(),
    'source',
    'css'
);
const cssPath = resolvePath(
    folder,
    'index.css'
);
const documentCssPath = resolvePath(
    folder,
    'document-index.css'
);
const modulePath = resolvePath(
    folder,
    'index.ts'
);
const documentModulePath = resolvePath(
    folder,
    'document-index.ts'
);

export default async function() {
    await createFolder(folder);

    await Promise.all([
        createFile(cssPath, ''),
        createFile(documentCssPath, ''),
        createFile(modulePath, exportEmptyStringSnippet),
        createFile(documentModulePath, exportEmptyStringSnippet)
    ]);
}