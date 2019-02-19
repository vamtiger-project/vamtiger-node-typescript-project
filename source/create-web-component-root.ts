import { resolve as resolvePath } from 'path';
import createFolder from 'vamtiger-create-directory';
import createFile from 'vamtiger-create-file';

const { cwd } = process;
const folder = resolvePath(
    cwd(),
    'source'
);

export default async function({ name = 'index.ts' }: IParams) {
    const filePath = resolvePath(
        folder,
        name
    );

    await createFolder(folder);
    await createFile(filePath, '');
}

export interface IParams {
    name: string;
}