import emptyObjectExport from './snippet/empty-object-export';
import { resolve as resolvePath } from 'path';
import createFile from 'vamtiger-create-file';

const { cwd } = process;
const folder = resolvePath(
    cwd(),
    'source'
);

export default async function() {
    const filePath = resolvePath(
        folder,
        'json.ts'
    );

    await createFile(filePath, emptyObjectExport);
}
