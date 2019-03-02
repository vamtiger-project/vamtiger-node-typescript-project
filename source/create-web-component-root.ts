import { resolve as resolvePath } from 'path';
import createFile from 'vamtiger-create-file';
import webcomponentSnippet from './snippet/webcomponent';

const { cwd } = process;
const folder = resolvePath(
    cwd(),
    'source'
);

export default async function({ packagePath }: IParams) {
    const { name } = require(packagePath);
    const filePath = resolvePath(
        folder,
        name
    );

    await createFile(filePath, webcomponentSnippet);
}

export interface IParams {
    packagePath: string;
}
