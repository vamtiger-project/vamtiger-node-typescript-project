import loadScript from './snippet/json-ld-load-script';
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
        'load-script.ts'
    );

    await createFile(filePath, loadScript);
}

export interface IParams {
    packagePath: string;
}