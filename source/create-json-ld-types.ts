import types from './snippet/json-ld-types';
import { resolve as resolvePath } from 'path';
import createFile from 'vamtiger-create-file';

const { cwd } = process;
const folder = resolvePath(
    cwd(),
    'source'
);

export default async function({ packagePath }: IParams) {
    const { name } = require(packagePath);
    const filePath = resolvePath(
        folder,
        'types.ts'
    );

    await createFile(filePath, types(name));
}

export interface IParams {
    packagePath: string;
}