import { js_beautify as format } from 'js-beautify';
import createFile from 'vamtiger-create-file';
import Args from 'vamtiger-argv/build/main';
import {
    CommandlineArgument,
    shortCommandlineArgument
} from '../types';
import getWebComponentScripts from '../get-web-component-scripts';

const args = new Args();
const webComponent = args.has(CommandlineArgument.webComponent)
    || args.has(shortCommandlineArgument.w);

export default async (params: Params) => {
    const projectPackage = params.projectPackage;
    const currentPackage = require(projectPackage) as Project;
    const { name } = currentPackage

    let updatedPackage: string;

    currentPackage.main = 'build';
    currentPackage.types = 'build/index.d.ts';

    currentPackage.scripts.test = 'mocha build/test --recursive';
    currentPackage.scripts.build = 'tsc';
    currentPackage.scripts.commit = 'vamtigerNodeTypescriptCommit --push --publish';

    if (webComponent) {
        Object.assign(
            currentPackage,
            getWebComponentScripts({ name })
        );
    }

    updatedPackage = format(JSON.stringify(currentPackage));

    await createFile(projectPackage, updatedPackage);
};

export interface Params {
    projectPackage: string;
}

interface Project {
    name: 'string';
    main: string;
    types: string;
    scripts: Scripts;
}

interface Scripts {
    build: string;
    commit: string;
    test: string;
}