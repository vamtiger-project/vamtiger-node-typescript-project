import { resolve as resolvePath } from 'path';
import createFile from 'vamtiger-create-file';
import elementSnippet from './snippet/webcomponent-element';
import elementConfigSnippet from './snippet/webcomponent-config';
import getTemplateSnippet from './snippet/webcomponent-get-template';
import typesSnippet from './snippet/webcomponent-types';

const { cwd } = process;
const folder = resolvePath(
    cwd(),
    'source'
);
const elementPath = resolvePath(
    folder,
    'element.ts'
);
const configPath = resolvePath(
    folder,
    'config.ts'
);
const getTemplatePath = resolvePath(
    folder,
    'get-template.ts'
);
const typesPath = resolvePath(
    folder,
    'types.ts'
);

export default async function ({ packagePath }: IParams) {
    const { name } = require(packagePath);

    await Promise.all([
        createFile(elementPath, elementSnippet({ name })),
        createFile(configPath, elementConfigSnippet),
        createFile(getTemplatePath, getTemplateSnippet),
        createFile(typesPath, typesSnippet)
    ]);
}

export interface IParams {
    packagePath: string;
}