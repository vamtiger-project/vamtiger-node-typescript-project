import { js_beautify as format } from 'js-beautify';
import createFile from 'vamtiger-create-file';

export default async (params: Params) => {
    const projectPackage = params.projectPackage;
    const currentPackage = require(projectPackage) as Project;

    let updatedPackage: string;

    currentPackage.main = 'build';
    currentPackage.types = 'build/index.d.ts';

    currentPackage.scripts.test = 'mocha build/test --recursive';
    currentPackage.scripts.build = 'tsc';
    currentPackage.scripts.commit = 'vamtigerNodeTypescriptCommit --push --publish';

    updatedPackage = format(JSON.stringify(currentPackage));

    await createFile(projectPackage, updatedPackage);
};

export interface Params {
    projectPackage: string;
}

interface Project {
    main: string;
    types: string;
    scripts: Scripts;
}

interface Scripts {
    build: string;
    commit: string;
    test: string;
}