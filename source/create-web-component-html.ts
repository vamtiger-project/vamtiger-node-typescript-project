import { resolve as resolvePath } from 'path';
import createFolder from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';

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

export default async function() {
    await createFolder(folder);
    await createFile(htmlPath, '');
}