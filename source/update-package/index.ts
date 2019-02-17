import { js_beautify as format } from 'js-beautify';
import createFile from 'vamtiger-create-file';
import Args from 'vamtiger-argv/build/main';
import {
    CommandlineArgument,
    ShortCommandlineArgument
} from '../types';
import getWebComponentScripts from '../get-web-component-scripts';

const args = new Args();
const webComponent = args.has(CommandlineArgument.webComponent)
    args.has(ShortCommandlineArgument.webComponent);

export default async (params: Params) => {
    const projectPackage = params.projectPackage;
    const currentPackage = require(projectPackage) as Project;
    const { name } = currentPackage

    let updatedPackage: string;

    currentPackage.main = 'build';
    currentPackage.types = 'build/index.d.ts';

    currentPackage.scripts.test = 'npm run build && npm run mocha';
    currentPackage.scripts.mocha = 'mocha build/test --recursive';
    currentPackage.scripts.build = 'tsc';
    currentPackage.scripts.commit = 'vamtigerNodeTypescriptCommit --push --publish';

    if (args.has('bundle')) {
        currentPackage.scripts.commit = 'npm run bundle && vamtiger-node-typescript-commit --push --publish --buildScript bundle';
        currentPackage.scripts.clean = 'rm -rf build/*';
        currentPackage.scripts['clean-bundle'] = 'vamtiger-remove -d build -p \"(index|bin)\\.(js(\\.map)?|d\\.ts)\"';
        currentPackage.scripts['bundle-source'] = 'vamtiger-bundle-typescript --relativePath --entryFilePath source/index.ts --bundleFilePath build/index.js --format cjs --sourcemap true --copySourceMap --minify';
        currentPackage.scripts.bundle = 'npm test && npm run clean && npm run build && npm run bundle-source && npm run clean-bundle';
        currentPackage.scripts.watch = 'npm run bundle -- --watch';
    } else if (webComponent) {
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
    mocha: string;
    bundle?: string;
    clean?: string;
    'build-types'?: string;
    'clean-bundle'?: string;
    'bundle-source'?: string;
    'bundle-bin'?: string;
    'test-bundle'?: string;
    watch?: string;
    'test-watch'?: string;
}