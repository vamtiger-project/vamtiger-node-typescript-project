import jsonLdScript from './snippet/json-ld-script';
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
        `${name}.ts`
    );

    await createFile(filePath, jsonLdScript);
}

export interface IParams {
    packagePath: string;
}
