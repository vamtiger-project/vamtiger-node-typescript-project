import { resolve as resolvePath } from 'path';
import createFolder from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';

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

export default async function() {
    await createFolder(folder);

    await Promise.all([
        createFile(cssPath, ''),
        createFile(documentCssPath, '')
    ]);
}