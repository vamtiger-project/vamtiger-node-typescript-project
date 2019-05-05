import jsonLd from './snippet/json-ld';
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
        'json-ld.ts'
    );

    await createFile(filePath, jsonLd);
}
